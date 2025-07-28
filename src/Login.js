import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Login.css';

const Login = () => {
  const [username] = useState('Hackers'); // Fixed username as per .env file
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/.netlify/functions/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        login(data.token);
        navigate(from, { replace: true });
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="shield-icon">🛡️</div>
        <h1>ADMIN ACCESS</h1>
        <p>Enter your secure password to access the admin panel</p>
        
        <form onSubmit={handleSubmit}>
          {/* Hidden username field for accessibility */}
          <input
            type="text"
            id="username"
            value={username}
            readOnly
            style={{ position: 'absolute', left: '-9999px' }}
            autoComplete="username"
          />
          <div className="form-group">
            <label htmlFor="password">
              Secure Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your secure password"
              required
              disabled={isLoading}
              autoComplete="new-password"
            />
          </div>
          
          <button 
            type="submit" 
            className="btn"
            disabled={isLoading}
          >
            {isLoading ? 'AUTHENTICATING...' : 'AUTHENTICATE'}
          </button>
        </form>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <div className="security-notice">
          For security reasons, access is restricted to authorized personnel only. All login attempts are monitored and recorded.
        </div>
        
        <div className="footer-text">
          Protected by military-grade encryption
        </div>
      </div>
    </div>
  );
};

export default Login;
