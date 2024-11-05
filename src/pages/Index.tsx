import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navigation />
      <Hero />
      <Timeline />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;