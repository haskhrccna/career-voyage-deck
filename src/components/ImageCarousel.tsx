import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/cable-installation.jpg", // First image - cable reel installation
    alt: "Cable installation at construction site",
  },
  {
    src: "/equipment-installation.jpg", // Second image - equipment installation
    alt: "Industrial equipment installation",
  },
  {
    src: "/concrete-blocks.jpg", // Third image - concrete blocks
    alt: "Concrete blocks installation",
  },
  {
    src: "/control-panel.jpg", // Fourth image - control panel
    alt: "Control panel installation",
  },
];

const ImageCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 relative">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={cn(
                    "w-full h-full object-cover transition-opacity duration-500",
                    current === index ? "opacity-100" : "opacity-0"
                  )}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              current === index ? "bg-primary" : "bg-gray-300"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;