import { CodeMetrics } from '../types/project';

export class CodeAnalyzer {
  /**
   * Analyze code content and extract metrics
   */
  async analyze(content: string, fileType: string): Promise<CodeMetrics> {
    const metrics: CodeMetrics = {
      functions: 0,
      classes: 0,
      imports: 0,
      exports: 0,
      linesOfCode: this.countLinesOfCode(content),
      complexity: 0
    };

    // Choose analyzer based on file type
    switch (fileType) {
      case 'javascript':
      case 'typescript':
        this.analyzeJavaScript(content, metrics);
        break;
      case 'python':
        this.analyzePython(content, metrics);
        break;
      case 'java':
        this.analyzeJava(content, metrics);
        break;
      case 'cpp':
      case 'c':
        this.analyzeC(content, metrics);
        break;
      case 'csharp':
        this.analyzeCSharp(content, metrics);
        break;
      default:
        // For other file types, just count basic metrics
        this.analyzeGeneric(content, metrics);
    }

    return metrics;
  }

  /**
   * Count non-empty lines of code
   */
  private countLinesOfCode(content: string): number {
    return content
      .split('\n')
      .filter(line => line.trim().length > 0 && !line.trim().startsWith('//') && !line.trim().startsWith('/*'))
      .length;
  }

  /**
   * Analyze JavaScript/TypeScript code
   */
  private analyzeJavaScript(content: string, metrics: CodeMetrics): void {
    // Function patterns
    const functionPatterns = [
      /function\s+\w+\s*\(/g,                    // function name()
      /const\s+\w+\s*=\s*\([^)]*\)\s*=>/g,      // const name = () =>
      /let\s+\w+\s*=\s*\([^)]*\)\s*=>/g,        // let name = () =>
      /var\s+\w+\s*=\s*\([^)]*\)\s*=>/g,        // var name = () =>
      /\w+\s*:\s*\([^)]*\)\s*=>/g,              // name: () =>
      /\w+\s*\([^)]*\)\s*\{/g,                  // name() {
      /async\s+function\s+\w+/g,                // async function
      /async\s+\w+\s*\(/g,                      // async name()
    ];

    functionPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        metrics.functions += matches.length;
      }
    });

    // Class patterns
    const classPatterns = [
      /class\s+\w+/g,                           // class Name
      /interface\s+\w+/g,                       // interface Name (TypeScript)
      /type\s+\w+\s*=/g,                        // type Name = (TypeScript)
      /enum\s+\w+/g,                            // enum Name (TypeScript)
    ];

    classPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        metrics.classes += matches.length;
      }
    });

    // Import patterns
    const importPatterns = [
      /import\s+.*from\s+['"`]/g,               // import ... from '...'
      /import\s*\(/g,                           // import()
      /require\s*\(/g,                          // require()
      /import\s+['"`]/g,                        // import '...'
    ];

    importPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        metrics.imports += matches.length;
      }
    });

    // Export patterns
    const exportPatterns = [
      /export\s+default/g,                      // export default
      /export\s+\{[^}]*\}/g,                    // export { ... }
      /export\s+\*/g,                           // export *
      /export\s+const\s+\w+/g,                  // export const
      /export\s+let\s+\w+/g,                    // export let
      /export\s+var\s+\w+/g,                    // export var
      /export\s+function\s+\w+/g,               // export function
      /export\s+class\s+\w+/g,                  // export class
      /module\.exports\s*=/g,                   // module.exports =
    ];

    exportPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        metrics.exports += matches.length;
      }
    });

    // Calculate complexity (simplified cyclomatic complexity)
    metrics.complexity = this.calculateComplexity(content, [
      'if', 'else', 'while', 'for', 'switch', 'case', 'catch', 'try', '&&', '||', '?'
    ]);
  }

  /**
   * Analyze Python code
   */
  private analyzePython(content: string, metrics: CodeMetrics): void {
    // Function patterns
    const functionMatches = content.match(/def\s+\w+\s*\(/g);
    if (functionMatches) {
      metrics.functions = functionMatches.length;
    }

    // Class patterns
    const classMatches = content.match(/class\s+\w+/g);
    if (classMatches) {
      metrics.classes = classMatches.length;
    }

    // Import patterns
    const importPatterns = [
      /import\s+\w+/g,                          // import module
      /from\s+\w+\s+import/g,                   // from module import
    ];

    importPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        metrics.imports += matches.length;
      }
    });

    // Calculate complexity
    metrics.complexity = this.calculateComplexity(content, [
      'if', 'elif', 'else', 'while', 'for', 'try', 'except', 'and', 'or'
    ]);
  }

  /**
   * Analyze Java code
   */
  private analyzeJava(content: string, metrics: CodeMetrics): void {
    // Method patterns
    const methodMatches = content.match(/(public|private|protected)?\s*(static)?\s*\w+\s+\w+\s*\([^)]*\)\s*\{/g);
    if (methodMatches) {
      metrics.functions = methodMatches.length;
    }

    // Class patterns
    const classMatches = content.match(/(public|private)?\s*(class|interface|enum)\s+\w+/g);
    if (classMatches) {
      metrics.classes = classMatches.length;
    }

    // Import patterns
    const importMatches = content.match(/import\s+[\w.]+;/g);
    if (importMatches) {
      metrics.imports = importMatches.length;
    }

    // Calculate complexity
    metrics.complexity = this.calculateComplexity(content, [
      'if', 'else', 'while', 'for', 'switch', 'case', 'catch', 'try', '&&', '||', '?'
    ]);
  }

  /**
   * Analyze C/C++ code
   */
  private analyzeC(content: string, metrics: CodeMetrics): void {
    // Function patterns (simplified)
    const functionMatches = content.match(/\w+\s+\w+\s*\([^)]*\)\s*\{/g);
    if (functionMatches) {
      metrics.functions = functionMatches.length;
    }

    // Struct/class patterns
    const structMatches = content.match(/(struct|class)\s+\w+/g);
    if (structMatches) {
      metrics.classes = structMatches.length;
    }

    // Include patterns
    const includeMatches = content.match(/#include\s*[<"]/g);
    if (includeMatches) {
      metrics.imports = includeMatches.length;
    }

    // Calculate complexity
    metrics.complexity = this.calculateComplexity(content, [
      'if', 'else', 'while', 'for', 'switch', 'case', '&&', '||', '?'
    ]);
  }

  /**
   * Analyze C# code
   */
  private analyzeCSharp(content: string, metrics: CodeMetrics): void {
    // Method patterns
    const methodMatches = content.match(/(public|private|protected|internal)?\s*(static)?\s*\w+\s+\w+\s*\([^)]*\)\s*\{/g);
    if (methodMatches) {
      metrics.functions = methodMatches.length;
    }

    // Class patterns
    const classMatches = content.match(/(public|private|internal)?\s*(class|interface|struct|enum)\s+\w+/g);
    if (classMatches) {
      metrics.classes = classMatches.length;
    }

    // Using patterns
    const usingMatches = content.match(/using\s+[\w.]+;/g);
    if (usingMatches) {
      metrics.imports = usingMatches.length;
    }

    // Calculate complexity
    metrics.complexity = this.calculateComplexity(content, [
      'if', 'else', 'while', 'for', 'foreach', 'switch', 'case', 'catch', 'try', '&&', '||', '?'
    ]);
  }

  /**
   * Generic analysis for unknown file types
   */
  private analyzeGeneric(content: string, metrics: CodeMetrics): void {
    // Look for common patterns that might indicate functions
    const possibleFunctions = content.match(/\w+\s*\([^)]*\)/g);
    if (possibleFunctions) {
      metrics.functions = Math.min(possibleFunctions.length, metrics.linesOfCode / 5); // Conservative estimate
    }

    // Look for import-like patterns
    const possibleImports = content.match(/(import|include|require|using)\s+/g);
    if (possibleImports) {
      metrics.imports = possibleImports.length;
    }
  }

  /**
   * Calculate simplified cyclomatic complexity
   */
  private calculateComplexity(content: string, keywords: string[]): number {
    let complexity = 1; // Base complexity

    keywords.forEach(keyword => {
      // Escape special regex characters
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'g');
      const matches = content.match(regex);
      if (matches) {
        complexity += matches.length;
      }
    });

    return complexity;
  }

  /**
   * Extract function signatures
   */
  extractFunctionSignatures(content: string, fileType: string): string[] {
    const signatures: string[] = [];

    switch (fileType) {
      case 'javascript':
      case 'typescript':
        const jsPatterns = [
          /function\s+(\w+)\s*\([^)]*\)/g,
          /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>/g,
          /(\w+)\s*:\s*\([^)]*\)\s*=>/g,
        ];
        
        jsPatterns.forEach(pattern => {
          let match;
          while ((match = pattern.exec(content)) !== null) {
            signatures.push(match[0]);
          }
        });
        break;

      case 'python':
        const pyPattern = /def\s+(\w+)\s*\([^)]*\):/g;
        let pyMatch;
        while ((pyMatch = pyPattern.exec(content)) !== null) {
          signatures.push(pyMatch[0]);
        }
        break;
    }

    return signatures;
  }

  /**
   * Extract class names
   */
  extractClassNames(content: string, fileType: string): string[] {
    const classNames: string[] = [];

    const patterns: Record<string, RegExp> = {
      'javascript': /class\s+(\w+)/g,
      'typescript': /(?:class|interface)\s+(\w+)/g,
      'python': /class\s+(\w+)/g,
      'java': /(?:class|interface)\s+(\w+)/g,
      'csharp': /(?:class|interface|struct)\s+(\w+)/g,
    };

    const pattern = patterns[fileType];
    if (pattern) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        classNames.push(match[1]);
      }
    }

    return classNames;
  }
}