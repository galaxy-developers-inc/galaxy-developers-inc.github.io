import { Users, Linkedin, Github } from "lucide-react";
import pavelPhoto from "@/assets/pavel.jpg";
import albertPhoto from "@/assets/albert.jpg";

const Team = () => {
  const team = [
    {
      name: "Павел",
      role: "Co-Founder & Tech Architect",
      photo: pavelPhoto,
      description: "Системный архитектор с опытом построения масштабируемых решений",
      speciality: "Backend & Infrastructure"
    },
    {
      name: "Альберт",
      role: "Co-Founder & AI/ML Engineer",
      photo: albertPhoto,
      description: "Эксперт по языковым моделям и мульти-агентным системам",
      speciality: "AI & Automation"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Команда мечты
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Альберт и Паша
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Два инженера, которые превратили <span className="text-accent font-semibold">AI в производственный конвейер</span>
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-card rounded-3xl border border-border overflow-hidden animate-slide-up hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Top */}
              <div className="h-2 bg-gradient-accent" />

              <div className="p-8">
                {/* Photo */}
                <div className="mb-6 relative">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-primary/20 shadow-accent group-hover:border-accent/50 transition-all duration-300">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-card border border-border rounded-full shadow-glow">
                    <span className="text-xs font-medium text-accent">{member.speciality}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a 
                      href="#" 
                      className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:shadow-glow transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-accent" />
                    </a>
                    <a 
                      href="#" 
                      className="p-2 rounded-lg bg-card border border-border hover:border-accent hover:shadow-glow transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 text-muted-foreground group-hover:text-accent" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Лет опыта", value: "10+" },
            { label: "Завершённых проектов", value: "50+" },
            { label: "AI агентов", value: "200+" },
            { label: "Часов вместо месяца", value: "10" }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-6 bg-card border border-border rounded-2xl hover:border-accent/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
