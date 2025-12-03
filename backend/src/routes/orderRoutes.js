import express from 'express';
import {
  createOrder,
  getOrderById,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  updateOrderToPaid,
  cancelOrder,
} from '../controllers/orderController.js';
import { protect, adminProtect, checkPermission } from '../middleware/authMiddleware.js';
import { orderValidation, validate } from '../middleware/validationMiddleware.js';

const router = express.Router();

// User routes
router.post('/', protect, orderValidation, validate, createOrder);
router.get('/my-orders', protect, getMyOrders);
router.get('/:id', protect, getOrderById);
router.patch('/:id/pay', protect, updateOrderToPaid);
router.patch('/:id/cancel', protect, cancelOrder);

// Admin routes
router.get('/', adminProtect, checkPermission('orders'), getAllOrders);
router.patch('/:id/status', adminProtect, checkPermission('orders'), updateOrderStatus);

export default router;
