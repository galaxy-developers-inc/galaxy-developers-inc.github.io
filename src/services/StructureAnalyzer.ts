import { ProjectStructure, AnalysisReport, ProjectNode, CodeMetrics } from '../types/project';
import { ContentDecoder } from './ContentDecoder';
import { CodeAnalyzer } from './CodeAnalyzer';

export class StructureAnalyzer {
  private contentDecoder = new ContentDecoder();
  private codeAnalyzer = new CodeAnalyzer();

  /**
   * Analyze project structure and generate comprehensive report
   */
  async analyze(project: ProjectStructure): Promise<AnalysisReport> {
    const stats = {
      totalFiles: 0,
      totalDirectories: 0,
      filesWithContent: 0,
      fileTypes: {} as Record<string, number>,
      totalCodeMetrics: {
        functions: 0,
        classes: 0,
        imports: 0,
        exports: 0,
        linesOfCode: 0,
        complexity: 0
      }
    };

    // Traverse project tree
    await this.traverseNodes(project.project.children, stats);

    return {
      totalFiles: stats.totalFiles,
      totalDirectories: stats.totalDirectories,
      filesWithContent: stats.filesWithContent,
      fileTypes: stats.fileTypes,
      codeMetrics: stats.totalCodeMetrics,
      createdAt: new Date()
    };
  }

  /**
   * Traverse project nodes and collect statistics
   */
  private async traverseNodes(
    nodes: ProjectNode[], 
    stats: any,
    currentPath: string = ''
  ): Promise<void> {
    for (const node of nodes) {
      const nodePath = currentPath ? `${currentPath}/${node.name}` : node.name;
      
      if (node.type === 'directory') {
        stats.totalDirectories++;
        if (node.children) {
          await this.traverseNodes(node.children, stats, nodePath);
        }
      } else if (node.type === 'file') {
        stats.totalFiles++;
        
        // Count files with content
        if (node.content_base64) {
          stats.filesWithContent++;
          
          // Analyze file content
          try {
            const decoded = this.contentDecoder.decode(node.content_base64, node.name);
            
            // Count file types
            const fileType = decoded.fileType;
            stats.fileTypes[fileType] = (stats.fileTypes[fileType] || 0) + 1;
            
            // Analyze code if applicable
            if (!decoded.isBinary && !decoded.error && this.contentDecoder.shouldAnalyze(node.name, decoded)) {
              const codeMetrics = await this.codeAnalyzer.analyze(decoded.content, decoded.fileType);
              this.mergeCodeMetrics(stats.totalCodeMetrics, codeMetrics);
            }
          } catch (error) {
            console.warn(`Failed to analyze file ${nodePath}:`, error);
            // Count as unknown type
            stats.fileTypes['unknown'] = (stats.fileTypes['unknown'] || 0) + 1;
          }
        } else {
          // File without content - determine type from extension
          const extension = node.name.split('.').pop()?.toLowerCase() || 'unknown';
          stats.fileTypes[extension] = (stats.fileTypes[extension] || 0) + 1;
        }
      }
    }
  }

  /**
   * Merge code metrics from individual files
   */
  private mergeCodeMetrics(total: CodeMetrics, file: CodeMetrics): void {
    total.functions += file.functions;
    total.classes += file.classes;
    total.imports += file.imports;
    total.exports += file.exports;
    total.linesOfCode += file.linesOfCode;
    if (file.complexity) {
      total.complexity = (total.complexity || 0) + file.complexity;
    }
  }

  /**
   * Get file type distribution as percentages
   */
  getFileTypeDistribution(report: AnalysisReport): Record<string, number> {
    const total = Object.values(report.fileTypes).reduce((sum, count) => sum + count, 0);
    if (total === 0) return {};
    
    const distribution: Record<string, number> = {};
    for (const [type, count] of Object.entries(report.fileTypes)) {
      distribution[type] = Math.round((count / total) * 100 * 100) / 100; // Round to 2 decimals
    }
    
    return distribution;
  }

  /**
   * Get project complexity score
   */
  getComplexityScore(report: AnalysisReport): number {
    const { codeMetrics, totalFiles } = report;
    
    if (totalFiles === 0) return 0;
    
    // Simple complexity calculation based on various factors
    const functionComplexity = codeMetrics.functions * 2;
    const classComplexity = codeMetrics.classes * 3;
    const fileComplexity = totalFiles * 1;
    const locComplexity = Math.floor(codeMetrics.linesOfCode / 100);
    
    const totalComplexity = functionComplexity + classComplexity + fileComplexity + locComplexity;
    
    // Normalize to 0-100 scale
    return Math.min(100, Math.max(0, totalComplexity));
  }

  /**
   * Get architecture insights
   */
  getArchitectureInsights(report: AnalysisReport): string[] {
    const insights: string[] = [];
    const { fileTypes, codeMetrics, totalFiles } = report;
    
    // File organization insights
    if (totalFiles > 100) {
      insights.push('Large project with extensive file structure');
    } else if (totalFiles < 10) {
      insights.push('Small project with minimal file structure');
    }
    
    // Technology stack insights
    const hasJavaScript = fileTypes['javascript'] || fileTypes['js'] || 0;
    const hasTypeScript = fileTypes['typescript'] || fileTypes['ts'] || 0;
    const hasPython = fileTypes['python'] || fileTypes['py'] || 0;
    const hasJava = fileTypes['java'] || 0;
    
    if (hasTypeScript > hasJavaScript) {
      insights.push('TypeScript-first project with strong typing');
    } else if (hasJavaScript > 0) {
      insights.push('JavaScript-based project');
    }
    
    if (hasPython > 0) {
      insights.push('Python components detected');
    }
    
    if (hasJava > 0) {
      insights.push('Java-based backend components');
    }
    
    // Code organization insights
    const avgFunctionsPerFile = totalFiles > 0 ? codeMetrics.functions / totalFiles : 0;
    if (avgFunctionsPerFile > 10) {
      insights.push('High function density - consider refactoring');
    } else if (avgFunctionsPerFile > 5) {
      insights.push('Well-structured code organization');
    }
    
    // Import/export insights
    if (codeMetrics.imports > codeMetrics.exports * 2) {
      insights.push('High dependency usage - monitor external dependencies');
    }
    
    return insights;
  }

  /**
   * Generate summary statistics
   */
  generateSummary(report: AnalysisReport): string {
    const { totalFiles, totalDirectories, filesWithContent, codeMetrics } = report;
    
    return `Project contains ${totalFiles} files and ${totalDirectories} directories. ` +
           `${filesWithContent} files have content (${Math.round(filesWithContent/totalFiles*100)}%). ` +
           `Code metrics: ${codeMetrics.functions} functions, ${codeMetrics.classes} classes, ` +
           `${codeMetrics.linesOfCode} lines of code.`;
  }
}