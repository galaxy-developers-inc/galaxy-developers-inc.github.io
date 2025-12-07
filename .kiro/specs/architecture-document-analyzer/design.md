# Design Document

## Overview

Система анализа архитектурных документов представляет собой веб-приложение на React/TypeScript для работы с JSON файлами проектов. Система обеспечивает загрузку, анализ, поиск и визуализацию архитектурной информации с поддержкой декодирования base64 содержимого файлов.

## Architecture

Система интегрируется с существующей инфраструктурой Galaxy Developers и использует отдельное приложение для архитектурных документов:

```
┌─────────────────────────────────────────────────────────────────┐
│                    Galaxy Developers Landing                    │
│  ┌─────────────────┐    ┌─────────────────┐    ┌──────────────┐ │
│  │ ResearchViewer  │    │ArchitectureViewer│   │ JSON Projects│ │
│  │     .tsx        │    │      .tsx       │    │ src/private/ │ │
│  └─────────────────┘    └─────────────────┘    └──────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────┐
│              Architecture Documents System                      │
│  ┌─────────────────┐    ┌─────────────────┐    ┌──────────────┐ │
│  │   UI Layer      │    │  Service Layer  │    │  Data Layer  │ │
│  │                 │    │                 │    │              │ │
│  │ - Components    │◄──►│ - ProjectLoader │◄──►│ ProjectStore │ │
│  │ - Views         │    │ - SearchEngine  │    │ - IndexedDB  │ │
│  │ - Hooks         │    │ - CodeAnalyzer  │    │ - JSON Files │ │
│  └─────────────────┘    └─────────────────┘    └──────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Integration Points

1. **Main Landing** (`/`) - основной сайт с проектами
2. **Architecture Viewer** (`/architecture`) - существующий компонент для просмотра архитектуры
3. **Architecture Documents App** - отдельное приложение в `GALAXY_DEVELOPERS_ARCHITECTURE_DOCUMENTS/`
4. **JSON Projects** - файлы проектов в `src/private/*.JSON`

## Components and Interfaces

### Core Interfaces

```typescript
interface ProjectStructure {
  project: {
    name: string;
    type: "directory";
    description?: string;
    created_at: string;
    children: ProjectNode[];
  };
}

interface ProjectNode {
  name: string;
  type: "file" | "directory";
  content_base64?: string;
  children?: ProjectNode[];
}

interface SearchResult {
  path: string;
  fileName: string;
  content: string;
  matches: SearchMatch[];
}

interface AnalysisReport {
  totalFiles: number;
  totalDirectories: number;
  filesWithContent: number;
  fileTypes: Record<string, number>;
  codeMetrics: CodeMetrics;
}
```

### Service Components

#### ProjectLoader
- Загрузка и валидация JSON файлов
- Построение индекса файлов
- Кэширование структуры проекта

#### ContentDecoder
- Декодирование base64 содержимого
- Определение типа файла
- Обработка ошибок кодировки

#### SearchEngine
- Индексация содержимого файлов
- Полнотекстовый поиск
- Поиск по метаданным

#### StructureAnalyzer
- Анализ структуры проекта
- Подсчет метрик
- Выявление архитектурных паттернов

#### CodeAnalyzer
- Парсинг кода различных языков
- Извлечение функций и классов
- Анализ зависимостей

## Data Models

### ProjectStore
Централизованное хранилище состояния проекта с использованием Zustand:

```typescript
interface ProjectStore {
  // State
  currentProject: ProjectStructure | null;
  searchResults: SearchResult[];
  analysisReport: AnalysisReport | null;
  selectedFile: ProjectNode | null;
  
  // Actions
  loadProject: (jsonData: string) => Promise<void>;
  searchContent: (query: string) => Promise<SearchResult[]>;
  analyzeStructure: () => Promise<AnalysisReport>;
  selectFile: (path: string) => void;
  exportReport: (format: 'md' | 'json' | 'html') => string;
}
```

### Integration with Existing System

#### JSON Files Location
Проекты хранятся в `src/private/*.JSON` основного приложения:
- `galaxy-developers-landing.JSON`
- `TG_BOT.JSON`
- `БЫТИЕ.JSON`
- И другие проекты...

#### Architecture Documents App
Отдельное приложение в `GALAXY_DEVELOPERS_ARCHITECTURE_DOCUMENTS/`:
- React + TypeScript + Vite
- shadcn-ui компоненты
- Tailwind CSS стили
- Существующие данные в `src/data/`

#### Cross-App Communication
```typescript
interface ArchitectureMessage {
  type: 'LOAD_PROJECT' | 'SEARCH_REQUEST' | 'ANALYSIS_RESULT';
  payload: any;
  source: 'main-app' | 'architecture-app';
}
```

### IndexedDB Schema
Для кэширования больших проектов:

```typescript
interface CachedProject {
  id: string;
  name: string;
  structure: ProjectStructure;
  searchIndex: SearchIndex;
  lastModified: Date;
  source: 'private-json' | 'architecture-data';
}
```

## Correctness Properties
*A prope
rty is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property Reflection

После анализа всех требований выявлены следующие избыточности:
- Свойства 1.1 и 1.2 можно объединить в одно свойство валидации и извлечения метаданных
- Свойства 4.1 и 1.4 дублируют логику декодирования base64
- Свойства 5.1, 5.2, 5.3, 5.4 можно объединить в одно комплексное свойство экспорта

### Correctness Properties

**Property 1: Project validation and metadata extraction**
*For any* JSON input, when the system validates it as a valid project structure, then it should successfully extract all required metadata (name, type, creation date) and build a complete file tree
**Validates: Requirements 1.1, 1.2, 1.3**

**Property 2: Base64 content round-trip consistency**
*For any* file with base64 content, encoding then decoding should produce the original content, and the decoded content should be available for analysis
**Validates: Requirements 1.4, 4.1**

**Property 3: Search completeness and accuracy**
*For any* search query and project structure, the search should return all relevant results from file names, types, keywords, and decoded content, with proper context and file paths
**Validates: Requirements 2.1, 2.2, 2.3**

**Property 4: Structure analysis accuracy**
*For any* project structure, the analyzer should correctly count all files, directories, files with content, identify file types, and extract code elements (functions, classes, imports)
**Validates: Requirements 3.1, 3.2, 3.3, 3.4**

**Property 5: Content display consistency**
*For any* file content, the system should apply appropriate syntax highlighting based on file type and display line numbers and code structure correctly
**Validates: Requirements 4.2, 4.3**

**Property 6: Export completeness**
*For any* project analysis, the export should include complete structure documentation, code statistics, architecture diagrams, and be available in all specified formats (markdown, JSON, HTML)
**Validates: Requirements 5.1, 5.2, 5.3, 5.4**

**Property 7: Comparison accuracy**
*For any* two project structures, the comparison should correctly identify all added, removed, and modified files, show accurate diffs, and generate a comprehensive change report
**Validates: Requirements 6.1, 6.2, 6.3, 6.4**

## Error Handling

### Validation Errors
- Invalid JSON structure → Clear error message with validation details
- Missing required fields → Specific field identification
- Corrupted base64 content → Graceful degradation with partial content

### Decoding Errors
- Invalid base64 encoding → Skip file with warning, continue processing
- Unsupported file encoding → Attempt UTF-8 fallback, log warning
- Large file handling → Implement streaming for files > 10MB

### Search Errors
- Empty search results → Suggest alternative queries, show popular files
- Search timeout → Partial results with continuation option
- Index corruption → Rebuild index automatically

### Export Errors
- Large project export → Implement chunked export with progress
- Format conversion errors → Fallback to JSON format
- File system errors → Retry mechanism with user notification

## Testing Strategy

### Unit Testing Framework
- **Framework**: Vitest for TypeScript/React components
- **Coverage**: Minimum 80% code coverage for core logic
- **Mocking**: Minimal mocking, prefer real implementations where possible

### Property-Based Testing Framework
- **Framework**: fast-check for JavaScript/TypeScript property-based testing
- **Iterations**: Minimum 100 iterations per property test
- **Generators**: Smart generators that create realistic project structures and content

### Testing Approach
- **Unit tests** verify specific examples, edge cases, and error conditions
- **Property tests** verify universal properties across all valid inputs
- **Integration tests** verify component interactions and data flow
- Each property-based test must be tagged with format: `**Feature: architecture-document-analyzer, Property {number}: {property_text}**`

### Test Data Generation
- **Project structures**: Generate realistic file trees with various depths and types
- **Base64 content**: Generate valid encoded content for different file types
- **Search queries**: Generate diverse query patterns and edge cases
- **Code samples**: Generate syntactically valid code in multiple languages

## Integration with Research System

### Research Data Integration
The system will integrate with the existing Galaxy Developers Research system to provide enhanced analysis capabilities:

#### Market Research Integration
- Import market research data from `GALAXY_DEVELOPERS_RESEARCH/src/data/market_research.json`
- Analyze project alignment with market trends and opportunities
- Generate business impact reports based on project architecture

#### Dashboard Integration
- Extend existing dashboard components (`MarketOverview`, `TargetAudience`, etc.)
- Add new sections for architecture analysis and project insights
- Maintain consistent UI/UX with research system

#### Data Flow
```
Project JSON → Architecture Analysis → Market Context → Business Insights
     ↓              ↓                    ↓               ↓
File Structure → Code Metrics → Technology Stack → Market Positioning
```

### Enhanced Analysis Features
- **Technology Stack Analysis**: Map detected technologies to market trends
- **Business Value Assessment**: Correlate architecture patterns with market opportunities
- **Competitive Analysis**: Compare project features with market competitors
- **ROI Projections**: Estimate development costs and market potential

## Performance Considerations

### Client-Side Processing
- **Web Workers**: Use for heavy processing (parsing, analysis, search indexing)
- **Streaming**: Implement for large file processing
- **Caching**: IndexedDB for processed projects and search indices
- **Lazy Loading**: Load file content on demand

### Memory Management
- **Chunked Processing**: Process large projects in chunks
- **Garbage Collection**: Explicit cleanup of large objects
- **Virtual Scrolling**: For large file trees and search results

### Scalability
- **Progressive Enhancement**: Core features work without advanced analysis
- **Modular Architecture**: Load analysis modules on demand
- **Service Worker**: Cache processed results for offline access