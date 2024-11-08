import { supabase } from "@/integrations/supabase/client";

export const trackVisitor = async () => {
  try {
    // First get location data
    const locationResponse = await fetch('https://ipapi.co/json/');
    const locationData = await locationResponse.json();

    // Then insert visitor data with location info
    const { data: visitorData, error } = await supabase
      .from('visitors')
      .insert([
        {
          page_url: window.location.pathname,
          country: locationData.country_name,
          city: locationData.city,
          ip_address: locationData.ip,
          visited_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (error) throw error;
    return visitorData;
  } catch (error) {
    console.error("Error tracking visitor:", error);
    // Return null instead of throwing to prevent app crashes
    return null;
  }
};