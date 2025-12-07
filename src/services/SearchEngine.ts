import { ProjectStructure, SearchResult, SearchMatch, ProjectNode, SearchIndex } from '../types/project';
import { ContentDecoder } from './ContentDecoder';

export class SearchEngine {
  private contentDecoder = new ContentDecoder();
  private searchIndex: SearchIndex | null = null;

  /**
   * Search through project content
   */
  async search(project: ProjectStructure, query: string): Promise<SearchResult[]> {
    if (!query.trim()) {
      return [];
    }

    // Build index if not exists
    if (!this.searchIndex) {
      this.searchIndex = await this.buildSearchIndex(project);
    }

    const results: SearchResult[] = [];
    const queryLower = query.toLowerCase();

    // Search through indexed content
    for (const [filePath, content] of this.searchIndex.content.entries()) {
      const matches = this.findMatches(content, query);
      if (matches.length > 0) {
        const fileName = filePath.split('/').pop() || filePath;
        results.push({
          path: filePath,
          fileName,
          content: content.substring(0, 500), // Preview
          matches
        });
      }
    }

    // Search through file names and keywords
    for (const [filePath, keywords] of this.searchIndex.files.entries()) {
      const fileName = filePath.split('/').pop() || filePath;
      
      // Check filename match
      const fileNameMatch = fileName.toLowerCase().includes(queryLower);
      
      // Check keywords match
      const keywordMatch = keywords.some(keyword => keyword.toLowerCase().includes(queryLower));
      
      if ((fileNameMatch || keywordMatch) && !results.some(r => r.path === filePath)) {
        results.push({
          path: filePath,
          fileName,
          content: '',
          matches: [{
            line: 0,
            column: 0,
            text: fileNameMatch ? fileName : keywords.find(k => k.toLowerCase().includes(queryLower)) || '',
            context: `File name match: ${fileName}`
          }]
        });
      }
    }

    return results.slice(0, 50); // Limit results
  }

  /**
   * Build search index from project structure
   */
  private async buildSearchIndex(project: ProjectStructure): Promise<SearchIndex> {
    const files = new Map<string, string[]>();
    const content = new Map<string, string>();

    const traverse = (nodes: ProjectNode[], currentPath: string = '') => {
      for (const node of nodes) {
        const nodePath = currentPath ? `${currentPath}/${node.name}` : node.name;
        
        if (node.type === 'file') {
          // Index file metadata
          const keywords = this.extractKeywords(node.name);
          files.set(nodePath, keywords);
          
          // Index file content if available
          if (node.content_base64) {
            try {
              const decoded = this.contentDecoder.decode(node.content_base64, node.name);
              if (!decoded.isBinary && !decoded.error) {
                content.set(nodePath, decoded.content);
              }
            } catch (error) {
              // Skip files that can't be decoded
              console.warn(`Failed to decode content for ${nodePath}:`, error);
            }
          }
        } else if (node.children) {
          // Index directory
          files.set(nodePath, [node.name]);
          traverse(node.children, nodePath);
        }
      }
    };

    traverse(project.project.children);

    return { files, content };
  }

  /**
   * Extract keywords from filename
   */
  private extractKeywords(fileName: string): string[] {
    const keywords: string[] = [];
    
    // Add full filename
    keywords.push(fileName);
    
    // Add filename without extension
    const nameWithoutExt = fileName.split('.')[0];
    if (nameWithoutExt !== fileName) {
      keywords.push(nameWithoutExt);
    }
    
    // Add extension
    const extension = fileName.split('.').pop();
    if (extension && extension !== fileName) {
      keywords.push(extension);
    }
    
    // Split camelCase and snake_case
    const parts = fileName
      .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase
      .replace(/[_-]/g, ' ') // snake_case and kebab-case
      .split(/\s+/)
      .filter(part => part.length > 0);
    
    keywords.push(...parts);
    
    return keywords.map(k => k.toLowerCase());
  }

  /**
   * Find matches in content
   */
  private findMatches(content: string, query: string): SearchMatch[] {
    const matches: SearchMatch[] = [];
    const lines = content.split('\n');
    const queryLower = query.toLowerCase();
    
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex];
      const lineLower = line.toLowerCase();
      
      let columnIndex = 0;
      while (true) {
        const matchIndex = lineLower.indexOf(queryLower, columnIndex);
        if (matchIndex === -1) break;
        
        // Get context around the match
        const contextStart = Math.max(0, matchIndex - 20);
        const contextEnd = Math.min(line.length, matchIndex + query.length + 20);
        const context = line.substring(contextStart, contextEnd);
        
        matches.push({
          line: lineIndex + 1,
          column: matchIndex + 1,
          text: line.substring(matchIndex, matchIndex + query.length),
          context: contextStart > 0 ? '...' + context : context
        });
        
        columnIndex = matchIndex + 1;
        
        // Limit matches per line
        if (matches.filter(m => m.line === lineIndex + 1).length >= 3) {
          break;
        }
      }
      
      // Limit total matches
      if (matches.length >= 20) {
        break;
      }
    }
    
    return matches;
  }

  /**
   * Clear search index (useful for memory management)
   */
  clearIndex(): void {
    this.searchIndex = null;
  }

  /**
   * Get search statistics
   */
  getIndexStats(): { totalFiles: number; totalContent: number; indexSize: number } | null {
    if (!this.searchIndex) {
      return null;
    }
    
    return {
      totalFiles: this.searchIndex.files.size,
      totalContent: this.searchIndex.content.size,
      indexSize: Array.from(this.searchIndex.content.values())
        .reduce((total, content) => total + content.length, 0)
    };
  }
}