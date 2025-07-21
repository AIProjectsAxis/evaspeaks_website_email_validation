// netlify/functions/get-token.js
const { VapiClient } = require('@vapi-ai/server-sdk');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const serverKey   = process.env.VAPI_TOKEN;           // your sk_… secret
    const assistantId = process.env.VOICE_ASSISTANT_ID;   // your avp_… ID
    if (!serverKey || !assistantId) {
      throw new Error('Missing VAPI_TOKEN or VOICE_ASSISTANT_ID');
    }

    const client = new VapiClient({ token: serverKey });
    const { sessionToken } = await client.tokens.create({
      assistantId,
      expiresInSeconds: 300,   // valid 5 minutes
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionToken }),
    };
  } catch (err) {
    console.error('get-token error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
