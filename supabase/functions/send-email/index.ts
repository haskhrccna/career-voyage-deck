import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  requestCV: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  console.log('📧 Email function started');
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const emailRequest: EmailRequest = await req.json();
    console.log('📧 Received request:', emailRequest);

    const htmlContent = `
      <h2>New Contact Form Message</h2>
      <p><strong>From:</strong> ${emailRequest.name} (${emailRequest.email})</p>
      <p><strong>Subject:</strong> ${emailRequest.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${emailRequest.message}</p>
      <p><strong>CV Requested:</strong> ${emailRequest.requestCV ? 'Yes' : 'No'}</p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["haskhr@hotmail.com"],
        subject: `Portfolio Contact: ${emailRequest.subject}`,
        html: htmlContent,
        reply_to: emailRequest.email
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log('📧 Email sent successfully:', data);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } else {
      const error = await res.text();
      console.error('📧 Error from Resend:', error);
      return new Response(JSON.stringify({ error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  } catch (error: any) {
    console.error("📧 Error in send-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
};

serve(handler);