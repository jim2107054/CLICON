// Mock data storage (simulates backend database)
let mockProducts = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    sku: 'MBP-16-2023',
    category: 'Laptops',
    price: 2499.99,
    comparePrice: 2799.99,
    stock: 45,
    status: 'active',
    image: 'https://via.placeholder.com/300',
    description: 'Powerful laptop for professionals',
    brand: 'Apple',
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    sku: 'IPH-15-PRO',
    category: 'Phones',
    price: 1199.99,
    comparePrice: 1299.99,
    stock: 120,
    status: 'active',
    image: 'https://via.placeholder.com/300',
    description: 'Latest iPhone with advanced features',
    brand: 'Apple',
    createdAt: '2024-02-20'
  }
];

let mockOrders = [
  {
    id: 'ORD-2023-001',
    customer: 'John Doe',
    email: 'john@example.com',
    date: '2023-12-01',
    total: 2499.99,
    status: 'delivered',
    items: 3,
    payment: 'paid',
    shippingAddress: '123 Main St, New York, NY 10001'
  },
  {
    id: 'ORD-2023-002',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    date: '2023-12-02',
    total: 1849.50,
    status: 'shipping',
    items: 2,
    payment: 'paid',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90001'
  }
];

let mockCustomers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    orders: 12,
    totalSpent: 15240.50,
    status: 'active',
    joinedDate: '2023-01-15',
    address: '123 Main St, New York, NY 10001'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 234 567 8901',
    orders: 8,
    totalSpent: 8920.00,
    status: 'active',
    joinedDate: '2023-03-20',
    address: '456 Oak Ave, Los Angeles, CA 90001'
  }
];

let mockCategories = [
  { id: 1, name: 'Laptops', productCount: 45, status: 'active' },
  { id: 2, name: 'Phones', productCount: 120, status: 'active' },
  { id: 3, name: 'Tablets', productCount: 35, status: 'active' },
  { id: 4, name: 'Accessories', productCount: 200, status: 'active' }
];

// Simulate API delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Products API
export const productsAPI = {
  getAll: async (filters = {}) => {
    await delay();
    let filtered = [...mockProducts];
    
    if (filters.search) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.sku.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter(p => p.status === filters.status);
    }
    
    return { success: true, data: filtered, total: filtered.length };
  },
  
  getById: async (id) => {
    await delay();
    const product = mockProducts.find(p => p.id === parseInt(id));
    return { success: !!product, data: product };
  },
  
  create: async (productData) => {
    await delay();
    const newProduct = {
      id: mockProducts.length + 1,
      ...productData,
      createdAt: new Date().toISOString().split('T')[0]
    };
    mockProducts.push(newProduct);
    return { success: true, data: newProduct, message: 'Product created successfully' };
  },
  
  update: async (id, productData) => {
    await delay();
    const index = mockProducts.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      mockProducts[index] = { ...mockProducts[index], ...productData };
      return { success: true, data: mockProducts[index], message: 'Product updated successfully' };
    }
    return { success: false, message: 'Product not found' };
  },
  
  delete: async (id) => {
    await delay();
    const index = mockProducts.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      mockProducts.splice(index, 1);
      return { success: true, message: 'Product deleted successfully' };
    }
    return { success: false, message: 'Product not found' };
  },
  
  updateStock: async (id, quantity) => {
    await delay();
    const product = mockProducts.find(p => p.id === parseInt(id));
    if (product) {
      product.stock = quantity;
      return { success: true, data: product, message: 'Stock updated successfully' };
    }
    return { success: false, message: 'Product not found' };
  }
};

// Orders API
export const ordersAPI = {
  getAll: async (filters = {}) => {
    await delay();
    let filtered = [...mockOrders];
    
    if (filters.search) {
      filtered = filtered.filter(o => 
        o.id.toLowerCase().includes(filters.search.toLowerCase()) ||
        o.customer.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter(o => o.status === filters.status);
    }
    
    return { success: true, data: filtered, total: filtered.length };
  },
  
  getById: async (id) => {
    await delay();
    const order = mockOrders.find(o => o.id === id);
    return { success: !!order, data: order };
  },
  
  updateStatus: async (id, status) => {
    await delay();
    const order = mockOrders.find(o => o.id === id);
    if (order) {
      order.status = status;
      return { success: true, data: order, message: 'Order status updated successfully' };
    }
    return { success: false, message: 'Order not found' };
  }
};

// Customers API
export const customersAPI = {
  getAll: async (filters = {}) => {
    await delay();
    let filtered = [...mockCustomers];
    
    if (filters.search) {
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        c.email.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter(c => c.status === filters.status);
    }
    
    return { success: true, data: filtered, total: filtered.length };
  },
  
  getById: async (id) => {
    await delay();
    const customer = mockCustomers.find(c => c.id === parseInt(id));
    return { success: !!customer, data: customer };
  },
  
  update: async (id, customerData) => {
    await delay();
    const index = mockCustomers.findIndex(c => c.id === parseInt(id));
    if (index !== -1) {
      mockCustomers[index] = { ...mockCustomers[index], ...customerData };
      return { success: true, data: mockCustomers[index], message: 'Customer updated successfully' };
    }
    return { success: false, message: 'Customer not found' };
  },
  
  delete: async (id) => {
    await delay();
    const index = mockCustomers.findIndex(c => c.id === parseInt(id));
    if (index !== -1) {
      mockCustomers.splice(index, 1);
      return { success: true, message: 'Customer deleted successfully' };
    }
    return { success: false, message: 'Customer not found' };
  }
};

// Categories API
export const categoriesAPI = {
  getAll: async () => {
    await delay();
    return { success: true, data: mockCategories };
  },
  
  create: async (categoryData) => {
    await delay();
    const newCategory = {
      id: mockCategories.length + 1,
      ...categoryData,
      productCount: 0
    };
    mockCategories.push(newCategory);
    return { success: true, data: newCategory, message: 'Category created successfully' };
  },
  
  update: async (id, categoryData) => {
    await delay();
    const index = mockCategories.findIndex(c => c.id === parseInt(id));
    if (index !== -1) {
      mockCategories[index] = { ...mockCategories[index], ...categoryData };
      return { success: true, data: mockCategories[index], message: 'Category updated successfully' };
    }
    return { success: false, message: 'Category not found' };
  },
  
  delete: async (id) => {
    await delay();
    const index = mockCategories.findIndex(c => c.id === parseInt(id));
    if (index !== -1) {
      mockCategories.splice(index, 1);
      return { success: true, message: 'Category deleted successfully' };
    }
    return { success: false, message: 'Category not found' };
  }
};

// Analytics API
export const analyticsAPI = {
  getOverview: async () => {
    await delay();
    return {
      success: true,
      data: {
        totalRevenue: 125480.50,
        totalOrders: 1248,
        totalCustomers: 542,
        totalProducts: 248,
        revenueChange: 12.5,
        ordersChange: 8.2,
        customersChange: 15.3,
        productsChange: 5.1
      }
    };
  },
  
  getSalesData: async (period = '30days') => {
    await delay();
    // Generate mock sales data
    const data = Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      sales: Math.floor(Math.random() * 5000) + 2000
    }));
    return { success: true, data };
  }
};

export default {
  products: productsAPI,
  orders: ordersAPI,
  customers: customersAPI,
  categories: categoriesAPI,
  analytics: analyticsAPI
};
