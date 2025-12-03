import Order from '../models/Order.js';
import Product from '../models/Product.js';
import User from '../models/User.js';
import { asyncHandler } from '../middleware/errorMiddleware.js';

// @desc    Get analytics overview (Admin)
// @route   GET /api/analytics/overview
// @access  Private/Admin
export const getAnalyticsOverview = asyncHandler(async (req, res) => {
  const { startDate, endDate } = req.query;

  const dateFilter = {};
  if (startDate || endDate) {
    dateFilter.createdAt = {};
    if (startDate) dateFilter.createdAt.$gte = new Date(startDate);
    if (endDate) dateFilter.createdAt.$lte = new Date(endDate);
  }

  // Total revenue
  const revenueData = await Order.aggregate([
    { $match: { status: 'delivered', ...dateFilter } },
    { $group: { _id: null, total: { $sum: '$total' } } }
  ]);

  // Total orders
  const totalOrders = await Order.countDocuments(dateFilter);

  // Total customers
  const totalCustomers = await User.countDocuments(dateFilter);

  // Total products
  const totalProducts = await Product.countDocuments();

  // Orders by status
  const ordersByStatus = await Order.aggregate([
    { $match: dateFilter },
    { $group: { _id: '$status', count: { $sum: 1 } } }
  ]);

  // Top selling products
  const topProducts = await Product.find()
    .sort('-sales')
    .limit(5)
    .select('name sales price images');

  // Recent orders
  const recentOrders = await Order.find(dateFilter)
    .populate('user', 'name email')
    .sort('-createdAt')
    .limit(10)
    .select('orderNumber user total status createdAt');

  res.json({
    revenue: revenueData[0]?.total || 0,
    totalOrders,
    totalCustomers,
    totalProducts,
    ordersByStatus,
    topProducts,
    recentOrders
  });
});

// @desc    Get sales data (Admin)
// @route   GET /api/analytics/sales
// @access  Private/Admin
export const getSalesData = asyncHandler(async (req, res) => {
  const { period = 'daily', startDate, endDate } = req.query;

  const matchStage = {
    status: 'delivered'
  };

  if (startDate || endDate) {
    matchStage.createdAt = {};
    if (startDate) matchStage.createdAt.$gte = new Date(startDate);
    if (endDate) matchStage.createdAt.$lte = new Date(endDate);
  }

  let groupBy;
  switch (period) {
    case 'daily':
      groupBy = {
        year: { $year: '$createdAt' },
        month: { $month: '$createdAt' },
        day: { $dayOfMonth: '$createdAt' }
      };
      break;
    case 'weekly':
      groupBy = {
        year: { $year: '$createdAt' },
        week: { $week: '$createdAt' }
      };
      break;
    case 'monthly':
      groupBy = {
        year: { $year: '$createdAt' },
        month: { $month: '$createdAt' }
      };
      break;
    case 'yearly':
      groupBy = {
        year: { $year: '$createdAt' }
      };
      break;
    default:
      groupBy = {
        year: { $year: '$createdAt' },
        month: { $month: '$createdAt' },
        day: { $dayOfMonth: '$createdAt' }
      };
  }

  const salesData = await Order.aggregate([
    { $match: matchStage },
    {
      $group: {
        _id: groupBy,
        revenue: { $sum: '$total' },
        orders: { $sum: 1 },
        averageOrderValue: { $avg: '$total' }
      }
    },
    { $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 } }
  ]);

  res.json(salesData);
});

// @desc    Get product analytics (Admin)
// @route   GET /api/analytics/products
// @access  Private/Admin
export const getProductAnalytics = asyncHandler(async (req, res) => {
  // Top selling products
  const topSelling = await Product.find()
    .sort('-sales')
    .limit(10)
    .select('name sales revenue price images');

  // Low stock products
  const lowStock = await Product.find({
    $expr: { $lte: ['$stock', '$lowStockThreshold'] }
  })
    .sort('stock')
    .limit(10)
    .select('name stock lowStockThreshold price');

  // Out of stock products
  const outOfStock = await Product.countDocuments({ stock: 0 });

  // Products by category
  const byCategory = await Product.aggregate([
    { $group: { _id: '$category', count: { $sum: 1 } } },
    { $lookup: { from: 'categories', localField: '_id', foreignField: '_id', as: 'category' } },
    { $unwind: '$category' },
    { $project: { name: '$category.name', count: 1 } }
  ]);

  res.json({
    topSelling,
    lowStock,
    outOfStock,
    byCategory
  });
});

// @desc    Get customer analytics (Admin)
// @route   GET /api/analytics/customers
// @access  Private/Admin
export const getCustomerAnalytics = asyncHandler(async (req, res) => {
  // Top customers by spending
  const topCustomers = await Order.aggregate([
    { $match: { status: 'delivered' } },
    {
      $group: {
        _id: '$user',
        totalSpent: { $sum: '$total' },
        orderCount: { $sum: 1 }
      }
    },
    { $sort: { totalSpent: -1 } },
    { $limit: 10 },
    {
      $lookup: {
        from: 'users',
        localField: '_id',
        foreignField: '_id',
        as: 'user'
      }
    },
    { $unwind: '$user' },
    {
      $project: {
        name: '$user.name',
        email: '$user.email',
        totalSpent: 1,
        orderCount: 1
      }
    }
  ]);

  // New customers this month
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const newCustomers = await User.countDocuments({
    createdAt: { $gte: startOfMonth }
  });

  // Customer growth over time
  const customerGrowth = await User.aggregate([
    {
      $group: {
        _id: {
          year: { $year: '$createdAt' },
          month: { $month: '$createdAt' }
        },
        count: { $sum: 1 }
      }
    },
    { $sort: { '_id.year': 1, '_id.month': 1 } }
  ]);

  res.json({
    topCustomers,
    newCustomers,
    customerGrowth
  });
});
