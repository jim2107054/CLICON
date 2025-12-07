import api from './api';

// Payment Service
export const paymentService = {
  // Get Stripe configuration
  getStripeConfig: async () => {
    try {
      const response = await api.get('/payment/config');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to get payment configuration' };
    }
  },

  // Create payment intent
  createPaymentIntent: async (amount, orderId) => {
    try {
      const response = await api.post('/payment/create-payment-intent', {
        amount,
        orderId,
        currency: 'usd'
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create payment intent' };
    }
  },

  // Verify payment
  verifyPayment: async (paymentIntentId, orderId) => {
    try {
      const response = await api.post('/payment/verify-payment', {
        paymentIntentId,
        orderId
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to verify payment' };
    }
  },

  // Process card payment
  processCardPayment: async (orderId, paymentMethodId) => {
    try {
      const response = await api.post('/payment/card', {
        orderId,
        paymentMethodId
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Card payment failed' };
    }
  },

  // Process PayPal payment
  processPayPalPayment: async (orderId, paypalOrderId) => {
    try {
      const response = await api.post('/payment/paypal', {
        orderId,
        paypalOrderId
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'PayPal payment failed' };
    }
  },

  // Process Cash on Delivery
  processCODPayment: async (orderId) => {
    try {
      const response = await api.post('/payment/cod', {
        orderId
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to process COD payment' };
    }
  }
};

export default paymentService;
