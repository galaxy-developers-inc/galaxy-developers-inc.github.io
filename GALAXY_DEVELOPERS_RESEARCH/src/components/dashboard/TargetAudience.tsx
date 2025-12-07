import { Building2, Building, Store } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TargetAudience = () => {
  const segments = [
    {
      segment: "Крупные Предприятия (1000+)",
      market_share: "57.91%",
      characteristics: [
        "Потребность: Масштабирование, compliance, HRIS интеграция",
        "Бюджет: Высокий ($35k-$100k+ в год)",
        "Цикл принятия решения: 6-12 месяцев",
        "Ключевые ЛПР: CHRO, VP HR, IT Director"
      ],
      priority: "high",
      icon: Building2,
    },
    {
      segment: "Средний Бизнес (100-500)",
      market_share: "32%",
      cagr: "10.20%",
      characteristics: [
        "Потребность: Доступность, простота внедрения, SaaS модель",
        "Бюджет: Средний ($10k-$35k в год)",
        "Цикл принятия решения: 2-4 месяца",
        "Ключевые ЛПР: HR Manager, Founder/CEO"
      ],
      priority: "very_high",
      icon: Building,
    },
    {
      segment: "Малый Бизнес (<100)",
      market_share: "10%",
      characteristics: [
        "Потребность: Простота, низкая стоимость, быстрое внедрение",
        "Бюджет: Низкий ($1k-$10k в год)",
        "Цикл принятия решения: 1-2 месяца",
        "Ключевые ЛПР: Founder, HR lead"
      ],
      priority: "medium",
      icon: Store,
    },
  ];

  const industries = [
    { name: "IT & Телеком", share: "29.24%", growth: "high", fit: 95 },
    { name: "Здравоохранение", share: "18%", cagr: "13.30%", fit: 85 },
    { name: "BFSI", share: "16%", fit: 80 },
    { name: "Ритейл", share: "14%", fit: 75 },
    { name: "Производство", share: "12%", fit: 70 },
  ];

  const priorityColors = {
    very_high: "bg-success/20 text-success",
    high: "bg-primary/20 text-primary",
    medium: "bg-warning/20 text-warning",
    low: "bg-muted text-muted-foreground",
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Целевая Аудитория
        </h2>
        <p className="text-foreground-muted">
          Глубокий анализ сегментов клиентов, персон и болевых точек
        </p>
      </div>

      {/* Segments by Size */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Сегменты по Размеру
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {segments.map((seg, index) => {
            const Icon = seg.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge className={priorityColors[seg.priority as keyof typeof priorityColors]}>
                    {seg.priority === "very_high" && "Очень высокий"}
                    {seg.priority === "high" && "Высокий"}
                    {seg.priority === "medium" && "Средний"} приоритет
                  </Badge>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{seg.segment}</h4>
                <p className="text-sm text-primary font-medium mb-3">
                  Доля рынка: {seg.market_share}
                  {seg.cagr && ` • CAGR: ${seg.cagr}`}
                </p>
                <ul className="space-y-2">
                  {seg.characteristics.map((char, idx) => (
                    <li key={idx} className="text-sm text-foreground-muted">
                      • {char}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Industry Breakdown */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Распределение по Отраслям
        </h3>
        <div className="space-y-4">
          {industries.map((industry, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{industry.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-primary">{industry.share}</span>
                    {industry.cagr && (
                      <Badge variant="outline" className="text-xs">
                        CAGR: {industry.cagr}
                      </Badge>
                    )}
                    <Badge className="bg-success/20 text-success text-xs">
                      Fit: {industry.fit}
                    </Badge>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary-light transition-all"
                    style={{ width: `${industry.fit}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Pain Points */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Ключевые Болевые Точки
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { pain: "60% времени на скрининг", severity: 90, source: "SHRM 2024" },
            { pain: "75% кандидатов не получают feedback", severity: 80, source: "LinkedIn Survey" },
            { pain: "Мошенничество растет", severity: 85, source: "Reality Defender 2025" },
            { pain: "Сложность масштабирования", severity: 75, source: "BCG Research" },
          ].map((item, index) => (
            <div key={index} className="p-4 rounded-lg border border-card-border">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{item.pain}</span>
                <Badge variant="outline" className="text-xs">{item.source}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-error transition-all"
                    style={{ width: `${item.severity}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-error">{item.severity}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
