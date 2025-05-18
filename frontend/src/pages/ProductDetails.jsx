import React, { useState } from "react";
import { assets } from "./../assets/assets";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoCartOutline,
} from "react-icons/io5";
import { GoCopy, GoHeart } from "react-icons/go";
import {
  FaMinus,
  FaPlus,
  FaFacebook,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa6";

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
  const [productQuantity, setproductQuantity] = useState(1);

  const smallImageLength = smallImages.length;
  const smallImagePages = Math.ceil(smallImageLength / 5);
  return (
    <div>
      <div className="flex flex-col lg:flex-row px-36 py-5 gap-10 lg:gap-12 mb-10">
        {/*--------Left Div-----------*/}
        <div className="flex bg-gary-100 flex-col w-full lg:w-1/2">
          {/*--------Product large image*/}
          <div className="flex w-[616px] h-[464px] p-5 justify-center">
            <img className="w-full rounded-md" src={productImage} alt="" />
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
        <div className="flex bg-gray-100 lg:px-5 flex-col w-full lg:w-1/2">
          {/*--------Product Details Upper part---------*/}
          <div>
            {/*--------Product Details 1st part---------*/}
            <div>
              <p className="text-base flex items-center gap-3 font-medium my-1">
                <div className="flex">
                  <img className="h-5" src={assets.ratingIcon} alt="" />
                  <img className="h-5" src={assets.ratingIcon} alt="" />
                  <img className="h-5" src={assets.ratingIcon} alt="" />
                  <img className="h-5" src={assets.ratingIcon} alt="" />
                  <img className="h-5" src={assets.ratingIcon} alt="" />
                </div>
                4.7 Star Rating{" "}
                <span className="text-base text-gray-600">
                  (21,671 User feedback)
                </span>
              </p>
              <p className="text-xl font-medium leading-none my-2">
                2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM,
                256GB SSD Storage) - Space Gray
              </p>
            </div>
            {/*--------Product Details 2nd part---------*/}
            <div className="flex justify-between my-5">
              <div>
                <p className="text-sm text-gray-700">
                  Sku: <span className="font-medium">A264671</span>
                </p>
                <p className="text-sm text-gray-700">
                  Brand: <span className="font-medium">Apple</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  Availability:{" "}
                  <span className="text-greenButton">In Stock</span>
                </p>
                <p className="text-sm text-gray-700">
                  Category:{" "}
                  <span className="font-medium">Electronics Devices</span>
                </p>
              </div>
            </div>
            {/*--------Product Details 3rd part---------*/}
            <div className="flex  gap-3 mb-2">
              <p className="text-xl font-medium text-blue-400">$1699</p>
              <p className="text-base text-gray-500 line-through font-medium">
                $1999.00
              </p>
              <p className="border bg-yellow-400 px-1 py-0.5 rounded-md">
                21% OFF
              </p>
            </div>
          </div>
          <hr className="my-3" />
          {/*--------Product Details middle part---------*/}
          <div>
            <div>
              <p>Color</p>
            </div>
            <div></div>
            <div></div>
          </div>
          <hr className="my-3" />
          {/*--------Product Details last part---------*/}
          <div>
            {/*--------Product Details upper part---------*/}
            <div className="flex gap-5 mb-5 items-center">
              <div className="flex gap-6 items-center border-2 border-gray-300 rounded-md px-6 py-2 w-fit">
                <button
                  onClick={() =>
                    productQuantity > 1
                      ? setproductQuantity(productQuantity - 1)
                      : setproductQuantity(1)
                  }
                  className="font-medium"
                >
                  <FaMinus />
                </button>
                <p className="text-xl">{productQuantity}</p>
                <button onClick={() => setproductQuantity(productQuantity + 1)}>
                  <FaPlus />
                </button>
              </div>
              <div>
                <button className="bg-btnColor h-11 flex items-center gap-2 justify-center text-white px-8 py-2 rounded hover:scale-105 transition-all duration-200">
                  ADD TO CARD <IoCartOutline className="text-xl" />
                </button>
              </div>
              <div>
                <button className="border-2 h-11 border-btnColor text-btnColor font-medium px-5 py-2 rounded hover:scale-105 transition-all duration-200">
                  BUY NOW
                </button>
              </div>
            </div>
            {/*--------Product Details lower part---------*/}
            <div className="flex gap-6 mb-5 items-center justify-between">
              <div className="flex gap-5 items-center">
                <p className="flex group gap-2 items-center justify-center">
                  <GoHeart className="text-lg cursor-pointer font-light" />
                  <span className="text-sm">Add to Wishlist</span>
                </p>
                <p className="flex group gap-2 items-center justify-between">
                  <img
                    className="h-5 font-light cursor-pointer"
                    src={assets.compare}
                    alt="arrowIcon"
                  />
                  <span className="text-sm">Add to Compare</span>
                </p>
              </div>
              <div className="flex gap-2">
                <p>Share:</p>
                <div className="flex items-center gap-2">
                  <GoCopy className="hover:text-btnColor cursor-pointer"/>
                  <FaFacebook className="hover:text-btnColor cursor-pointer"/>
                  <FaTwitter className="hover:text-btnColor cursor-pointer"/>
                  <FaPinterestP className="hover:text-btnColor cursor-pointer"/>
                </div>
              </div>
            </div>
            <hr/>
            {/*--------100% Guarantee Safe Checkout---------*/}
            <div className="flex flex-col gap-3 my-7 border-2 px-5 py-3 rounded">
              <p className="font-medium">100% Guarantee Safe Checkout</p>
              <img className="h-5 w-2/3" src={assets.paymentMethod} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
