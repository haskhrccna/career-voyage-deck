import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CVRequestForm from "@/components/CVRequestForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navigation />
      <div className="flex-1 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Contact
          </h2>
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <CVRequestForm />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;