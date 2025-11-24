import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { useAppContext } from "../context/AppContext";

const CheckOutSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getOrderById } = useAppContext();
  
  const orderId = location.state?.orderId;
  const order = orderId ? getOrderById(orderId) : null;

  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-5 px-10 lg:px-36 py-20">
        <div className="flex flex-col w-full gap-5 lg:w-1/2 items-center ">
          {/*------------image div-------------*/}
          <div>
            <img
              className="h-20 w-20 rounded-full bg-[#67f7679f] p-2 border-2 border-green-500"
              src={assets.checks}
              alt=""
            />
          </div>
          {/*------------text div-------------*/}
          <div className="text-center">
            <p className="text-2xl font-medium">
              Your order is successfully placed
            </p>
            {order && (
              <div className="mt-4">
                <p className="text-xl font-semibold text-btnColor">Order ID: {order.id}</p>
                <p className="text-lg mt-2">Total: ${order.total.toFixed(2)}</p>
                <p className="text-gray-600 mt-2">
                  Order Date: {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
            )}
            <p className="px-20 font-light leading-none my-4">
              Thank you for your purchase! We'll send you a confirmation email shortly with your order details and tracking information.
            </p>
          </div>
          {/*------------button div-------------*/}
          <div className="flex gap-5 mt-5">
            <button 
              onClick={() => navigate("/")}
              className="border-2 border-btnColor flex gap-2 items-center hover:scale-105 duration-300 transition-all rounded font-medium px-5 py-2 text-btnColor"
            >
              <span>
                <BsStack />
              </span>{" "}
              GO TO HOME
            </button>
            <button 
              onClick={() => navigate("/track-order")}
              className="border-2 bg-btnColor flex gap-2 items-center hover:scale-105 duration-300 transition-all rounded font-medium px-5 py-2 text-white"
            >
              TRACK ORDER{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutSuccess;
