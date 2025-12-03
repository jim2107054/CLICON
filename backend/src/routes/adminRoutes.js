import express from 'express';
import Product from '../models/Product.js';
import Order from '../models/Order.js';
import User from '../models/User.js';
import Category from '../models/Category.js';
import { asyncHandler } from '../middleware/errorMiddleware.js';
import { adminProtect, checkPermission } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes require admin authentication
router.use(adminProtect);

// ============================================
// Dashboard Stats
// ============================================
router.get('/stats', asyncHandler(async (req, res) => {
  // Calculate total revenue from delivered orders
  const revenueData = await Order.aggregate([
    { $match: { status: 'delivered' } },
    { $group: { _id: null, total: { $sum: '$total' } } }
  ]);
  const totalRevenue = revenueData[0]?.total || 0;

  // Get counts
  const totalOrders = await Order.countDocuments();
  const totalCustomers = await User.countDocuments();
  const totalProducts = await Product.countDocuments();

  // Calculate changes (compared to last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const previousRevenue = await Order.aggregate([
    { 
      $match: { 
        status: 'delivered',
        createdAt: { $lt: thirtyDaysAgo }
      } 
    },
    { $group: { _id: null, total: { $sum: '$total' } } }
  ]);

  const previousOrders = await Order.countDocuments({ createdAt: { $lt: thirtyDaysAgo } });
  const previousCustomers = await User.countDocuments({ createdAt: { $lt: thirtyDaysAgo } });
  const previousProducts = await Product.countDocuments({ createdAt: { $lt: thirtyDaysAgo } });

  const calculateChange = (current, previous) => {
    if (previous === 0) return '+100%';
    const change = ((current - previous) / previous) * 100;
    return `${change >= 0 ? '+' : ''}${change.toFixed(1)}%`;
  };

  res.json({
    totalRevenue: totalRevenue.toFixed(2),
    totalOrders,
    totalCustomers,
    totalProducts,
    revenueChange: calculateChange(totalRevenue, previousRevenue[0]?.total || 0),
    ordersChange: calculateChange(totalOrders, previousOrders),
    customersChange: calculateChange(totalCustomers, previousCustomers),
    productsChange: calculateChange(totalProducts, previousProducts)
  });
}));

// ============================================
// Products Management
// ============================================
router.get('/products', checkPermission('products'), asyncHandler(async (req, res) => {
  const { search, category, status, page = 1, limit = 10 } = req.query;
  
  const query = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { sku: { $regex: search, $options: 'i' } }
    ];
  }

  if (category && category !== 'all') {
    query.category = category;
  }

  if (status && status !== 'all') {
    query.status = status;
  }

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const products = await Product.find(query)
    .populate('category', 'name')
    .sort('-createdAt')
    .limit(parseInt(limit))
    .skip(skip);

  const total = await Product.countDocuments(query);

  res.json({
    products,
    total,
    page: parseInt(page),
    totalPages: Math.ceil(total / parseInt(limit))
  });
}));

router.get('/products/:id', checkPermission('products'), asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category', 'name');
  
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json(product);
}));

router.post('/products', checkPermission('products'), asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
}));

router.put('/products/:id', checkPermission('products'), asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  ).populate('category', 'name');

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json(product);
}));

router.delete('/products/:id', checkPermission('products'), asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  res.json({ message: 'Product deleted successfully' });
}));

// ============================================
// Orders Management
// ============================================
router.get('/orders', checkPermission('orders'), asyncHandler(async (req, res) => {
  const { search, status, page = 1, limit = 10 } = req.query;
  
  const query = {};

  if (search) {
    query.orderNumber = { $regex: search, $options: 'i' };
  }

  if (status && status !== 'all') {
    query.status = status;
  }

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const orders = await Order.find(query)
    .populate('user', 'name email')
    .sort('-createdAt')
    .limit(parseInt(limit))
    .skip(skip);

  const total = await Order.countDocuments(query);

  res.json({
    orders,
    total,
    page: parseInt(page),
    totalPages: Math.ceil(total / parseInt(limit))
  });
}));

router.get('/orders/:id', checkPermission('orders'), asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate('user', 'name email phone')
    .populate('items.product', 'name images price');

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  res.json(order);
}));

router.put('/orders/:id/status', checkPermission('orders'), asyncHandler(async (req, res) => {
  const { status } = req.body;

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  ).populate('user', 'name email');

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  res.json(order);
}));

// ============================================
// Customers Management
// ============================================
router.get('/customers', checkPermission('customers'), asyncHandler(async (req, res) => {
  const { search, type, page = 1, limit = 10 } = req.query;
  
  const query = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } }
    ];
  }

  if (type && type !== 'all') {
    query.isActive = type === 'active';
  }

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const customers = await User.find(query)
    .select('-password')
    .sort('-createdAt')
    .limit(parseInt(limit))
    .skip(skip);

  const total = await User.countDocuments(query);

  // Get order count and total spent for each customer
  const customersWithStats = await Promise.all(
    customers.map(async (customer) => {
      const orders = await Order.find({ user: customer._id });
      const orderCount = orders.length;
      const totalSpent = orders
        .filter(order => order.status === 'delivered')
        .reduce((sum, order) => sum + order.total, 0);

      return {
        id: customer._id,
        name: customer.name,
        email: customer.email,
        phone: customer.phone || 'N/A',
        location: customer.address?.city || 'N/A',
        orders: orderCount,
        spent: totalSpent.toFixed(2),
        joinDate: customer.createdAt,
        status: customer.isActive ? 'Active' : 'Inactive'
      };
    })
  );

  res.json({
    customers: customersWithStats,
    total,
    page: parseInt(page),
    totalPages: Math.ceil(total / parseInt(limit))
  });
}));

router.get('/customers/:id', checkPermission('customers'), asyncHandler(async (req, res) => {
  const customer = await User.findById(req.params.id).select('-password');

  if (!customer) {
    res.status(404);
    throw new Error('Customer not found');
  }

  // Get customer orders
  const orders = await Order.find({ user: customer._id }).sort('-createdAt');
  const orderCount = orders.length;
  const totalSpent = orders
    .filter(order => order.status === 'delivered')
    .reduce((sum, order) => sum + order.total, 0);

  res.json({
    ...customer.toObject(),
    orders: orderCount,
    totalSpent: totalSpent.toFixed(2),
    recentOrders: orders.slice(0, 5)
  });
}));

// ============================================
// Categories Management
// ============================================
router.get('/categories', checkPermission('categories'), asyncHandler(async (req, res) => {
  const categories = await Category.find().sort('name');

  // Get product count for each category
  const categoriesWithCount = await Promise.all(
    categories.map(async (category) => {
      const productCount = await Product.countDocuments({ category: category._id });
      return {
        id: category._id,
        name: category.name,
        products: productCount,
        description: category.description || 'No description'
      };
    })
  );

  res.json(categoriesWithCount);
}));

router.post('/categories', checkPermission('categories'), asyncHandler(async (req, res) => {
  const category = await Category.create(req.body);
  
  res.status(201).json({
    id: category._id,
    name: category.name,
    products: 0,
    description: category.description || 'No description'
  });
}));

router.put('/categories/:id', checkPermission('categories'), asyncHandler(async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }

  const productCount = await Product.countDocuments({ category: category._id });

  res.json({
    id: category._id,
    name: category.name,
    products: productCount,
    description: category.description || 'No description'
  });
}));

router.delete('/categories/:id', checkPermission('categories'), asyncHandler(async (req, res) => {
  // Check if category has products
  const productCount = await Product.countDocuments({ category: req.params.id });
  
  if (productCount > 0) {
    res.status(400);
    throw new Error(`Cannot delete category with ${productCount} products`);
  }

  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }

  res.json({ message: 'Category deleted successfully' });
}));

// ============================================
// Analytics
// ============================================
router.get('/analytics/revenue', checkPermission('analytics'), asyncHandler(async (req, res) => {
  // Get last 6 months revenue data
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const revenueData = await Order.aggregate([
    {
      $match: {
        status: 'delivered',
        createdAt: { $gte: sixMonthsAgo }
      }
    },
    {
      $group: {
        _id: {
          year: { $year: '$createdAt' },
          month: { $month: '$createdAt' }
        },
        revenue: { $sum: '$total' },
        orders: { $sum: 1 }
      }
    },
    {
      $sort: { '_id.year': 1, '_id.month': 1 }
    }
  ]);

  // Get customer counts per month
  const customerData = await User.aggregate([
    {
      $match: {
        createdAt: { $gte: sixMonthsAgo }
      }
    },
    {
      $group: {
        _id: {
          year: { $year: '$createdAt' },
          month: { $month: '$createdAt' }
        },
        customers: { $sum: 1 }
      }
    },
    {
      $sort: { '_id.year': 1, '_id.month': 1 }
    }
  ]);

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const result = revenueData.map((data, index) => {
    const monthName = monthNames[data._id.month - 1];
    const customerCount = customerData.find(
      c => c._id.year === data._id.year && c._id.month === data._id.month
    )?.customers || 0;

    return {
      month: monthName,
      revenue: Math.round(data.revenue),
      orders: data.orders,
      customers: customerCount
    };
  });

  res.json(result);
}));

router.get('/analytics/top-products', checkPermission('analytics'), asyncHandler(async (req, res) => {
  const topProducts = await Product.find()
    .sort('-sales')
    .limit(5)
    .select('name sales price');

  const result = topProducts.map(product => ({
    name: product.name,
    sales: product.sales || 0,
    revenue: Math.round((product.sales || 0) * product.price)
  }));

  res.json(result);
}));

export default router;
