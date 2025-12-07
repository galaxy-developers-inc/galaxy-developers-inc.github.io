import { TrendingUp, Video, Users, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatCard } from "./StatCard";
import { MarketSizeChart } from "./charts/MarketSizeChart";
import { AdoptionChart } from "./charts/AdoptionChart";
import { TrendCard } from "./TrendCard";
import { GeographicChart } from "./charts/GeographicChart";
import marketData from "@/data/market_research.json";

export const MarketOverview = () => {
  const stats = [
    {
      title: "AI Recruitment Market 2025",
      value: "$617-752M",
      change: "+7% YoY",
      icon: TrendingUp,
      color: "success" as const,
    },
    {
      title: "Video Interview Market 2025",
      value: "$1.2B",
      change: "+18.4% CAGR",
      icon: Video,
      color: "primary" as const,
    },
    {
      title: "Текущее Внедрение",
      value: "67%",
      subtitle: "Компании используют AI рекрутинг",
      icon: Users,
      color: "secondary" as const,
    },
    {
      title: "Fortune 500 CHRO",
      value: "93%",
      subtitle: "Используют AI в рекрутинге",
      icon: Building,
      color: "accent" as const,
    },
  ];

  const trends = [
    {
      title: "AI Automation Explosion",
      description: "Автоматизация скрининга резюме, генерация вопросов, AI-оценка кандидатов",
      impact: "high" as const,
      icon: "Sparkles",
    },
    {
      title: "Video Interview Growth",
      description: "Асинхронные видео интервью с AI анализом речи и поведения (CAGR 12-18%)",
      impact: "very_high" as const,
      icon: "Video",
    },
    {
      title: "Anti-Fraud Detection",
      description: "Deepfake detection, биометрия, мониторинг IP/устройств",
      impact: "high" as const,
      icon: "ShieldAlert",
    },
    {
      title: "Cloud Adoption",
      description: "78.5% рынка - облачные решения для масштабируемости",
      impact: "medium" as const,
      icon: "Cloud",
    },
    {
      title: "Bias Reduction",
      description: "AI для снижения предвзятости в найме (56-61% improvement)",
      impact: "high" as const,
      icon: "Scale",
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Market Size Projection */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Прогноз Размера Рынка (2024-2030)
        </h3>
        <MarketSizeChart />
      </Card>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Статистика Внедрения
          </h3>
          <AdoptionChart />
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Географическое Распределение
          </h3>
          <GeographicChart />
        </Card>
      </div>

      {/* Key Trends */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Ключевые Тренды
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trends.map((trend, index) => (
            <TrendCard key={index} {...trend} />
          ))}
        </div>
      </div>
    </div>
  );
};
