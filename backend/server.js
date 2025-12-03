import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import connectDB from './src/config/database.js';
import { errorHandler, notFound } from './src/middleware/errorMiddleware.js';
import rateLimiter from './src/middleware/rateLimiter.js';

// Import Routes
import authRoutes from './src/routes/authRoutes.js';
import adminAuthRoutes from './src/routes/adminAuthRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';
import customerRoutes from './src/routes/customerRoutes.js';
import cartRoutes from './src/routes/cartRoutes.js';
import wishlistRoutes from './src/routes/wishlistRoutes.js';
import reviewRoutes from './src/routes/reviewRoutes.js';
import analyticsRoutes from './src/routes/analyticsRoutes.js';
import uploadRoutes from './src/routes/uploadRoutes.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Security Middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS configuration - Allow multiple origins
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL,
  // Add your Vercel frontend URLs here
  /\.vercel\.app$/
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    // Check if origin is allowed
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (allowedOrigin instanceof RegExp) {
        return allowedOrigin.test(origin);
      }
      return allowedOrigin === origin;
    });
    
    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Compression Middleware
app.use(compression());

// Logging Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Apply rate limiting to all routes
app.use(rateLimiter);

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'CLICON API is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin/auth', adminAuthRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/upload', uploadRoutes);

// Static Files
app.use('/uploads', express.static('uploads'));

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;

let customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234-567-8900',
    location: 'New York, USA',
    orders: 12,
    spent: 14899.88,
    joinDate: '2023-01-15',
    status: 'Active'
  }
];

let categories = [
  { id: 1, name: 'Laptops', products: 156, description: 'Portable computers and notebooks' },
  { id: 2, name: 'Phones', products: 234, description: 'Smartphones and mobile devices' },
  { id: 3, name: 'Tablets', products: 89, description: 'iPad and tablet devices' }
];

// Dashboard Stats API
app.get('/api/admin/stats', (req, res) => {
  const stats = {
    totalRevenue: 48574,
    totalOrders: 1234,
    totalCustomers: 3456,
    totalProducts: products.length,
    revenueChange: '+12.5%',
    ordersChange: '+8.2%',
    customersChange: '+15.3%',
    productsChange: '-2.1%'
  };
  res.json(stats);
});

// Products APIs
app.get('/api/admin/products', (req, res) => {
  const { search, category, status, page = 1, limit = 10 } = req.query;
  let filteredProducts = [...products];

  if (search) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (status && status !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.status.toLowerCase().includes(status.toLowerCase()));
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  res.json({
    products: paginatedProducts,
    total: filteredProducts.length,
    page: parseInt(page),
    totalPages: Math.ceil(filteredProducts.length / limit)
  });
});

app.get('/api/admin/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.post('/api/admin/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
    createdAt: new Date()
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/admin/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  products[index] = { ...products[index], ...req.body, updatedAt: new Date() };
  res.json(products[index]);
});

app.delete('/api/admin/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }
  products.splice(index, 1);
  res.json({ message: 'Product deleted successfully' });
});

// Orders APIs
app.get('/api/admin/orders', (req, res) => {
  const { search, status, page = 1, limit = 10 } = req.query;
  let filteredOrders = [...orders];

  if (search) {
    filteredOrders = filteredOrders.filter(o =>
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (status && status !== 'all') {
    filteredOrders = filteredOrders.filter(o => o.status.toLowerCase() === status.toLowerCase());
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

  res.json({
    orders: paginatedOrders,
    total: filteredOrders.length,
    page: parseInt(page),
    totalPages: Math.ceil(filteredOrders.length / limit)
  });
});

app.get('/api/admin/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
});

app.put('/api/admin/orders/:id/status', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  order.status = req.body.status;
  res.json(order);
});

// Customers APIs
app.get('/api/admin/customers', (req, res) => {
  const { search, type, page = 1, limit = 10 } = req.query;
  let filteredCustomers = [...customers];

  if (search) {
    filteredCustomers = filteredCustomers.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (type && type !== 'all') {
    filteredCustomers = filteredCustomers.filter(c => c.status.toLowerCase() === type.toLowerCase());
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedCustomers = filteredCustomers.slice(startIndex, endIndex);

  res.json({
    customers: paginatedCustomers,
    total: filteredCustomers.length,
    page: parseInt(page),
    totalPages: Math.ceil(filteredCustomers.length / limit)
  });
});

app.get('/api/admin/customers/:id', (req, res) => {
  const customer = customers.find(c => c.id === parseInt(req.params.id));
  if (!customer) {
    return res.status(404).json({ error: 'Customer not found' });
  }
  res.json(customer);
});

// Categories APIs
app.get('/api/admin/categories', (req, res) => {
  res.json(categories);
});

app.post('/api/admin/categories', (req, res) => {
  const newCategory = {
    id: categories.length + 1,
    ...req.body,
    products: 0
  };
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

app.put('/api/admin/categories/:id', (req, res) => {
  const index = categories.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Category not found' });
  }
  categories[index] = { ...categories[index], ...req.body };
  res.json(categories[index]);
});

app.delete('/api/admin/categories/:id', (req, res) => {
  const index = categories.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Category not found' });
  }
  categories.splice(index, 1);
  res.json({ message: 'Category deleted successfully' });
});

// Analytics APIs
app.get('/api/admin/analytics/revenue', (req, res) => {
  const revenueData = [
    { month: 'Jan', revenue: 45000, orders: 234, customers: 189 },
    { month: 'Feb', revenue: 52000, orders: 267, customers: 212 },
    { month: 'Mar', revenue: 48000, orders: 245, customers: 198 },
    { month: 'Apr', revenue: 61000, orders: 312, customers: 245 },
    { month: 'May', revenue: 58000, orders: 289, customers: 231 },
    { month: 'Jun', revenue: 72000, orders: 356, customers: 278 }
  ];
  res.json(revenueData);
});

app.get('/api/admin/analytics/top-products', (req, res) => {
  const topProducts = [
    { name: 'MacBook Pro 16"', sales: 245, revenue: 612755 },
    { name: 'iPhone 15 Pro', sales: 189, revenue: 226798 },
    { name: 'AirPods Pro', sales: 412, revenue: 102975 },
    { name: 'iPad Air', sales: 156, revenue: 93598 },
    { name: 'Apple Watch', sales: 203, revenue: 81197 }
  ];
  res.json(topProducts);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
