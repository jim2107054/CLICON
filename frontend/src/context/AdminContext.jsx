import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const email = localStorage.getItem('adminEmail');
    const isAdmin = localStorage.getItem('isAdmin');

    if (token && isAdmin === 'true') {
      setIsAuthenticated(true);
      setAdminData({
        email,
        name: 'Admin User',
        role: 'Administrator'
      });
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Admin credentials
    const ADMIN_CREDENTIALS = {
      email: 'admin@clicon.com',
      password: 'Admin@123'
    };

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const token = 'admin-jwt-token-' + Date.now();
      localStorage.setItem('adminToken', token);
      localStorage.setItem('adminEmail', email);
      localStorage.setItem('isAdmin', 'true');
      
      setIsAuthenticated(true);
      setAdminData({
        email,
        name: 'Admin User',
        role: 'Administrator'
      });
      
      return { success: true };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('isAdmin');
    setIsAuthenticated(false);
    setAdminData(null);
    navigate('/admin/login');
  };

  const value = {
    isAuthenticated,
    adminData,
    loading,
    login,
    logout
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
