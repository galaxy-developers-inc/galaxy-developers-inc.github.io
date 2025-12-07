import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const TopBar = () => {
  const handleExport = (format: string) => {
    toast.success(`Экспорт в формате ${format} начат`);
  };

  return (
    <div className="sticky top-0 z-30 bg-card border-b border-card-border backdrop-blur-sm bg-opacity-95">
      <div className="flex items-center justify-between p-4 md:px-6">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-foreground">
            Аналитический Дашборд
          </h2>
          <p className="text-sm text-foreground-muted">
            Комплексное исследование рынка AI рекрутмента
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleExport("PDF")}
            className="hidden sm:flex"
          >
            <FileText className="h-4 w-4 mr-2" />
            PDF
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleExport("CSV")}
            className="hidden sm:flex"
          >
            <Download className="h-4 w-4 mr-2" />
            CSV
          </Button>
        </div>
      </div>
    </div>
  );
};
