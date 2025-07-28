import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './AdminPanel.css';

const AdminPanel = () => {
  const { user, token, logout, session } = useAuth();
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Session timer effect
  useEffect(() => {
    if (session?.expiry) {
      const updateTimer = () => {
        const now = Math.floor(Date.now() / 1000);
        const remaining = session.expiry - now;
        if (remaining > 0) {
          const hours = Math.floor(remaining / 3600);
          const minutes = Math.floor((remaining % 3600) / 60);
          const seconds = remaining % 60;
          setTimeLeft(
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
          );
        } else {
          setTimeLeft('00:00:00');
          logout();
        }
      };

      updateTimer();
      const interval = setInterval(updateTimer, 1000);
      return () => clearInterval(interval);
    }
  }, [session, logout]);

  // Fetch submissions from Netlify
  const fetchSubmissions = useCallback(async () => {
    if (!token) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/.netlify/functions/submissions', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (!response.ok) throw new Error('Failed to fetch submissions');
      
      const data = await response.json();
      const formattedData = data.map(sub => ({
        id: sub.id,
        created_at: sub.created_at,
        data: {
          name: sub.data?.name || 'N/A',
          email: sub.data?.email || 'N/A',
          phone: sub.data?.phone || 'N/A',
          message: sub.data?.message || 'No message',
          contacted: sub.data?.contacted || false
        }
      }));
      setSubmissions(formattedData);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Failed to load submissions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  // Load submissions when component mounts and token changes
  useEffect(() => {
    if (token) {
      fetchSubmissions();
    }
  }, [token, fetchSubmissions]);

  // Handle marking a submission as contacted
  const handleMarkContacted = useCallback(async (id) => {
    try {
      const response = await fetch(`/.netlify/functions/update-submission`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id, updates: { contacted: true } })
      });
      
      if (!response.ok) throw new Error('Failed to update submission');
      
      // Update local state
      setSubmissions(prev => 
        prev.map(sub => 
          sub.id === id 
            ? { ...sub, data: { ...sub.data, contacted: true } } 
            : sub
        )
      );
    } catch (err) {
      console.error('Error updating submission:', err);
      setError('Failed to update submission status');
    }
  }, [token]);

  // Handle search and filter
  const filteredSubmissions = useCallback(() => {
    return submissions.filter(sub => {
      // Filter by tab
      const matchesTab = 
        activeTab === 'all' || 
        (activeTab === 'contacted' && sub.data.contacted) ||
        (activeTab === 'new' && !sub.data.contacted);
      
      // Filter by search query
      const matchesSearch = searchQuery === '' || 
        sub.data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sub.data.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (sub.data.phone && sub.data.phone.includes(searchQuery));
      
      return matchesTab && matchesSearch;
    });
  }, [submissions, activeTab, searchQuery]);

  // Handle CSV export
  const handleExport = useCallback(() => {
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Message', 'Status'];
    const csvRows = [];
    
    // Add header row
    csvRows.push(headers.join(','));
    
    // Add data rows
    filteredSubmissions().forEach(sub => {
      const row = [
        `"${new Date(sub.created_at).toLocaleString()}"`,
        `"${sub.data.name || ''}"`,
        `"${sub.data.email || ''}"`,
        `"${sub.data.phone || ''}"`,
        `"${(sub.data.message || '').replace(/"/g, '""')}"`,
        `"${sub.data.contacted ? 'Contacted' : 'New'}"`
      ];
      csvRows.push(row.join(','));
    });
    
    // Create CSV file
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `submissions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [filteredSubmissions]);

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Redirect to login if not authenticated
  if (!user) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h2>Admin Login Required</h2>
          <p>Please log in to access the admin panel</p>
          <button onClick={() => navigate('/login')} className="login-btn">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  // Calculate statistics for the dashboard
  const stats = {
    total: submissions.length,
    newToday: submissions.filter(sub => {
      const subDate = new Date(sub.created_at);
      const today = new Date();
      return subDate.toDateString() === today.toDateString();
    }).length,
    needFollowUp: submissions.filter(sub => !sub.data.contacted).length
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
        <div className="admin-actions">
          <button 
            onClick={fetchSubmissions} 
            className="refresh-btn"
            disabled={isLoading}
          >
            🔄 {isLoading ? 'Loading...' : 'Refresh Data'}
          </button>
          <div className="session-timer">
            Session expires in: {timeLeft}
          </div>
          <button onClick={handleLogout} className="logout-btn">
            🔒 Logout
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="admin-stats">
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <h3>Total Submissions</h3>
          <p className="stat-number">{stats.total}</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <h3>Contacted</h3>
          <p className="stat-number">{stats.newToday}</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <h3>Need Follow-up</h3>
          <p className="stat-number">{stats.needFollowUp}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="search-filter-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="filter-tabs">
          <span className="filter-label">Filter:</span>
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button 
            className={`tab-btn ${activeTab === 'new' ? 'active' : ''}`}
            onClick={() => setActiveTab('new')}
          >
            New
          </button>
          <button 
            className={`tab-btn ${activeTab === 'contacted' ? 'active' : ''}`}
            onClick={() => setActiveTab('contacted')}
          >
            Contacted
          </button>
        </div>
        
        <button 
          onClick={handleExport} 
          className="export-btn"
          disabled={filteredSubmissions().length === 0}
        >
          📥 Export CSV
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Submissions Table */}
      <div className="submissions-container">
        {isLoading ? (
          <div className="loading">Loading submissions...</div>
        ) : filteredSubmissions().length > 0 ? (
          <table className="submissions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubmissions().map((sub) => (
                <tr 
                  key={sub.id} 
                  className={sub.data.contacted ? 'contacted' : ''}
                >
                  <td className="date-cell">
                    {new Date(sub.created_at).toLocaleString()}
                  </td>
                  <td className="name-cell">{sub.data.name}</td>
                  <td className="contact-cell">
                    <div className="email">{sub.data.email}</div>
                    {sub.data.phone && (
                      <div className="phone">{sub.data.phone}</div>
                    )}
                  </td>
                  <td className="message-cell">
                    <div className="message-preview">
                      {sub.data.message || 'No message'}
                    </div>
                  </td>
                  <td className="status-cell">
                    <span className={`status-badge ${sub.data.contacted ? 'contacted' : 'new'}`}>
                      {sub.data.contacted ? 'Contacted' : 'New'}
                    </span>
                  </td>
                  <td className="actions-cell">
                    {!sub.data.contacted && (
                      <button 
                        onClick={() => handleMarkContacted(sub.id)}
                        className="action-btn mark-contacted"
                        title="Mark as contacted"
                      >
                        ✓ Contacted
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-results">
            {searchQuery ? 'No submissions match your search.' : 'No submissions found.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
