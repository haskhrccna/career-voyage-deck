import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      const { data, error } = await supabase.functions.invoke('send-twitter-dm', {
        body: {
          name: formData.name,
          email: formData.email,
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

      // Reset form
      setFormData({
        name: "",
        email: "",
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-700 border-slate-600 text-white"
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-700 border-slate-600 text-white"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <div className="space-y-2 md:w-1/2">
                <label htmlFor="subject" className="text-sm font-medium text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-slate-700 border-slate-600 text-white"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex items-center space-x-2 md:pt-8">
                <Checkbox
                  id="requestCV"
                  checked={formData.requestCV}
                  onCheckedChange={handleCheckboxChange}
                  className="data-[state=checked]:bg-purple-600"
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="requestCV"
                  className="text-sm font-medium leading-none text-white cursor-pointer"
                >
                  Request CV
                </label>
              </div>
            </div>
            {formData.requestCV && (
              <div className="text-sm text-purple-400 italic">
                You have asked for a copy of CV to be sent back
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="min-h-[150px] bg-slate-700 border-slate-600 text-white"
                disabled={isSubmitting}
              />
            </div>
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