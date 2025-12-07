import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  subtitle?: string;
  icon: LucideIcon;
  color: "success" | "primary" | "secondary" | "accent" | "warning" | "error";
}

export const StatCard = ({
  title,
  value,
  change,
  subtitle,
  icon: Icon,
  color,
}: StatCardProps) => {
  const colorClasses = {
    success: "bg-success/10 text-success",
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
    warning: "bg-warning/10 text-warning",
    error: "bg-error/10 text-error",
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-foreground-muted mb-2">{title}</p>
          <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
          {change && (
            <p className="text-sm font-medium text-success">{change}</p>
          )}
          {subtitle && (
            <p className="text-sm text-foreground-muted mt-1">{subtitle}</p>
          )}
        </div>
        <div className={cn("p-3 rounded-lg", colorClasses[color])}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
};
