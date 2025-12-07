import { motion } from "framer-motion";
import { Rocket, Zap, Bot, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-[100px] animate-pulse-glow animation-delay-500" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-accent/15 blur-[80px] animate-pulse-glow animation-delay-300" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Orbiting elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        <motion.div 
          className="absolute w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center glow-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <Zap className="w-5 h-5 text-foreground" />
        </motion.div>
        <motion.div 
          className="absolute w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center glow-secondary"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "150px 150px" }}
        >
          <Bot className="w-5 h-5 text-foreground" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="badge-brand mb-6 inline-flex">
            <Rocket className="w-4 h-4 mr-2" />
            Лучшие в языковых моделях в мире
          </div>
        </motion.div>

        <motion.h1
          className="section-title mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <span className="text-gradient">Galaxy Developers</span>
          <br />
          <span className="text-foreground/90">Завод кодовых решений</span>
        </motion.h1>

        <motion.p
          className="section-subtitle mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Сотни агентов, каждый шаг мониторится. Делаем за <span className="text-gradient font-semibold">10 часов</span> то,
          <br />
          что на рынке делают месяц. Best practices на конвейере.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <a href="#projects" className="btn-brand">
            <span>Посмотреть кейсы</span>
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-xl font-semibold border border-primary/50 text-foreground hover:bg-primary/10 transition-all duration-300"
          >
            Начать проект
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {[
            { value: "10x", label: "Быстрее рынка" },
            { value: "200+", label: "AI агентов" },
            { value: "50+", label: "Проектов" },
            { value: "24/7", label: "Мониторинг" },
          ].map((stat, index) => (
            <div key={index} className="card-brand text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
