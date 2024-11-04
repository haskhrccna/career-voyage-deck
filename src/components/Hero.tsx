import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import CVRequestForm from './CVRequestForm';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-8 flex justify-center">
          <Avatar className="h-40 w-40 border-4 border-blue-100">
            <AvatarImage
              src="/profile.jpg"
              alt="Profile photo"
              className="object-cover"
            />
          </Avatar>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
          Principal Resident Engineer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Specialized in high-voltage power systems with extensive experience in managing and supervising infrastructure projects across the Middle East
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
          >
            View Experience
          </a>
          <CVRequestForm />
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;