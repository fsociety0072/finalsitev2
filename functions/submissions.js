// Netlify serverless function for getting form submissions
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  console.log('Submissions function called');
  
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
  };
  
  // Log environment variables (except sensitive ones)
  console.log('SITE_ID exists:', !!process.env.SITE_ID);
  console.log('NETLIFY_TOKEN exists:', !!process.env.NETLIFY_TOKEN);

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  const authHeader = event.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ success: false, message: 'Unauthorized' }),
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' }),
    };
  }

  try {
    // Get Netlify API token from environment variables
    const NETLIFY_TOKEN = process.env.NETLIFY_TOKEN;
    const SITE_ID = process.env.SITE_ID;

    if (!NETLIFY_TOKEN || !SITE_ID) {
      console.error('Missing required environment variables');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Server configuration error',
          error: 'Missing required environment variables (NETLIFY_TOKEN or SITE_ID)'
        })
      };
    }

    // Fetch submissions from Netlify API
    const response = await fetch(
      `https://api.netlify.com/api/v1/sites/${SITE_ID}/submissions`,
      {
        headers: {
          'Authorization': `Bearer ${NETLIFY_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Netlify API error: ${response.status} ${response.statusText}`);
    }

    // Transform Netlify submissions to match our expected format
    const netlifySubmissions = await response.json();
    const submissions = netlifySubmissions.map(sub => ({
      id: sub.id,
      name: sub.data.name || 'No name',
      email: sub.data.email || 'No email',
      phone: sub.data.phone || 'No phone',
      message: sub.data.message || 'No message',
      status: 'New', // Default status
      date: new Date(sub.created_at).toLocaleDateString()
    }));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, submissions }),
    };

  } catch (error) {
    console.error('Error fetching submissions:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Could not retrieve submissions.',
        error: error.message
      }),
    };
  }
};
