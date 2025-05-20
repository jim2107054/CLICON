import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shopItems from "../assets/ShopItem";

const CheckOut = () => {
  const quantity = 1;
  const price = 320;
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 px-10 lg:px-36 py-10">
        {/*------------Billing Information-------------*/}
        <div className="bg-red-300 flex flex-col w-full lg:w-4/6">
          aldfjaslfl
        </div>
        {/*------------Order Summery-------------*/}
        <div>
          <div className="flex flex-col w-full">
            {/*--------First Div----------*/}
            <div className="flex flex-col rounded border-2 border-gray-300 w-full">
              <p className="px-5 text-xl font-medium mt-2 mb-4">
                Order Summery
              </p>
              {/*--------Items with price,quantity,image----------*/}
              <div>
                <div className="flex items-center gap-5 px-5  border-b">
                  {/*-------image-----------*/}
                  <div className="w-24 h-24 flex">
                    <img
                      className="items-center justify-center self-center"
                      src={shopItems[0].image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {/*-------Product Name-----------*/}
                    <p className="line-clamp-2 leading-none">
                      {shopItems[0].title}
                    </p>
                    {/*-------Product Price and quantity-----------*/}
                    <p className="flex gap-1">
                      <span className="text-gray-600 font-medium">
                        {quantity}
                      </span>{" "}
                      x
                      <span className="text-blue-400 font-medium">
                        ${price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
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
                PLACE ORDER <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
