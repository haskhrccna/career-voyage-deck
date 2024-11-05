import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <div className="h-screen bg-slate-900 flex flex-col overflow-hidden">
      <Navigation />
      <ScrollArea className="flex-1">
        <Hero />
        <Timeline />
        <Skills />
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Index;