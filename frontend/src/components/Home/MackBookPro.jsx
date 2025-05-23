import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { assetsHome } from "../../assets/assetsHome";

const MackBookPro = () => {
  return (
    <div className="px-5 lg:px-0">
      <div className="flex py-5 bg-lightOrange  rounded w-full">
        <div className="flex flex-col-reverse md:flex-row lg:gap-10 w-full">
          {/*-----------------Mackbook Pro Details-----------------*/}
          <div className="flex flex-col px-64 bg-yellow-400  justify-center lg:px-16 md:px-20 gap-2 lg:gap-3 w-full md:w-[50%]">
            <p className="text-sm text-white bg-blueButton px-2 py-0.5 w-fit rounded">
              SAVE UP TO $200.00
            </p>
            <p className="text-2xl lg:text-3xl font-medium leading-tight">Macbook Pro</p>
            <p className="text-base font-medium leading-tight line-clamp-2 text-gray-600">
              Apple M1 Max Chip. 32GB Unified <br/> Memory, 1TB SSD Storage
            </p>
            <button className="flex items-center gap-2 shop-now">
              SHOP NOW{" "}
              <span className="text-xl">
                <FaArrowRight />
              </span>
            </button>
          </div>
          {/*-----------------Mackbook Pro image-----------------*/}
          <div className="flex md:w-[50%] bg-red-500 justify-center lg:justify-normal relative w-full md:px-10">
            <p className="flex w-16 h-16 md:w-20 md:h-20 bg-blueButton rounded-full absolute left-[16%] top-[10%] lg:left-[8%] lg:top-[5%] items-center justify-center font-medium text-2xl text-white">
              $1999
            </p>
            <img className="md:w-3/4" src={assetsHome.mackbookPro} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MackBookPro;
