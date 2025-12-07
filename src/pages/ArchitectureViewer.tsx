import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Upload, FileText, Download, ExternalLink, MessageSquare, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProjectFile {
  name: string;
  type: "file" | "directory";
  content_base64?: string;
  children?: ProjectFile[];
}

interface ProjectData {
  project: ProjectFile;
}

const ArchitectureViewer = () => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.JSON')) {
      toast({
        title: "Неверный формат файла",
        description: "Пожалуйста, загрузите файл с расширением .JSON",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      setProjectData(data);
      toast({
        title: "Архитектура загружена!",
        description: `Проект "${data.project.name}" успешно загружен`,
      });
    } catch (error) {
      toast({
        title: "Ошибка загрузки",
        description: "Не удалось прочитать файл. Проверьте формат JSON.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const decodeBase64 = (base64: string): string => {
    try {
      return atob(base64);
    } catch {
      return "Не удалось декодировать содержимое";
    }
  };

  const renderFileTree = (file: ProjectFile, level = 0) => {
    const indent = level * 20;
    
    return (
      <div key={file.name} style={{ marginLeft: `${indent}px` }}>
        <div className="flex items-center gap-2 py-1">
          {file.type === "directory" ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-accent/20 rounded" />
              <span className="font-medium text-accent">{file.name}/</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{file.name}</span>
              {file.content_base64 && (
                <Badge variant="secondary" className="text-xs">
                  {Math.round(file.content_base64.length * 0.75 / 1024)}KB
                </Badge>
              )}
            </div>
          )}
        </div>
        
        {file.content_base64 && (
          <div className="ml-6 mt-2 mb-4">
            <Card className="bg-muted/30">
              <CardContent className="p-4">
                <pre className="text-xs overflow-x-auto whitespace-pre-wrap">
                  {decodeBase64(file.content_base64).slice(0, 500)}
                  {decodeBase64(file.content_base64).length > 500 && "..."}
                </pre>
              </CardContent>
            </Card>
          </div>
        )}
        
        {file.children?.map(child => renderFileTree(child, level + 1))}
      </div>
    );
  };

  const exportToPage = () => {
    if (!projectData) return;
    
    const url = `/architecture/${encodeURIComponent(projectData.project.name)}`;
    window.open(url, '_blank');
    
    toast({
      title: "Страница создана!",
      description: "Архитектура экспортирована на отдельную страницу",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Galaxy Developers Architecture
              </h1>
              <p className="text-muted-foreground">
                Визуализация архитектуры проектов
              </p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:hello@galaxy-developers.ru" className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:shadow-glow transition-all">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </a>
              <a href="https://t.me/safiullins_pro_bot" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:shadow-glow transition-all">
                <MessageSquare className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {!projectData ? (
          <div className="max-w-2xl mx-auto">
            <Card className="border-dashed border-2 border-border hover:border-accent/50 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <Upload className="w-6 h-6 text-accent" />
                  Загрузить архитектуру проекта
                </CardTitle>
                <p className="text-muted-foreground">
                  Загрузите JSON файл с архитектурой вашего проекта для визуализации
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept=".JSON"
                    onChange={handleFileUpload}
                    className="cursor-pointer"
                    disabled={loading}
                  />
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Загрузка..." : "Выбрать файл"}
                  </Button>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-3">
                  <h3 className="font-semibold">Формат файла:</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>• Файл должен иметь расширение .JSON</p>
                    <p>• Структура: project → children → files с content_base64</p>
                    <p>• Поддерживаются вложенные директории</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Project Header */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {projectData.project.name}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Архитектура проекта • {projectData.project.children?.length || 0} компонентов
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={exportToPage} variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Экспорт
                    </Button>
                    <Button onClick={() => setProjectData(null)} variant="outline">
                      Загрузить другой
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* File Tree */}
            <Card>
              <CardHeader>
                <CardTitle>Структура проекта</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-mono text-sm">
                  {projectData.project.children?.map(file => renderFileTree(file))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-gradient-card border border-border">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Нужна помощь с архитектурой?</h3>
                  <p className="text-muted-foreground mb-4">
                    Свяжитесь с нами для консультации по архитектуре вашего проекта
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button asChild>
                      <a href="https://t.me/safiullins_pro_bot" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Telegram
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="mailto:hello@galaxy-developers.ru">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchitectureViewer;