import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaLock, FaCheckCircle, FaShoppingBag } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";
import { FiDollarSign } from "react-icons/fi";
import { BiLogoVenmo } from "react-icons/bi";
import { IoLogoPaypal } from "react-icons/io5";
import { FaAmazon, FaRegCreditCard, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import { MdLocalShipping, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

const CheckOut = () => {
  const navigate = useNavigate();
  const { cart, placeOrder, Total } = useAppContext();
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    country: "United States",
    state: "",
    city: "",
    zipCode: "",
    email: "",
    phone: "",
    // Shipping address fields
    shippingFirstName: "",
    shippingLastName: "",
    shippingAddress: "",
    shippingCountry: "United States",
    shippingState: "",
    shippingCity: "",
    shippingZipCode: "",
    shippingEmail: "",
    shippingPhone: "",
    // Payment fields
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    orderNotes: ""
  });
  const [errors, setErrors] = useState({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip code is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Phone must be at least 10 digits";
    }
    
    if (shipToDifferentAddress) {
      if (!formData.shippingFirstName) newErrors.shippingFirstName = "First name is required";
      if (!formData.shippingLastName) newErrors.shippingLastName = "Last name is required";
      if (!formData.shippingAddress) newErrors.shippingAddress = "Address is required";
      if (!formData.shippingCity) newErrors.shippingCity = "City is required";
      if (!formData.shippingState) newErrors.shippingState = "State is required";
      if (!formData.shippingZipCode) newErrors.shippingZipCode = "Zip code is required";
    }
    
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (paymentMethod === "creditCard" || paymentMethod === "debitCard") {
      if (!formData.cardName) newErrors.cardName = "Cardholder name is required";
      if (!formData.cardNumber) {
        newErrors.cardNumber = "Card number is required";
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
        newErrors.cardNumber = "Card number must be 16 digits";
      }
      if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
      if (!formData.cvv) {
        newErrors.cvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "CVV must be 3-4 digits";
      }
    }
    if (!agreedToTerms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }
    return newErrors;
  };

  const handleContinueToPayment = () => {
    const newErrors = validateStep1();
    
    if (Object.keys(newErrors).length === 0) {
      setCurrentStep(2);
      setErrors({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setErrors(newErrors);
    }
  };

  const handlePlaceOrder = () => {
    const newErrors = validateStep2();
    
    if (Object.keys(newErrors).length === 0) {
      const orderData = {
        ...formData,
        paymentMethod,
        shippingAddress: shipToDifferentAddress 
          ? `${formData.shippingAddress}, ${formData.shippingCity}, ${formData.shippingState}, ${formData.shippingCountry} - ${formData.shippingZipCode}`
          : `${formData.address}, ${formData.city}, ${formData.state}, ${formData.country} - ${formData.zipCode}`,
        billingAddress: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.country} - ${formData.zipCode}`
      };
      
      const order = placeOrder(orderData);
      navigate("/check-out-success", { state: { orderId: order.id } });
    } else {
      setErrors(newErrors);
    }
  };

  // Calculate order totals
  const subTotal = Total;
  const shippingCost = subTotal > 100 ? 0 : 15;
  const tax = (subTotal * 0.08).toFixed(2);
  const orderTotal = parseFloat(subTotal) + parseFloat(shippingCost) + parseFloat(tax);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-20">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md">
          <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add items to your cart to proceed with checkout</p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-gradient-to-r from-btnColor to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Secure Checkout</h1>
              <p className="text-gray-600 mt-1">Complete your purchase securely</p>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <FaLock className="text-xl" />
              <span className="hidden md:inline font-semibold">SSL Secured</span>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-3 ${currentStep >= 1 ? 'text-btnColor' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${currentStep >= 1 ? 'bg-btnColor text-white' : 'bg-gray-200'}`}>
                  {currentStep > 1 ? <FaCheckCircle /> : '1'}
                </div>
                <span className="hidden md:inline font-semibold">Shipping</span>
              </div>
              <div className={`h-1 w-16 md:w-32 ${currentStep >= 2 ? 'bg-btnColor' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center gap-3 ${currentStep >= 2 ? 'text-btnColor' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${currentStep >= 2 ? 'bg-btnColor text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="hidden md:inline font-semibold">Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {currentStep === 1 ? (
              <>
                {/* Billing Information */}
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <BsPersonFill className="text-2xl text-btnColor" />
                    <h2 className="text-2xl font-bold text-gray-800">Billing Information</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                          }`}
                          placeholder="John"
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                          }`}
                          placeholder="Doe"
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name <span className="text-gray-500">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-btnColor focus:outline-none"
                        placeholder="Company Inc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                          errors.address ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                        }`}
                        placeholder="123 Main Street"
                      />
                      {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-btnColor focus:outline-none"
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="India">India</option>
                          <option value="Pakistan">Pakistan</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          State/Province <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.state ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                          }`}
                          placeholder="California"
                        />
                        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.city ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                          }`}
                          placeholder="Los Angeles"
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Zip Code <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.zipCode ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                          }`}
                          placeholder="90001"
                        />
                        {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              errors.email ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                            }`}
                            placeholder="john@example.com"
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <MdPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                            }`}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ship to Different Address */}
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={shipToDifferentAddress}
                      onChange={(e) => setShipToDifferentAddress(e.target.checked)}
                      className="w-5 h-5 text-btnColor focus:ring-btnColor border-gray-300 rounded"
                    />
                    <span className="text-lg font-semibold text-gray-800">Ship to a different address</span>
                  </label>

                  {shipToDifferentAddress && (
                    <div className="mt-6 space-y-4 border-t pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="shippingFirstName"
                            value={formData.shippingFirstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              errors.shippingFirstName ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                            }`}
                            placeholder="John"
                          />
                          {errors.shippingFirstName && <p className="text-red-500 text-xs mt-1">{errors.shippingFirstName}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="shippingLastName"
                            value={formData.shippingLastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              errors.shippingLastName ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                            }`}
                            placeholder="Doe"
                          />
                          {errors.shippingLastName && <p className="text-red-500 text-xs mt-1">{errors.shippingLastName}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Street Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="shippingAddress"
                          value={formData.shippingAddress}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.shippingAddress ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                          }`}
                          placeholder="456 Oak Avenue"
                        />
                        {errors.shippingAddress && <p className="text-red-500 text-xs mt-1">{errors.shippingAddress}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="shippingCountry"
                            value={formData.shippingCountry}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-btnColor focus:outline-none"
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="Pakistan">Pakistan</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            State/Province <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="shippingState"
                            value={formData.shippingState}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              errors.shippingState ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                            }`}
                            placeholder="New York"
                          />
                          {errors.shippingState && <p className="text-red-500 text-xs mt-1">{errors.shippingState}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="shippingCity"
                            value={formData.shippingCity}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              errors.shippingCity ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                            }`}
                            placeholder="New York"
                          />
                          {errors.shippingCity && <p className="text-red-500 text-xs mt-1">{errors.shippingCity}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Zip Code <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="shippingZipCode"
                            value={formData.shippingZipCode}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              errors.shippingZipCode ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                            }`}
                            placeholder="10001"
                          />
                          {errors.shippingZipCode && <p className="text-red-500 text-xs mt-1">{errors.shippingZipCode}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleContinueToPayment}
                  className="w-full bg-gradient-to-r from-btnColor to-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Continue to Payment
                  <FaArrowRight />
                </button>
              </>
            ) : (
              <>
                {/* Payment Method */}
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <FaRegCreditCard className="text-2xl text-btnColor" />
                    <h2 className="text-2xl font-bold text-gray-800">Payment Method</h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                    <button
                      onClick={() => setPaymentMethod("creditCard")}
                      className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === "creditCard" ? 'border-btnColor bg-orange-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <FaRegCreditCard className="text-2xl text-btnColor" />
                      <span className="text-xs font-semibold text-center">Credit Card</span>
                    </button>

                    <button
                      onClick={() => setPaymentMethod("debitCard")}
                      className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === "debitCard" ? 'border-btnColor bg-orange-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <FaRegCreditCard className="text-2xl text-green-600" />
                      <span className="text-xs font-semibold text-center">Debit Card</span>
                    </button>

                    <button
                      onClick={() => setPaymentMethod("paypal")}
                      className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === "paypal" ? 'border-btnColor bg-orange-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <IoLogoPaypal className="text-2xl text-blue-600" />
                      <span className="text-xs font-semibold text-center">PayPal</span>
                    </button>

                    <button
                      onClick={() => setPaymentMethod("venmo")}
                      className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === "venmo" ? 'border-btnColor bg-orange-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <BiLogoVenmo className="text-2xl text-blue-400" />
                      <span className="text-xs font-semibold text-center">Venmo</span>
                    </button>

                    <button
                      onClick={() => setPaymentMethod("cod")}
                      className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === "cod" ? 'border-btnColor bg-orange-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <FiDollarSign className="text-2xl text-green-600" />
                      <span className="text-xs font-semibold text-center">Cash on Delivery</span>
                    </button>
                  </div>

                  {(paymentMethod === "creditCard" || paymentMethod === "debitCard") && (
                    <div className="space-y-4 border-t pt-6">
                      <div className="flex gap-3 mb-4">
                        <FaCcVisa className="text-4xl text-blue-700" />
                        <FaCcMastercard className="text-4xl text-red-600" />
                        <FaCcAmex className="text-4xl text-blue-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Cardholder Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.cardName ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Card Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                            errors.cardNumber ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                          }`}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                        />
                        {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Expiry Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              errors.expiryDate ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                            }`}
                            placeholder="MM/YY"
                            maxLength="5"
                          />
                          {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            CVV <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                              errors.cvv ? 'border-red-500' : 'border-gray-300 focus:border-btnColor'
                            }`}
                            placeholder="123"
                            maxLength="4"
                          />
                          {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div className="border-t pt-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <IoLogoPaypal className="text-5xl text-blue-600 mx-auto mb-3" />
                        <p className="text-gray-700">You will be redirected to PayPal to complete your purchase securely.</p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "venmo" && (
                    <div className="border-t pt-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <BiLogoVenmo className="text-5xl text-blue-400 mx-auto mb-3" />
                        <p className="text-gray-700">You will be redirected to Venmo to complete your purchase.</p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "cod" && (
                    <div className="border-t pt-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <FiDollarSign className="text-4xl text-green-600 mx-auto mb-3" />
                        <p className="text-gray-700 text-center">Pay with cash when your order is delivered. Additional charges may apply.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Order Notes */}
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Order Notes (Optional)</h3>
                  <textarea
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-btnColor focus:outline-none resize-none"
                    rows="4"
                    placeholder="Special instructions for delivery..."
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      className="w-5 h-5 mt-1 text-btnColor focus:ring-btnColor border-gray-300 rounded"
                    />
                    <span className="text-gray-700">
                      I agree to the <a href="/terms" className="text-btnColor hover:underline font-semibold">Terms & Conditions</a> and <a href="/privacy" className="text-btnColor hover:underline font-semibold">Privacy Policy</a> <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.terms && <p className="text-red-500 text-sm mt-2">{errors.terms}</p>}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Back to Shipping
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    <FaLock />
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b-2">Order Summary</h3>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">{item.title}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-600">Qty: {item.quantity}</span>
                        <span className="text-sm font-bold text-btnColor">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-4 border-t pt-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className={`font-semibold ${shippingCost === 0 ? 'text-green-600' : ''}`}>
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (8%)</span>
                  <span className="font-semibold">${tax}</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t-2 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total</span>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-btnColor">${orderTotal.toFixed(2)}</p>
                    <p className="text-xs text-gray-500">USD</p>
                  </div>
                </div>
              </div>

              {/* Free Shipping Banner */}
              {subTotal < 100 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                  <MdLocalShipping className="text-2xl text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-700">
                    Add <span className="font-bold text-btnColor">${(100 - subTotal).toFixed(2)}</span> more for FREE shipping!
                  </p>
                </div>
              )}

              {subTotal >= 100 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                  <FaCheckCircle className="text-2xl text-green-600 mx-auto mb-1" />
                  <p className="text-sm font-semibold text-green-700">
                    You qualify for FREE shipping! 🎉
                  </p>
                </div>
              )}

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t text-center">
                <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                  <FaLock className="text-lg" />
                  <span className="text-sm font-semibold">Secure Checkout</span>
                </div>
                <p className="text-xs text-gray-500">Your payment information is encrypted and secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
