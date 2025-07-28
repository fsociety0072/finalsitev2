import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { AuthProvider } from './AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
