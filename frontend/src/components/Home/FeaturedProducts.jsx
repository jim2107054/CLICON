import React from "react";
import { assetsHome } from "../../assets/assetsHome";
import { FaArrowRight } from "react-icons/fa6";
import shopItems from "../../assets/ShopItem";
import ItemCard from "../ItemCard";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col-reverse px-2 md:px-5 lg:px-0 md:flex-row gap-5 mt-8">
        {/*------------------Left Div-------------*/}
        <div className="border bg-yellowButton border-gray-200 rounded h-fit hover:scale-105 w-full md:w-[25%]">
          <div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <p className="px-5 mt-5 flex text-xs font-medium text-red-600 items-center">
                COMPUTER & ACCESSORIES
              </p>
              <p className="text-2xl font-medium">32% Discount</p>
              <p className="text-sm text-gray-800">For all ellectronics products</p>
              <div className="flex gap-5 justify-between items-center text-sm my-2">
                <p>Offers ends in:</p>
                <p className="text-xs border bg-white border-gray-300 px-2 py-0.5">ENDS OF EID</p>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center px-5 my-5">
              <button className="shop-now flex items-center gap-2">
               SHOP NOW <FaArrowRight className="text-xl" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center relative rounded">
            <img
              className="object-cover rounded-md"
              src={assetsHome.electionicsItems}
              alt=""
            />
          </div>
        </div>
        {/*------------------Right Div-------------*/}
        <div className="w-full flex flex-col md:w-[75%]">
          {/* --------Header Section---------- */}
          <div className="flex flex-col lg:flex-row lg:justify-between mb-5">
            <div>
              <p className="text-xl font-medium">Featured Products</p>
            </div>
            <div className="md:flex hidden gap-5 justify-between">
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
