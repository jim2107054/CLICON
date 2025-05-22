import React from "react";
import { assetsHome } from "../../assets/assetsHome";
import { CiStar } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import shopItems from "../../assets/ShopItem";
import ItemCard from "../ItemCard";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 mt-8">
        {/*------------------Left Div-------------*/}
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
              <button className="shop-now flex items-center gap-2">
                <IoCartOutline className="text-xl" /> ADD TO CARD
              </button>
            </div>
          </div>
        </div>
        {/*------------------Right Div-------------*/}
        <div className="w-full flex flex-col md:w-[75%]">
          {/* --------Header Section---------- */}
          <div className="flex flex-col lg:flex-row lg:justify-between mb-5">
            <div>
              <p className="text-xl font-medium">Featured Products</p>
            </div>
            <div className="flex gap-5 justify-between">
              <p className="featured-products">All Product</p>
              <p className="featured-products">Smart Phone</p>
              <p className="featured-products">Laptops</p>
              <p className="featured-products">HeadPhone</p>
              <p className="featured-products">TV</p>
              <p
                onClick={() => navigate("/shop")}
                className="featured-products flex items-center gap-1"
              >
                Browse All Product{" "}
                <span>
                  <FaArrowRight />
                </span>
              </p>
            </div>
          </div>
          {/* --------Product Section---------- */}
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {shopItems.length > 0 &&
                shopItems.slice(8, 16).map((item, index) => (
                  <>
                    <ItemCard
                      key={index}
                      id={item.id}
                      image={item.image}
                      rating={item.rating}
                      sell={item.sell}
                      title={item.title}
                      price={item.price}
                      offer={item.offer}
                    />
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
