import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { BsPersonFill } from "react-icons/bs";
import { MdEmail, MdPhone, MdLocationOn, MdEdit } from "react-icons/md";
import { FaShoppingBag, FaHeart, FaCog } from "react-icons/fa";

const MyAccount = () => {
  const navigate = useNavigate();
  const { user, orders, cart, wishList } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "John",
    lastName: user?.lastName || "Doe",
    email: user?.email || "john.doe@example.com",
    phone: user?.phone || "+1 (555) 123-4567",
    address: user?.address || "123 Main Street, Los Angeles, CA 90001"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Here you would typically update the user context
    setIsEditing(false);
  };

  const recentOrders = orders.slice(-3).reverse();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Account</h1>
        <p className="text-gray-600">Manage your account information and orders</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <BsPersonFill className="text-3xl text-btnColor" />
                  <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 px-4 py-2 bg-blueButton text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  <MdEdit />
                  {isEditing ? "Cancel" : "Edit"}
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border-2 rounded-lg ${
                        isEditing 
                          ? 'border-gray-300 focus:border-btnColor' 
                          : 'border-gray-200 bg-gray-50'
                      } focus:outline-none transition-colors`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3 border-2 rounded-lg ${
                        isEditing 
                          ? 'border-gray-300 focus:border-btnColor' 
                          : 'border-gray-200 bg-gray-50'
                      } focus:outline-none transition-colors`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg ${
                        isEditing 
                          ? 'border-gray-300 focus:border-btnColor' 
                          : 'border-gray-200 bg-gray-50'
                      } focus:outline-none transition-colors`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <MdPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg ${
                        isEditing 
                          ? 'border-gray-300 focus:border-btnColor' 
                          : 'border-gray-200 bg-gray-50'
                      } focus:outline-none transition-colors`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <MdLocationOn className="absolute left-3 top-4 text-gray-400 text-xl" />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                      rows="3"
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg resize-none ${
                        isEditing 
                          ? 'border-gray-300 focus:border-btnColor' 
                          : 'border-gray-200 bg-gray-50'
                      } focus:outline-none transition-colors`}
                    />
                  </div>
                </div>

                {isEditing && (
                  <button
                    onClick={handleSave}
                    className="w-full bg-gradient-to-r from-btnColor to-orange-500 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
                  >
                    Save Changes
                  </button>
                )}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Recent Orders</h2>
                <button
                  onClick={() => navigate("/track-order")}
                  className="text-btnColor hover:underline font-semibold"
                >
                  View All
                </button>
              </div>

              {recentOrders.length > 0 ? (
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-btnColor transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-gray-800">Order #{order.id}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{new Date(order.date).toLocaleDateString()}</span>
                        <span className="font-bold text-btnColor">${order.total.toFixed(2)}</span>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        {order.items.length} item{order.items.length > 1 ? 's' : ''}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FaShoppingBag className="text-5xl text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-600">No orders yet</p>
                  <button
                    onClick={() => navigate("/shop")}
                    className="mt-4 px-6 py-2 bg-btnColor text-white rounded-lg hover:bg-orange-600 transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Quick Stats */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="bg-gradient-to-br from-btnColor to-orange-500 rounded-xl shadow-lg p-6 text-white">
              <FaShoppingBag className="text-4xl mb-3" />
              <h3 className="text-3xl font-bold mb-1">{orders.length}</h3>
              <p className="text-orange-100">Total Orders</p>
              <button
                onClick={() => navigate("/track-order")}
                className="mt-4 w-full bg-white text-btnColor py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                View Orders
              </button>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl shadow-lg p-6 text-white">
              <FaHeart className="text-4xl mb-3" />
              <h3 className="text-3xl font-bold mb-1">{wishList.length}</h3>
              <p className="text-pink-100">Wishlist Items</p>
              <button
                onClick={() => navigate("/wish-list")}
                className="mt-4 w-full bg-white text-red-500 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                View Wishlist
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <FaShoppingBag className="text-4xl mb-3" />
              <h3 className="text-3xl font-bold mb-1">{cart.length}</h3>
              <p className="text-blue-100">Cart Items</p>
              <button
                onClick={() => navigate("/shoping-card")}
                className="mt-4 w-full bg-white text-blue-500 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                View Cart
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <button
                onClick={() => navigate("/settings")}
                className="w-full flex items-center justify-center gap-2 py-3 border-2 border-gray-300 rounded-lg hover:border-btnColor hover:bg-orange-50 transition-all font-semibold text-gray-700"
              >
                <FaCog className="text-xl" />
                Account Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
