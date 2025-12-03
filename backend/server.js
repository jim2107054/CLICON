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
import adminRoutes from './src/routes/adminRoutes.js';
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

// Root Route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'CLICON API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      auth: '/api/auth',
      admin: '/api/admin/auth',
      products: '/api/products',
      categories: '/api/categories',
      orders: '/api/orders',
      cart: '/api/cart',
      wishlist: '/api/wishlist',
      reviews: '/api/reviews'
    }
  });
});

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
app.use('/api/admin', adminRoutes);
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
