import React, { useState } from "react";
import { assets } from "./../assets/assets";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

//For Now we are using the small images here, in real project we will upload or fetch form backend
const smallImages = [
  {
    id: 1,
    image: assets.laptopDetails,
  },
  {
    id: 2,
    image: assets.laptopDetails1,
  },
  {
    id: 3,
    image: assets.laptopDetails2,
  },
  {
    id: 4,
    image: assets.laptopDetails3,
  },
  {
    id: 5,
    image: assets.laptopDetails1,
  },
  {
    id: 6,
    image: assets.laptopDetails2,
  },
  {
    id: 7,
    image: assets.laptopDetails3,
  },
];

const ProductDetails = () => {
  const [productImage, setProductImage] = useState(assets.laptopDetails);
  const [clickedPage, setclickedPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const smallImageLength = smallImages.length;
  const smallImagePages = Math.ceil(smallImageLength / 5);
  return (
    <div>
      <div className="flex flex-col lg:flex-row px-36 py-5 gap-10 mb-10">
        {/*--------Left Div-----------*/}
        <div className="flex flex-col w-full lg:w-1/2">
          {/*--------Product large image*/}
          <div className="flex w-[616px] h-[464px] p-5 justify-center">
            <img className="w-full" src={productImage} alt="" />
          </div>
          {/*--------Product small images*/}
          <div className="flex relative w-full lg:w-[616px] h-[100px] items-center justify-center">
            <button
              onClick={() => {
                if (currentIndex > 0) {
                  setCurrentIndex(currentIndex - 1);
                } else {
                  setCurrentIndex(0);
                }
                setProductImage(smallImages[currentIndex].image);
                setclickedPage(clickedPage - 1);
              }}
              className={`text-3xl absolute text-white ${
                clickedPage === 0 ? "bg-gray-200" : "bg-btnColor"
              } rounded-full left-0`}
              disabled={clickedPage === 0}
            >
              <IoArrowBackOutline />{" "}
            </button>
            <div className="flex px-5 gap-5 overflow-x-scroll scroll-smooth hide-scrollbar">
              {smallImages.length > 0 &&
                smallImages
                  .slice(currentIndex, currentIndex + 5)
                  .map((item) => (
                    <img
                      key={item.id}
                      onClick={() => setProductImage(item.image)}
                      className="w-[100px] h-[80px] rounded cursor-pointer border-gray-500 border"
                      src={item.image}
                      alt="PRODUCT IMAGE"
                    />
                  ))}
            </div>
            <button
              onClick={() => {
                if (currentIndex < smallImageLength - 1) {
                  const newIndex = currentIndex + 1;
                  setCurrentIndex(newIndex);
                  setProductImage(smallImages[newIndex].image);
                  setclickedPage(clickedPage + 1);
                }
              }}
              className={`text-3xl absolute text-white ${
                clickedPage === smallImagePages ? "bg-gray-200" : "bg-btnColor"
              } rounded-full right-0`}
              disabled={clickedPage === smallImagePages}
            >
              <IoArrowForwardOutline />
            </button>
          </div>
        </div>
        {/*--------Right Div-----------*/}
        <div className="flex flex-col w-full lg:w-1/2">
          {/*--------Product large image*/}
          <div className="flex justify-center border-2">
            <img src={assets.laptopDetails} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
