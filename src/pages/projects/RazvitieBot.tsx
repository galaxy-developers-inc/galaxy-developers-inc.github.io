import { ArrowLeft, Bot, Server, Shield, Zap, Terminal, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RazvitieBot = () => {
  return (
    <div className="min-h-screen bg-background">
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

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/10" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-6">
            <Bot className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">DevOps + Telegram Bot</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Razvitie Bot
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Telegram-бот для личного развития с полноценной DevOps инфраструктурой: 
            Docker контейнеризация, Nginx reverse proxy, CI/CD pipeline и мониторинг.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["Python", "Telegram Bot API", "Docker", "Nginx", "PostgreSQL", "Redis", "GitHub Actions"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="h-2 bg-gradient-to-r from-accent to-accent-secondary rounded-full w-24 mb-12" />
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Концепция</h2>
              <p className="text-muted-foreground leading-relaxed">
                Создание Telegram-бота для трекинга привычек, постановки целей и мотивационного контента. 
                Требовалась надежная инфраструктура с возможностью масштабирования, автоматическими 
                деплоями и минимальным downtime.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Реализация</h2>
              <p className="text-muted-foreground leading-relaxed">
                Разработан бот на Python с aiogram framework, упакован в Docker контейнеры, 
                настроен Nginx для reverse proxy, создан CI/CD pipeline через GitHub Actions. 
                Добавлен мониторинг с Prometheus и алертами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Инфраструктура и возможности</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Server,
                title: "Микросервисная архитектура",
                description: "Разделение на отдельные сервисы: bot handler, database, cache, webhook server. Docker Compose оркестрация"
              },
              {
                icon: Shield,
                title: "Nginx Reverse Proxy",
                description: "SSL termination, rate limiting, load balancing, статическая раздача файлов, кэширование"
              },
              {
                icon: Zap,
                title: "CI/CD Pipeline",
                description: "Автоматическое тестирование, сборка Docker образов, деплой на production через GitHub Actions"
              },
              {
                icon: Activity,
                title: "Мониторинг и логи",
                description: "Prometheus метрики, Grafana дашборды, централизованное логирование, алерты в Telegram"
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

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Функции бота</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Трекинг привычек с напоминаниями",
              "Постановка и декомпозиция целей",
              "Ежедневные мотивационные сообщения",
              "Статистика прогресса с графиками",
              "Персонализированные рекомендации",
              "Система достижений и streaks",
              "Экспорт данных в различных форматах",
              "Интеграция с календарями",
              "Групповые челленджи"
            ].map((feature, idx) => (
              <div key={idx} className="p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Технологический стек</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Bot Development",
                items: ["Python 3.11", "aiogram 3.x", "asyncio", "PostgreSQL", "Redis", "SQLAlchemy"]
              },
              {
                category: "Infrastructure",
                items: ["Docker", "Docker Compose", "Nginx", "Ubuntu Server", "Systemd", "Let's Encrypt"]
              },
              {
                category: "DevOps & Monitoring",
                items: ["GitHub Actions", "Prometheus", "Grafana", "ELK Stack", "Sentry", "Uptime Kuma"]
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

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">DevOps метрики</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Uptime", value: "99.9%" },
              { label: "Deploy время", value: "< 2 мин" },
              { label: "Auto-scale", value: "До 10K users" },
              { label: "Response time", value: "< 100ms" }
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

      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Нужен надежный Telegram бот?</h2>
          <p className="text-muted-foreground mb-8">
            Создадим бота с production-ready инфраструктурой за 10 часов
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow">
              <Terminal className="mr-2 w-5 h-5" />
              Запустить бота
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RazvitieBot;
