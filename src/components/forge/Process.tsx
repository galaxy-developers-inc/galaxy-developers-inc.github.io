import { Search, Lightbulb, Code2, Rocket, Shield, RefreshCw } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Прием заявки",
      description: "Слушаем вашу задачу, задаем уточняющие вопросы. Агент-аналитик фиксирует требования по стандарту ISO 9001.",
      duration: "30 мин"
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Исследование",
      description: "Агенты исследуют предметную область, декомпозируют задачу, находят best practices. Если что-то не так — составляется новый план.",
      duration: "1-2 часа"
    },
    {
      icon: Shield,
      number: "03",
      title: "Проектирование",
      description: "Агент-архитектор проектирует систему по COBIT, ISO 27001. Расписываются процессы, исполнители, зависимости.",
      duration: "2-3 часа"
    },
    {
      icon: Code2,
      number: "04",
      title: "Разработка",
      description: "Разработчики получают задачи, выполняют. Каждый коммит валидируется агентами. Извлекается опыт для улучшения процессов.",
      duration: "4-5 часов"
    },
    {
      icon: RefreshCw,
      number: "05",
      title: "Валидация",
      description: "Агенты по каждому стандарту проверяют качество. Процессы постоянно улучшаются на основе накопленного опыта.",
      duration: "30 мин"
    },
    {
      icon: Rocket,
      number: "06",
      title: "Деплой",
      description: "Автоматический деплой в облако. Один воркфлоу от заявки до production. Система готова к работе.",
      duration: "1 час"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Как мы работаем?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            От идеи до production за <span className="text-accent font-bold">10 часов</span>. 
            Все процессы регламентированы и описаны.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 rounded-full bg-card border border-border text-foreground font-medium">
              COBIT
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border text-foreground font-medium">
              ISO 9001
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border text-foreground font-medium">
              ISO 27001
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border text-foreground font-medium">
              ITIL
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border text-accent font-medium">
              + AI Agents
            </span>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-primary to-accent-secondary opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card */}
                <div className="relative bg-card rounded-2xl border border-border hover:border-primary/50 p-6 transition-all duration-300 hover:shadow-glow group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 bg-background px-3 py-1 rounded-full border border-border">
                    <span className="text-xs font-mono text-accent">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-accent group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    <div className="w-2 h-2 rounded-full bg-accent animate-glow-pulse" />
                    {step.duration}
                  </div>
                </div>

                {/* Connection Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-card border border-border shadow-card">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            <span className="text-accent">Один воркфлоу</span> от заявки до облака
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-3 text-foreground">По каждому стандарту — свой агент</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Агенты валидируют качество на каждом этапе. ISO 9001 проверяет процессы, ISO 27001 — безопасность, 
                COBIT — управление IT. Все автоматически.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Постоянное улучшение</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Если что-то идет не так — агент исследует проблему, составляет новый план, извлекает опыт. 
                Процессы постоянно валидируются и улучшаются.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["✓ Документация", "✓ Тесты", "✓ CI/CD", "✓ Мониторинг", "✓ Масштабирование", "✓ Безопасность"].map((item, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
