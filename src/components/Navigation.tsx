import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Portfolio</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#experience" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Experience</a>
              <a href="#skills" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#experience" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Experience</a>
            <a href="#skills" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;