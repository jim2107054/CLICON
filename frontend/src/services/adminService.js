import api from './api';

// Admin Authentication
export const adminAuthService = {
  login: async (credentials) => {
    try {
      const response = await api.post('/admin/auth/login', credentials);
      if (response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        localStorage.setItem('admin', JSON.stringify(response.data));
        localStorage.setItem('isAdmin', 'true');
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Admin login failed' };
    }
  },

  logout: () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('admin');
    localStorage.removeItem('isAdmin');
  },

  getCurrentAdmin: () => {
    const adminStr = localStorage.getItem('admin');
    return adminStr ? JSON.parse(adminStr) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('adminToken');
  }
};

// Products Management
export const productsService = {
  getAll: async (params = {}) => {
    try {
      const response = await api.get('/admin/products', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch products' };
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/admin/products/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch product' };
    }
  },

  create: async (productData) => {
    try {
      const response = await api.post('/admin/products', productData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create product' };
    }
  },

  update: async (id, productData) => {
    try {
      const response = await api.put(`/admin/products/${id}`, productData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update product' };
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/admin/products/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete product' };
    }
  },

  uploadImage: async (formData) => {
    try {
      const response = await api.post('/upload/product', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to upload image' };
    }
  }
};

// Orders Management
export const ordersService = {
  getAll: async (params = {}) => {
    try {
      const response = await api.get('/admin/orders', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch orders' };
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/admin/orders/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch order' };
    }
  },

  updateStatus: async (id, status) => {
    try {
      const response = await api.put(`/admin/orders/${id}/status`, { status });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update order status' };
    }
  },

  getUserOrders: async (userId) => {
    try {
      const response = await api.get(`/orders/user/${userId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch user orders' };
    }
  }
};

// Customers Management
export const customersService = {
  getAll: async (params = {}) => {
    try {
      const response = await api.get('/admin/customers', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch customers' };
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/admin/customers/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch customer' };
    }
  },

  update: async (id, customerData) => {
    try {
      const response = await api.put(`/admin/customers/${id}`, customerData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update customer' };
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/admin/customers/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete customer' };
    }
  }
};

// Categories Management
export const categoriesService = {
  getAll: async () => {
    try {
      console.log('Making API call to /admin/categories');
      const response = await api.get('/admin/categories');
      console.log('API Response:', response);
      console.log('Response data:', response.data);
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      console.error('Error response:', error.response);
      throw error.response?.data || { message: 'Failed to fetch categories' };
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/admin/categories/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch category' };
    }
  },

  create: async (categoryData) => {
    try {
      console.log('Creating category with data:', categoryData);
      const response = await api.post('/admin/categories', categoryData);
      console.log('Category creation response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Category creation error:', error.response?.data || error.message);
      throw error.response?.data || { message: error.message || 'Failed to create category' };
    }
  },

  update: async (id, categoryData) => {
    try {
      const response = await api.put(`/admin/categories/${id}`, categoryData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update category' };
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/admin/categories/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete category' };
    }
  }
};

// Analytics Service
export const analyticsService = {
  getDashboardStats: async () => {
    try {
      const response = await api.get('/admin/stats');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch dashboard stats' };
    }
  },

  getRevenueData: async (period = '30d') => {
    try {
      const response = await api.get('/admin/analytics/revenue', { params: { period } });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch revenue data' };
    }
  },

  getTopProducts: async (limit = 10) => {
    try {
      const response = await api.get('/admin/analytics/top-products', { params: { limit } });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch top products' };
    }
  },

  getOrdersAnalytics: async (period = '30d') => {
    try {
      const response = await api.get('/analytics/orders', { params: { period } });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch orders analytics' };
    }
  },

  getCustomersAnalytics: async (period = '30d') => {
    try {
      const response = await api.get('/analytics/customers', { params: { period } });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch customers analytics' };
    }
  }
};

// Cart Service
export const cartService = {
  getCart: async () => {
    try {
      const response = await api.get('/cart');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch cart' };
    }
  },

  addToCart: async (productId, quantity = 1) => {
    try {
      const response = await api.post('/cart/add', { productId, quantity });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to add to cart' };
    }
  },

  updateCartItem: async (productId, quantity) => {
    try {
      const response = await api.put('/cart/update', { productId, quantity });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update cart' };
    }
  },

  removeFromCart: async (productId) => {
    try {
      const response = await api.delete(`/cart/remove/${productId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to remove from cart' };
    }
  },

  clearCart: async () => {
    try {
      const response = await api.delete('/cart/clear');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to clear cart' };
    }
  }
};

// Wishlist Service
export const wishlistService = {
  getWishlist: async () => {
    try {
      const response = await api.get('/wishlist');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch wishlist' };
    }
  },

  addToWishlist: async (productId) => {
    try {
      const response = await api.post('/wishlist/add', { productId });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to add to wishlist' };
    }
  },

  removeFromWishlist: async (productId) => {
    try {
      const response = await api.delete(`/wishlist/remove/${productId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to remove from wishlist' };
    }
  }
};

// Reviews Service
export const reviewsService = {
  getProductReviews: async (productId) => {
    try {
      const response = await api.get(`/reviews/product/${productId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch reviews' };
    }
  },

  createReview: async (reviewData) => {
    try {
      const response = await api.post('/reviews', reviewData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create review' };
    }
  },

  updateReview: async (id, reviewData) => {
    try {
      const response = await api.put(`/reviews/${id}`, reviewData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update review' };
    }
  },

  deleteReview: async (id) => {
    try {
      const response = await api.delete(`/reviews/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete review' };
    }
  }
};

export default {
  adminAuthService,
  productsService,
  ordersService,
  customersService,
  categoriesService,
  analyticsService,
  cartService,
  wishlistService,
  reviewsService
};
