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
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%'
      }}>
        <div style={{
          color: '#4CAF50',
          fontSize: '48px',
          marginBottom: '20px'
        }}>
          ✓
        </div>
        <h1 style={{
          color: '#2c3e50',
          marginBottom: '20px',
          fontSize: '2.5em'
        }}>
          Thank You!
        </h1>
        <p style={{
          fontSize: '1.1em',
          lineHeight: '1.6',
          color: '#555',
          marginBottom: '30px'
        }}>
          Your message has been sent successfully. We'll review your inquiry and get back to you within 24 hours.
        </p>
        <a 
          href="/" 
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px 30px',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          ← Back to Home
        </a>
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
