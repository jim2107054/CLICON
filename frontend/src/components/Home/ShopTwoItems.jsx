import React from "react";
import { assetsHome } from "../../assets/assetsHome";
import { FaArrowRight } from "react-icons/fa";

const ShopTwoItems = () => {
  return (
    <div>
      <div className="flex flex-col px-5 lg:px-0 md:flex-row gap-5 lg:gap-10 my-10">
        {/*----------------Left Div-------------*/}
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 rounded items-center py-6 bg-gray-200 w-full md:w-1/2">
          <div className="flex flex-col gap-3 justify-center md:px-5 w-[55%]">
            <p className="text-sm text-white bg-blueButton px-2 py-0.5 w-fit rounded">
              INTRODUCING
            </p>
            <p className="text-2xl font-medium leading-tight">
              New Apple <br />
              Homepod Mini
            </p>
            <p className="text-base font-light leading-tight text-gray-800">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>
            <button className="flex items-center gap-2 shop-now">
              SHOP NOW{" "}
              <span className="text-xl">
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div className="flex md:w-[45%] px-5">
            <img src={assetsHome.appleHomepod} alt="" />
          </div>
        </div>
        {/*----------------Right Div-------------*/}
        <div className="flex flex-col md:flex-row rounded items-center bg-black w-full md:w-1/2 relative">
          <div className="flex py-6 flex-col gap-3 px-10 md:w-[55%]">
            <p className="text-sm bg-yellow-400 px-2 py-0.5 w-fit rounded">
              INTRODUCING NEW
            </p>
            <p className="text-2xl font-medium text-white leading-tight">
              Xiaomi Mi 11 Ultra
              <br />
              12GB+256GB
            </p>
            <p className="text-base font-light leading-tight text-white">
              *Data provided by internal laboratories. Industry measurment.
            </p>
            <button className="flex items-center gap-2 shop-now">
              SHOP NOW{" "}
              <span className="text-xl">
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div className="flex h-full md:w-[45%] px-5 relative">
            <p className="flex w-20 h-20 bg-blueButton rounded-full absolute right-[5%] top-[5%] items-center justify-center font-medium text-2xl text-white">
              $590
            </p>
            <img
              className="flex object-cover bottom-0 pt-5"
              src={assetsHome.Xiaomi11}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopTwoItems;
