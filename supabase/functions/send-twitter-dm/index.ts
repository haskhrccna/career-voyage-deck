import { TwitterApi } from 'npm:twitter-api-v2@1.18.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  console.log('🚀 Function started: send-twitter-dm');
  console.log('Request method:', req.method);

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
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

    console.log('Validating environment variables...');
    for (const envVar of requiredEnvVars) {
      if (!Deno.env.get(envVar)) {
        const error = `Missing required environment variable: ${envVar}`;
        console.error('❌', error);
        throw new Error(error);
      }
      console.log('✅', envVar, 'is set');
    }

    if (req.method !== 'POST') {
      console.log('❌ Invalid method:', req.method);
      return new Response('Method not allowed', { 
        status: 405,
        headers: corsHeaders
      });
    }

    const { name, email, subject, message, requestCV } = await req.json();
    console.log('📝 Received form data:', { name, email, subject, requestCV });
    
    const dmText = `New Contact Form Message:
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
CV Requested: ${requestCV ? 'Yes' : 'No'}`;

    console.log('🔑 Creating Twitter client...');
    const client = new TwitterApi({
      appKey: Deno.env.get('TWITTER_API_KEY')!,
      appSecret: Deno.env.get('TWITTER_API_SECRET')!,
      accessToken: Deno.env.get('TWITTER_ACCESS_TOKEN')!,
      accessSecret: Deno.env.get('TWITTER_ACCESS_TOKEN_SECRET')!,
    });

    // Create a read-write client
    const rwClient = client.readWrite;

    console.log('🔍 Verifying Twitter credentials...');
    try {
      const currentUser = await rwClient.v2.me();
      console.log('✅ Successfully authenticated as Twitter user:', currentUser);

      console.log('📨 Attempting to send DM to user ID:', Deno.env.get('TWITTER_USER_ID'));
      const result = await rwClient.v2.sendDmToParticipant(
        Deno.env.get('TWITTER_USER_ID')!,
        { text: dmText }
      );
      
      console.log('✅ DM sent successfully:', result);

      return new Response(
        JSON.stringify({ message: 'Message sent successfully' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      );
    } catch (twitterError: any) {
      console.error('❌ Twitter API Error:', twitterError);
      console.error('Error details:', {
        message: twitterError.message,
        code: twitterError.code,
        data: twitterError.data,
        stack: twitterError.stack
      });
      
      // Return a more detailed error response
      return new Response(
        JSON.stringify({ 
          error: 'Twitter API Error', 
          details: twitterError.message,
          code: twitterError.code,
          data: twitterError.data
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 403
        }
      );
    }
  } catch (error: any) {
    console.error('❌ Error in send-twitter-dm function:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack
    });
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