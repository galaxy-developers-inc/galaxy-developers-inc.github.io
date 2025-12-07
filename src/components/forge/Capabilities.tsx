import { BarChart3, Smartphone, Globe, Users, ShoppingCart, Network } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: BarChart3,
      title: "Маркетинговый анализ",
      description: "Глубокая аналитика и insights для принятия решений",
      examples: [],
      color: "accent"
    },
    {
      icon: Smartphone,
      title: "Мобильные лендинги",
      description: "Готовые к интеграции в Telegram Apps",
      examples: [],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Многоязычные решения",
      description: "От вьетнамских ресторанов до spa-центров",
      examples: [],
      color: "accent-secondary"
    },
    {
      icon: Users,
      title: "Упаковка экспертов",
      description: "Персональные бренды и лендинги специалистов",
      examples: [],
      color: "accent"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce + CRM",
      description: "Полноценные решения с управлением направлениями",
      examples: [
        { name: "EcoRider34", url: "https://ecorider34.ru" }
      ],
      color: "primary"
    },
    {
      icon: Network,
      title: "Системное планирование",
      description: "Визуализация архитектуры и процессов",
      examples: [],
      color: "accent-secondary"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Что мы умеем?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            От маркетинговой аналитики до сложных e-commerce систем — мы строим <span className="text-accent">любые решения</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 p-6 transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-${capability.color}/10 text-${capability.color} mb-4`}>
                <capability.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {capability.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {capability.description}
              </p>

              {/* Examples */}
              {capability.examples.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Примеры:
                  </div>
                  {capability.examples.map((example, idx) => (
                    <a
                      key={idx}
                      href={example.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-accent hover:text-accent-secondary transition-colors duration-200 hover:underline"
                    >
                      → {example.name}
                    </a>
                  ))}
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
