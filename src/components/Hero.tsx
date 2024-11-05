import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const IMAGES = [
  "/cable-installation.jpg",    // Image of cable reel and workers
  "/equipment-setup.jpg",       // Image of workers with equipment
  "/concrete-blocks.jpg",       // Image of concrete blocks in trench
  "/control-panel.jpg"         // Image of control panel installation
];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="h-[50vh] flex items-start justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient-xy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),rgba(0,0,0,0))]" />
      <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-20" />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
        <div className="flex flex-col space-y-4">
          <div className="flex items-start gap-8">
            <Avatar className="h-32 w-32 flex-shrink-0 border-4 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-300">
              <AvatarImage
                src="/profile.jpg"
                alt="Profile photo"
                className="object-cover object-center"
              />
            </Avatar>
            <div className="flex-grow text-left pr-48">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-fade-up">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-gray-300 animate-fade-up opacity-90" style={{ animationDelay: '0.2s' }}>
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
          
          <Carousel className="w-full" opts={{ loop: true, duration: 20 }}>
            <CarouselContent>
              {IMAGES.map((src, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="relative h-48 w-full overflow-hidden rounded-lg group">
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                      src={src}
                      alt={`Construction project phase ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-110 group-hover:object-contain group-hover:z-20 group-hover:relative"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;