import React from "react";
import shopItems from "../../assets/ShopItem";
import ItemCard from "../ItemCard";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { assetsHome } from "../../assets/assetsHome";

const ComputerAccessories = (props) => {
  const { cart, Total, addToCart, addToWishList, wishList } = props;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col px-5 lg:px-0 gap-5 lg:flex-row">
      {/*----------------Computer Accessories Left-------------*/}
      <div className="flex flex-col gap-3 md:gap-5 w-full lg:w-[80%]">
        {/*----------------Header-------------*/}
        <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center">
          <div>
            <p className="text-lg md:text-xl font-medium">
              Computer Accessories
            </p>
          </div>
          <div className="flex gap-5">
            <div className="hidden md:flex gap-5">
              <p className="cursor-pointer hover:text-blueButton">
                ALL Products
              </p>
              <p className="cursor-pointer hover:text-blueButton">
                Keyboard & Mouse
              </p>
              <p className="cursor-pointer hover:text-blueButton">Headphone</p>
              <p className="cursor-pointer hover:text-blueButton">Webcam</p>
              <p className="cursor-pointer hover:text-blueButton">Printer</p>
            </div>
            <p
              onClick={() => navigate("/shop")}
              className="flex cursor-pointer items-center gap-1 text-btnColor"
            >
              Browse All Product{" "}
              <span>
                <FaArrowRight />
              </span>
            </p>
          </div>
        </div>
        {/*----------------Products-------------*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {shopItems.slice(16, 24).map((item, index) => (
            <ItemCard
              key={index}
              cart={cart}
              Total={Total}
              addToCart={addToCart}
              product={item}
              addToWishList={addToWishList}
              wishList={wishList}
            />
          ))}
        </div>
      </div>
      {/*----------------Computer Accessories Right-------------*/}
      <div className="w-full lg:w-[20%] flex flex-col md:flex-row lg:flex-col gap-5">
        {/*----------------Computer Accessories Right Top-------------*/}
        <div className="flex flex-col w-full md:w-1/2 lg:w-full items-center bg-lightOrange p-5 rounded-lg">
          <div>
            <img src={assetsHome.earburds} alt="" />
          </div>
          <div className="flex w-full flex-col gap-2">
            <p className="text-xl font-medium text-center">
              Xiaomi True Wireless Earbuds
            </p>
            <p className="font-light leading-tight">
              Escape the noise, It's time to hear the magic with Xiaomi Earbuds.
            </p>
            <p className="text-center text-sm my-2">
              Only for:{" "}
              <span className="border border-white px-2 py-0.5 bg-white rounded-md font-medium">
                $299USD
              </span>
            </p>
            <button
              className="flex items-center w-full h-10 justify-center text-white rounded gap-2 border bg-btnColor hover:scale-105 duration-200 transition-all"
              onClick={() => navigate("/shop")}
            >
              SHOP NOW{" "}
              <span className="text-xl">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        {/*----------------Computer Accessories Right Bottom-------------*/}
        <div className="flex flex-col w-full md:w-1/2 lg:w-full justify-center items-center text-white bg-lightBlue p-5 rounded">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-sm text-center w-fit px-5 py-0.5 bg-[#ffffff3b]">
              SUMMER SALES
            </p>
            <p className="text-2xl font-medium text-center">37% DISCOUNT</p>
          </div>
          <p className="text-center text-sm my-4">
            only for SmartPhone product.
          </p>
          <button
            className="flex items-center w-full h-10 justify-center text-white rounded gap-2 border bg-blueButton hover:scale-105 duration-200 transition-all"
            onClick={() => navigate("/shop")}
          >
            SHOP NOW{" "}
            <span className="text-xl">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComputerAccessories;
