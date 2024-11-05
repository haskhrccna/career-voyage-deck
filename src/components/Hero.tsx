import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from '@/contexts/LanguageContext';
import CVRequestForm from './CVRequestForm';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="h-[50vh] flex items-start justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-xy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(0,0,0,0))]" />
      <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-20" />
      <div className="absolute top-24 right-8 z-10">
        <CVRequestForm />
      </div>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="h-40 w-40 border-4 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300">
              <AvatarImage
                src={import.meta.env.BASE_URL + "profile.jpg"}
                alt="Profile photo"
                className="object-cover object-center"
              />
            </Avatar>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Placeholder"
              className="w-full h-48 object-cover mt-6 rounded-lg shadow-xl"
            />
          </div>
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-up">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-up opacity-90" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;