import { supabase } from "@/integrations/supabase/client";

export const trackVisitor = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    const { data: visitorData, error } = await supabase
      .from('visitors')
      .insert({
        country: data.country_name,
        city: data.city,
        ip_address: data.ip,
        page_url: window.location.pathname
      })
      .select('visitor_number')
      .single();

    if (error) throw error;
    
    return visitorData?.visitor_number;
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return null;
  }
};

export const getVisitorNumberByIp = async (ipAddress: string) => {
  try {
    const { data, error } = await supabase
      .from('visitors')
      .select('visitor_number')
      .eq('ip_address', ipAddress)
      .order('visited_at', { ascending: false })
      .limit(1)
      .single();

    if (error) throw error;
    return data?.visitor_number;
  } catch (error) {
    console.error('Error fetching visitor number:', error);
    return null;
  }
};