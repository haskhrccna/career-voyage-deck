import { useState, useEffect } from 'react';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

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
        <div className="flex justify-between items-center">
          <div className="text-gray-400 text-sm flex items-center space-x-4">
            <span>Last Updated on November 2024</span>
            <span className="text-gray-400">•</span>
            <span>Visitors: <span className="font-bold text-white">{visitorCount}</span></span>
          </div>
          <div className="text-gray-400 text-sm">
            {today}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;