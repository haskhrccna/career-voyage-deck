import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [lastVisitor, setLastVisitor] = useState<{
    city?: string | null;
    country?: string | null;
  }>({});

  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        // Get total count
        const { count } = await supabase
          .from('visitors')
          .select('*', { count: 'exact', head: true });

        // Get last visitor's location
        const { data: lastVisitorData } = await supabase
          .from('visitors')
          .select('city, country')
          .order('visited_at', { ascending: false })
          .limit(1)
          .single();

        if (count !== null) setVisitorCount(count);
        if (lastVisitorData) setLastVisitor(lastVisitorData);
      } catch (error) {
        console.error('Error fetching visitor data:', error);
      }
    };

    fetchVisitorData();
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
            {lastVisitor.city && lastVisitor.country && (
              <div className="text-xs mt-1">
                Last visitor from: {lastVisitor.city}, {lastVisitor.country}
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