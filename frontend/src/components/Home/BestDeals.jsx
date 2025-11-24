import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import shopItems from "../../assets/ShopItem";
import ItemCard from "./../ItemCard";
import { assetsHome } from "./../../assets/assetsHome";
import { CiStar } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { useAppContext } from "../../context/AppContext";

const BestDeals = () => {
  const navigate = useNavigate();
  const { cart, Total, addToCart, addToWishList, wishList } = useAppContext();
  return (
    <div className="md:px-5 px-2 lg:px-0">
      {/*------------------Header Section-------------------*/}
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between md:items-center">
        {/*------------------Header Section Left Div-------------------*/}
        <div className="flex flex-col md:flex-row gap-5">
          <p className="flex text-xl font-medium">Best Deals</p>
          <div className="flex flex-col gap-1 md:flex-row md:gap-2">
            <p className="flex items-center text-sm font-medium">
              Deals ends in
            </p>
            <div className="flex gap-2 w-fit bg-yellow-400 rounded p-1">
              <p>00d</p>
              <p>:</p>
              <p>00h</p>
              <p>:</p>
              <p>00m</p>
              <p>:</p>
              <p>00s</p>
            </div>
          </div>
        </div>
        {/*------------------Header Section Right Div-------------------*/}
        <div>
          <p
            onClick={() => navigate("/shop")}
            className="flex items-center gap-2 cursor-pointer text-blueButton font-medium"
          >
            Browse All Product{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </p>
        </div>
      </div>
      {/*------------------Product Section-------------------*/}
      <div className="flex w-full flex-col md:flex-row gap-5 mt-8">
        {/*------------------Product Section Left Div-------------------*/}
        <div className="border border-gray-200 rounded h-fit py-4 hover:scale-105 w-full md:w-[25%]">
          <div className="flex justify-center items-center relative rounded p-1">
            <p className="absolute top-3 left-5 bg-yellow-400 px-2 py-1 rounded font-medium">
              32% OFF
            </p>
            <p className="absolute top-12 left-5 bg-red-500 px-2 py-0.5 rounded text-white">
              HOT
            </p>
            <img
              className="object-cover rounded-md"
              src={assetsHome.wPlayStation}
              alt=""
            />
          </div>
          <div>
            <div>
              <p className="px-5 flex gap-3 items-center">
                <CiStar className="text-2xl text-yellow-500 font-medium" />
                <span className="text-lg text-gray-700 font-medium">
                  (52,677)
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-3 px-5 mt-2">
              <p className="leading-tight line-clamp-2 font-medium">
                Xbox Series S - 512GB SSD Console with Wireless Controller - EU
                Versio. I love this product, because I hove to play game.
              </p>
              <p className="text-lg text-gray-600 font-medium">
                <span className="line-through text-gray-600 opacity-75">
                  $865.99
                </span>{" "}
                <span className="text-blueButton text-xl">$442.12</span>
              </p>
              <p className="text-base font-light leading-tight line-clamp-3">
                Games built using the Xbox Series X|S development kit showcase
                unparalleled load times, visuals.
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center px-5 mt-5">
              <button className="bg-orange-200 hidden lg:block rounded p-2">
                <GoHeart className="text-2xl" />
              </button>
              <button onClick={() => navigate('/shop')} className="shop-now flex items-center gap-2">
                <IoCartOutline className="text-xl" /> ADD TO CARD
              </button>
              <button className="bg-orange-200 hidden lg:block rounded p-2">
                <IoEyeOutline className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
        {/*------------------Product Section Right Div-------------------*/}
        <div className="w-full md:w-[75%]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {shopItems.length > 0 &&
              shopItems.slice(0, 8).map((item, index) => (
                <>
                  <ItemCard
                    key={index}
                    cart={cart}
                    Total={Total}
                    addToCart={addToCart}
                    product={item}
                    addToWishList={addToWishList}
                    wishList={wishList}
                  />
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
