import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Video, ShieldAlert, Cloud, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendCardProps {
  title: string;
  description: string;
  impact: "low" | "medium" | "high" | "very_high";
  icon: string;
}

const icons = {
  Sparkles,
  Video,
  ShieldAlert,
  Cloud,
  Scale,
};

const impactConfig = {
  low: { label: "Низкий", color: "bg-muted text-muted-foreground" },
  medium: { label: "Средний", color: "bg-warning/20 text-warning" },
  high: { label: "Высокий", color: "bg-primary/20 text-primary" },
  very_high: { label: "Очень высокий", color: "bg-success/20 text-success" },
};

export const TrendCard = ({ title, description, impact, icon }: TrendCardProps) => {
  const Icon = icons[icon as keyof typeof icons] || Sparkles;
  const impactInfo = impactConfig[impact];

  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1">{title}</h4>
          <Badge className={cn("text-xs", impactInfo.color)}>
            {impactInfo.label} Impact
          </Badge>
        </div>
      </div>
      <p className="text-sm text-foreground-muted leading-relaxed">
        {description}
      </p>
    </Card>
  );
};
