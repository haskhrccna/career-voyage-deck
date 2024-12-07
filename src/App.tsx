import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import IndexPage from "./pages/index"; // Updated import
import ContactPage from "./pages/contact"; // Updated import
import { useEffect } from "react";
import { trackVisitor } from "./utils/visitorTracking";
import React from 'react';

// Create a client with configured options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const handleVisitorTracking = async () => {
      try {
        await trackVisitor();
      } catch (error) {
        console.error('Failed to track visitor:', error);
        // Silently fail for visitor tracking to not impact user experience
      }
    };
    handleVisitorTracking();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Toaster />
      <Sonner />
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default App;
