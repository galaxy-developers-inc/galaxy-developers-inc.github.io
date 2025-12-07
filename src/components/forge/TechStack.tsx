import { Code, Database, Cloud, Cpu, Blocks, Sparkles } from "lucide-react";

const TechStack = () => {
  const categories = [
    {
      icon: Code,
      title: "Frontend",
      color: "accent",
      techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "Next.js", "Vue"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      color: "primary",
      techs: ["Node.js", "PostgreSQL", "Supabase", "Redis", "MongoDB", "GraphQL"]
    },
    {
      icon: Cloud,
      title: "Infrastructure",
      color: "accent-secondary",
      techs: ["Docker", "Nginx", "AWS", "Vercel", "CI/CD", "Kubernetes"]
    },
    {
      icon: Cpu,
      title: "AI & ML",
      color: "accent",
      techs: ["OpenAI API", "Anthropic", "Gemini", "LangChain", "Vector DBs", "RAG"]
    },
    {
      icon: Blocks,
      title: "Integrations",
      color: "primary",
      techs: ["Telegram Bot API", "Stripe", "Payment Systems", "CRM APIs", "Analytics"]
    },
    {
      icon: Sparkles,
      title: "Automation",
      color: "accent-secondary",
      techs: ["Multi-Agent Systems", "Workflow Automation", "Monitoring", "Testing", "DevOps"]
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Технологический стек
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Используем только <span className="text-accent font-semibold">проверенные технологии</span> и cutting-edge инструменты
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 p-6 transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-${category.color}/10 text-${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-accent transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-card border border-border shadow-card max-w-4xl">
            <p className="text-lg md:text-xl text-muted-foreground">
              Более <span className="text-accent font-bold text-2xl">100+ агентов</span> обучены на этих технологиях. 
              Каждый новый проект обогащает нашу базу знаний.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
