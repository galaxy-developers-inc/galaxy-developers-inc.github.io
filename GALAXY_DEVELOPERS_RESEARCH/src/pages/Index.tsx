import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopBar } from "@/components/dashboard/TopBar";
import { MarketOverview } from "@/components/dashboard/MarketOverview";
import { TargetAudience } from "@/components/dashboard/TargetAudience";
import { Competitors } from "@/components/dashboard/Competitors";
import { Pricing } from "@/components/dashboard/Pricing";
import { Technology } from "@/components/dashboard/Technology";

const Index = () => {
  const [activeSection, setActiveSection] = useState("market");

  const renderSection = () => {
    switch (activeSection) {
      case "market":
        return <MarketOverview />;
      case "audience":
        return <TargetAudience />;
      case "competitors":
        return <Competitors />;
      case "pricing":
        return <Pricing />;
      case "technology":
        return <Technology />;
      default:
        return <MarketOverview />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background-muted">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
