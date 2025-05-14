import React from "react";
import { assets } from "../assets/assets";

const CustomerSupport = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-10 px-36 py-10">
        {/*------------First Div----------*/}
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10">
          {/*---------Left side--------------*/}
          <div className="flex flex-col gap-5 w-1/2 justify-center px-10 py-5">
            <p className="bg-yellow-300 w-fit px-2 py-1 rounded-sm font-medium">
              Help Center
            </p>
            <p className="text-2xl font-medium">How we can help you!</p>
            <div className="flex items-center gap-2 relative">
              <img
                className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
                src={assets.search}
                alt=""
              />

              <input
                className="h-12 pl-10 pr-24 border-[1px] border-gray-800 w-full rounded"
                type="text"
                placeholder="Enter your question or keyword"
              />

              <button className="bg-[#FA8232] absolute right-3 top-1/2 transform -translate-y-1/2 h-8 text-white px-4 py-1 rounded">
                Search
              </button>
            </div>
          </div>
          {/*---------Right side--------------*/}
          <div className="bg-yellow-500 w-1/2">
            <img
              className="w-full"
              src={assets.customerSupport}
              alt="support Image"
            />
          </div>
        </div>
        {/*------------Second Div----------*/}
        <div>
          <h1 className="text-2xl font-semibold text-center mt-5">What can we assist you with today?</h1>
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            <div className="customer-assist">
              <img className="w-7" src={assets.truck} alt="" />
              <p>Track Order</p>
            </div>
            <div className="customer-assist">
              <img className="w-7" src={assets.LockOpen} alt="" />
              <p>Reset Password</p>
            </div>
            <div className="customer-assist">
              <img className="w-7" src={assets.creditCard} alt="" />
              <p>Payment Option</p>
            </div>
            <div className="customer-assist">
              <img className="w-7" src={assets.user} alt="" />
              <p>User & Account</p>
            </div>
            <div className="customer-assist">
              <img className="w-7" src={assets.stack} alt="" />
              <p>Wishlist & Compare</p>
            </div>
            <div className="customer-assist">
              <img className="w-7" src={assets.vector} alt="" />
              <p>Shipping & Billing</p>
            </div>
            <div className="customer-assist">
              <img className="w-7" src={assets.creditCard} alt="" />
              <p>Shoping Card & Wallet</p>
            </div>
            <div className="customer-assist">
              <img className="w-7" src={assets.storefront} alt="" />
              <p>Sell on Clicon</p>
            </div>
          </div>
        </div>
        {/*------------Third Div----------*/}
        <div></div>
        {/*------------Fourth Div----------*/}
        <div></div>
      </div>
    </div>
  );
};

export default CustomerSupport;
