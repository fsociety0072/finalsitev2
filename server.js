const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Mock login endpoint
app.post('/.netlify/functions/login', (req, res) => {
  const { username, password } = req.body;
  
  console.log('Login attempt:', { username, password: password ? '[PROVIDED]' : '[MISSING]' });
  
  // Check if environment variables are set (using mock values for local development)
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
  const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key_here';
  
  console.log('Environment config:', { ADMIN_USERNAME, ADMIN_PASSWORD: ADMIN_PASSWORD ? '[SET]' : '[NOT SET]', JWT_SECRET: JWT_SECRET ? '[SET]' : '[NOT SET]' });
  
  console.log('Comparison:', { usernameMatch: username === ADMIN_USERNAME, passwordMatch: password === ADMIN_PASSWORD });
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Generate a proper JWT token
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '30m' });
    console.log('Login successful for user:', username);
    return res.json({ success: true, token });
  } else {
    console.log('Login failed for user:', username);
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Mock submissions endpoint
app.get('/.netlify/functions/submissions', (req, res) => {
  console.log('Submissions endpoint called');
  
  // Check for authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  
  // Mock submissions data
  const mockSubmissions = [
    {
      id: '1',
      created_at: new Date().toISOString(),
      data: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        message: 'This is a test message',
        contacted: false
      }
    },
    {
      id: '2',
      created_at: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      data: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '098-765-4321',
        message: 'Another test message',
        contacted: true
      }
    }
  ];
  
  return res.json(mockSubmissions);
});

// Mock update-submission endpoint
app.post('/.netlify/functions/update-submission', (req, res) => {
  console.log('Update submission endpoint called with:', req.body);
  
  // Check for authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  
  const { id, updates } = req.body;
  
  if (!id || !updates) {
    return res.status(400).json({ success: false, message: 'Missing required fields: id and updates' });
  }
  
  // Simulate a successful update
  console.log(`Updating submission ${id} with:`, updates);
  return res.json({ success: true, message: 'Submission updated successfully' });
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
