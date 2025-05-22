import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 px-10 py-8 lg:pb-4 lg:pt-10">
      <div className="flex gap-16 lg:gap-20 flex-col justify-center lg:flex-row ">
        {/*----------First div-------*/}
        <div className="flex flex-col gap-5">
          <div>
            <img src={assets.logo} alt="logo" />
          </div>
          <div className="text-white flex flex-col gap-3">
            <div>
              <p className="font-light">Customer Supports:</p>
              <p className="font-light">+880 123 456 789</p>
            </div>

            <div>
              <p className="font-light">4517 Washington Ave.</p>
              <p className="font-light">Manchester, Kentucky 39495</p>
            </div>
            <p className="mb-10 font-light">info@kinbo.com</p>
          </div>
        </div>
        {/*----------Second div-------*/}
        <div className="felx flex-col text-white">
          <h1 className="text-xl font-medium mb-5">TOP CATEGORY</h1>
          <p className="text-base font-light my-1">Computer & Laptop</p>
          <p className="text-base font-light my-1">SmartPhone</p>
          <p className="text-base font-light my-1">Headphone</p>
          <p className="text-base font-light my-1">Accessories</p>
          <p className="text-base font-light my-1">TV & Homes</p>
          <p className="flex text-base text-yellow-300 font-light my-1 gap-2 justify-center items-center">
            Browse All Product{" "}
            <span>
              <FaArrowRight className="text-xl text-[#f8f835]" />
            </span>
          </p>
        </div>
        {/*----------Third div-------*/}
        <div className="felx flex-col text-white">
          <h1 className="text-xl font-medium mb-5 text-center lg:text-start">Quick links</h1>
          <div className="flex flex-col justify-center items-center lg:items-start">
          <p onClick={()=>navigate('/shop')}  className="quick-links">Shop Product</p>
          <p onClick={()=>navigate('/shoping-card')}  className="quick-links">Shoping Cart</p>
          <p onClick={()=>navigate('/wish-list')}  className="quick-links">Wishlist</p>
          <p onClick={()=>navigate('/compare')}  className="quick-links">Compare</p>
          <p onClick={()=>navigate('/track-order')}  className="quick-links">Track Order</p>
          <p onClick={()=>navigate('/customer-support')}  className="quick-links">Customer Help</p>
          <p onClick={()=>navigate('/about-us')} className="quick-links">About Us</p>
          </div>
        </div>
        {/*----------Fourth div-------*/}
        <div className="felx flex-col text-white">
          <h1 className="text-xl text-center font-medium mb-5">DOWNLOAD APP</h1>
          <div className="flex flex-col items-center justify-center">
            <div className="flex mx-auto w-2/3 md:w-1/5 lg:w-full gap-3 my-1 items-center justify-center bg-gray-800 px-4 py-2 rounded font-light">
            <div>
              <img src={assets.playStoreIcon} alt="" />
            </div>
            <div>
              <p>Get it now</p>
              <h1>Google Play</h1>
            </div>
          </div>

          <div className="flex mx-auto w-2/3 md:w-1/5 lg:w-full gap-3 my-1 items-center justify-center bg-gray-800 px-4 py-2 rounded font-light">
            <div>
              <img src={assets.appleIcon} alt="" />
            </div>
            <div>
              <p>Get it now</p>
              <h1>App Store</h1>
            </div>
          </div>
          </div>
        </div>
        {/*----------Fifth div-------*/}
        <div className="flex flex-col px-2 w-full lg:w-1/4 text-white">
          <h1 className="text-xl font-medium lg:text-start text-center mb-5">POPULAR TAG</h1>
          <div className="flex gap-2 px-5 lg:px-0 flex-wrap">
            <button className="popular-tag-footer">Game</button>
            <button className="popular-tag-footer">iPhone</button>
            <button className="popular-tag-footer">TV</button>
            <button className="popular-tag-footer">Asus Laptops</button>
            <button className="popular-tag-footer">Macbook </button>
            <button className="popular-tag-footer">SSD</button>
            <button className="popular-tag-footer">Graphics Card </button>
            <button className="popular-tag-footer">Power Bank </button>
            <button className="popular-tag-footer">Smart TV</button>
            <button className="popular-tag-footer">Speaker</button>
            <button className="popular-tag-footer">Tablet</button>
            <button className="popular-tag-footer">Microwave</button>
            <button className="popular-tag-footer">Samsung</button>
          </div>
        </div>
      </div>
      <hr className="border border-t-0 bg-[white] m-0 mt-5 lg:mt-10" />

      {/*-------div for copyright-------*/}
      <div>
        <p className="text-white text-sm justify-center text-center pt-3">
          CLICON - eCommerce © 2025. Created by MD Jahid Hasan Jim (KUET-CSE)
        </p>
      </div>
    </div>
  );
};

export default Footer;
