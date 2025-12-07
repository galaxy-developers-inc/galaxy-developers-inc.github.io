import { Code, Github, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const links = {
    projects: [
      { name: "World Saver Portal", url: "#" },
      { name: "VietnamCupid Bot", url: "#" },
      { name: "Eco-Rider", url: "https://ecorider34.ru" },
      { name: "Razvitie Bot", url: "#" }
    ],
    examples: [
      { name: "Insight Navigator", url: "#" },
      { name: "Osaka Sushi", url: "#" },
      { name: "BG AI Viz", url: "#" },
      { name: "Afeliya Lux", url: "#" }
    ]
  };

  return (
    <footer className="relative py-16 px-4 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-accent">
                <Code className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Galaxy Developers
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Завод производства кодовых решений. Лучшие в языковых моделях в мире. 
              Делаем за 10 часов то, что другие делают месяц.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:shadow-glow transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:shadow-glow transition-all duration-300"
                aria-label="Telegram"
              >
                <MessageSquare className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:shadow-glow transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Проекты</h3>
            <ul className="space-y-2">
              {links.projects.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Примеры работ</h3>
            <ul className="space-y-2">
              {links.examples.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Galaxy Developers. Альберт и Паша. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
