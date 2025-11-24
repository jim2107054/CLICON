import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaBox, FaTruck, FaHome } from "react-icons/fa";

const TrackOrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20">
        <h2 className="text-3xl font-bold mb-4">No Order Found</h2>
        <p className="text-gray-600 mb-8">Please enter your order details to track</p>
        <button
          onClick={() => navigate("/track-order")}
          className="bg-btnColor text-white px-8 py-3 rounded-md hover:scale-105 transition-all duration-300"
        >
          Track Order
        </button>
      </div>
    );
  }

  const orderSteps = [
    { icon: FaCheckCircle, label: "Order Placed", date: order.date, completed: true },
    { icon: FaBox, label: "Processing", date: order.date, completed: true },
    { icon: FaTruck, label: "Shipped", date: order.date, completed: order.status !== "Processing" },
    { icon: FaHome, label: "Delivered", date: null, completed: order.status === "Delivered" }
  ];

  return (
    <div className="px-4 md:px-10 lg:px-36 py-10">
      <h1 className="text-3xl font-bold mb-8">Order Tracking</h1>

      {/* Order Info Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Information</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Order ID:</span> {order.id}</p>
              <p><span className="font-medium">Order Date:</span> {new Date(order.date).toLocaleDateString()}</p>
              <p><span className="font-medium">Status:</span> <span className="text-green-600 font-semibold">{order.status}</span></p>
              <p><span className="font-medium">Total:</span> ${order.total.toFixed(2)}</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="space-y-2">
              <p className="font-medium">{order.firstName} {order.lastName}</p>
              <p>{order.shippingAddress}</p>
              <p><span className="font-medium">Email:</span> {order.email}</p>
              <p><span className="font-medium">Phone:</span> {order.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Progress */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Order Status</h2>
        <div className="relative">
          <div className="flex justify-between">
            {orderSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${
                  step.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  <step.icon className="text-2xl" />
                </div>
                <p className={`mt-3 text-sm font-medium ${step.completed ? 'text-green-600' : 'text-gray-500'}`}>
                  {step.label}
                </p>
                {step.date && (
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(step.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300 -z-0">
            <div
              className="h-full bg-green-500 transition-all duration-500"
              style={{
                width: `${(orderSteps.filter(s => s.completed).length - 1) * 33.33}%`
              }}
            />
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Order Items</h2>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 pb-4 border-b last:border-b-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div className="flex-1">
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/track-order")}
          className="bg-gray-200 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-300 transition-colors mr-4"
        >
          Track Another Order
        </button>
        <button
          onClick={() => navigate("/shop")}
          className="bg-btnColor text-white px-8 py-3 rounded-md hover:scale-105 transition-all duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default TrackOrderDetails;