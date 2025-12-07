import { ArrowLeft, ShoppingCart, Users, TrendingUp, Package, CreditCard, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EcoRider = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-6">
            <ShoppingCart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">E-commerce + CRM</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Eco-Rider
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Полноценная e-commerce платформа для продажи электросамокатов с интегрированной CRM-системой. 
            Управление товарами, заказами, клиентами и аналитикой в одном месте.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["Next.js", "PostgreSQL", "Stripe", "CRM", "Analytics", "Telegram Bot", "Admin Panel"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <a 
            href="https://ecorider34.ru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium mb-12"
          >
            Посмотреть живой сайт →
          </a>

          <div className="h-2 bg-gradient-to-r from-primary to-accent rounded-full w-24" />
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Вызов</h2>
              <p className="text-muted-foreground leading-relaxed">
                Бизнес по продаже электросамокатов нуждался в решении "всё-в-одном": от витрины товаров 
                до управления клиентской базой. Важно было интегрировать платежную систему, автоматизировать 
                уведомления и создать удобный админ-панель для управления всеми процессами.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Решение</h2>
              <p className="text-muted-foreground leading-relaxed">
                Создана масштабируемая платформа на Next.js с server-side rendering для SEO, 
                интеграцией Stripe для платежей, CRM-модулем для управления клиентами, 
                Telegram-ботом для уведомлений и полноценной админ-панелью с аналитикой.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Основные модули</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShoppingCart,
                title: "E-commerce витрина",
                description: "Каталог товаров, фильтры, корзина, оформление заказа, интеграция с платежами"
              },
              {
                icon: Users,
                title: "CRM система",
                description: "База клиентов, история заказов, сегментация, email/SMS рассылки, лояльность"
              },
              {
                icon: Package,
                title: "Управление товарами",
                description: "Добавление/редактирование товаров, складской учет, ценообразование, характеристики"
              },
              {
                icon: CreditCard,
                title: "Платежи Stripe",
                description: "Прием платежей картами, рассрочка, возвраты, подписки, автоматическая обработка"
              },
              {
                icon: BarChart,
                title: "Аналитика и отчеты",
                description: "Графики продаж, воронка конверсии, ABC-анализ, отчеты по периодам, экспорт"
              },
              {
                icon: TrendingUp,
                title: "Маркетинг",
                description: "Промокоды, скидки, акции, abandoned cart recovery, cross-sell/up-sell"
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-gradient-card border border-border rounded-2xl hover:shadow-glow transition-all duration-300">
                <div className="p-3 rounded-xl bg-primary/10 text-accent w-fit mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Технологический стек</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                items: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form"]
              },
              {
                category: "Backend & Payments",
                items: ["Next.js API Routes", "PostgreSQL", "Prisma", "Stripe API", "Telegram Bot API", "SendGrid"]
              },
              {
                category: "Infrastructure",
                items: ["Vercel", "Supabase", "Cloudinary", "Redis Cache", "Analytics", "Monitoring"]
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

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Результаты</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Увеличение продаж", value: "+240%" },
              { label: "Конверсия", value: "4.8%" },
              { label: "LTV клиента", value: "+180%" },
              { label: "Время обработки", value: "-70%" }
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
          <h2 className="text-3xl font-bold mb-4">Готовы запустить свой e-commerce?</h2>
          <p className="text-muted-foreground mb-8">
            Создадим полноценный интернет-магазин с CRM за 10 часов
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow">
              <ShoppingCart className="mr-2 w-5 h-5" />
              Запустить магазин
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EcoRider;
