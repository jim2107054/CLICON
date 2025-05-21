import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { IoTrophyOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { assetsHome } from "../../assets/assetsHome";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineArrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div>
      <div>
        {/* Hero section Upper section */}
        <div className="flex flex-col md:flex-row gap-5">
            {/* Hero section Left Div */}
            <div className="flex md:h-[50vh] lg:h-[55vh] w-full md:w-4/5 lg:w-3/4 gap-5 mb-5 bg-gray-200 rounded px-5">
                <div className="w-1/2 flex flex-col px-10 justify-center">
                <p className="flex items-center gap-2 text-blueButton font-medium text-xs lg:text-sm w-full"><span><TfiLayoutLineSolid className="lg:text-xl"/></span> THE BEST PLACE TO PLAY</p>
                <p className="lg:text-3xl text-2xl font-medium w-full">Xbox Consoles</p>
                <p className="font-light text-sm w-full my-3">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                <button className="shop-now flex gap-2 items-center">SHOP NOW <span><HiOutlineArrowRight className="text-xl"/></span></button>
                </div>
                <div className="w-1/2 flex relative">
                    <p className="w-20 h-20 rounded-full flex right-8 top-3 items-center justify-center text-2xl text-white font-medium absolute bg-blueButton">$299</p>
                    <img src={assetsHome.playStation} alt="playStation" />
                </div>
            </div>
            {/* Hero section Right Div */}
            <div className="flex md:flex-col md:h-[50vh] lg:h-[55vh] gap-2 w-full md:w-2/5 lg:w-1/4 rounded">
            <div className="flex bg-black h-1/2 rounded">
                <div className="w-3/5 flex">
                <div className="flex flex-col py-8 justify-center px-5 gap-2 w-full h-full ">
                    <p className="text-yellow-400 text-sm">SUMMER SALES</p>
                    <p className="text-white text-xl font-medium">New Google<br/> Pixel 6 Pro</p>
                    <button className="shop-now flex gap-2 text-sm items-center">SHOP NOW <span><HiOutlineArrowRight className="text-lg"/></span></button>
                </div>
                </div>
                <div className="w-2/5 h-full flex relative">
                    <p className="bg-yellow-400 rounded w-fit h-fit px-2 py-1 absolute right-5 top-10">29% OFF</p>
                    <img className="right-0 w-full h-2/3 bottom-0 absolute" src={assetsHome.heroPhone} alt="heroPhone" />
                </div>
            </div>
            <div className="flex flex-row-reverse  bg-gray-200 h-1/2 rounded">
                <div className="w-3/5">
                <div className="flex flex-col py-5 justify-center px-5 w-full h-full ">
                    <p className="text-black text-xl font-medium">Xiaomi<br/>FlipBuds Pro</p>
                    <p className="text-blueButton font-medium mt-1 mb-3">$299USD</p>
                    <button className="shop-now flex text-sm gap-2 items-center">SHOP NOW <span><HiOutlineArrowRight className="text-lg"/></span></button>
                </div>
                </div>
                <div className="w-2/5 flex items-center justify-center">
                    <img className="" src={assetsHome.earburds} alt="heroPhone" />
                </div>
            </div>
            </div>
        </div>
        {/* Hero section Lower section */}
        <div className="flex border justify-between items-center border-gray-200 rounded p-5">
          {/*----Fasted Delivery*/}
          <div className="flex gap-5 items-center">
            <div>
              <BsBoxSeam className="text-3xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg">FASTED DELIVERY</p>
              <p className="text-sm">Delivery in 24/H</p>
            </div>
          </div>
          <div className=" w-[1px] h-16 bg-gray-300"></div>
          {/*----Fasted Delivery*/}
          <div className="flex gap-5 items-center">
            <div>
              <IoTrophyOutline className="text-3xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg uppercase">24 Hours Return</p>
              <p className="text-sm">100% money-back guarantee</p>
            </div>
          </div>
          <div className=" w-[1px] h-16 bg-gray-300"></div>
          {/*----Fasted Delivery*/}
          <div className="flex gap-5 items-center">
            <div>
              <CiCreditCard1 className="text-3xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg uppercase">Secure Payment</p>
              <p className="text-sm">Your money is safe</p>
            </div>
          </div>
          <div className=" w-[1px] h-16 bg-gray-300"></div>
          {/*----Fasted Delivery*/}
          <div className="flex gap-5 items-center">
            <div>
              <TfiHeadphoneAlt className="text-3xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg uppercase">Support 24/7</p>
              <p className="text-sm">Live contact/message</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
