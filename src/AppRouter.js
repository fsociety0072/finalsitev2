import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './AdminPanel';
import AdminRoute from './AdminRoute';
import Login from './Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">Home Page Content</div>} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
