import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-900 px-10 py-8">
      <div>
        {/*----------First div-------*/}
        <div className="flex flex-col gap-5">
          <div>
            <img src={assets.logo} alt="" />
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
        <div></div>
        {/*----------Third div-------*/}
        <div></div>
        {/*----------Fourth div-------*/}
        <div></div>
        {/*----------Fifth div-------*/}
        <div></div>

        {/*-------div for copyright-------*/}
        <hr className="border border-t-0 bg-[white] m-0" />
        <div>
          <p className="text-white text-xs justify-center text-center py-5">
            {" "}
            CLICON - eCommerce © 2025. Design by MD Jahid Hasan Jim
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
