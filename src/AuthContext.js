import React, { createContext, useState, useContext, useEffect } from 'react';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [session, setSession] = useState(JSON.parse(localStorage.getItem('session')));

    useEffect(() => {
    const sessionData = JSON.parse(localStorage.getItem('session'));
    if (token && sessionData) {
      // Check if session is expired
      if (sessionData.expiry > Math.floor(Date.now() / 1000)) {
        setUser({ username: 'admin' }); // Set a mock user
        setSession(sessionData);
      } else {
        // Session is expired
        logout();
      }
    } else {
      setUser(null);
    }
  }, [token]);

  const login = (token) => {
    if (token) {
      localStorage.setItem('token', token);
      const sessionData = { expiry: Math.floor(Date.now() / 1000) + 1800 }; // 30 minutes
      localStorage.setItem('session', JSON.stringify(sessionData));
      setToken(token);
      // Since we don't get user data back from the fake token, set a mock user.
      setUser({ username: 'admin' });
      setSession(sessionData);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('session');
    setUser(null);
    setToken(null);
    setSession(null);
  };

  const extendSession = () => {
    const newExpiry = Math.floor(Date.now() / 1000) + 1800; // Extend by 30 mins
    const newSession = { ...session, expiry: newExpiry };
    localStorage.setItem('session', JSON.stringify(newSession));
    setSession(newSession);
    alert('Session extended by 30 minutes!');
  };

  const authContextValue = {
    user,
    token,
    session,
    isAuthenticated: !!user,
    login,
    logout,
    extendSession
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
