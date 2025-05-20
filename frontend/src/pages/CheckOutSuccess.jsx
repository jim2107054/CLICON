import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";

const CheckOutSuccess = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-5 px-10 lg:px-36 py-20">
        <div className="flex flex-col w-full gap-5 lg:w-1/2 items-center ">
          {/*------------image div-------------*/}
          <div>
            <img
              className="h-20 w-20 rounded-full bg-[#67f7679f] p-2 border-2 border-green-500"
              src={assets.checks}
              alt=""
            />
          </div>
          {/*------------text div-------------*/}
          <div className="text-center">
            <p className="text-2xl font-medium">
              Your order is successfully place
            </p>
            <p className="px-20 font-light leading-none my-2">
              Pellentesque sed lectus nec tortor tristique accumsan quis dictum
              risus. Donec volutpat mollis nulla non facilisis.
            </p>
          </div>
          {/*------------button div-------------*/}
          <div className="flex gap-5 mt-5">
            <button className="border-2 border-btnColor flex gap-2 items-center hover:scale-105 duration-300 transition-all rounded font-medium px-5 py-2 text-btnColor">
              <span>
                <BsStack />
              </span>{" "}
              GO TO DASHBOARD
            </button>
            <button className="border-2 bg-btnColor flex gap-2 items-center hover:scale-105 duration-300 transition-all rounded font-medium px-5 py-2 text-white">
              VIEW ORDER{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutSuccess;
