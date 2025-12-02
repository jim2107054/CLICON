import React, { useState } from "react";
import { BsExclamationOctagon } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import SEO from "../../components/user/SEO";
import { PAGE_SEO } from "../config/seo.config";

const TrackOrder = () => {
  const navigate = useNavigate();
  const { orders } = useAppContext();
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleTrackOrder = () => {
    if (!orderId || !email) {
      setError("Please enter both Order ID and Email");
      return;
    }

    const order = orders.find(
      (o) => o.id === orderId && o.email.toLowerCase() === email.toLowerCase()
    );

    if (order) {
      navigate("/track-order-details", { state: { order } });
    } else {
      setError("Order not found. Please check your Order ID and Email.");
    }
  };
  return (
    <div>
      <div className="flex flex-col px-5 lg:px-36 py-10">
        <div className="flex flex-col w-full lg:w-3/4">
          <div>
            <p className="text-2xl my-3 font-medium">Track Order</p>
            <p className="text-base leading-tight">
              To track your order please enter your order ID in the input field
              below and press the “Track Order” button. this was given to you on
              your receipt and in the confirmation email you should have
              received.
            </p>
          </div>
          <div className="flex flex-col w-full lg:flex-row gap-5 mt-5">
            <div className="flex flex-col w-full lg:w-1/2">
              <label>Order ID:</label>
              <input
                className="h-10 border border-blue-300 px-5 py-2 rounded"
                type="text"
                placeholder="ID.."
                value={orderId}
                onChange={(e) => {
                  setOrderId(e.target.value);
                  setError("");
                }}
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <label>Billing Email:</label>
              <input
                className="h-10 border border-blue-300 px-5 py-2 rounded"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
          <p className="my-3 flex gap-3 leading-tight items-center text-gray-600 md:font-medium">
            <BsExclamationOctagon />
            <span className="">Order ID that we sent to you in your email address.</span>
          </p>
          {orders.length > 0 && (
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold mb-3">Your Recent Orders:</p>
              <div className="space-y-2">
                {orders.slice(-3).reverse().map((order) => (
                  <div
                    key={order.id}
                    className="flex justify-between items-center p-3 bg-white rounded border hover:border-btnColor cursor-pointer"
                    onClick={() => {
                      setOrderId(order.id);
                      setEmail(order.email);
                    }}
                  >
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${order.total.toFixed(2)}</p>
                      <p className="text-sm text-green-600">{order.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex justify-center md:justify-normal">
            <button
            onClick={handleTrackOrder}
            className="border my-5 flex items-center gap-3 w-fit px-8 py-3 rounded bg-btnColor text-white font-medium hover:scale-105 duration-300 transition-all"
          >
            TRACK ORDER{" "}
            <span>
              <FaArrowRight className="text-xl" />
            </span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;

{/*
    <div className="flex flex-col w-full lg:flex-row gap-5 mt-5">
            <div className="flex flex-col w-full lg:w-1/2">
              <label>Order ID:</label>
              <input
                className="h-10 border border-blue-300 px-5 py-2 rounded"
                type="text"
                placeholder="ID.."
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <label>Billing Email:</label>
              <input
                className="h-10 border border-blue-300 px-5 py-2 rounded"
                type="email"
                placeholder="Email Address"
              />
            </div>
          </div>
          <p className="my-3 flex gap-3 items-center text-gray-600 font-medium">
            <BsExclamationOctagon />
            <span>Order ID that we sended to your in your email address.</span>
          </p>
          <button
            onClick={() => navigate("/track-order-details")}
            className="border my-5 flex items-center gap-3 w-fit px-8 py-3 rounded bg-btnColor text-white font-medium hover:scale-105 duration-300 transition-all"
          >
            TRACK ORDER{" "}
            <span>
              <FaArrowRight className="text-xl" />
            </span>
          </button>
*/}