import { ArrowLeft, MessageSquare, TrendingUp, Users, Bot, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TelegramSalesBot = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/10 via-transparent to-primary/10" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-6">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Sales Automation Bot</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Telegram Sales Bot
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Система автоматизации продаж через Telegram с AI-ассистентом, интеграцией CRM, 
            детальной аналитикой и увеличением конверсии на 300%.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["Python", "Telegram Bot API", "OpenAI GPT", "CRM Integration", "PostgreSQL", "Analytics", "Webhooks"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="h-2 bg-gradient-to-r from-accent-secondary to-primary rounded-full w-24 mb-12" />
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Проблема</h2>
              <p className="text-muted-foreground leading-relaxed">
                Компания теряла потенциальных клиентов из-за медленной обработки запросов в Telegram, 
                отсутствия автоматизации рутинных вопросов и недостаточной аналитики по воронке продаж. 
                Менеджеры тратили 70% времени на типовые вопросы.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Решение</h2>
              <p className="text-muted-foreground leading-relaxed">
                Создан умный бот с AI-ассистентом на базе GPT для автоматизации общения, 
                интеграцией с CRM для синхронизации лидов, продвинутой аналитикой для отслеживания 
                конверсии и автоматическими сценариями для квалификации и прогрева лидов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Ключевые возможности</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Bot,
                title: "AI-ассистент",
                description: "GPT-4 для обработки запросов, понимание контекста, персонализированные ответы, обучение на истории диалогов"
              },
              {
                icon: Users,
                title: "CRM интеграция",
                description: "Автоматическое создание лидов, синхронизация данных, обогащение профилей, триггеры для менеджеров"
              },
              {
                icon: BarChart3,
                title: "Продвинутая аналитика",
                description: "Воронка продаж, источники трафика, конверсия по этапам, когортный анализ, A/B тестирование"
              },
              {
                icon: Zap,
                title: "Автоматические сценарии",
                description: "Квалификация лидов, прогрев холодных, follow-up цепочки, автоответчик в нерабочее время"
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
          <h2 className="text-4xl font-bold mb-12 text-center">Автоматизированные процессы</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Первичная квалификация лидов",
              "Ответы на типовые вопросы",
              "Отправка прайс-листов и материалов",
              "Бронирование консультаций",
              "Сбор обратной связи",
              "Напоминания о встречах",
              "Реактивация холодных лидов",
              "Кросс-продажи и upsell",
              "Обработка возражений"
            ].map((process, idx) => (
              <div key={idx} className="p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{process}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Технический стек</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Bot & AI",
                items: ["Python aiogram", "OpenAI GPT-4", "LangChain", "Vector DB", "Prompt engineering", "Fine-tuning"]
              },
              {
                category: "Backend & Integration",
                items: ["FastAPI", "PostgreSQL", "Redis", "CRM API", "Webhooks", "Celery tasks"]
              },
              {
                category: "Analytics & Deploy",
                items: ["Metabase", "Amplitude", "Segment", "Docker", "CI/CD", "Monitoring"]
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
          <h2 className="text-4xl font-bold mb-12 text-center">Впечатляющие результаты</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Рост конверсии", value: "+300%" },
              { label: "Обработка лидов", value: "< 1 мин" },
              { label: "Экономия времени", value: "70%" },
              { label: "Satisfaction rate", value: "92%" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-gradient-card border border-border rounded-2xl text-center hover:shadow-glow transition-all">
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-card border border-accent/30 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Ключевой инсайт</h3>
            <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto">
              Комбинация AI для мгновенных ответов и автоматической CRM-интеграции создала систему, 
              которая работает 24/7, никогда не устаёт и постоянно улучшается на основе новых диалогов. 
              Конверсия выросла в 3 раза при снижении нагрузки на менеджеров на 70%.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите автоматизировать продажи?</h2>
          <p className="text-muted-foreground mb-8">
            Создадим AI-бота для вашего бизнеса за 10 часов
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow">
              <TrendingUp className="mr-2 w-5 h-5" />
              Увеличить продажи
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TelegramSalesBot;
