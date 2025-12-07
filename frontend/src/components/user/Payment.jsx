import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { paymentService } from '../../services/paymentService';
import { FaLock, FaCreditCard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa';

// Stripe promise
let stripePromise = null;

// PayPal SDK loader
const loadPayPalScript = () => {
  return new Promise((resolve, reject) => {
    if (window.paypal) {
      resolve(window.paypal);
      return;
    }
    
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test'}`;
    script.addEventListener('load', () => resolve(window.paypal));
    script.addEventListener('error', reject);
    document.body.appendChild(script);
  });
};

// Card payment form component
const CardPaymentForm = ({ orderId, amount, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // Create payment method
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      // Process payment with backend
      const result = await paymentService.processCardPayment(orderId, paymentMethod.id);

      if (result.success) {
        onSuccess(result);
      } else {
        throw new Error(result.message || 'Payment failed');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message);
      onError(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border border-gray-300 rounded-md p-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={!stripe || processing}
        className={`w-full bg-[#FA8232] text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 ${
          processing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'
        }`}
      >
        <FaLock />
        {processing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
      </button>
    </form>
  );
};

// Main Payment Component
const Payment = ({ orderId, amount, onSuccess, onError }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [stripeLoaded, setStripeLoaded] = useState(false);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    // Load Stripe
    const initStripe = async () => {
      try {
        const config = await paymentService.getStripeConfig();
        stripePromise = loadStripe(config.publishableKey);
        setStripeLoaded(true);
      } catch (error) {
        console.error('Failed to load Stripe:', error);
      }
    };

    initStripe();
  }, []);

  useEffect(() => {
    // Load PayPal if selected
    if (paymentMethod === 'paypal' && !paypalLoaded) {
      loadPayPalScript()
        .then(() => setPaypalLoaded(true))
        .catch((error) => console.error('Failed to load PayPal:', error));
    }
  }, [paymentMethod, paypalLoaded]);

  const handleCODPayment = async () => {
    setProcessing(true);
    try {
      const result = await paymentService.processCODPayment(orderId);
      if (result.success) {
        onSuccess(result);
      }
    } catch (error) {
      console.error('COD payment error:', error);
      onError(error);
    } finally {
      setProcessing(false);
    }
  };

  // Initialize PayPal buttons when loaded
  useEffect(() => {
    const initPayPal = async (details, data) => {
      try {
        const result = await paymentService.processPayPalPayment(orderId, data.orderID);
        if (result.success) {
          onSuccess(result);
        }
      } catch (error) {
        console.error('PayPal payment error:', error);
        onError(error);
      }
    };

    if (paymentMethod === 'paypal' && paypalLoaded && window.paypal) {
      const container = document.getElementById('paypal-button-container');
      if (container && container.childElementCount === 0) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toFixed(2)
                }
              }]
            });
          },
          onApprove: initPayPal,
          onError: (err) => {
            console.error('PayPal error:', err);
            onError(err);
          }
        }).render('#paypal-button-container');
      }
    }
  }, [paymentMethod, paypalLoaded, amount, orderId, onSuccess, onError]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
      
      {/* Payment Method Selection */}
      <div className="space-y-3 mb-6">
        <button
          type="button"
          onClick={() => setPaymentMethod('card')}
          className={`w-full flex items-center gap-3 p-4 border-2 rounded-lg transition-colors ${
            paymentMethod === 'card'
              ? 'border-[#FA8232] bg-orange-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <FaCreditCard className="text-2xl" />
          <div className="text-left">
            <div className="font-medium">Credit / Debit Card</div>
            <div className="text-sm text-gray-500">Visa, Mastercard, American Express</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setPaymentMethod('paypal')}
          className={`w-full flex items-center gap-3 p-4 border-2 rounded-lg transition-colors ${
            paymentMethod === 'paypal'
              ? 'border-[#FA8232] bg-orange-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <FaPaypal className="text-2xl text-blue-600" />
          <div className="text-left">
            <div className="font-medium">PayPal</div>
            <div className="text-sm text-gray-500">Pay with your PayPal account</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setPaymentMethod('cod')}
          className={`w-full flex items-center gap-3 p-4 border-2 rounded-lg transition-colors ${
            paymentMethod === 'cod'
              ? 'border-[#FA8232] bg-orange-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <FaMoneyBillWave className="text-2xl text-green-600" />
          <div className="text-left">
            <div className="font-medium">Cash on Delivery</div>
            <div className="text-sm text-gray-500">Pay when you receive</div>
          </div>
        </button>
      </div>

      {/* Payment Forms */}
      <div className="mt-6">
        {paymentMethod === 'card' && stripeLoaded && stripePromise && (
          <Elements stripe={stripePromise}>
            <CardPaymentForm
              orderId={orderId}
              amount={amount}
              onSuccess={onSuccess}
              onError={onError}
            />
          </Elements>
        )}

        {paymentMethod === 'paypal' && (
          <div className="text-center py-8">
            {paypalLoaded ? (
              <div id="paypal-button-container"></div>
            ) : (
              <div className="text-gray-500">Loading PayPal...</div>
            )}
          </div>
        )}

        {paymentMethod === 'cod' && (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <p className="text-sm text-blue-800">
                <strong>Cash on Delivery:</strong> You will pay when your order is delivered to your doorstep.
              </p>
            </div>
            <button
              type="button"
              onClick={handleCODPayment}
              disabled={processing}
              className={`w-full bg-[#FA8232] text-white py-3 rounded-md font-medium hover:bg-orange-600 transition-colors ${
                processing ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {processing ? 'Processing...' : 'Confirm Order'}
            </button>
          </div>
        )}
      </div>

      {/* Security Notice */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <FaLock className="inline mr-1" />
        Your payment information is secure and encrypted
      </div>
    </div>
  );
};

export default Payment;
