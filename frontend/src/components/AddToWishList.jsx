import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const AddToWishList = (props) => {
  const [cancled, setCancled] = useState(true);
  //distructure props
  const {
    product,
    addToCart,
    status,
  } = props;
  const OriginalPrice = 54;
  const DiscountPrice = 100;
  return (
    <div>
      {cancled && (
        <>
          <div className="flex border-b-2 mt-2 h-24 md:gap-2 xl:gap-2 2xl:gap-4 w-full py-2">
            <div className="flex flex-row gap-5 w-[40%] px-2 rounded line-clamp-2">
              <div className="flex items-center">
                <img className="object-cover h-5/6" src={product.image} alt="logo" />
              </div>
              <div className="flex items-center justify-center">
                <p className="leading-none text-xl text-gray-700">{product.title}</p>
              </div>
            </div>
            <div className="flex mx-10 justify-between w-[60%]">
              <div className="my-auto gap-2 w-[20%]">
                {OriginalPrice && (
                  <p className="text-center line-through text-sm font-medium text-gray-600">
                    ${OriginalPrice}
                  </p>
                )}
                <p className="text-center text-base font-medium">
                  ${DiscountPrice}
                </p>
              </div>
              <div className="items-center my-auto px-1 py-1 w-[25%]">
                <div className="flex gap-5 justify-center items-center px-2 py-1 w-full">
                  <p
                    className={`text-base font-medium ${
                      status === "In Stock" ? "text-green-500" : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                </div>
              </div>
              <div className="justify-center flex w-[40%]">
                <div className="flex items-center gap-2 lg:gap-5">
                  <button
                    onClick={()=> addToCart(product)}
                    className={`border flex items-center text-sm font-medium bg-btnColor duration-300 transition-all text-white px-2 lg:px-5 py-3 rounded
                ${
                  status === "In Stock"
                    ? "hover:scale-105"
                    : "bg-gray-500 cursor-not-allowed"
                }
                `}
                  >
                    ADD TO CARD
                    <IoCartOutline className="text-xl ml-2" />
                  </button>
                  <div className="flex items-center">
                    <MdOutlineCancel
                      onClick={() => setCancled(false)}
                      className="text-2xl text-gray-600 cursor-pointer hover:text-red-600"
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
