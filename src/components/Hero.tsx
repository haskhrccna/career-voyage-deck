import { ArrowDown, Twitter, Linkedin } from 'lucide-react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from '@/contexts/LanguageContext';
import CVRequestForm from './CVRequestForm';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-xy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(0,0,0,0))]" />
      <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative">
        <div className="mb-8 flex justify-center">
          <Avatar className="h-56 w-56 border-4 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300">
            <AvatarImage
              src="/profile.jpg"
              alt="Profile photo"
              className="object-cover object-center"
            />
          </Avatar>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-up opacity-90" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 transition-colors md:text-lg backdrop-blur-sm"
          >
            {t('hero.viewExperience')}
          </a>
          <CVRequestForm />
        </div>
        <div className="mt-8 flex justify-center space-x-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;