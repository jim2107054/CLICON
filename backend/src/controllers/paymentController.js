import Stripe from 'stripe';
import { asyncHandler } from '../middleware/errorMiddleware.js';
import Order from '../models/Order.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_your_key_here');

// @desc    Create Stripe payment intent
// @route   POST /api/payment/create-payment-intent
// @access  Private
export const createPaymentIntent = asyncHandler(async (req, res) => {
  const { amount, currency = 'usd', orderId } = req.body;

  if (!amount || amount <= 0) {
    res.status(400);
    throw new Error('Invalid amount');
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amount in cents
      currency,
      metadata: {
        orderId: orderId || 'N/A',
        userId: req.user._id.toString()
      }
    });

    res.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });
  } catch (error) {
    console.error('Stripe payment intent error:', error);
    res.status(500);
    throw new Error('Failed to create payment intent');
  }
});

// @desc    Verify payment and update order
// @route   POST /api/payment/verify-payment
// @access  Private
export const verifyPayment = asyncHandler(async (req, res) => {
  const { paymentIntentId, orderId } = req.body;

  if (!paymentIntentId || !orderId) {
    res.status(400);
    throw new Error('Missing payment details');
  }

  try {
    // Retrieve payment intent from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status === 'succeeded') {
      // Update order in database
      const order = await Order.findById(orderId);

      if (!order) {
        res.status(404);
        throw new Error('Order not found');
      }

      // Verify order belongs to user
      if (order.user.toString() !== req.user._id.toString()) {
        res.status(403);
        throw new Error('Not authorized to update this order');
      }

      order.isPaid = true;
      order.paidAt = new Date();
      order.paymentResult = {
        id: paymentIntent.id,
        status: paymentIntent.status,
        update_time: new Date().toISOString(),
        email_address: paymentIntent.receipt_email || req.user.email
      };

      await order.save();

      res.json({
        success: true,
        message: 'Payment verified successfully',
        order
      });
    } else {
      res.status(400);
      throw new Error('Payment not successful');
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500);
    throw new Error('Failed to verify payment');
  }
});

// @desc    Process card payment
// @route   POST /api/payment/card
// @access  Private
export const processCardPayment = asyncHandler(async (req, res) => {
  const { orderId, paymentMethodId } = req.body;

  if (!orderId || !paymentMethodId) {
    res.status(400);
    throw new Error('Missing required payment information');
  }

  // Find the order
  const order = await Order.findById(orderId);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  // Verify order belongs to user
  if (order.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('Not authorized');
  }

  try {
    // Create payment intent with payment method
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(order.total * 100),
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
      return_url: `${process.env.FRONTEND_URL}/order-success`,
      metadata: {
        orderId: orderId,
        userId: req.user._id.toString()
      }
    });

    if (paymentIntent.status === 'succeeded') {
      order.isPaid = true;
      order.paidAt = new Date();
      order.paymentResult = {
        id: paymentIntent.id,
        status: paymentIntent.status,
        update_time: new Date().toISOString(),
        email_address: req.user.email
      };
      await order.save();

      res.json({
        success: true,
        message: 'Payment successful',
        order
      });
    } else {
      res.json({
        success: false,
        message: 'Payment requires additional action',
        clientSecret: paymentIntent.client_secret,
        status: paymentIntent.status
      });
    }
  } catch (error) {
    console.error('Card payment error:', error);
    res.status(500);
    throw new Error(error.message || 'Payment failed');
  }
});

// @desc    Process PayPal payment
// @route   POST /api/payment/paypal
// @access  Private
export const processPayPalPayment = asyncHandler(async (req, res) => {
  const { orderId, paypalOrderId } = req.body;

  if (!orderId || !paypalOrderId) {
    res.status(400);
    throw new Error('Missing required payment information');
  }

  const order = await Order.findById(orderId);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  // Verify order belongs to user
  if (order.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('Not authorized');
  }

  // Update order with PayPal payment info
  order.isPaid = true;
  order.paidAt = new Date();
  order.paymentResult = {
    id: paypalOrderId,
    status: 'COMPLETED',
    update_time: new Date().toISOString(),
    email_address: req.user.email
  };

  await order.save();

  res.json({
    success: true,
    message: 'PayPal payment successful',
    order
  });
});

// @desc    Process Cash on Delivery
// @route   POST /api/payment/cod
// @access  Private
export const processCODPayment = asyncHandler(async (req, res) => {
  const { orderId } = req.body;

  if (!orderId) {
    res.status(400);
    throw new Error('Order ID is required');
  }

  const order = await Order.findById(orderId);

  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }

  // Verify order belongs to user
  if (order.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error('Not authorized');
  }

  // For COD, payment is not collected yet but order is confirmed
  order.paymentResult = {
    id: 'COD',
    status: 'PENDING',
    update_time: new Date().toISOString()
  };

  await order.save();

  res.json({
    success: true,
    message: 'Order confirmed with Cash on Delivery',
    order
  });
});

// @desc    Get Stripe publishable key
// @route   GET /api/payment/config
// @access  Public
export const getStripeConfig = asyncHandler(async (req, res) => {
  res.json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_your_key_here'
  });
});
