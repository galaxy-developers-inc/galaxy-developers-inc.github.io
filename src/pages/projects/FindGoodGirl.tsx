import { ArrowLeft, MessageSquare, Bot, BarChart3, Database, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FindGoodGirl = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/10 via-transparent to-accent/10" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-6">
            <Bot className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Automation System</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Good Girl
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Автоматизированная система для VietnamCupid. Bot работает 24/7, управляется через 
            интуитивный Dashboard с real-time мониторингом активности и аналитикой.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["Node.js", "Puppeteer", "PostgreSQL", "Dashboard", "React", "Cron Jobs"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="h-2 bg-gradient-to-r from-accent-secondary to-accent rounded-full w-24 mb-12" />
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Задача</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ручное управление профилем на dating-платформе занимало слишком много времени: 
                поиск совпадений, отправка сообщений, обработка ответов. Нужна была система автоматизации 
                с возможностью настройки критериев поиска и персонализированных сообщений.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Реализация</h2>
              <p className="text-muted-foreground leading-relaxed">
                Разработан бот на Node.js с Puppeteer для автоматизации браузерных действий. 
                Dashboard на React для управления настройками, просмотра статистики и мониторинга активности. 
                База данных PostgreSQL хранит историю взаимодействий и аналитику.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Функциональность</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "Автоматические сообщения",
                description: "Персонализированные шаблоны сообщений с переменными, умное распределение по времени, A/B тестирование"
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description: "Детальная статистика откликов, конверсии, временные паттерны активности и эффективности разных стратегий"
              },
              {
                icon: Database,
                title: "База данных профилей",
                description: "Автоматическое сохранение истории взаимодействий, тегирование, фильтры и поиск по критериям"
              },
              {
                icon: Clock,
                title: "Планировщик задач",
                description: "Cron jobs для периодических задач, настройка расписания активности, лимиты действий для безопасности"
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
          <h2 className="text-4xl font-bold mb-12 text-center">Архитектура</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card border border-border rounded-2xl">
              <h3 className="font-bold text-lg mb-4 text-accent">Bot Engine</h3>
              <ul className="space-y-2">
                {[
                  "Puppeteer для browser automation",
                  "Proxy rotation для безопасности",
                  "Rate limiting и anti-ban механизмы",
                  "Логирование всех действий",
                  "Error handling и recovery"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-card border border-border rounded-2xl">
              <h3 className="font-bold text-lg mb-4 text-accent">Dashboard</h3>
              <ul className="space-y-2">
                {[
                  "React + TypeScript frontend",
                  "Real-time updates через WebSocket",
                  "Графики и визуализация данных",
                  "Управление настройками бота",
                  "Экспорт отчетов"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Результаты</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Сообщений в день", value: "500+" },
              { label: "Отклик", value: "35%" },
              { label: "Uptime", value: "24/7" },
              { label: "Экономия времени", value: "20h/неделя" }
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
          <h2 className="text-3xl font-bold mb-4">Нужна автоматизация?</h2>
          <p className="text-muted-foreground mb-8">
            Создадим бота для любой платформы за 10 часов
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow">
              <Zap className="mr-2 w-5 h-5" />
              Обсудить автоматизацию
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FindGoodGirl;
