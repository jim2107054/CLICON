import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";

const CustomerSupport = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-10 md:px-36 py-10">
        {/*------------First Div----------*/}
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10">
          {/*---------Left side--------------*/}
          <div className="flex flex-col gap-5 lg:w-1/2 justify-center px-10 py-5">
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
          <div className="bg-yellow-500 lg:w-1/2">
            <img
              className="w-full"
              src={assets.customerSupport}
              alt="support Image"
            />
          </div>
        </div>
        {/*------------Second Div----------*/}
        <div>
          <h1 className="text-2xl font-semibold text-center mt-5">
            What can we assist you with today?
          </h1>
          <div className="grid px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            <div className="customer-assist">
              <img className="" src={assets.truck} alt="" />
              <p>Track Order</p>
            </div>
            <div className="customer-assist">
              <img className="" src={assets.LockOpen} alt="" />
              <p>Reset Password</p>
            </div>
            <div className="customer-assist">
              <img className="" src={assets.creditCard} alt="" />
              <p>Payment Option</p>
            </div>
            <div className="customer-assist">
              <img className="" src={assets.user} alt="" />
              <p>User & Account</p>
            </div>
            <div className="customer-assist">
              <img className="" src={assets.stack} alt="" />
              <p>Wishlist & Compare</p>
            </div>
            <div className="customer-assist">
              <img className="" src={assets.vector} alt="" />
              <p>Shipping & Billing</p>
            </div>
            <div className="customer-assist">
              <img className="" src={assets.creditCard} alt="" />
              <p>Shoping Card & Wallet</p>
            </div>
            <div className="customer-assist">
              <img className="" src={assets.storefront} alt="" />
              <p>Sell on Clicon</p>
            </div>
          </div>
        </div>
        {/*------------Third Div----------*/}
        <hr />
        <div className="flex flex-col items-center justify-center px-5">
          <p className="text-2xl font-medium lg:text-center mt-5">Popular Topics</p>
          <div className="flex px-5 sm:px-10 lg:px-0 flex-col justify-center lg:flex-row lg:gap-20 gap-8 mt-5">
            <div>
              <ul className="gap-1 list-disc lg:list-none flex flex-col">
              <li>How do I return my item?</li>
              <li>What is Clicons Returns Policy?</li>
              <li>How long is the refund process?</li>
            </ul>
            </div>

            <div>
              <ul className="gap-1 list-disc lg:list-none flex flex-col">
              <li>What are the 'Delivery Timelines'?</li>
              <li>What is 'Discover Your Daraz Campaign 2022'?</li>
              <li>What is the Voucher & Gift Offer in this Campaign?</li>
            </ul>
            </div>

            <div>
              <ul className="gap-1 list-disc lg:list-none flex flex-col">
              <li>How to cancel Clicon Order.</li>
              <li>Ask the Digital and Device Community</li>
              <li>How to change my shop name?</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      {/*------------Fourth Div----------*/}
        <div className="bg-[#F2F4F5] px-5 md:px-44 py-10">
          <div className="flex flex-col  items-center">
            <p className="bg-blue-500  md:w-fit px-3 py-1 rounded text-white items-center justify-center mb-5">CONTACT US</p>
            <h1 className="text-3xl font-medium">Don't find your answer.</h1>
            <p className="text-3xl font-medium">Contact with us</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
            <div className="flex bg-white w-full lg:w-2/5 gap-5 px-5 py-5 rounded-lg shadow-lg mt-5">
              <div>
                <img src={assets.call} alt="" />
              </div>
              <div>
                <p className="font-medium">Call us now</p>
                <p className="text-base font-light leading-none mb-5">we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
                <p className="text-2xl mb-4">+1 234 567 890</p>
                <button className="flex  items-center gap-2 border bg-blueButton px-3 py-2 text-white rounded hover:scale-105 transition-all duration-200">CALL NOW <FaArrowRight/> </button>
              </div>
            </div>
            <div className="flex bg-white w-full lg:w-2/5 gap-5 px-5 py-5 rounded-lg shadow-lg mt-5">
              <div>
                <img src={assets.message} alt="" />
              </div>
              <div>
                <p className="font-medium">Chat with us</p>
                <p className="text-base font-light leading-none mb-5">we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with use now</p>
                <p className="text-2xl mb-4">Support@clicon.com</p>
                <button className="flex  items-center gap-2 border bg-greenButton px-3 py-2 text-white rounded hover:scale-105 transition-all duration-200">CONTACT US <FaArrowRight/> </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CustomerSupport;
