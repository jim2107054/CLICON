import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="flex flex-col border border-b-2 justify-center px-5 md:px-12 py-7 w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-2xl">
          <h1 className="text-2xl text-center font-medium">Forget Password</h1>
          <p className="text-base mx-5 text-center leading-none font-light mt-2 mb-5">
            Enter the email address or mobile phone number associated with your Clicon account.
          </p>
          <form className="flex flex-col gap-3" action="#">
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
          </form>
          <button className="bg-[#FA8232] flex items-center justify-center gap-3 h-11 rounded-md text-white font-medium my-3">
            SEND CODE{" "}
            <span className="items-center justify-center">
              {" "}
              <FaArrowRight />{" "}
            </span>
          </button>
          <p className="text-base font-light my-0.5">
            Create a new account{" "}
            <span onClick={()=>navigate('/signup')} className="text-base cursor-pointer text-blue-500 font-medium ml-2">
              Sign Up
            </span>
          </p>
          <p className="text-base font-light">
            Already have account{" "}
            <span onClick={()=>navigate('/login')} className="text-base cursor-pointer text-blue-500 font-medium ml-2">
              Sign In
            </span>
          </p>
          <hr className="mt-1 mb-2" />
          <p>You may contact <span onClick={()=>navigate('/customer-support')} className="text-btnColor cursor-pointer leading-3">Customer Service</span> for help restoring access to your account.</p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
