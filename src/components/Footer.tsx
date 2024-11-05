import { useState, useEffect } from 'react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get the current count from localStorage
    const currentCount = parseInt(localStorage.getItem('visitorCount') || '0');
    // Increment the count
    const newCount = currentCount + 1;
    // Save back to localStorage
    localStorage.setItem('visitorCount', newCount.toString());
    // Update state
    setVisitorCount(newCount);
  }, []);

  return (
    <footer className="w-full py-6 mt-auto bg-slate-900/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="text-gray-400 text-sm">
            <span>Visitors: </span>
            <span className="font-bold text-white">{visitorCount}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;