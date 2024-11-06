import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import FormField from "./contact/FormField";
import MessageField from "./contact/MessageField";

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    subject: "",
    message: "",
    requestCV: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: {
          name: formData.name,
          email: formData.email,
          companyName: formData.companyName,
          subject: formData.subject,
          message: formData.message,
          requestCV: formData.requestCV,
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({
        name: "",
        email: "",
        companyName: "",
        subject: "",
        message: "",
        requestCV: false,
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, requestCV: checked }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Contact
        </h2>
        <div className="bg-slate-800 rounded-lg p-6 shadow-lg animate-fade-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              label="Name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full"
            />
            
            <FormField
              label="Email"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full"
            />

            <FormField
              label="Company Name"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full"
            />
            
            <FormField
              label="Subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full"
            />

            <MessageField
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />

            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="requestCV"
                checked={formData.requestCV}
                onCheckedChange={handleCheckboxChange}
                className="w-6 h-6 data-[state=checked]:bg-purple-600"
                disabled={isSubmitting}
              />
              <label
                htmlFor="requestCV"
                className="text-lg font-medium leading-none text-white cursor-pointer"
              >
                Send request to receive CV copy
              </label>
            </div>

            {formData.requestCV && (
              <div className="text-base text-purple-400 italic">
                You have asked for a copy of CV to be sent back
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full"
              disabled={!isValidEmail(formData.email) || isSubmitting}
            >
              <Mail className="mr-2 h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;