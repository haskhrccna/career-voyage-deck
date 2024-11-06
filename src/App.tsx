import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-slate-900">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Toaster />
            <Sonner />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;