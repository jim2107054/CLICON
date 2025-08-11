import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import AddToCard from "../components/AddToCard";
import { useAppContext } from "../context/AppContext";

const ShopingCard = () => {
  const [shippingCost, setShippingCost] = useState(0);
  const discount = 32;
  const tax = 32;

  const { cart, Total, addToCart, removeFromCart, updateCartQuantity } =
    useAppContext();
  const subTotal = Total;
  const NeedToPay = subTotal > 0 ? subTotal + shippingCost + tax - discount : 0;
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 px-2 md:px-10 lg:px-36 py-10">
        {/*----------Shoping Card----------*/}
        {cart.length > 0 ? (
          <div className="flex flex-col h-fit pb-5 rounded border-2 border-gray-300 w-full  lg:w-3/5">
            <p className="text-xl px-5 font-medium my-2">Shoping Card</p>
            <div className="flex border-2 w-full py-1 bg-gray-400 md:justify-between md:gap-5">
              <p className="md:w-1/2 w-2/5 text-sm md:font-bold text-gray-700">
                PRODUCTS
              </p>
              <div className="flex w-3/5 justify-between px-2 lg:w-1/2 lg:gap-24 md:px-3 items-center">
                <p className="text-sm md:font-bold text-gray-700 mx-auto">
                  PRICE
                </p>
                <p className="text-sm md:font-bold text-gray-700 mx-auto">
                  QUANTITY
                </p>
                <p className="text-sm md:font-bold text-gray-700 mx-auto">
                  TOTAL
                </p>
              </div>
            </div>
            {cart.length > 0 &&
              cart.map((product) => (
                <AddToCard
                  key={product.id}
                  product={product}
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  updateCartQuantity={updateCartQuantity}
                  Total={Total}
                  OriginalPrice={product.price}
                  DiscountPrice={500}
                />
              ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-96">
            <p className="text-gray-500 text-lg">
              Your shopping cart is empty.
            </p>
          </div>
        )}
        {/*----------Card Totals----------*/}
        <div className="flex flex-col w-full lg:w-2/6">
          {/*--------First Div----------*/}
          <div className="flex flex-col rounded border-2 border-gray-300 w-full">
            <p className="px-5 text-xl font-medium mt-2 mb-4">Card Totals</p>
            <div className="flex flex-col gap-2 px-5">
              <div className="flex justify-between">
                <p className="justify-between gap-10">Sub-total</p>
                <p className="justify-between gap-10">${subTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="justify-between gap-10">Shipping</p>
                <p className="justify-between gap-10">
                  {shippingCost == "Free" ? "Free" : shippingCost}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="justify-between gap-10">Discount</p>
                <p className="justify-between gap-10">${discount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="justify-between gap-10">Tax</p>
                <p className="justify-between gap-10">${tax.toFixed(2)}</p>
              </div>
            </div>
            <hr className="my-2 text-gray-300 h-0.5 mx-2" />
            <div className="flex mb-5 px-5 justify-between">
              <p className="justify-between gap-10">Total</p>
              <p className="justify-between font-semibold gap-10">
                ${NeedToPay.toFixed(2)} <span>USD</span>
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
