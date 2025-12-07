import { ProjectStructure, AnalysisReport, ProjectNode } from '../types/project';

export class ExportService {
  export(project: ProjectStructure, report: AnalysisReport | null, format: 'md' | 'json' | 'html'): string {
    switch (format) {
      case 'md':
        return this.exportMarkdown(project, report);
      case 'json':
        return this.exportJSON(project, report);
      case 'html':
        return this.exportHTML(project, report);
      default:
        throw new Error(`Unsupported export format: ${format}`);
    }
  }

  private exportMarkdown(project: ProjectStructure, report: AnalysisReport | null): string {
    const lines: string[] = [];
    
    lines.push(`# ${project.project.name}`);
    lines.push('');
    
    if (project.project.description) {
      lines.push(project.project.description);
      lines.push('');
    }
    
    lines.push(`**Created:** ${project.project.created_at}`);
    lines.push('');
    
    // Analysis summary
    if (report) {
      lines.push('## Project Analysis');
      lines.push('');
      lines.push(`- **Total Files:** ${report.totalFiles}`);
      lines.push(`- **Total Directories:** ${report.totalDirectories}`);
      lines.push(`- **Files with Content:** ${report.filesWithContent}`);
      lines.push(`- **Lines of Code:** ${report.codeMetrics.linesOfCode}`);
      lines.push('');
      
      // File types
      lines.push('### File Types');
      lines.push('');
      Object.entries(report.fileTypes).forEach(([type, count]) => {
        lines.push(`- **${type}:** ${count}`);
      });
      lines.push('');
      
      // Code metrics
      lines.push('### Code Metrics');
      lines.push('');
      lines.push(`- **Functions:** ${report.codeMetrics.functions}`);
      lines.push(`- **Classes:** ${report.codeMetrics.classes}`);
      lines.push(`- **Imports:** ${report.codeMetrics.imports}`);
      lines.push(`- **Exports:** ${report.codeMetrics.exports}`);
      lines.push('');
    }
    
    // Project structure
    lines.push('## Project Structure');
    lines.push('');
    lines.push('```');
    this.addTreeToMarkdown(project.project.children, lines, '');
    lines.push('```');
    
    return lines.join('\n');
  }

  private addTreeToMarkdown(nodes: ProjectNode[], lines: string[], indent: string): void {
    nodes.forEach(node => {
      const icon = node.type === 'directory' ? '📁' : '📄';
      lines.push(`${indent}${icon} ${node.name}`);
      
      if (node.children) {
        this.addTreeToMarkdown(node.children, lines, indent + '  ');
      }
    });
  }

  private exportJSON(project: ProjectStructure, report: AnalysisReport | null): string {
    const exportData = {
      project: project.project,
      analysis: report,
      exportedAt: new Date().toISOString(),
      version: '1.0.0'
    };
    
    return JSON.stringify(exportData, null, 2);
  }

  private exportHTML(project: ProjectStructure, report: AnalysisReport | null): string {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${project.project.name} - Architecture Analysis</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
        .metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }
        .metric-card { background: #f5f5f5; padding: 15px; border-radius: 8px; text-align: center; }
        .metric-value { font-size: 2em; font-weight: bold; color: #333; }
        .metric-label { color: #666; margin-top: 5px; }
        .tree { font-family: monospace; background: #f8f8f8; padding: 20px; border-radius: 8px; }
        .file-types { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; }
        .file-type { background: #e9ecef; padding: 10px; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>${project.project.name}</h1>
        ${project.project.description ? `<p>${project.project.description}</p>` : ''}
        <p><strong>Created:</strong> ${project.project.created_at}</p>
    </div>

    ${report ? `
    <section>
        <h2>Project Analysis</h2>
        <div class="metrics">
            <div class="metric-card">
                <div class="metric-value">${report.totalFiles}</div>
                <div class="metric-label">Total Files</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.totalDirectories}</div>
                <div class="metric-label">Directories</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.filesWithContent}</div>
                <div class="metric-label">Files with Content</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.codeMetrics.linesOfCode}</div>
                <div class="metric-label">Lines of Code</div>
            </div>
        </div>

        <h3>File Types</h3>
        <div class="file-types">
            ${Object.entries(report.fileTypes).map(([type, count]) => 
                `<div class="file-type"><strong>${type}:</strong> ${count}</div>`
            ).join('')}
        </div>

        <h3>Code Metrics</h3>
        <ul>
            <li><strong>Functions:</strong> ${report.codeMetrics.functions}</li>
            <li><strong>Classes:</strong> ${report.codeMetrics.classes}</li>
            <li><strong>Imports:</strong> ${report.codeMetrics.imports}</li>
            <li><strong>Exports:</strong> ${report.codeMetrics.exports}</li>
        </ul>
    </section>
    ` : ''}

    <section>
        <h2>Project Structure</h2>
        <div class="tree">
            ${this.generateHTMLTree(project.project.children)}
        </div>
    </section>

    <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc; color: #666; text-align: center;">
        <p>Generated by Architecture Document Analyzer on ${new Date().toLocaleString()}</p>
    </footer>
</body>
</html>`;
    
    return html;
  }

  private generateHTMLTree(nodes: ProjectNode[], indent: string = ''): string {
    return nodes.map(node => {
      const icon = node.type === 'directory' ? '📁' : '📄';
      let html = `${indent}${icon} ${node.name}<br>`;
      
      if (node.children) {
        html += this.generateHTMLTree(node.children, indent + '&nbsp;&nbsp;');
      }
      
      return html;
    }).join('');
  }

  /**
   * Generate Mermaid diagram for project structure
   */
  generateMermaidDiagram(project: ProjectStructure): string {
    const lines: string[] = [];
    lines.push('graph TD');
    
    const nodeId = (path: string) => path.replace(/[^a-zA-Z0-9]/g, '_');
    
    // Add root node
    lines.push(`    ${nodeId(project.project.name)}["📁 ${project.project.name}"]`);
    
    const addNodes = (nodes: ProjectNode[], parentPath: string) => {
      nodes.forEach(node => {
        const currentPath = `${parentPath}/${node.name}`;
        const currentId = nodeId(currentPath);
        const parentId = nodeId(parentPath);
        
        const icon = node.type === 'directory' ? '📁' : '📄';
        lines.push(`    ${currentId}["${icon} ${node.name}"]`);
        lines.push(`    ${parentId} --> ${currentId}`);
        
        if (node.children) {
          addNodes(node.children, currentPath);
        }
      });
    };
    
    addNodes(project.project.children, project.project.name);
    
    return lines.join('\n');
  }
}