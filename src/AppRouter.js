import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AdminPanel from './AdminPanel';
import AdminRoute from './AdminRoute';
import Login from './Login'; // Import the new Login component

// Thanks component that mimics the static HTML page
const Thanks = () => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '50px 20px'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1>Thank You!</h1>
        <p style={{
          fontSize: '1.2em',
          lineHeight: '1.6',
          color: '#34495e'
        }}>
          Your message has been sent successfully. We'll get back to you soon!
        </p>
        <p>
          <a 
            href="/" 
            style={{
              color: '#3498db',
              textDecoration: 'none'
            }}
          >
            ← Back to Home
          </a>
        </p>
      </div>
    </div>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} /> {/* Add the login route */}
        <Route 
          path="/lakadikapool" 
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />
        <Route path="/thanks/" element={<Thanks />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
