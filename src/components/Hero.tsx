import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[40vh] flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-[gradient-xy_8s_ease_infinite] overflow-hidden p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(0,0,0,0))] animate-pulse" />
      <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-20 animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/5 to-transparent animate-[gradient-xy_6s_ease-in-out_infinite]" />
      <div className="max-w-7xl w-full mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Avatar className="h-32 w-32 flex-shrink-0 border-4 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300 animate-morph">
            <AvatarImage
              src="/profile.jpg"
              alt="Profile photo"
              className="object-cover object-center"
            />
          </Avatar>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white animate-[gradient-xy_3s_linear_infinite] mb-4">
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