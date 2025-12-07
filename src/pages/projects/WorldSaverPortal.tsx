import { ArrowLeft, Globe, Users, Database, Zap, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WorldSaverPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Назад к проектам</span>
          </Link>
          <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            Galaxy Developers
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-6">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Full-Stack Platform</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            World Saver Portal
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Глобальная платформа для координации социальных инициатив. 
            Полный стек с frontend + backend архитектурой, real-time синхронизацией и масштабируемой инфраструктурой.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["React", "TypeScript", "Vite", "Node.js", "PostgreSQL", "WebSocket", "Docker"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="h-2 bg-gradient-to-r from-accent to-primary rounded-full w-24 mb-12" />
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Проблема</h2>
              <p className="text-muted-foreground leading-relaxed">
                Социальные инициативы и волонтерские проекты работали разрозненно, без единой системы координации. 
                Требовалась платформа для объединения усилий разных команд с возможностью управления проектами, 
                трекинга прогресса и коммуникации в реальном времени.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Решение</h2>
              <p className="text-muted-foreground leading-relaxed">
                Создана комплексная платформа с модульной архитектурой, поддержкой множества проектов одновременно, 
                системой ролей и прав доступа, аналитикой и отчетностью. Real-time обновления через WebSocket 
                обеспечивают мгновенную синхронизацию данных между всеми участниками.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Ключевые возможности</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: "Управление командами",
                description: "Гибкая система ролей, права доступа, профили участников и управление проектными группами"
              },
              {
                icon: Database,
                title: "Централизованная база данных",
                description: "PostgreSQL с оптимизированными запросами, индексами и кэшированием для высокой производительности"
              },
              {
                icon: Zap,
                title: "Real-time синхронизация",
                description: "WebSocket соединения для мгновенного обновления данных, онлайн-статусов и уведомлений"
              },
              {
                icon: Code,
                title: "RESTful API",
                description: "Документированный API с версионированием, rate limiting и JWT аутентификацией"
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-gradient-card border border-border rounded-2xl hover:shadow-glow transition-all duration-300">
                <div className="p-3 rounded-xl bg-primary/10 text-accent w-fit mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Технический стек</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                items: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "React Query", "Zustand"]
              },
              {
                category: "Backend",
                items: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "Redis", "JWT"]
              },
              {
                category: "Infrastructure",
                items: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "AWS", "Monitoring"]
              }
            ].map((stack, idx) => (
              <div key={idx} className="p-6 bg-card border border-border rounded-2xl">
                <h3 className="font-bold text-lg mb-4 text-accent">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Результаты</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Активных проектов", value: "50+" },
              { label: "Пользователей", value: "1200+" },
              { label: "Uptime", value: "99.9%" },
              { label: "API requests/день", value: "50K+" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-gradient-card border border-border rounded-2xl text-center hover:shadow-glow transition-all">
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите похожее решение?</h2>
          <p className="text-muted-foreground mb-8">
            Мы создадим для вас масштабируемую платформу за 10 часов
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow">
              <ExternalLink className="mr-2 w-5 h-5" />
              Обсудить проект
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WorldSaverPortal;
