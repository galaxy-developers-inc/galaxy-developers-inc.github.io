import { create } from 'zustand';
import { ProjectStore, ProjectStructure, ProjectNode, SearchResult, AnalysisReport } from '../types/project';
import { ProjectLoader } from '../services/ProjectLoader';
import { SearchEngine } from '../services/SearchEngine';
import { StructureAnalyzer } from '../services/StructureAnalyzer';
import { ExportService } from '../services/ExportService';

export const useProjectStore = create<ProjectStore>((set, get) => ({
  // Initial state
  currentProject: null,
  searchResults: [],
  analysisReport: null,
  selectedFile: null,
  selectedFilePath: null,
  isLoading: false,
  error: null,

  // Actions
  loadProject: async (jsonData: string) => {
    set({ isLoading: true, error: null });
    try {
      const projectLoader = new ProjectLoader();
      const project = projectLoader.loadProject(jsonData);
      set({ 
        currentProject: project, 
        isLoading: false,
        searchResults: [],
        analysisReport: null,
        selectedFile: null,
        selectedFilePath: null
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to load project',
        isLoading: false 
      });
    }
  },

  searchContent: async (query: string) => {
    const { currentProject } = get();
    if (!currentProject) {
      throw new Error('No project loaded');
    }

    set({ isLoading: true, error: null });
    try {
      const searchEngine = new SearchEngine();
      const results = await searchEngine.search(currentProject, query);
      set({ searchResults: results, isLoading: false });
      return results;
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Search failed',
        isLoading: false 
      });
      return [];
    }
  },

  analyzeStructure: async () => {
    const { currentProject } = get();
    if (!currentProject) {
      throw new Error('No project loaded');
    }

    set({ isLoading: true, error: null });
    try {
      const analyzer = new StructureAnalyzer();
      const report = await analyzer.analyze(currentProject);
      set({ analysisReport: report, isLoading: false });
      return report;
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Analysis failed',
        isLoading: false 
      });
      throw error;
    }
  },

  selectFile: (path: string, node: ProjectNode) => {
    set({ 
      selectedFile: node, 
      selectedFilePath: path 
    });
  },

  exportReport: (format: 'md' | 'json' | 'html') => {
    const { currentProject, analysisReport } = get();
    if (!currentProject) {
      throw new Error('No project loaded');
    }

    const exportService = new ExportService();
    return exportService.export(currentProject, analysisReport, format);
  },

  clearError: () => {
    set({ error: null });
  },

  reset: () => {
    set({
      currentProject: null,
      searchResults: [],
      analysisReport: null,
      selectedFile: null,
      selectedFilePath: null,
      isLoading: false,
      error: null
    });
  }
}));