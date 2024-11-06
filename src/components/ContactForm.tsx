import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Checkbox } from "@/components/ui/checkbox";

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

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create Twitter mention text
    const tweetText = encodeURIComponent(`@haskhr\n${formData.subject}\nFrom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\n${formData.requestCV ? 'CV Requested' : ''}`);
    
    // Open Twitter with pre-filled tweet
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
    
    toast({
      title: "Message Ready to Send",
      description: "A new Twitter window has opened with your message. Please review and send the tweet.",
    });
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
                />
              </div>
              <div className="flex items-center space-x-2 md:pt-8">
                <Checkbox
                  id="requestCV"
                  checked={formData.requestCV}
                  onCheckedChange={handleCheckboxChange}
                  className="data-[state=checked]:bg-purple-600"
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
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={!isValidEmail(formData.email)}
            >
              <Twitter className="mr-2 h-4 w-4" />
              Send as Tweet
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;