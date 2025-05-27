import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const AddToCard = (props) => {
  //distructure props
  const {
    OriginalPrice,
    DiscountPrice,
    cart,
    product,
    removeFromCart,
    updateCartQuantity,
    Total
  } = props;
  return (
    <div>
      {cart.length > 0 && (
        <>
          <div className="flex border-b-2 my-1 h-24 md:gap-2 xl:gap-2 2xl:gap-4 w-full py-2">
            <div className="flex flex-row md:gap-5 w-1/2 md:w-[55%] px-2 rounded line-clamp-2">
              <div className="flex items-center">
                <MdOutlineCancel
                  onClick={() => removeFromCart(product.id)}
                  className="text-2xl text-gray-600 cursor-pointer hover:text-red-600"
                />
              </div>
              <div className="flex items-center">
                <img className="object-cover" src={product.image} alt="logo" />
              </div>
              <div className="flex justify-start">
                <p className="leading-none my-1 line-clamp-2 md:text-xl text-gray-700">
                  {product.title}
                </p>
              </div>
            </div>
            <div className="my-auto w-[10%]">
              {OriginalPrice && (
                <p className="text-center line-through text-sm font-medium text-gray-600">
                  ${OriginalPrice}
                </p>
              )}
              <p className="text-center text-base font-medium">
                ${DiscountPrice}
              </p>
            </div>
            <div className="items-center m-auto px-1 py-1 w-1/5 md:w-[15%] lg:w-[15%]">
              <div className="flex gap-2 md:gap-5 justify-center items-center border-2 border-gray-300 rounded px-2 py-1 w-full">
                <button
                  onClick={() => {
                    const foundItem =
                      cart.length > 0 &&
                      cart.find((item) => item.id === product.id);
                    if (foundItem.quantity > 1) {
                      updateCartQuantity(product.id, foundItem.quantity - 1);
                    }
                  }}
                  className="md:font-medium"
                >
                  <FaMinus />
                </button>
                <p className="md:text-xl">
                  {(() => {
                    const foundItem =
                      cart.length > 0 &&
                      cart.find((item) => item.id === product.id);
                    return foundItem ? foundItem.quantity : 1;
                  })()}
                </p>
                <button
                  onClick={() => {
                    const foundItem =
                      cart.length > 0 &&
                      cart.find((item) => item.id === product.id);
                    updateCartQuantity(product.id, foundItem.quantity + 1);
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="m-auto w-[10%]">
              <p className="text-center text-base font-medium">
                {/* Calculate total price for this product */}$
                {(() => {
                  const foundItem =
                    cart.length > 0 &&
                    cart.find((item) => item.id === product.id);
                  return foundItem
                    ? DiscountPrice * foundItem.quantity
                    : DiscountPrice;
                })()}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCard;
