// netlify/functions/start-call.js
const { VapiClient } = require('@vapi-ai/server-sdk');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { customerName, customerEmail } = body;
  if (!customerName || !customerEmail) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing name or email' }) };
  }

  try {
    const token       = process.env.VOICE_PUBLIC_KEY;
    const assistantId = process.env.VOICE_ASSISTANT_ID;
    if (!token || !assistantId) {
      throw new Error('Missing VAPI_TOKEN or VOICE_ASSISTANT_ID in env');
    }

    const client = new VapiClient({ token });
    await client.calls.create({
      assistantId,
      metadata: { customerName, customerEmail },
    });

    return { statusCode: 200, headers, body: JSON.stringify({ started: true }) };
  } catch (err) {
    console.error('start-call error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || 'Call failed' }),
    };
  }
};
