import React, { useState } from "react";
import { FaArrowRight, FaShoppingBag, FaTrash, FaTag } from "react-icons/fa";
import { MdLocalShipping, MdRefresh } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AddToCard from "../../components/user/AddToCard";
import { useAppContext } from "../../context/AppContext";
import SEO from "../../components/user/SEO";
import { PAGE_SEO } from "../../config/seo.config";

const ShopingCard = () => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");
  const [shippingOption, setShippingOption] = useState("free");

  const { cart, Total, addToCart, removeFromCart, updateCartQuantity, setCart } =
    useAppContext();

  // Coupon codes database
  const validCoupons = {
    "SAVE10": { type: "percentage", value: 10, minPurchase: 0 },
    "SAVE20": { type: "percentage", value: 20, minPurchase: 100 },
    "FLAT50": { type: "fixed", value: 50, minPurchase: 200 },
    "FREESHIP": { type: "shipping", value: 0, minPurchase: 0 },
    "WELCOME15": { type: "percentage", value: 15, minPurchase: 0 },
  };

  // Shipping options
  const shippingOptions = {
    free: { label: "Free Shipping", cost: 0, days: "5-7 business days" },
    standard: { label: "Standard Shipping", cost: 15, days: "3-5 business days" },
    express: { label: "Express Shipping", cost: 30, days: "1-2 business days" },
  };

  const subTotal = Total;
  const shippingCost = appliedCoupon?.type === "shipping" ? 0 : shippingOptions[shippingOption].cost;
  const tax = subTotal > 0 ? (subTotal * 0.08).toFixed(2) : 0; // 8% tax
  
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === "percentage") {
      discount = (subTotal * appliedCoupon.value / 100);
    } else if (appliedCoupon.type === "fixed") {
      discount = appliedCoupon.value;
    }
  }

  const NeedToPay = subTotal > 0 ? parseFloat(subTotal) + parseFloat(shippingCost) + parseFloat(tax) - parseFloat(discount) : 0;

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }

    const coupon = validCoupons[couponCode.toUpperCase()];
    if (!coupon) {
      setCouponError("Invalid coupon code");
      setAppliedCoupon(null);
      return;
    }

    if (subTotal < coupon.minPurchase) {
      setCouponError(`Minimum purchase of $${coupon.minPurchase} required`);
      setAppliedCoupon(null);
      return;
    }

    setAppliedCoupon({ ...coupon, code: couponCode.toUpperCase() });
    setCouponError("");
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      setCart([]);
    }
  };

  const handleContinueShopping = () => {
    navigate("/shop");
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/check-out");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      {/* Page Header */}
      <div className="px-4 md:px-10 lg:px-36 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">
              {cart.length > 0 ? `${cart.length} item${cart.length > 1 ? 's' : ''} in your cart` : 'Your cart is empty'}
            </p>
          </div>
          {cart.length > 0 && (
            <button
              onClick={handleClearCart}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaTrash />
              <span className="hidden md:inline">Clear Cart</span>
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-10 lg:px-36">
        {/*----------Shopping Cart Items----------*/}
        {cart.length > 0 ? (
          <div className="flex flex-col w-full lg:w-2/3 space-y-4">
            {/* Cart Items Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-btnColor to-orange-500 text-white px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 w-1/2">
                    <FaShoppingBag className="text-xl" />
                    <span className="font-semibold text-lg">Products</span>
                  </div>
                  <div className="hidden md:flex w-1/2 justify-between">
                    <span className="font-semibold w-1/4 text-center">Price</span>
                    <span className="font-semibold w-1/4 text-center">Quantity</span>
                    <span className="font-semibold w-1/4 text-center">Total</span>
                  </div>
                </div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-gray-200">
                {cart.map((product) => (
                  <AddToCard
                    key={product.id}
                    product={product}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    updateCartQuantity={updateCartQuantity}
                    Total={Total}
                    OriginalPrice={product.originalPrice || product.price * 1.2}
                    DiscountPrice={product.price}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleContinueShopping}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-btnColor text-btnColor rounded-lg font-semibold hover:bg-btnColor hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaShoppingBag />
                Continue Shopping
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-blueButton text-blueButton rounded-lg font-semibold hover:bg-blueButton hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MdRefresh className="text-xl" />
                Update Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="flex flex-col items-center justify-center space-y-4">
                <FaShoppingBag className="text-6xl text-gray-300" />
                <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
                <p className="text-gray-600 mb-4">Add items to your cart to get started</p>
                <button
                  onClick={handleContinueShopping}
                  className="flex items-center gap-2 px-8 py-3 bg-btnColor text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FaShoppingBag />
                  Start Shopping
                </button>
              </div>
            </div>
          </div>
        )}

        {/*----------Order Summary & Coupon----------*/}
        <div className="flex flex-col w-full lg:w-1/3 space-y-6">
          {/*--------Shipping Options----------*/}
          {cart.length > 0 && (
            <div className="hidden sm:block bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MdLocalShipping className="text-2xl text-btnColor" />
                <h3 className="text-xl font-bold text-gray-800">Shipping Method</h3>
              </div>
              <div className="space-y-3">
                {Object.entries(shippingOptions).map(([key, option]) => (
                  <label
                    key={key}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      shippingOption === key
                        ? "border-btnColor bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="shipping"
                        value={key}
                        checked={shippingOption === key}
                        onChange={(e) => setShippingOption(e.target.value)}
                        className="w-4 h-4 text-btnColor focus:ring-btnColor"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{option.label}</p>
                        <p className="text-sm text-gray-600">{option.days}</p>
                      </div>
                    </div>
                    <p className="font-bold text-btnColor">
                      {option.cost === 0 ? "Free" : `$${option.cost}`}
                    </p>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/*--------Coupon Code----------*/}
          <div className="hidden sm:block bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaTag className="text-xl text-btnColor" />
              <h3 className="text-xl font-bold text-gray-800">Discount Code</h3>
            </div>
            
            {appliedCoupon ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-green-700">
                    {appliedCoupon.code} Applied!
                  </span>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-sm text-green-600">
                  You saved ${discount.toFixed(2)}!
                </p>
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row gap-2 mb-2">
                  <input
                    className="h-12 border-2 border-gray-300 rounded-lg px-4 focus:border-btnColor focus:outline-none transition-colors"
                    type="text"
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value);
                      setCouponError("");
                    }}
                    placeholder="Enter coupon code"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="px-6 py-2.5 text-white bg-blueButton rounded-md font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Apply
                  </button>
                </div>
                {couponError && (
                  <p className="text-sm text-red-500 mt-2">{couponError}</p>
                )}
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Available Coupons:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• <span className="font-semibold">SAVE10</span> - 10% off</li>
                    <li>• <span className="font-semibold">SAVE20</span> - 20% off (min $100)</li>
                    <li>• <span className="font-semibold">FLAT50</span> - $50 off (min $200)</li>
                    <li>• <span className="font-semibold">FREESHIP</span> - Free shipping</li>
                    <li>• <span className="font-semibold">WELCOME15</span> - 15% off</li>
                  </ul>
                </div>
              </>
            )}
          </div>

          {/*--------Order Summary----------*/}
          {cart.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">
                Order Summary
              </h3>
              
              <div className="hidden sm:block space-y-4 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Shipping</span>
                  <span className="font-semibold">
                    {shippingCost === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>
                {appliedCoupon && discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span className="font-medium">Discount</span>
                    <span className="font-semibold">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Tax (8%)</span>
                  <span className="font-semibold">${parseFloat(tax).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800 sm:block hidden">Total</span>
                  <span className="text-xl font-bold text-gray-800 sm:hidden">Checkout</span>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-btnColor">
                      ${NeedToPay.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">USD</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center gap-3 px-6 py-2.5 bg-gradient-to-r from-btnColor to-orange-500 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="sm:hidden">CHECKOUT</span>
                <span className="hidden sm:inline">PROCEED TO CHECKOUT</span>
                <FaArrowRight />
              </button>

              <p className="text-center text-xs text-gray-500 mt-4 hidden sm:block">
                Secure checkout powered by SSL encryption
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopingCard;
