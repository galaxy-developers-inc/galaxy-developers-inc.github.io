import { ExternalLink, Code, Database, Bot, Globe as GlobeIcon, MessageSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArchitectureModal from "./ArchitectureModal";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const projects = [
    {
      name: "World Saver Portal",
      slug: "world-saver-portal",
      icon: GlobeIcon,
      description: "Глобальная платформа для координации социальных инициатив. Полный стек с frontend + backend архитектурой.",
      tech: ["React", "TypeScript", "Vite", "Full-stack"],
      highlights: ["Сложная архитектура", "Масштабируемость", "Real-time синхронизация"],
      gradient: "from-accent to-primary"
    },
    {
      name: "Find Good Girl (VietnamCupid Bot)",
      slug: "find-good-girl",
      icon: MessageSquare,
      description: "Автоматизированная система для dating-платформы. Dashboard для управления ботом и мониторинга активности.",
      tech: ["Node.js", "PostgreSQL", "Bot API", "Dashboard"],
      highlights: ["Автоматизация 24/7", "Database интеграция", "Умные алгоритмы"],
      gradient: "from-accent-secondary to-accent"
    },
    {
      name: "Eco-Rider",
      slug: "eco-rider",
      icon: TrendingUp,
      description: "E-commerce платформа с CRM. Управление товарами, заказами, клиентами — всё в одной системе.",
      tech: ["E-commerce", "CRM", "Payment Systems", "Analytics"],
      highlights: ["Полная автоматизация", "Multi-channel", "Advanced CRM"],
      gradient: "from-primary to-accent"
    },
    {
      name: "Razvitie Bot",
      slug: "razvitie-bot",
      icon: Bot,
      description: "Telegram-бот для личного развития. Nginx конфигурация, Docker, полная CI/CD pipeline.",
      tech: ["Telegram Bot", "Docker", "Nginx", "DevOps"],
      highlights: ["Микросервисная архитектура", "Auto-scaling", "Monitoring"],
      gradient: "from-accent to-accent-secondary"
    },
    {
      name: "Osaka Sushi Bar",
      slug: "osaka-sushi-bar",
      icon: GlobeIcon,
      description: "Многоязычный ресторанный сайт. Vite + TypeScript + Tailwind, адаптивный дизайн.",
      tech: ["React", "Vite", "Tailwind", "i18n"],
      highlights: ["Multi-language", "Responsive", "Fast загрузка"],
      gradient: "from-primary to-accent-secondary"
    },
    {
      name: "Telegram Sales Bot",
      slug: "telegram-sales-bot",
      icon: MessageSquare,
      description: "Система автоматизации продаж через Telegram. Полная интеграция с CRM и аналитикой.",
      tech: ["Telegram API", "Sales Automation", "CRM Integration"],
      highlights: ["Конверсия +300%", "AI-ассистент", "Analytics"],
      gradient: "from-accent-secondary to-primary"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-6">
            <Code className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Более 20 уже за 2025
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Showcase наших систем
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Каждый проект — это <span className="text-accent font-semibold">полноценная система</span> с продуманной архитектурой
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/projects/${project.slug}`}
              className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-glow animate-slide-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-accent">
                      <project.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {project.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-border">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground mb-6">
            Хотите увидеть полную техническую документацию?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => setModalOpen(true)}
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Database className="mr-2 w-5 h-5" />
              Запросить архитектуру
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Link to="/architecture">
                <ExternalLink className="mr-2 w-5 h-5" />
                Загрузить архитектуру
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <ArchitectureModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default Projects;
