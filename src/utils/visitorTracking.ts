import { supabase } from "@/integrations/supabase/client";

export const trackVisitor = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    await supabase.from('visitors').insert({
      country: data.country_name,
      city: data.city,
      ip_address: data.ip,
      page_url: window.location.pathname
    });
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};