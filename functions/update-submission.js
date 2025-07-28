// Netlify serverless function for updating form submissions

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

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

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' }),
    };
  }

  try {
    const { id, updates } = JSON.parse(event.body);

    if (!id || !updates) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, message: 'Missing required fields: id and updates' }),
      };
    }

    // In a real application, you would update the submission in your database here
    // For now, we'll just log the update and return success
    console.log(`Updating submission ${id} with:`, updates);
    
    // Simulate a successful update
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Submission updated successfully' }),
    };

  } catch (error) {
    console.error('Error updating submission:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, message: 'Internal Server Error' }),
    };
  }
};
