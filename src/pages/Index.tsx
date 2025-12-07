import Hero from "@/components/forge/Hero";
import About from "@/components/forge/About";
import Capabilities from "@/components/forge/Capabilities";
import Team from "@/components/forge/Team";
import Projects from "@/components/forge/Projects";
import Process from "@/components/forge/Process";
import TechStack from "@/components/forge/TechStack";
import CTA from "@/components/forge/CTA";
import Footer from "@/components/forge/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Team />
      <Capabilities />
      <Projects />
      <Process />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
