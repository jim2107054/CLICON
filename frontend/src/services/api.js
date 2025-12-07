import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Enable sending cookies with requests
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    // Check for admin token first, then regular token
    const adminToken = localStorage.getItem('adminToken');
    const token = localStorage.getItem('token');
    
    const authToken = adminToken || token;
    
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific error codes
      if (error.response.status === 401) {
        // Unauthorized - clear tokens and redirect
        const isAdmin = localStorage.getItem('adminToken');
        
        if (isAdmin) {
          localStorage.removeItem('adminToken');
          localStorage.removeItem('admin');
          window.location.href = '/admin/login';
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = '/signin';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
