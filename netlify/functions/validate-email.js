const dns = require('dns').promises;

exports.handler = async (event, context) => {
  // Set CORS headers for browser requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ valid: false, error: 'Method not allowed' }),
    };
  }

  try {
    // Extract email from query parameters
    const email = event.queryStringParameters?.email;
    
    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ valid: false, error: 'Email parameter is required' }),
      };
    }

    // Validate email format using same regex as client-side
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ valid: false, error: 'Bad email format' }),
      };
    }

    // Extract domain from email
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ valid: false, error: 'Bad email format' }),
      };
    }

    try {
      // Check for MX records using Node.js built-in DNS module
      const mxRecords = await dns.resolveMx(domain);
      
      // If we get a non-empty array, domain has mail servers configured
      if (mxRecords && mxRecords.length > 0) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ valid: true }),
        };
      } else {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ valid: false, error: 'No MX records for domain' }),
        };
      }
    } catch (dnsError) {
      // DNS errors (NXDOMAIN, timeout, etc.) mean domain is not reachable
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ valid: false, error: 'Domain not reachable' }),
      };
    }

  } catch (error) {
    console.error('Email validation error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ valid: false, error: 'Internal server error' }),
    };
  }
};