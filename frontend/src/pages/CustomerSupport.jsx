import React from "react";
import { assets } from "../assets/assets";

const CustomerSupport = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-10 px-36 py-10">
        {/*------------First Div----------*/}
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10">
          {/*---------Left side--------------*/}
          <div className="flex flex-col gap-2 w-1/2 justify-center px-10 py-5">
            <p className="bg-yellow-300 w-fit px-2 py-1 rounded-sm font-medium">
              Help Center
            </p>
            <p className="text-2xl font-medium">How we can help you!</p>
            <div className="flex items-center gap-2 relative">
              <img
                className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2"
                src={assets.search}
                alt=""
              />

              <input
                className="h-10 pl-10 pr-24 border-[1px] border-gray-800 w-full rounded"
                type="text"
                placeholder="Enter your question or keyword"
              />

              <button className="bg-[#FA8232] absolute right-1 top-1/2 transform -translate-y-1/2 h-8 text-white px-4 py-1 rounded">
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
          <h1>What can we assist you with today?</h1>
          <div></div>
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
