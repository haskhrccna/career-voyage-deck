import { supabase } from "@/integrations/supabase/client";

export const trackVisitor = async () => {
  try {
    // First get location data
    const locationResponse = await fetch('https://ipapi.co/json/');
    if (!locationResponse.ok) {
      throw new Error('Failed to fetch location data');
    }
    const locationData = await locationResponse.json();

    // Validate location data
    if (!locationData || typeof locationData !== 'object') {
      throw new Error('Invalid location data received');
    }

    // Then insert visitor data with location info
    const { data: visitorData, error: supabaseError } = await supabase
      .from('visitors')
      .insert([
        {
          page_url: window.location.pathname,
          country: locationData.country_name || null,
          city: locationData.city || null,
          ip_address: locationData.ip || null,
          visited_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (supabaseError) {
      throw supabaseError;
    }

    return visitorData;
  } catch (error) {
    // Log the actual error details
    console.error("Error tracking visitor:", error);
    throw error; // Re-throw to be handled by the calling function
  }
};