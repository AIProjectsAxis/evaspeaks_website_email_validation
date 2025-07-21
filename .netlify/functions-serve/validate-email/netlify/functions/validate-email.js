// netlify/functions/validate-email.ts
var dns = require("dns").promises;
exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Content-Type": "application/json"
  };
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: ""
    };
  }
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ valid: false, error: "Method not allowed" })
    };
  }
  try {
    const email = event.queryStringParameters?.email;
    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ valid: false, error: "Email parameter is required" })
      };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ valid: false, error: "Bad email format" })
      };
    }
    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ valid: false, error: "Bad email format" })
      };
    }
    try {
      const mxRecords = await dns.resolveMx(domain);
      if (mxRecords && mxRecords.length > 0) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ valid: true })
        };
      } else {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ valid: false, error: "No MX records for domain" })
        };
      }
    } catch (dnsError) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ valid: false, error: "Domain not reachable" })
      };
    }
  } catch (error) {
    console.error("Email validation error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ valid: false, error: "Internal server error" })
    };
  }
};
//# sourceMappingURL=validate-email.js.map
