import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

export const Competitors = () => {
  const competitors = [
    {
      name: "HireVue",
      funding: "$93M",
      position: "Leader",
      pricing: "$35k-$100k+ в год",
      strengths: [
        "AI video analysis (25,000 data points)",
        "Enterprise scale (1/3 Fortune 100)",
        "Established brand",
      ],
      weaknesses: [
        "Дорого (недоступно для SMB)",
        "Проблемы с bias",
        "US-focused (limited Russia)",
      ],
      threat: "medium",
    },
    {
      name: "Paradox (Olivia AI)",
      pricing: "$1k-$100k в год",
      position: "Strong",
      strengths: [
        "Conversational AI (chatbot)",
        "High-volume hiring focus",
        "Mobile-first experience",
      ],
      weaknesses: [
        "Меньше фокуса на видео интервью",
        "Chatbot может раздражать",
        "Limited Russian market",
      ],
      threat: "medium",
    },
    {
      name: "Talview",
      position: "Challenger",
      strengths: [
        "Interview proctoring (anti-fraud)",
        "Deepfake detection",
        "Global presence",
      ],
      weaknesses: [
        "Менее известный brand",
        "Limited Russia-specific features",
        "No hh.ru integration",
      ],
      threat: "medium-high",
    },
  ];

  const featureComparison = {
    features: [
      "AI Video Analysis",
      "Anti-Fraud Detection",
      "hh.ru Integration",
      "Russian Localization",
      "Data in Russia",
      "AI Transcription",
      "AI Scoring",
      "Async Video Interview",
      "Mobile-friendly",
      "SMB Pricing",
    ],
    companies: {
      "HireVue": [10, 8, 0, 0, 0, 10, 10, 10, 7, 2],
      "Paradox": [5, 3, 0, 0, 0, 5, 5, 5, 10, 7],
      "Talview": [8, 10, 0, 0, 0, 7, 7, 9, 8, 5],
      "Talantix": [2, 0, 10, 10, 10, 0, 0, 0, 7, 8],
      "BG AI": [9, 9, 10, 10, 10, 9, 9, 10, 9, 9],
    },
  };

  const threatColors = {
    low: "bg-success/20 text-success",
    medium: "bg-warning/20 text-warning",
    "medium-high": "bg-error/20 text-error",
    high: "bg-error text-error-foreground",
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Конкурентная Среда
        </h2>
        <p className="text-foreground-muted">
          Анализ конкурентов, позиционирование и дифференциация
        </p>
      </div>

      {/* Major Competitors */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {competitors.map((comp, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-lg text-foreground">{comp.name}</h4>
                <p className="text-sm text-foreground-muted">{comp.position}</p>
              </div>
              <Badge className={threatColors[comp.threat as keyof typeof threatColors]}>
                {comp.threat === "low" && "Низкая"}
                {comp.threat === "medium" && "Средняя"}
                {comp.threat === "medium-high" && "Выше средней"}
                {comp.threat === "high" && "Высокая"} угроза
              </Badge>
            </div>

            {comp.funding && (
              <p className="text-sm text-primary font-medium mb-3">
                Финансирование: {comp.funding}
              </p>
            )}
            <p className="text-sm text-foreground-muted mb-4">{comp.pricing}</p>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-success mb-2">Сильные стороны:</p>
                <ul className="space-y-1">
                  {comp.strengths.map((s, idx) => (
                    <li key={idx} className="text-sm text-foreground-muted flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold text-error mb-2">Слабые стороны:</p>
                <ul className="space-y-1">
                  {comp.weaknesses.map((w, idx) => (
                    <li key={idx} className="text-sm text-foreground-muted flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-error shrink-0 mt-0.5" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Feature Comparison Matrix */}
      <Card className="p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Сравнение Функций
        </h3>
        <div className="min-w-[800px]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-sm font-semibold text-foreground">
                  Функция
                </th>
                {Object.keys(featureComparison.companies).map((company) => (
                  <th key={company} className="text-center py-3 px-2 text-sm font-semibold text-foreground">
                    {company}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureComparison.features.map((feature, index) => (
                <tr key={index} className="border-b border-border/50">
                  <td className="py-3 px-2 text-sm text-foreground-muted">{feature}</td>
                  {Object.values(featureComparison.companies).map((scores, compIndex) => {
                    const score = scores[index];
                    return (
                      <td key={compIndex} className="text-center py-3 px-2">
                        <div
                          className={`inline-block w-12 h-6 rounded ${
                            score >= 8
                              ? "bg-success"
                              : score >= 5
                              ? "bg-warning"
                              : score > 0
                              ? "bg-error"
                              : "bg-muted"
                          }`}
                        >
                          <span className="text-xs font-medium text-white">
                            {score > 0 ? score : "-"}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Differentiation Strategy */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Стратегия Дифференциации
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              prop: "Глубокая интеграция с hh.ru",
              advantage: "very_high",
              desc: "Единственное решение с bidirectional hh.ru sync, auto-responses, auto-invites",
            },
            {
              prop: "Хранение данных в РФ",
              advantage: "high",
              desc: "Compliance с 152-ФЗ, no data transfer abroad",
            },
            {
              prop: "Полный цикл автоматизации",
              advantage: "high",
              desc: "Vacancy creation → publishing → screening → interview → analytics",
            },
            {
              prop: "SMB-friendly pricing",
              advantage: "very_high",
              desc: "Starting at 50k ₽/month (vs. HireVue $35k annually = 290k ₽/month minimum)",
            },
          ].map((item, index) => (
            <div key={index} className="p-4 rounded-lg border border-card-border">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-foreground">{item.prop}</h4>
                <Badge
                  className={
                    item.advantage === "very_high"
                      ? "bg-success/20 text-success"
                      : "bg-primary/20 text-primary"
                  }
                >
                  {item.advantage === "very_high" ? "Очень высокое" : "Высокое"}
                </Badge>
              </div>
              <p className="text-sm text-foreground-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
