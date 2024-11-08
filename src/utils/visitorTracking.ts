import { supabase } from "@/integrations/supabase/client";

export const trackVisitor = async () => {
  try {
    const { data: ipResponse } = await supabase
      .from('visitors')
      .insert([
        {
          page_url: window.location.pathname,
        }
      ])
      .select()
      .single();

    return ipResponse;
  } catch (error) {
    console.error("Error tracking visitor:", error);
    // Silently fail but don't break the app
    return null;
  }
};