// Netlify serverless function for contact form submissions

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
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
    const { name, email, phone, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, message: 'All fields are required' }),
      };
    }

    // For a production environment, you would integrate with a proper database or
    // email service here. For now, we'll just log the submission and return success.
    console.log('New form submission:', { name, email, phone, message });
    
    // In a real application, you might send an email notification here
    // or store the data in a database

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Form submitted successfully!' }),
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, message: 'Internal Server Error' }),
    };
  }
};
