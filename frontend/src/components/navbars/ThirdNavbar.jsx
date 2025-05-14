import React from "react";
import { assets } from "../../assets/assets";

const ThirdNavbar = () => {
  return (
    <div>
      <div className="flex items-center gap-5 py-2 px-36">
        <div className="bg-gray-200 border-1 px-2 py-1">
          <select className="bg-gray-200 py-1 rounded" name="allCategory" id="allCategory">
            <option value="allCategory">All Category</option>
            <option value="computer">Computer</option>
            <option value="laptop">Laptop</option>
            <option value="smartphone">Smartphone</option>
            <option value="headphone">Headphone</option>
            <option value="accessories">Accessories</option>
            <option value="Game">Game</option>
          </select>
        </div>
        <div className="flex gap-1 text-base font-light items-center">
          <img className="h-5" src={assets.location} alt="" />
          <p>Track Order</p>
        </div>
        <div className="flex gap-1 text-base font-light items-center">
          <img className="h-5" src={assets.compare} alt="" />
          <p>Compare</p>
        </div>
        <div className="flex gap-1 text-base font-light items-center">
          <img className="h-5" src={assets.headphone} alt="" />
          <p>Customer Support</p>
        </div>
        <div className="flex gap-1 text-base font-light items-center">
          <img className="h-5" src={assets.needHelp} alt="" />
          <p>Need Help</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdNavbar;
