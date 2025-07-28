// Netlify serverless function for login
const jwt = require('jsonwebtoken');

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight OPTIONS request for CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204, // No Content
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' }),
    };
  }

  try {
    const { username, password } = JSON.parse(event.body);

    // Check if environment variables are set
    if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ success: false, message: 'Server configuration error' }),
      };
    }

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      // Generate a proper JWT token
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '30m' });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, token }),
      };
    } else {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ success: false, message: 'Invalid credentials' }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, message: 'Internal Server Error: Could not parse request body.' }),
    };
  }
};
