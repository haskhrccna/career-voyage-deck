import { TwitterApi } from 'npm:twitter-api-v2@1.18.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Validate environment variables
    const requiredEnvVars = [
      'TWITTER_API_KEY',
      'TWITTER_API_SECRET',
      'TWITTER_ACCESS_TOKEN',
      'TWITTER_ACCESS_TOKEN_SECRET',
      'TWITTER_USER_ID'
    ];

    for (const envVar of requiredEnvVars) {
      if (!Deno.env.get(envVar)) {
        console.error(`Missing required environment variable: ${envVar}`);
        throw new Error(`Configuration error: Missing ${envVar}`);
      }
    }

    if (req.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405,
        headers: corsHeaders
      });
    }

    const { name, email, subject, message, requestCV } = await req.json();
    console.log('Received form data:', { name, email, subject, requestCV });
    
    const dmText = `New Contact Form Message:
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
CV Requested: ${requestCV ? 'Yes' : 'No'}`;

    console.log('Creating Twitter client...');
    const client = new TwitterApi({
      appKey: Deno.env.get('TWITTER_API_KEY')!,
      appSecret: Deno.env.get('TWITTER_API_SECRET')!,
      accessToken: Deno.env.get('TWITTER_ACCESS_TOKEN')!,
      accessSecret: Deno.env.get('TWITTER_ACCESS_TOKEN_SECRET')!,
    });

    console.log('Attempting to send DM to user ID:', Deno.env.get('TWITTER_USER_ID'));
    
    try {
      // First verify credentials to ensure API access is working
      const currentUser = await client.v2.me();
      console.log('Successfully authenticated as Twitter user:', currentUser);

      const result = await client.v2.sendDmToParticipant(
        Deno.env.get('TWITTER_USER_ID')!,
        { text: dmText }
      );
      
      console.log('DM sent successfully:', result);

      return new Response(
        JSON.stringify({ message: 'Message sent successfully' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      );
    } catch (twitterError: any) {
      console.error('Twitter API Error:', twitterError);
      throw new Error(`Twitter API Error: ${twitterError.message || 'Unknown error'}`);
    }
  } catch (error: any) {
    console.error('Error in send-twitter-dm function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Error sending message',
        details: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});