import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export const Technology = () => {
  const techStack = [
    {
      category: "Frontend",
      recommended: "React 18.3 + TypeScript + Tailwind CSS",
      confidence: "very_high",
      factors: [
        "Loveable compatibility ✓",
        "Large talent pool ✓",
        "Rich ecosystem ✓",
        "Performance ✓",
      ],
    },
    {
      category: "Backend Services",
      recommended: "Golang (primary) + Python (AI/ML)",
      confidence: "high",
      factors: [
        "Go: High performance, concurrency",
        "Python: Rich ML ecosystem, LangChain",
        "Best of both worlds",
      ],
    },
    {
      category: "Database",
      recommended: "PostgreSQL 15+ + Redis + ClickHouse",
      confidence: "very_high",
      factors: [
        "PostgreSQL: JSONB, full-text search",
        "Redis: Fast caching and queuing",
        "ClickHouse: OLAP for analytics",
      ],
    },
    {
      category: "AI/ML",
      recommended: "OpenAI GPT-4 + YandexGPT + LangChain",
      confidence: "high",
      factors: [
        "GPT-4: Best quality for analysis",
        "YandexGPT: Russian language + compliance",
        "LangChain: Orchestration framework",
      ],
      risk: "API costs, dependency on external providers",
    },
    {
      category: "Infrastructure",
      recommended: "Kubernetes + Docker + Yandex Cloud",
      confidence: "very_high",
      factors: [
        "Yandex Cloud: Data in Russia (compliance)",
        "Kubernetes: Industry standard, scalability",
        "On-premise option for Enterprise tier",
      ],
    },
  ];

  const phases = [
    {
      phase: "Phase 1: Foundation",
      duration: "2-3 месяца",
      team: "3-5 developers + DevOps + PM",
      budget: "2-3M ₽",
      deliverables: [
        "K8s infrastructure (Yandex Cloud)",
        "CI/CD pipeline",
        "Auth Service + API Gateway",
        "PostgreSQL setup",
        "Basic Web UI",
      ],
    },
    {
      phase: "Phase 2: Core Features",
      duration: "3-4 месяца",
      team: "5-7 developers",
      budget: "3.5-5M ₽",
      deliverables: [
        "Interview Service",
        "Video Processing (WebRTC)",
        "AI Analysis Service",
        "Candidate Portal",
        "HH Integration (basic)",
      ],
    },
    {
      phase: "Phase 3: Advanced AI",
      duration: "2-3 месяца",
      team: "3-4 developers + ML engineer",
      budget: "2.5-3.5M ₽",
      deliverables: [
        "Anti-Fraud Service",
        "Enhanced AI scoring",
        "Analytics Service",
        "HH Integration (full)",
      ],
    },
    {
      phase: "Phase 4: Scale & Polish",
      duration: "2 месяца",
      team: "Full team + QA",
      budget: "1.5-2M ₽",
      deliverables: [
        "Performance optimization",
        "Load testing",
        "Security audit",
        "UI/UX polish",
        "Pilot customers",
      ],
    },
  ];

  const risks = [
    {
      risk: "AI API costs higher than expected",
      likelihood: "medium",
      impact: "high",
      mitigation: "Monitor usage closely, optimize prompts, consider self-hosted models",
    },
    {
      risk: "hh.ru API changes/limitations",
      likelihood: "medium",
      impact: "very_high",
      mitigation: "Build alternative candidate sources, maintain good hh.ru relationship",
    },
    {
      risk: "Deepfake detection accuracy issues",
      likelihood: "medium",
      impact: "medium",
      mitigation: "Use multiple detection methods, human review for high-stakes positions",
    },
    {
      risk: "Regulatory changes (152-ФЗ, AI regulation)",
      likelihood: "low",
      impact: "high",
      mitigation: "Legal monitoring, flexible architecture, data sovereignty",
    },
  ];

  const confidenceColors = {
    very_high: "bg-success/20 text-success",
    high: "bg-primary/20 text-primary",
    medium: "bg-warning/20 text-warning",
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Технологии и Реализация
        </h2>
        <p className="text-foreground-muted">
          Валидация технологического стека, дорожная карта и ресурсы
        </p>
      </div>

      {/* Tech Stack Validation */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Валидация Технологического Стека
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {techStack.map((tech, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{tech.category}</h4>
                  <p className="text-sm text-primary font-medium">{tech.recommended}</p>
                </div>
                <Badge
                  className={
                    confidenceColors[tech.confidence as keyof typeof confidenceColors]
                  }
                >
                  {tech.confidence === "very_high" && "Очень высокая"}
                  {tech.confidence === "high" && "Высокая"}
                  {tech.confidence === "medium" && "Средняя"} уверенность
                </Badge>
              </div>
              <ul className="space-y-1 mb-3">
                {tech.factors.map((factor, idx) => (
                  <li key={idx} className="text-sm text-foreground-muted flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    {factor}
                  </li>
                ))}
              </ul>
              {tech.risk && (
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-warning flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 shrink-0" />
                    {tech.risk}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Implementation Roadmap */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Дорожная Карта Реализации
        </h3>
        <div className="space-y-4">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="p-5 rounded-lg border border-card-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{phase.phase}</h4>
                  <p className="text-sm text-foreground-muted">
                    {phase.duration} • {phase.team}
                  </p>
                </div>
                <Badge className="bg-primary/20 text-primary">{phase.budget}</Badge>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {phase.deliverables.map((item, idx) => (
                  <li key={idx} className="text-sm text-foreground-muted flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground-muted">Total Duration</p>
              <p className="text-2xl font-bold text-primary">9-12 месяцев</p>
            </div>
            <div>
              <p className="text-sm text-foreground-muted">Total Budget</p>
              <p className="text-2xl font-bold text-primary">9.5-13.5M ₽</p>
            </div>
            <div>
              <p className="text-sm text-foreground-muted">Team Size</p>
              <p className="text-2xl font-bold text-primary">7-10 человек</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Risk Assessment */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Оценка Рисков
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {risks.map((risk, index) => (
            <div key={index} className="p-4 rounded-lg border border-card-border">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">{risk.risk}</h4>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      Вероятность: {risk.likelihood === "medium" ? "Средняя" : "Низкая"}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Влияние:{" "}
                      {risk.impact === "very_high"
                        ? "Очень высокое"
                        : risk.impact === "high"
                        ? "Высокое"
                        : "Среднее"}
                    </Badge>
                  </div>
                  <p className="text-sm text-foreground-muted">
                    <span className="font-medium text-success">Митигация:</span>{" "}
                    {risk.mitigation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
