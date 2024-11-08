import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCarousel } from "@/components/ui/carousel/carousel-context";

const IMAGES = [
  "/images/projects/cable-installation.jpg",
  "/images/projects/equipment-setup.jpg",
  "/images/projects/concrete-blocks.jpg",
  "/images/projects/control-panel.jpg",
  "/images/projects/11swg.jpg",
  "/images/projects/11tr.jpg",
  "/images/projects/33cable.jpg",
  "/images/projects/33swg.jpg",
  "/images/projects/33tr.jpg"
];

const ImageCounter = () => {
  const { currentSlide, totalSlides } = useCarousel();
  return (
    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
      {currentSlide} / {totalSlides}
    </div>
  );
};

const ProjectImages = () => {
  return (
    <section className="min-h-[30vh] bg-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Projects Photo Library</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {IMAGES.map((src, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="relative h-48 overflow-hidden rounded-lg group">
                  <img
                    src={src}
                    alt={`Construction project phase ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <ImageCounter />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectImages;