import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArchitectureViewer from "./pages/ArchitectureViewer";
import ResearchViewer from "./pages/ResearchViewer";
import WorldSaverPortal from "./pages/projects/WorldSaverPortal";
import FindGoodGirl from "./pages/projects/FindGoodGirl";
import EcoRider from "./pages/projects/EcoRider";
import RazvitieBot from "./pages/projects/RazvitieBot";
import OsakaSushiBar from "./pages/projects/OsakaSushiBar";
import TelegramSalesBot from "./pages/projects/TelegramSalesBot";
import ArchitectureAnalysis from "./pages/ArchitectureAnalysis";

const queryClient = new QueryClient();

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/architecture" element={<ArchitectureViewer />} />
          <Route path="/research" element={<ResearchViewer />} />
          <Route path="/projects/world-saver-portal" element={<WorldSaverPortal />} />
          <Route path="/projects/find-good-girl" element={<FindGoodGirl />} />
          <Route path="/projects/eco-rider" element={<EcoRider />} />
          <Route path="/projects/razvitie-bot" element={<RazvitieBot />} />
          <Route path="/projects/osaka-sushi-bar" element={<OsakaSushiBar />} />
          <Route path="/projects/telegram-sales-bot" element={<TelegramSalesBot />} />
          <Route path="/architecture-analysis" element={<ArchitectureAnalysis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
