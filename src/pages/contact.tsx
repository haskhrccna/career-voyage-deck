import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from '../components/ui/use-toast';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Add your form submission logic here
      toast({
        title: t('contact.successMessage'),
        description: t('contact.successDetail'),
      });
    } catch (error) {
      toast({
        title: t('contact.errorMessage'),
        description: t('contact.errorDetail'),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-6">
        {t('contact.title')}
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-white">
              {t('contact.nameLabel')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-white">
              {t('contact.emailLabel')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-white">
              {t('contact.messageLabel')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full p-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            {t('contact.submitButton')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
