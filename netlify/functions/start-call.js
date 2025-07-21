// netlify/functions/start-call.js
const VoiceServiceModule = require('@vapi-ai/web').default;

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Invalid JSON' }),
    };
  }

  const { customerName, customerEmail } = body;
  if (!customerName || !customerEmail) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Missing name or email' }),
    };
  }

  try {
    // Pull your secret keys from environment
    const publicKey    = process.env.VOICE_PUBLIC_KEY;
    const assistantId  = process.env.VOICE_ASSISTANT_ID;
    if (!publicKey || !assistantId) {
      throw new Error('Missing VOICE_PUBLIC_KEY or VOICE_ASSISTANT_ID in env');
    }

    // Initialize the VoiceService
    const voice = new VoiceServiceModule(publicKey);

    // Start the call. Depending on the library you may need to adapt this.
    await voice.start(assistantId, {
      metadata: {
        customerName,
        customerEmail,
      }
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ started: true }),
    };
  } catch (err) {
    console.error('start-call error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || 'Call failed' }),
    };
  }
};