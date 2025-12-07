import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, FileText, MessageSquare, Mail, TrendingUp, Target, Lightbulb, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResearchViewer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    project: "",
    requirements: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const botToken = "6939425873:AAF9EbHWh0idzf1yv4qvubDcf_kpWLsZtP8";
    const chatId = "912956869";

    const message = `🔬 ЗАЯВКА НА ИССЛЕДОВАНИЕ

👤 Имя: ${formData.name}
📞 Контакт: ${formData.contact}
🚀 Проект: ${formData.project}
📋 Требования:
${formData.requirements}

#research #galaxy_developers`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы проведем исследование и свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: "", contact: "", project: "", requirements: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    }
  };

  const researchTypes = [
    {
      icon: Search,
      title: "Анализ рынка",
      description: "Исследование конкурентов, целевой аудитории и рыночных возможностей",
      examples: ["Конкурентный анализ", "Анализ пользователей", "Рыночные тренды"],
      color: "accent"
    },
    {
      icon: Target,
      title: "Техническое исследование",
      description: "Анализ технологий, архитектурных решений и технических требований",
      examples: ["Выбор стека", "Архитектурные паттерны", "Производительность"],
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Бизнес-анализ",
      description: "Исследование бизнес-процессов, монетизации и стратегии развития",
      examples: ["Бизнес-модель", "ROI анализ", "Стратегия роста"],
      color: "accent-secondary"
    },
    {
      icon: Lightbulb,
      title: "UX исследование",
      description: "Анализ пользовательского опыта, интерфейсов и взаимодействий",
      examples: ["User Journey", "Usability тесты", "A/B тестирование"],
      color: "accent"
    }
  ];

  const researchProcess = [
    {
      step: "01",
      title: "Постановка задач",
      description: "Определяем цели исследования и ключевые вопросы"
    },
    {
      step: "02", 
      title: "Сбор данных",
      description: "Анализируем рынок, конкурентов, технологии и пользователей"
    },
    {
      step: "03",
      title: "Анализ и выводы",
      description: "Обрабатываем данные и формулируем рекомендации"
    },
    {
      step: "04",
      title: "Отчет и презентация",
      description: "Готовим детальный отчет с actionable insights"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Galaxy Developers Research
              </h1>
              <p className="text-muted-foreground">
                Исследования и аналитика для вашего проекта
              </p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:hello@galaxy-developers.ru" className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:shadow-glow transition-all">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </a>
              <a href="https://t.me/safiullins_pro_bot" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:shadow-glow transition-all">
                <MessageSquare className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow">
            <Search className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Исследования на основе данных
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Принимайте решения на основе <span className="text-accent">фактов</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Проводим глубокие исследования рынка, технологий и пользователей. 
            Каждое решение подкреплено данными и анализом.
          </p>
        </div>

        {/* Research Types */}
        <div className="grid md:grid-cols-2 gap-6">
          {researchTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-${type.color}/10 text-${type.color} group-hover:scale-110 transition-transform`}>
                    <type.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Примеры:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Process */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Как мы проводим исследования</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Структурированный подход к получению actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchProcess.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="absolute -top-4 left-6 bg-background px-3 py-1 rounded-full border border-border">
                    <span className="text-xs font-mono text-accent">{step.step}</span>
                  </div>
                  <CardTitle className="text-lg mt-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Request Form */}
        <Card className="max-w-2xl mx-auto bg-gradient-card border border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Заказать исследование</CardTitle>
            <p className="text-muted-foreground">
              Расскажите о вашем проекте, и мы проведем необходимые исследования
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Альберт"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact" className="text-sm font-medium">
                    Telegram или Email
                  </label>
                  <Input
                    id="contact"
                    placeholder="@username или email"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium">
                  Название проекта
                </label>
                <Input
                  id="project"
                  placeholder="Мой стартап"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-medium">
                  Что нужно исследовать?
                </label>
                <Textarea
                  id="requirements"
                  placeholder="Например: Нужен анализ рынка электросамокатов в России, исследование конкурентов и целевой аудитории..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Search className="w-4 h-4 mr-2" />
                Заказать исследование
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">7-14</div>
                  <div className="text-xs text-muted-foreground">дней на исследование</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">50+</div>
                  <div className="text-xs text-muted-foreground">источников данных</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">actionable insights</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: CheckCircle,
              title: "Снижение рисков",
              description: "Принимайте обоснованные решения на основе данных"
            },
            {
              icon: TrendingUp,
              title: "Рост эффективности",
              description: "Оптимизируйте процессы и увеличивайте конверсию"
            },
            {
              icon: Target,
              title: "Точное попадание",
              description: "Создавайте продукты, которые нужны пользователям"
            }
          ].map((benefit, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchViewer;