import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.0'
import { TwitterApi } from 'npm:twitter-api-v2@1.18.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const client = new TwitterApi({
      appKey: Deno.env.get('TWITTER_API_KEY')!,
      appSecret: Deno.env.get('TWITTER_API_SECRET')!,
      accessToken: Deno.env.get('TWITTER_ACCESS_TOKEN')!,
      accessSecret: Deno.env.get('TWITTER_ACCESS_TOKEN_SECRET')!,
    });

    const { name, email, subject, message, requestCV } = await req.json();
    
    const dmText = `New Contact Form Message:
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
CV Requested: ${requestCV ? 'Yes' : 'No'}`;

    await client.v2.sendDmToParticipant(
      Deno.env.get('TWITTER_USER_ID')!,
      { text: dmText }
    );

    return new Response(
      JSON.stringify({ message: 'Message sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending Twitter DM:', error);
    return new Response(
      JSON.stringify({ error: 'Error sending message' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});