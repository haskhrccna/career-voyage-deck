import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navigation />
      <div className="flex-1">
        <Hero />
        <Timeline />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default Index;