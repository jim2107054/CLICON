import User from '../models/User.js';
import Order from '../models/Order.js';
import { asyncHandler } from '../middleware/errorMiddleware.js';

// @desc    Get all customers (Admin)
// @route   GET /api/customers
// @access  Private/Admin
export const getAllCustomers = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  const query = {};

  if (req.query.search) {
    query.$or = [
      { name: { $regex: req.query.search, $options: 'i' } },
      { email: { $regex: req.query.search, $options: 'i' } },
    ];
  }

  if (req.query.status) {
    query.status = req.query.status;
  }

  const customers = await User.find(query)
    .select('-password')
    .sort('-createdAt')
    .limit(limit)
    .skip(skip);

  const total = await User.countDocuments(query);

  // Get order count for each customer
  const customersWithOrders = await Promise.all(
    customers.map(async (customer) => {
      const orderCount = await Order.countDocuments({ user: customer._id });
      const totalSpent = await Order.aggregate([
        { $match: { user: customer._id, status: 'delivered' } },
        { $group: { _id: null, total: { $sum: '$total' } } }
      ]);

      return {
        ...customer.toObject(),
        orderCount,
        totalSpent: totalSpent[0]?.total || 0
      };
    })
  );

  res.json({
    customers: customersWithOrders,
    page,
    pages: Math.ceil(total / limit),
    total,
  });
});

// @desc    Get customer by ID (Admin)
// @route   GET /api/customers/:id
// @access  Private/Admin
export const getCustomerById = asyncHandler(async (req, res) => {
  const customer = await User.findById(req.params.id).select('-password');

  if (customer) {
    const orders = await Order.find({ user: customer._id })
      .sort('-createdAt')
      .limit(10);

    const orderCount = await Order.countDocuments({ user: customer._id });

    const totalSpent = await Order.aggregate([
      { $match: { user: customer._id, status: 'delivered' } },
      { $group: { _id: null, total: { $sum: '$total' } } }
    ]);

    res.json({
      ...customer.toObject(),
      orders,
      orderCount,
      totalSpent: totalSpent[0]?.total || 0
    });
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});

// @desc    Update customer (Admin)
// @route   PUT /api/customers/:id
// @access  Private/Admin
export const updateCustomer = asyncHandler(async (req, res) => {
  const customer = await User.findById(req.params.id);

  if (customer) {
    customer.name = req.body.name || customer.name;
    customer.email = req.body.email || customer.email;
    customer.phone = req.body.phone || customer.phone;
    customer.status = req.body.status || customer.status;

    const updatedCustomer = await customer.save();
    res.json(updatedCustomer);
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});

// @desc    Delete customer (Admin)
// @route   DELETE /api/customers/:id
// @access  Private/Admin
export const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await User.findById(req.params.id);

  if (customer) {
    // Check if customer has orders
    const orderCount = await Order.countDocuments({ user: customer._id });

    if (orderCount > 0) {
      res.status(400);
      throw new Error('Cannot delete customer with existing orders');
    }

    await customer.deleteOne();
    res.json({ message: 'Customer removed' });
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});
