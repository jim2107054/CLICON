import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="flex flex-col border border-b-2 justify-center px-5 md:px-12 py-7 w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-2xl">
          <h1 className="text-2xl text-center font-medium">Reset Password</h1>
          <p className="text-base text-center leading-none mx-auto font-light mt-2 mb-5">
            Duis sagittis molestie tellus, at eleifend sapien pellque quis.
            Fusce lorem nunc, fringilla sit amet nunc.
          </p>
          <form className="flex flex-col gap-3" action="#">
            <div className="flex flex-col gap-1 group">
              <label className="text-base font-medium" htmlFor="#">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  className="h-10 w-full px-5 border border-b-2 rounded-md"
                  type="email"
                  placeholder="minimum six digit"
                />
                <img
                  className="h-5 w-5 absolute right-3"
                  src={assets.eye}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 group">
              <label className="text-base font-medium" htmlFor="#">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  className="h-10 w-full px-5 border border-b-2 rounded-md"
                  type="email"
                  placeholder=""
                />
                <img
                  className="h-5 w-5 absolute right-3"
                  src={assets.eye}
                  alt=""
                />
              </div>
            </div>
          </form>
          <button className="bg-[#FA8232] flex items-center justify-center gap-3 h-11 rounded-md text-white font-medium mt-5">
            RESET PASSWORD{" "}
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

export default ResetPassword;
