import React, { useState } from "react";
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { assets } from "../assets/assets";
import shopItems from "../assets/ShopItem";
import AddToCard from "../components/AddToCard";

const ShopingCard = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 px-10 lg:px-36 py-10">
        {/*----------Shoping Card----------*/}
        <div className="flex flex-col h-fit pb-5 rounded border-2 border-gray-300 w-full  lg:w-3/5">
          <p className="text-xl px-5 font-medium my-2">Shoping Card</p>
          <div className="flex border-2 px-5 py-2 bg-gray-400 justify-between gap-5">
            <p className="w-2/4 text-sm font-bold text-gray-700">PRODUCTS</p>
            <p className="text-sm font-bold text-gray-700">PRICE</p>
            <p className="text-sm font-bold text-gray-700">QUANTITY</p>
            <p className="text-sm font-bold text-gray-700">SUB-TOTAL</p>
          </div>
          <AddToCard
          image={shopItems[0].image}
          title={shopItems[0].title}
          price={shopItems[0].price}
          />
          <AddToCard
          image={shopItems[1].image}
          title={shopItems[1].title}
          price={shopItems[1].price}
          />
          <AddToCard
          image={shopItems[3].image}
          title={shopItems[3].title}
          price={shopItems[3].price}
          />
          <AddToCard
          image={shopItems[2].image}
          title={shopItems[2].title}
          price={shopItems[2].price}
          />
        </div>
        {/*----------Card Totals----------*/}
        <div className="flex flex-col w-full lg:w-2/6">
          {/*--------First Div----------*/}
          <div className="flex flex-col rounded border-2 border-gray-300 w-full">
            <p className="px-5 text-xl font-medium mt-2 mb-4">Card Totals</p>
            <div className="flex flex-col gap-2 px-5">
              <div className="flex justify-between">
                <p className="justify-between gap-10">Sub-total</p>
                <p className="justify-between gap-10">$320</p>
              </div>
              <div className="flex justify-between">
                <p className="justify-between gap-10">Shipping</p>
                <p className="justify-between gap-10">Free</p>
              </div>
              <div className="flex justify-between">
                <p className="justify-between gap-10">Discount</p>
                <p className="justify-between gap-10">$32</p>
              </div>
              <div className="flex justify-between">
                <p className="justify-between gap-10">Tax</p>
                <p className="justify-between gap-10">$320</p>
              </div>
            </div>
            <hr className="my-2 text-gray-300 h-0.5 mx-2" />
            <div className="flex mb-5 px-5 justify-between">
              <p className="justify-between gap-10">Total</p>
              <p className="justify-between font-semibold gap-10">
                $357.99 <span>USD</span>
              </p>
            </div>
            <button className="flex items-center md:gap-3 px-0 md:px-5 border bg-btnColor h-12 justify-center mx-4 mb-5 text-white font-medium rounded hover:scale-105 duration-500 transition-all">
              PROCEED TO CHECKOUT <FaArrowRight />{" "}
            </button>
          </div>
          {/*--------Second Div----------*/}
          <div className="flex flex-col rounded border-2 border-gray-300 w-full px-5 py-3 mt-5">
            <p className="text-base font-medium my-5 text-gray-800 border-b">
              Coupon Code
            </p>
            <div>
              <input
                className="h-10 border border-blue-300 rounded px-5 w-full"
                type="email"
                placeholder="Email address"
              />
              <button className="my-3 border px-4 py-2 text-white bg-blueButton rounded hover:scale-105 duration-300 transition-all">
                APPLY COUPON
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingCard;
