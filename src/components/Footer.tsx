import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { trackVisitor, getVisitorNumberByIp } from '@/utils/visitorTracking';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [currentVisitorNumber, setCurrentVisitorNumber] = useState<number | null>(null);

  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  useEffect(() => {
    const initializeVisitor = async () => {
      // Track the visit and get visitor number
      const visitorNumber = await trackVisitor();
      if (visitorNumber) {
        setCurrentVisitorNumber(visitorNumber);
      }

      // Get total visitor count
      try {
        const { count } = await supabase
          .from('visitors')
          .select('*', { count: 'exact', head: true });

        if (count !== null) {
          setVisitorCount(count);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    initializeVisitor();
  }, []);

  return (
    <footer className="w-full py-6 mt-auto bg-slate-900/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center">
          <div className="text-gray-400 text-sm">
            Last Updated on November 2024
          </div>
          <div className="text-gray-400 text-sm text-center">
            Site Visitors: <span className="font-bold text-white">{visitorCount}</span>
            {currentVisitorNumber && (
              <div className="text-xs mt-1">
                You are visitor #{currentVisitorNumber}
              </div>
            )}
          </div>
          <div className="text-gray-400 text-sm text-right">
            {today}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;