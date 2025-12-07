import express from 'express';
import {
  createPaymentIntent,
  verifyPayment,
  processCardPayment,
  processPayPalPayment,
  processCODPayment,
  getStripeConfig
} from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/config', getStripeConfig);
router.post('/create-payment-intent', protect, createPaymentIntent);
router.post('/verify-payment', protect, verifyPayment);
router.post('/card', protect, processCardPayment);
router.post('/paypal', protect, processPayPalPayment);
router.post('/cod', protect, processCODPayment);

export default router;
