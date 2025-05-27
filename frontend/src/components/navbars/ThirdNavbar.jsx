import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineBars4 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const ThirdNavbar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center gap-5 py-2 px-36">
        <div className="bg-gray-200 border-1 px-2 py-1">
          <select
            className="bg-gray-200 py-1 rounded"
            name="allCategory"
            id="allCategory"
          >
            <option value="allCategory">All Category</option>
            <option value="computer">Computer</option>
            <option value="laptop">Laptop</option>
            <option value="smartphone">Smartphone</option>
            <option value="headphone">Headphone</option>
            <option value="accessories">Accessories</option>
            <option value="Game">Game</option>
          </select>
        </div>
        <div className="flex gap-1 text-base">
          <NavLink
            to="/track-order"
            className="flex gap-1 text-base font-medium items-center thirdNavbar"
          >
            <img className="h-5" src={assets.location} alt="" />
            <p>Track Order</p>
          </NavLink>
        </div>
        <div className="flex gap-1 text-base font-medium items-center">
          <NavLink
            to="/compare"
            className="flex gap-1 text-base font-medium items-center thirdNavbar"
          >
            <img className="h-5" src={assets.compare} alt="" />
            <p>Compare</p>
          </NavLink>
        </div>
        <div className="flex gap-1 text-base font-medium items-center group">
          <NavLink
            to="/customer-support"
            className="flex gap-1 text-base font-medium items-center thirdNavbar"
          >
            <img className="h-5" src={assets.headphone} alt="" />
            <p>Customer Support</p>
          </NavLink>
        </div>
        <div className="flex gap-1 text-base font-medium items-center">
          <NavLink
            to="/need-help"
            className="flex gap-1 text-base font-medium items- thirdNavbar"
          >
            <img className="h-5" src={assets.needHelp} alt="" />
            <p>Need Help</p>
          </NavLink>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center relative bg-lightBlue">
        <div className="flex justify-between w-full px-3 py-2">
          <div className="text-green-400">
            <img onClick={() => navigate("/")} src={assets.logo} alt="" />
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineBars4
              onClick={() => setShowNavBar(!showNavBar)}
              className="text-4xl text-white cursor-pointer"
            />
          </div>
        </div>
        {showNavBar && (
          <div className="flex flex-col absolute bg-lightBlue w-full top-0 h-[100vh] z-50 items-center gap-3 py-2">
            <div className="flex justify-between w-full px-3 py-2">
              <div className="text-green-400">
                <img
                  onClick={() => {
                    navigate("/");
                    setShowNavBar(!showNavBar);
                  }}
                  src={assets.logo}
                  alt=""
                />
              </div>
              <div className="flex items-center gap-3">
                <AiOutlineClose
                  onClick={() => setShowNavBar(!showNavBar)}
                  className="text-4xl text-white cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 my-5 px-5">
              <select
                className="bg-gray-200 py-2 font-medium px-4 rounded"
                name="allCategory"
                id="allCategory"
              >
                <option value="allCategory">All Category</option>
                <option value="computer">Computer</option>
                <option value="laptop">Laptop</option>
                <option value="smartphone">Smartphone</option>
                <option value="headphone">Headphone</option>
                <option value="accessories">Accessories</option>
                <option value="Game">Game</option>
              </select>
              <NavLink
                to="/"
                onClick={() => setShowNavBar(!showNavBar)}
                className="text-xl text-white font-medium thirdNavbar"
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                onClick={() => setShowNavBar(!showNavBar)}
                className="text-xl text-white font-medium thirdNavbar"
              >
                Shop Now
              </NavLink>
              <NavLink
                to="/shoping-card"
                onClick={() => setShowNavBar(!showNavBar)}
                className="text-xl text-white font-medium thirdNavbar"
              >
                Card Items
              </NavLink>
              <NavLink
                to="/wish-list"
                onClick={() => setShowNavBar(!showNavBar)}
                className="text-xl text-white font-medium thirdNavbar"
              >
                Wish List
              </NavLink>
              <NavLink
                to="/track-order"
                onClick={() => setShowNavBar(!showNavBar)}
                className="text-xl text-white font-medium thirdNavbar"
              >
                Track Order
              </NavLink>
              <NavLink
                to="/compare"
                onClick={() => setShowNavBar(!showNavBar)}
                className="text-xl text-white font-medium thirdNavbar"
              >
                Compare
              </NavLink>
              <NavLink
                to="/customer-support"
                onClick={() => setShowNavBar(!showNavBar)}
                className="text-xl text-white font-medium thirdNavbar"
              >
                Customer Support
              </NavLink>
              <NavLink
                to="/need-help"
                onClick={() => setShowNavBar(!showNavBar)}
                className="text-xl text-white font-medium thirdNavbar"
              >
                Need Help
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThirdNavbar;
