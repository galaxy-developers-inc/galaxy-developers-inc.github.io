import { ArrowLeft, Globe2, Languages, Smartphone, Zap, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OsakaSushiBar = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-secondary/10" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-6">
            <Globe2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Multilingual Website</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Osaka Sushi Bar
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Многоязычный ресторанный сайт с адаптивным дизайном. Vite + TypeScript + Tailwind CSS 
            обеспечивают молниеносную загрузку и идеальный UX на всех устройствах.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["React", "TypeScript", "Vite", "Tailwind CSS", "i18next", "Framer Motion", "PWA"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-muted-foreground font-medium mb-12">
            <span className="text-sm">Демо сайт в разработке</span>
          </div>

          <div className="h-2 bg-gradient-to-r from-primary to-accent-secondary rounded-full w-24" />
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Задача</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ресторану требовался сайт для международной аудитории с поддержкой нескольких языков, 
                красивым представлением меню, онлайн-бронированием и быстрой загрузкой. 
                Важно было обеспечить отличный UX как на десктопе, так и на мобильных устройствах.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Реализация</h2>
              <p className="text-muted-foreground leading-relaxed">
                Создан современный single-page application на React с динамической сменой языков через i18next, 
                оптимизированными изображениями, плавными анимациями и мобильно-первым подходом. 
                Vite обеспечивает мгновенную загрузку благодаря code splitting и lazy loading.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Ключевые особенности</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Languages,
                title: "Многоязычность",
                description: "Поддержка 4 языков (EN, RU, VI, JP) с динамическим переключением, RTL layout, локализация дат и валют"
              },
              {
                icon: Smartphone,
                title: "Mobile-first дизайн",
                description: "Адаптивная верстка с breakpoints, touch-friendly элементы, оптимизация для экранов от 320px до 4K"
              },
              {
                icon: Zap,
                title: "Высокая производительность",
                description: "Lighthouse score 95+, lazy loading изображений, code splitting, prefetching, сжатие ассетов"
              },
              {
                icon: Clock,
                title: "Онлайн-бронирование",
                description: "Интеграция с системой бронирования, выбор времени и количества гостей, подтверждение через email/SMS"
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
          <h2 className="text-4xl font-bold mb-12 text-center">Разделы сайта</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Hero с видео-фоном и анимациями",
              "Интерактивное меню с фильтрами",
              "Галерея блюд с lightbox",
              "О ресторане и команде",
              "Отзывы клиентов",
              "Форма бронирования столиков",
              "Карта проезда и контакты",
              "Акции и специальные предложения",
              "Интеграция с соцсетями"
            ].map((section, idx) => (
              <div key={idx} className="p-4 bg-card border border-border rounded-xl hover:border-accent/50 transition-all">
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{section}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Технологии</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                items: ["React 18", "TypeScript", "Vite 5", "Tailwind CSS", "Framer Motion", "React Router"]
              },
              {
                category: "i18n & UX",
                items: ["i18next", "react-i18next", "date-fns", "React Hook Form", "Zod validation", "Sonner toasts"]
              },
              {
                category: "Optimization",
                items: ["Lazy loading", "Code splitting", "Image optimization", "Caching strategy", "PWA", "SEO"]
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
          <h2 className="text-4xl font-bold mb-12 text-center">Метрики производительности</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Lighthouse Score", value: "95+" },
              { label: "FCP", value: "0.8s" },
              { label: "LCP", value: "1.2s" },
              { label: "Bundle size", value: "< 200KB" }
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
          <h2 className="text-3xl font-bold mb-4">Нужен многоязычный сайт?</h2>
          <p className="text-muted-foreground mb-8">
            Создадим современный сайт с поддержкой любых языков за 10 часов
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow">
              <Globe2 className="mr-2 w-5 h-5" />
              Создать сайт
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OsakaSushiBar;
