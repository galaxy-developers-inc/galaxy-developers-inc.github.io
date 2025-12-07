import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { RevenueProjectionChart } from "./charts/RevenueProjectionChart";

export const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "50,000 ₽",
      priceUsd: "~$550",
      target: "SMB, до 100 сотрудников",
      includes: [
        "До 50 интервью/месяц",
        "Базовая аналитика",
        "1 интеграция с hh.ru",
        "Email поддержка",
      ],
      mrr: "10-15M ₽",
    },
    {
      name: "Professional",
      price: "150,000 ₽",
      priceUsd: "~$1,650",
      target: "Средний бизнес, 100-500 сотрудников",
      includes: [
        "До 200 интервью/месяц",
        "AI скоринг и аналитика",
        "Anti-fraud система",
        "Priority поддержка",
        "API доступ",
      ],
      popular: true,
      mrr: "15-22.5M ₽",
    },
    {
      name: "Enterprise",
      price: "От 300,000 ₽",
      priceUsd: "~$3,300+",
      target: "Крупный бизнес, 500+ сотрудников",
      includes: [
        "Unlimited интервью",
        "On-premise опция",
        "Кастомизация AI моделей",
        "Dedicated менеджер",
        "SLA 99.9%",
      ],
      mrr: "6-9M ₽",
    },
  ];

  const additionalRevenue = [
    {
      stream: "Professional Services",
      annual: "15-30M ₽",
      services: ["Setup & Integration", "Custom AI Training", "Training & Onboarding"],
    },
    {
      stream: "Premium Support",
      annual: "11-17M ₽",
      services: ["24/7 поддержка", "SLA гарантии", "Dedicated менеджер"],
    },
    {
      stream: "Usage Overages",
      annual: "37-84M ₽",
      services: ["Per-interview charges", "Additional integrations", "Extra storage"],
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Ценообразование и Монетизация
        </h2>
        <p className="text-foreground-muted">
          Стратегия ценообразования, модели дохода и прогнозы
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <Card
            key={index}
            className={`p-6 relative ${
              tier.popular ? "border-primary shadow-lg scale-105" : ""
            } hover:shadow-xl transition-all`}
          >
            {tier.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">{tier.price}</span>
                <span className="text-sm text-foreground-muted">/месяц</span>
              </div>
              <p className="text-sm text-foreground-muted">{tier.priceUsd}</p>
              <p className="text-sm text-foreground-muted mt-2">{tier.target}</p>
            </div>

            <div className="space-y-3 mb-6">
              {tier.includes.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-foreground-muted">
                Потенциальная MRR (Year 1)
              </p>
              <p className="text-lg font-semibold text-primary">{tier.mrr}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Revenue Projection */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Прогноз Дохода (3 года)
        </h3>
        <RevenueProjectionChart />
      </Card>

      {/* Additional Revenue Streams */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">
          Дополнительные Источники Дохода
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {additionalRevenue.map((item, index) => (
            <div key={index} className="p-4 rounded-lg border border-card-border">
              <h4 className="font-semibold text-foreground mb-2">{item.stream}</h4>
              <p className="text-2xl font-bold text-primary mb-3">{item.annual}</p>
              <ul className="space-y-1">
                {item.services.map((service, idx) => (
                  <li key={idx} className="text-sm text-foreground-muted">
                    • {service}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* LTV/CAC */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Customer Lifetime Value
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm text-foreground-muted">Avg Subscription</span>
              <span className="font-semibold text-foreground">120,000 ₽/месяц</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm text-foreground-muted">Avg Lifetime</span>
              <span className="font-semibold text-foreground">24 месяца</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm text-foreground-muted">Total LTV</span>
              <span className="text-2xl font-bold text-primary">4,896,000 ₽</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            CAC & ROI
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm text-foreground-muted">Target CAC</span>
              <span className="font-semibold text-foreground">300k-500k ₽</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm text-foreground-muted">LTV/CAC Ratio</span>
              <span className="font-semibold text-success">9.8-16.3x</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm text-foreground-muted">Payback Period</span>
              <span className="text-2xl font-bold text-primary">3-6 месяцев</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
