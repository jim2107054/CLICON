import React, { useState } from "react";
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { assets } from "../assets/assets";
import shopItems from "../assets/ShopItem";

const ShopingCard = () => {
  const [productQuantity, setproductQuantity] = useState(1);
  const [cancled, setCancled] = useState(true);
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
          {
            cancled && 
            <>
            <div className="flex bg-red-500 h-24 md:gap-2 xl:gap-2 2xl:gap-4 w-full py-2">
            <div className="flex bg-blue-500 flex-row gap-5 w-[55%] px-2 rounded line-clamp-2">
              <div className="flex items-center"><MdOutlineCancel onClick={()=>setCancled(false)} className="text-2xl text-red-600"/></div>
              <div className="flex items-center">
                <img className="object-cover" src={shopItems[1].image} alt="logo" />
              </div>
              <div className="flex justify-start">
                <p className="leading-none my-1 text-xl text-gray-700">{shopItems[1].title}</p>
              </div>
            </div>
            <div className="bg-yellow-300 my-auto w-[10%]">
              <p className="text-center line-through text-sm font-medium text-gray-600">
                $752
              </p>
              <p className="text-center text-base font-medium">$752</p>
            </div>
            <div className="bg-green-300 items-center my-auto px-1 py-1 md:w-[15%] lg:w-[15%]">
              <div className="flex gap-5 justify-center items-center border-2 border-gray-300 rounded px-2 py-1 w-full">
                <button
                  onClick={() =>
                    productQuantity > 1
                      ? setproductQuantity(productQuantity - 1)
                      : setproductQuantity(1)
                  }
                  className="font-medium"
                >
                  <FaMinus />
                </button>
                <p className="text-xl">{productQuantity}</p>
                <button onClick={() => setproductQuantity(productQuantity + 1)}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="bg-yellow-300 m-auto w-[10%]">
              <p className="text-center text-base font-medium">$75266666</p>
            </div>
          </div>
            </>
          }
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
            <button className="flex items-center gap-3 px-5 border bg-btnColor h-12 justify-center mx-4 mb-5 text-white font-medium rounded hover:scale-105 duration-500 transition-all">
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
