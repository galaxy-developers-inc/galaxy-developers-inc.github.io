export interface DecodedContent {
  content: string;
  encoding: string;
  fileType: string;
  isBinary: boolean;
  error?: string;
}

export class ContentDecoder {
  /**
   * Decode base64 content to readable format
   */
  decode(base64Content: string, fileName: string): DecodedContent {
    try {
      // Decode base64
      const binaryString = atob(base64Content);
      
      // Determine file type
      const fileType = this.getFileType(fileName);
      
      // Check if content is binary
      const isBinary = this.isBinaryContent(binaryString);
      
      if (isBinary) {
        return {
          content: `[Binary file: ${fileName}]`,
          encoding: 'binary',
          fileType,
          isBinary: true
        };
      }
      
      // Try UTF-8 decoding
      try {
        const content = this.decodeUTF8(binaryString);
        return {
          content,
          encoding: 'utf-8',
          fileType,
          isBinary: false
        };
      } catch {
        // Fallback to latin1
        return {
          content: binaryString,
          encoding: 'latin1',
          fileType,
          isBinary: false
        };
      }
      
    } catch (error) {
      return {
        content: '',
        encoding: 'error',
        fileType: this.getFileType(fileName),
        isBinary: false,
        error: error instanceof Error ? error.message : 'Decoding failed'
      };
    }
  }

  /**
   * Encode content back to base64 (for round-trip testing)
   */
  encode(content: string): string {
    try {
      return btoa(content);
    } catch (error) {
      throw new Error(`Failed to encode content: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Determine file type from filename
   */
  private getFileType(fileName: string): string {
    const extension = fileName.split('.').pop()?.toLowerCase();
    
    const typeMap: Record<string, string> = {
      // Code files
      'js': 'javascript',
      'jsx': 'javascript',
      'ts': 'typescript',
      'tsx': 'typescript',
      'py': 'python',
      'java': 'java',
      'cpp': 'cpp',
      'c': 'c',
      'cs': 'csharp',
      'php': 'php',
      'rb': 'ruby',
      'go': 'go',
      'rs': 'rust',
      'swift': 'swift',
      'kt': 'kotlin',
      
      // Web files
      'html': 'html',
      'htm': 'html',
      'css': 'css',
      'scss': 'scss',
      'sass': 'sass',
      'less': 'less',
      
      // Config files
      'json': 'json',
      'xml': 'xml',
      'yaml': 'yaml',
      'yml': 'yaml',
      'toml': 'toml',
      'ini': 'ini',
      'conf': 'config',
      
      // Documentation
      'md': 'markdown',
      'markdown': 'markdown',
      'txt': 'text',
      'rst': 'restructuredtext',
      
      // Shell scripts
      'sh': 'shell',
      'bash': 'shell',
      'zsh': 'shell',
      'fish': 'shell',
      
      // Database
      'sql': 'sql',
      
      // Images
      'png': 'image',
      'jpg': 'image',
      'jpeg': 'image',
      'gif': 'image',
      'svg': 'svg',
      'webp': 'image',
      
      // Other
      'pdf': 'binary',
      'zip': 'binary',
      'tar': 'binary',
      'gz': 'binary'
    };
    
    return typeMap[extension || ''] || 'text';
  }

  /**
   * Check if content appears to be binary
   */
  private isBinaryContent(content: string): boolean {
    // Check for null bytes (common in binary files)
    if (content.includes('\0')) {
      return true;
    }
    
    // Check for high percentage of non-printable characters
    let nonPrintable = 0;
    const sampleSize = Math.min(content.length, 1000); // Sample first 1000 chars
    
    for (let i = 0; i < sampleSize; i++) {
      const charCode = content.charCodeAt(i);
      // Consider chars outside printable ASCII range as non-printable
      // (except common whitespace: tab=9, newline=10, carriage return=13)
      if (charCode < 32 && charCode !== 9 && charCode !== 10 && charCode !== 13) {
        nonPrintable++;
      } else if (charCode > 126) {
        nonPrintable++;
      }
    }
    
    // If more than 30% non-printable, consider it binary
    return (nonPrintable / sampleSize) > 0.3;
  }

  /**
   * Decode binary string as UTF-8
   */
  private decodeUTF8(binaryString: string): string {
    // Convert binary string to Uint8Array
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    // Decode as UTF-8
    const decoder = new TextDecoder('utf-8', { fatal: true });
    return decoder.decode(bytes);
  }

  /**
   * Get syntax highlighting language for file type
   */
  getSyntaxLanguage(fileType: string): string {
    const languageMap: Record<string, string> = {
      'javascript': 'javascript',
      'typescript': 'typescript',
      'python': 'python',
      'java': 'java',
      'cpp': 'cpp',
      'c': 'c',
      'csharp': 'csharp',
      'php': 'php',
      'ruby': 'ruby',
      'go': 'go',
      'rust': 'rust',
      'swift': 'swift',
      'kotlin': 'kotlin',
      'html': 'html',
      'css': 'css',
      'scss': 'scss',
      'sass': 'sass',
      'less': 'less',
      'json': 'json',
      'xml': 'xml',
      'yaml': 'yaml',
      'toml': 'toml',
      'markdown': 'markdown',
      'shell': 'bash',
      'sql': 'sql',
      'svg': 'xml'
    };
    
    return languageMap[fileType] || 'text';
  }

  /**
   * Check if file should be processed for analysis
   */
  shouldAnalyze(fileName: string, content: DecodedContent): boolean {
    // Skip binary files
    if (content.isBinary) {
      return false;
    }
    
    // Skip very large files (>1MB)
    if (content.content.length > 1024 * 1024) {
      return false;
    }
    
    // Skip certain file types
    const skipTypes = ['image', 'binary'];
    if (skipTypes.includes(content.fileType)) {
      return false;
    }
    
    return true;
  }
}