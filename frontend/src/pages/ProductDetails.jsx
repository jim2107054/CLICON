import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import shopItems from "../assets/ShopItem";
import { useAppContext } from "../context/AppContext";
import {
  assets,
} from "./../assets/assets";
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
  FaRegCreditCard,
} from "react-icons/fa6";
import { PiMedalLight, PiHandshake } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { LuHeadset } from "react-icons/lu";
import AboutUsSales from "../components/AboutUsSales";
import ShowRelatedProducts from "../components/ShowRelatedProducts";

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
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishList, addToCompare } = useAppContext();
  
  const product = shopItems.find((item) => item.id === parseInt(productId));

  const [productImage, setProductImage] = useState(product?.image || assets.laptopDetails);
  const [clickedPage, setclickedPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productQuantity, setproductQuantity] = useState(1);

  const [description, setDescription] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [specification, setSpecification] = useState(false);
  const [review, setReview] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate("/shop");
    }
  }, [product, navigate]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < productQuantity; i++) {
      addToCart(product);
    }
    alert("Added to cart successfully!");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/shoping-card");
  };

  const smallImageLength = smallImages.length;
  const smallImagePages = Math.ceil(smallImageLength / 5);
  return (
    <div>
      <div className="flex flex-col lg:flex-row px-36 py-5 gap-10 lg:gap-12 mb-10">
        {/*--------Left Div-----------*/}
        <div className="flex bg-gary-500 flex-col w-full lg:w-1/2">
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
        <div className="flex bg-gray-50 px-5 rounded-md flex-col w-full lg:w-1/2">
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
                {product.title}
              </p>
            </div>
            {/*--------Product Details 2nd part---------*/}
            <div className="flex justify-between my-5">
              <div>
                <p className="text-sm text-gray-700">
                  Sku: <span className="font-medium">{product.id}</span>
                </p>
                <p className="text-sm text-gray-700">
                  Brand: <span className="font-medium">Apple</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  Availability:{" "}
                  <span className="text-greenButton">{product.status}</span>
                </p>
                <p className="text-sm text-gray-700">
                  Category:{" "}
                  <span className="font-medium">Electronics Devices</span>
                </p>
              </div>
            </div>
            {/*--------Product Details 3rd part---------*/}
            <div className="flex  gap-3 mb-2">
              <p className="text-xl font-medium text-blue-400">${product.price}</p>
              <p className="text-base text-gray-500 line-through font-medium">
                ${(product.price * 1.2).toFixed(2)}
              </p>
              <p className="border bg-yellow-400 px-1 py-0.5 rounded-md">
                {product.offer || "21% OFF"}
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
                <button 
                  onClick={handleAddToCart}
                  className="bg-btnColor h-11 flex items-center gap-2 justify-center text-white px-8 py-2 rounded hover:scale-105 transition-all duration-200">
                  ADD TO CARD <IoCartOutline className="text-xl" />
                </button>
              </div>
              <div>
                <button 
                  onClick={handleBuyNow}
                  className="border-2 h-11 border-btnColor text-btnColor font-medium px-5 py-2 rounded hover:scale-105 transition-all duration-200">
                  BUY NOW
                </button>
              </div>
            </div>
            {/*--------Product Details lower part---------*/}
            <div className="flex gap-6 mb-5 items-center justify-between">
              <div className="flex gap-5 items-center">
                <p 
                  onClick={() => addToWishList(product)}
                  className="flex group gap-2 items-center justify-center cursor-pointer hover:text-btnColor">
                  <GoHeart className="text-lg cursor-pointer font-light" />
                  <span className="text-sm">Add to Wishlist</span>
                </p>
                <p 
                  onClick={() => addToCompare(product)}
                  className="flex group gap-2 items-center justify-between cursor-pointer hover:text-btnColor">
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
                  <GoCopy className="hover:text-btnColor cursor-pointer" />
                  <FaFacebook className="hover:text-btnColor cursor-pointer" />
                  <FaTwitter className="hover:text-btnColor cursor-pointer" />
                  <FaPinterestP className="hover:text-btnColor cursor-pointer" />
                </div>
              </div>
            </div>
            <hr />
            {/*--------100% Guarantee Safe Checkout---------*/}
            <div className="flex flex-col gap-3 my-7 border-2 px-5 py-3 rounded">
              <p className="font-medium">100% Guarantee Safe Checkout</p>
              <img className="h-5 w-2/3" src={assets.paymentMethod} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*--------Product Description---------*/}
      <div className="flex flex-col px-36 py-5 gap-10 lg:gap-12 mb-10">
        <div className="border rounded-md border-gray-300 ">
          <div className="flex flex-col border-b border-gray-300 py-3 gap-3 w-full lg:gap-12 lg:flex-row items-center justify-center">
            <p className="text-xl hover:font-medium cursor-pointer text-gray-800">
              Description
            </p>
            <p className="text-xl hover:font-medium cursor-pointer text-gray-800">
              Additional information
            </p>
            <p className="text-xl hover:font-medium cursor-pointer text-gray-800">
              Specification
            </p>
            <p className="text-xl hover:font-medium cursor-pointer text-gray-800">
              Review
            </p>
          </div>
          <div className="flex flex-col gap-5 px-5 py-8 lg:flex-row">
            <div className="flex flex-col gap-2 w-full lg:w-2/5">
              <p className="text-xl font-medium">Description</p>
              <p className="text-gray-800 font-light">
                The most powerful MacBook Pro ever is here. With the
                blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                designed for pros — you get groundbreaking performance and
                amazing battery life. Add to that a stunning Liquid Retina XDR
                display, the best camera and audio ever in a Mac notebook, and
                all the ports you need. The first notebook of its kind, this
                MacBook Pro is a beast. M1 Pro takes the exceptional performance
                of the M1 architecture to a whole new level for pro users.
              </p>
              <p className="text-gray-800 font-light">
                Even the most ambitious projects are easily handled with up to
                10 CPU cores, up to 16 GPU cores, a 16core Neural Engine, and
                dedicated encode and decode media engines that support H.264,
                HEVC, and ProRes codecs.
              </p>
            </div>
            <div className="hidden lg:block w-px bg-gray-300 mx-1"></div>
            <div className="w-full gap-2 flex flex-col lg:w-1/4">
              <p className="text-xl font-medium">Feature</p>
              <div className="flex flex-col lg:px-0 px-5">
                <p className="my-2 flex gap-2 text-base font-medium items-center">
                <PiMedalLight className="text-2xl text-btnColor" />
                Free 1 Year Warranty
              </p>
              <p className="my-2 flex gap-2 text-base font-medium items-center">
                <FiTruck className="text-2xl text-btnColor" />
                Free Shipping & Fasted Delivery
              </p>
              <p className="my-2 flex gap-2 text-base font-medium items-center">
                <PiHandshake className="text-2xl text-btnColor" />
                100% Money-back guarantee
              </p>
              <p className="my-2 flex gap-2 text-base font-medium items-center">
                <LuHeadset className="text-2xl text-btnColor" />
                24/7 Customer support
              </p>
              <p className="my-2 flex gap-2 text-base font-medium items-center">
                <FaRegCreditCard className="text-2xl text-btnColor" />
                Secure payment method
              </p>
              </div>
            </div>
            <div className="hidden lg:block w-px bg-gray-300 mx-1"></div>
            <div className="w-full gap-2 flex flex-col lg:w-2/6">
              <p className="text-xl font-medium">Shipping Information</p>
              <div className="flex flex-col lg:px-0 px-5">
                <p className="text-base font-medium my-0.5">
                Courier:{" "}
                <span className="text-gray-700">2 - 4 days, free shipping</span>
              </p>
              <p className="text-base font-medium my-0.5">
                Local Shipping:{" "}
                <span className="text-gray-700"> up to one week, $19.00</span>
              </p>
              <p className="text-base font-medium my-0.5">
                UPS Ground Shipping:
                <span className="text-gray-700"> 4 - 6 days, $29.00</span>
              </p>
              <p className="text-base font-medium my-0.5">
                Unishop Global Export:
                <span className="text-gray-700"> 3 - 4 days, $39.00</span>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------Related Products---------*/}
      <div>
        <ShowRelatedProducts/>
      </div>
    </div>
  );
};

export default ProductDetails;
