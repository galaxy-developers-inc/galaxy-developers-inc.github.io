import React, { useState, useEffect } from 'react';
import { useProjectStore } from '../../store/projectStore';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ScrollArea } from '../ui/scroll-area';

// Импортируем JSON файлы проектов
const projectFiles = [
  'galaxy-developers-landing.JSON',
  'TG_BOT.JSON',
  'eco-rider.JSON',
  'find_good_girl.JSON',
  'osaka-sushi-bar.JSON',
  'telegram_sales_bot.JSON',
  'world-saver-portal.JSON',
  'БЫТИЕ.JSON'
];

interface ProjectTreeProps {
  nodes: any[];
  onFileSelect: (path: string, node: any) => void;
  basePath?: string;
}

const ProjectTree: React.FC<ProjectTreeProps> = ({ nodes, onFileSelect, basePath = '' }) => {
  return (
    <div className="space-y-1">
      {nodes.map((node, index) => {
        const currentPath = basePath ? `${basePath}/${node.name}` : node.name;
        
        return (
          <div key={index} className="ml-4">
            {node.type === 'directory' ? (
              <div>
                <div className="font-medium text-blue-600 flex items-center gap-1">
                  📁 {node.name}
                </div>
                {node.children && (
                  <ProjectTree 
                    nodes={node.children} 
                    onFileSelect={onFileSelect}
                    basePath={currentPath}
                  />
                )}
              </div>
            ) : (
              <div 
                className="cursor-pointer hover:bg-gray-100 p-1 rounded flex items-center gap-1"
                onClick={() => onFileSelect(currentPath, node)}
              >
                📄 {node.name}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const FileViewer: React.FC<{ file: any; path: string }> = ({ file, path }) => {
  const [content, setContent] = useState<string>('');
  const [fileType, setFileType] = useState<string>('');

  useEffect(() => {
    if (file.content_base64) {
      try {
        const decoded = atob(file.content_base64);
        setContent(decoded);
        
        const extension = file.name.split('.').pop()?.toLowerCase();
        setFileType(extension || 'text');
      } catch (error) {
        setContent('Ошибка декодирования файла');
      }
    }
  }, [file]);

  if (!file.content_base64) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{file.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Содержимое недоступно</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{file.name}</CardTitle>
          <Badge variant="secondary">{fileType}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <pre className="bg-gray-50 p-4 rounded text-sm overflow-auto">
            <code>{content}</code>
          </pre>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export const ArchitectureAnalyzer: React.FC = () => {
  const {
    currentProject,
    selectedFile,
    selectedFilePath,
    searchResults,
    analysisReport,
    isLoading,
    error,
    loadProject,
    searchContent,
    analyzeStructure,
    selectFile,
    clearError
  } = useProjectStore();

  const [selectedProjectFile, setSelectedProjectFile] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const loadProjectFile = async (fileName: string) => {
    try {
      const response = await fetch(`/${fileName}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      await loadProject(text);
      await analyzeStructure();
      setSelectedProjectFile(fileName);
    } catch (err) {
      console.error('Ошибка загрузки проекта:', err);
    }
  };

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      await searchContent(searchQuery.trim());
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Анализатор Архитектуры Проектов</h1>
        <p className="text-gray-600">
          Исследуйте структуру и архитектуру наших проектов Galaxy Developers
        </p>
      </div>

      {/* Выбор проекта */}
      {!currentProject && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Выберите проект для анализа</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectFiles.map((fileName) => (
                <Button
                  key={fileName}
                  variant="outline"
                  onClick={() => loadProjectFile(fileName)}
                  className="h-auto p-4 text-left"
                >
                  <div>
                    <div className="font-medium">{fileName.replace('.JSON', '')}</div>
                    <div className="text-sm text-gray-500">Проект</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Ошибки */}
      {error && (
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <p className="text-red-700">{error}</p>
              <Button variant="ghost" size="sm" onClick={clearError}>
                ✕
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Загрузка */}
      {isLoading && (
        <Card className="mb-6">
          <CardContent className="pt-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
            <p className="text-gray-500">Анализируем проект...</p>
          </CardContent>
        </Card>
      )}

      {/* Основной интерфейс */}
      {currentProject && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{currentProject.project.name}</CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      useProjectStore.getState().reset();
                      setSelectedProjectFile('');
                    }}
                  >
                    Сменить проект
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tree">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="tree">Структура</TabsTrigger>
                    <TabsTrigger value="search">Поиск</TabsTrigger>
                    <TabsTrigger value="stats">Статистика</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="tree" className="mt-4">
                    <ScrollArea className="h-96">
                      <ProjectTree
                        nodes={currentProject.project.children}
                        onFileSelect={selectFile}
                      />
                    </ScrollArea>
                  </TabsContent>
                  
                  <TabsContent value="search" className="mt-4">
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Поиск в файлах..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <Button onClick={handleSearch}>Найти</Button>
                      </div>
                      
                      {searchResults.length > 0 && (
                        <ScrollArea className="h-80">
                          <div className="space-y-2">
                            {searchResults.map((result, index) => (
                              <Card key={index} className="p-3">
                                <div className="font-medium text-blue-600">{result.fileName}</div>
                                <div className="text-sm text-gray-500">{result.path}</div>
                                {result.matches.map((match, matchIndex) => (
                                  <div key={matchIndex} className="text-sm mt-1">
                                    <span className="text-gray-400">Строка {match.line}:</span>
                                    <div className="font-mono bg-yellow-100 px-1 mt-1">
                                      {match.context}
                                    </div>
                                  </div>
                                ))}
                              </Card>
                            ))}
                          </div>
                        </ScrollArea>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="stats" className="mt-4">
                    {analysisReport && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-center p-3 bg-blue-50 rounded">
                            <div className="text-2xl font-bold text-blue-600">{analysisReport.totalFiles}</div>
                            <div className="text-sm text-blue-800">Файлов</div>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded">
                            <div className="text-2xl font-bold text-green-600">{analysisReport.totalDirectories}</div>
                            <div className="text-sm text-green-800">Папок</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium">Типы файлов:</h4>
                          {Object.entries(analysisReport.fileTypes).map(([type, count]) => (
                            <div key={type} className="flex justify-between text-sm">
                              <span>{type}</span>
                              <Badge variant="secondary">{count}</Badge>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium">Метрики кода:</h4>
                          <div className="text-sm space-y-1">
                            <div className="flex justify-between">
                              <span>Функции:</span>
                              <span>{analysisReport.codeMetrics.functions}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Классы:</span>
                              <span>{analysisReport.codeMetrics.classes}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Строки кода:</span>
                              <span>{analysisReport.codeMetrics.linesOfCode}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Основная область */}
          <div className="lg:col-span-2">
            {selectedFile && selectedFilePath ? (
              <FileViewer file={selectedFile} path={selectedFilePath} />
            ) : (
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-gray-500">
                    <div className="text-4xl mb-4">📁</div>
                    <p>Выберите файл из структуры проекта для просмотра</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  );
};