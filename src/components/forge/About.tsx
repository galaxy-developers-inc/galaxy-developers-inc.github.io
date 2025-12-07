import { Brain, Workflow, Zap, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Системный подход",
      description: "Из всех воркфлоу извлекается опыт. Что не так — сразу исследование, планирование, проектирование."
    },
    {
      icon: Workflow,
      title: "Конвейерное производство",
      description: "Best practices на автоматизированном конвейере. Мы не делаем вручную — мы производим."
    },
    {
      icon: Zap,
      title: "Молниеносная скорость",
      description: "10 часов вместо месяца. Сотни агентов работают параллельно, каждый шаг мониторится."
    },
    {
      icon: Target,
      title: "Мировая экспертиза",
      description: "Лучшие в языковых моделях в мире. Каждое решение базируется на cutting-edge технологиях."
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Кто мы такие?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Galaxy Developers — это не агентство. Это <span className="text-accent font-semibold">завод производства</span> кодовых решений нового поколения.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-accent group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-card border border-border shadow-card">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-medium text-foreground mb-4">
              "Мы не пишем код. Мы <span className="text-accent">производим решения</span>."
            </p>
            <footer className="text-muted-foreground">
              — Альберт и Паша, основатели Galaxy Developers
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
