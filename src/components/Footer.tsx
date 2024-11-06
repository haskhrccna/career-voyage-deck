import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { trackVisitor } from '@/utils/visitorTracking';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const initializeVisitor = async () => {
      // Track the visit
      await trackVisitor();

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
            © {new Date().getFullYear()} Hassan Adam
          </div>
          <div className="flex flex-col items-center text-gray-400 text-sm">
            <div>
              Site Visitors: <span className="font-bold text-white">{visitorCount}</span>
            </div>
            <div className="text-xs mt-1">
              Last Updated Nov. 2024
            </div>
          </div>
          <div className="text-gray-400 text-sm text-right">
            All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;