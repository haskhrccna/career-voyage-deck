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
  "photo-1581091226825-a6a2a5aee158",
  "photo-1488590528505-98d2b5aba04b",
  "photo-1518770660439-4636190af475",
  "photo-1461749280684-dccba630e2f6",
  "photo-1486312338219-ce68d2c6f44d"
].map(id => `https://images.unsplash.com/${id}`);

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
                src={import.meta.env.BASE_URL + "profile.jpg"}
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
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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