import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="flex flex-col border border-b-4 justify-center px-5 md:px-12 py-7 w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-2xl">
          <h1 className="text-2xl font-medium">Sign Up</h1>
          <p className="text-base font-light mb-5">
            Create your clicon account
          </p>
          <form className="flex flex-col gap-3" action="#">
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="#">
                Name
              </label>
              <input
                className="h-10 px-5 border border-b-2 rounded-md"
                type="text"
                placeholder="Jahid Hasan Jim"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium" htmlFor="#">
                Email Address
              </label>
              <input
                className="h-10 px-5 border border-b-2 rounded-md"
                type="email"
                placeholder="clicon@gmail.com"
              />
            </div>
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
          {/*--------Check Box------*/}
          <label className="mt-2 items-center justify-center" htmlFor="#">
            <input className="gap-5 text-btnColor mr-3" type="checkbox" />
            Are you agree to Clicon <span className="text-blue-400">Terms of Conditions</span> and <span className="text-blue-400">Privacy Policy</span>
          </label>
          <button className="bg-[#FA8232] flex items-center justify-center gap-3 h-11 rounded-md text-white font-medium mt-5">
            SIGN UP{" "}
            <span className="items-center justify-center">
              {" "}
              <FaArrowRight />{" "}
            </span>
          </button>
          <p className="text-base font-light my-2 text-center">
            Already have an account{" "}
            <span onClick={()=>navigate('/login')} className="text-base cursor-pointer text-blue-500 font-medium ml-2">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
