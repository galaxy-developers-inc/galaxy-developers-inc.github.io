// Core project structure interfaces
export interface ProjectStructure {
  project: {
    name: string;
    type: "directory";
    description?: string;
    created_at: string;
    children: ProjectNode[];
  };
}

export interface ProjectNode {
  name: string;
  type: "file" | "directory";
  content_base64?: string;
  children?: ProjectNode[];
}

// Search related interfaces
export interface SearchMatch {
  line: number;
  column: number;
  text: string;
  context: string;
}

export interface SearchResult {
  path: string;
  fileName: string;
  content: string;
  matches: SearchMatch[];
}

// Analysis related interfaces
export interface CodeMetrics {
  functions: number;
  classes: number;
  imports: number;
  exports: number;
  linesOfCode: number;
  complexity?: number;
}

export interface AnalysisReport {
  totalFiles: number;
  totalDirectories: number;
  filesWithContent: number;
  fileTypes: Record<string, number>;
  codeMetrics: CodeMetrics;
  createdAt: Date;
}

// Store state interfaces
export interface ProjectStore {
  // State
  currentProject: ProjectStructure | null;
  searchResults: SearchResult[];
  analysisReport: AnalysisReport | null;
  selectedFile: ProjectNode | null;
  selectedFilePath: string | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  loadProject: (jsonData: string) => Promise<void>;
  searchContent: (query: string) => Promise<SearchResult[]>;
  analyzeStructure: () => Promise<AnalysisReport>;
  selectFile: (path: string, node: ProjectNode) => void;
  exportReport: (format: 'md' | 'json' | 'html') => string;
  clearError: () => void;
  reset: () => void;
}

// Integration interfaces
export interface ArchitectureMessage {
  type: 'LOAD_PROJECT' | 'SEARCH_REQUEST' | 'ANALYSIS_RESULT';
  payload: any;
  source: 'main-app' | 'architecture-app';
}

// Cache interfaces
export interface CachedProject {
  id: string;
  name: string;
  structure: ProjectStructure;
  searchIndex: SearchIndex;
  lastModified: Date;
  source: 'private-json' | 'architecture-data';
}

export interface SearchIndex {
  files: Map<string, string[]>; // path -> keywords
  content: Map<string, string>; // path -> decoded content
}

// Export interfaces
export interface ExportOptions {
  format: 'md' | 'json' | 'html';
  includeContent: boolean;
  includeMetrics: boolean;
  includeDiagrams: boolean;
}

// Comparison interfaces
export interface ProjectComparison {
  added: string[];
  removed: string[];
  modified: string[];
  unchanged: string[];
  contentDiffs: Map<string, string>; // path -> diff
}