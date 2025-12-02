import React from "react";
import { FaArrowRight } from "react-icons/fa";

const VerifyEmail = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="flex flex-col border border-b-4 justify-center px-5 md:px-12 py-7 w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-2xl">
          <h1 className="text-2xl text-center font-medium">
            Verify Your Email Address
          </h1>
          <p className="text-base text-center leading-none mt-2 font-light mb-5">
            Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu,
            tristique a eu in diam.
          </p>
          <form className="flex flex-col gap-3" action="#">
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="#">
                Verification Code{" "}
                <span className="ml-44 cursor-pointer text-blue-400">
                  Resend Code
                </span>
              </label>
              <input
                className="h-10 px-5 border border-b-2 rounded-md"
                type="text"
              />
            </div>
          </form>
          <button className="bg-[#FA8232] flex items-center justify-center gap-3 h-11 rounded-md text-white font-medium mt-5">
            VERIFY ME{" "}
            <span className="items-center justify-center">
              {" "}
              <FaArrowRight />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
