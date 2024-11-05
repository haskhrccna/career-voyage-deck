import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[40vh] flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-xy overflow-hidden p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(0,0,0,0))]" />
      <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-20" />
      <div className="max-w-7xl w-full mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Avatar className="h-32 w-32 flex-shrink-0 border-4 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300">
            <AvatarImage
              src="/profile.jpg"
              alt="Profile photo"
              className="object-cover object-center"
            />
          </Avatar>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-fade-up">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-gray-300 animate-fade-up opacity-90" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;