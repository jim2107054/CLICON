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
    Total,
  } = props;
  return (
    <div>
      {cart.length > 0 && (
        <>
          <div className="flex border-b-2 my-1 md:gap-2 xl:gap-2 2xl:gap-4 w-full py-2">
            <div className="flex flex-row md:gap-2 w-2/5 md:w-[55%] rounded">
              <div className="flex w-1/12 justify-center items-center">
                <MdOutlineCancel
                  onClick={() => removeFromCart(product.id)}
                  className="text-2xl w-fit text-gray-600 cursor-pointer hover:text-red-600"
                />
              </div>
              <div className="flex w-11/12 md:w-[90%] gap-2 items-center">
                <div className="flex w-1/3 items-center">
                  <img className="" src={product.image} alt="logo" />
                </div>
                <div className="flex w-2/3 h-full items-center justify-start">
                  <p className="leading-tight justify-center items-center line-clamp-2 text-xs md:text-lg text-gray-700">
                    {product.title}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-3/5 items-center justify-around md:gap-2 xl:gap-2 2xl:gap-4">
              <div className="mx-auto">
                {OriginalPrice && (
                  <p className="text-center line-through text-xs md:text-sm font-medium text-gray-600">
                    ${OriginalPrice}
                  </p>
                )}
                <p className="text-center text-sm md:text-base font-medium">
                  ${DiscountPrice}
                </p>
              </div>
              <div className="items-center m-auto px-1 py-1">
                <div className="flex gap-2 md:gap-5 justify-center items-center border-2 border-gray-300 rounded px-2 md:py-1 w-full">
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
              <div className="m-auto">
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
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCard;
