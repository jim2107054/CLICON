import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";

const AddToWishList = (props) => {
  const [cancled, setCancled] = useState(true);
  //distructure props
  const { product, addToCart, addToWishList, removeFromWishList, wishList } =
    props;
  const OriginalPrice = 54;
  const DiscountPrice = 100;
  return (
    <div>
      {cancled && (
        <>
          <div className="flex border-b-2 mt-2 h-20 md:h-24 md:gap-5 xl:gap-2 2xl:gap-4 w-full py-2">
            <div className="flex flex-row gap-1 md:gap-5 w-[40%] md:px-2 rounded line-clamp-2">
              <div className="flex h-full items-center justify-center w-1/2 md:w-1/4">
                <img
                  className="object-cover md:h-full h-12"
                  src={product.image}
                  alt="logo"
                />
              </div>
              <div className="flex items-center w-1/2 md:w-2/3">
                <p className="leading-tight line-clamp-3 md:line-clamp-2 text-xs md:text-xl text-gray-700">
                  {product.title}
                </p>
              </div>
            </div>
            <div className="flex justify-around w-[60%]">
              <div className="my-auto gap-2 w-1/3">
                {OriginalPrice && (
                  <p className="text-center line-through text-sm font-medium text-gray-600">
                    ${OriginalPrice}
                  </p>
                )}
                <p className="text-center text-base font-medium">
                  ${DiscountPrice}
                </p>
              </div>
              <div className="items-center my-auto px-1 py-1 w-1/3">
                <div className="flex gap-5 justify-center text-center px-2 py-1 w-full">
                  <p
                    className={`text-base leading-tight text-center font-medium ${
                      product.status === "In Stock"
                        ? "text-green-500"
                        : "text-red-600"
                    }`}
                  >
                    {product.status}
                  </p>
                </div>
              </div>
              <div className="justify-center flex w-1/3">
                <div className="flex items-center gap-2 lg:gap-5">
                  <button
                    onClick={
                      product.status === "In Stock"
                        ? () => addToCart(product)
                        : null
                    }
                    className={`border flex items-center text-sm font-medium lg:gap-3 duration-300 transition-all text-white px-2 py-1.5 lg:px-5 lg:py-3 rounded
                ${
                  product.status === "In Stock"
                    ? "hover:scale-105 bg-blueButton hover:bg-blue-500 md:bg-btnColor"
                    : "bg-gray-500 cursor-not-allowed"
                }
                `}
                  >
                    <span className="hidden lg:block">ADD TO CARD</span>
                    <FaCartArrowDown className="md:text-xl text-lg " />
                  </button>
                  <div className="flex items-center">
                    <MdOutlineCancel
                      onClick={() => setCancled(false)}
                      className="lg:text-2xl text-lg text-gray-600 cursor-pointer hover:text-red-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddToWishList;
