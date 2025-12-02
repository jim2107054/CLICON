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
  IoCheckmarkCircle,
} from "react-icons/io5";
import { GoCopy, GoHeart } from "react-icons/go";
import {
  FaMinus,
  FaPlus,
  FaFacebook,
  FaTwitter,
  FaPinterestP,
  FaRegCreditCard,
  FaCheck,
} from "react-icons/fa6";
import { PiMedalLight, PiHandshake } from "react-icons/pi";
import { FiTruck } from "react-icons/fi";
import { LuHeadset } from "react-icons/lu";
import AboutUsSales from "../components/AboutUsSales";
import ShowRelatedProducts from "../components/ShowRelatedProducts";
import ProductDescription from "../components/ProductDescription";
import ProductAdditionalInfo from "../components/ProductAdditionalInfo";
import ProductSpecification from "../components/ProductSpecification";
import ProductReview from "../components/ProductReview";
import SEO from "../components/SEO";
import { getProductSchema, getBreadcrumbSchema, SITE_CONFIG } from "../config/seo.config";

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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [clickedPage, setclickedPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productQuantity, setproductQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState("description");
  const [notification, setNotification] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate("/shop");
    } else {
      // Reset to first image when product changes
      setProductImage(smallImages[0].image);
      setSelectedImageIndex(0);
      setCurrentIndex(0);
    }
  }, [product, navigate]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < productQuantity; i++) {
      addToCart(product);
    }
    showNotification(`${productQuantity} item(s) added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => navigate("/shoping-card"), 500);
  };

  const handleAddToWishlist = () => {
    addToWishList(product);
    showNotification("Added to wishlist!");
  };

  const handleAddToCompare = () => {
    addToCompare(product);
    showNotification("Added to compare!");
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      showNotification("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out ${product.title}`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
      showNotification(`Sharing on ${platform}!`);
    }
  };

  const smallImageLength = smallImages.length;
  const smallImagePages = Math.ceil(smallImageLength / 5);

  const handleThumbnailClick = (image, index) => {
    setProductImage(image);
    setSelectedImageIndex(index);
  };

  const handlePrevImage = () => {
    const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : smallImageLength - 1;
    setSelectedImageIndex(newIndex);
    setProductImage(smallImages[newIndex].image);
    
    // Adjust scroll position if needed
    if (newIndex < currentIndex) {
      setCurrentIndex(Math.max(0, currentIndex - 1));
      setclickedPage(Math.max(0, clickedPage - 1));
    }
  };

  const handleNextImage = () => {
    const newIndex = selectedImageIndex < smallImageLength - 1 ? selectedImageIndex + 1 : 0;
    setSelectedImageIndex(newIndex);
    setProductImage(smallImages[newIndex].image);
    
    // Adjust scroll position if needed
    if (newIndex >= currentIndex + 5) {
      setCurrentIndex(Math.min(smallImageLength - 5, currentIndex + 1));
      setclickedPage(Math.min(smallImagePages, clickedPage + 1));
    }
  };
  
  // Generate structured data for product
  const productStructuredData = getProductSchema({
    ...product,
    inStock: true,
    rating: 4.5,
    reviews: 125
  });

  // Generate breadcrumb structured data
  const breadcrumbData = getBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.siteUrl },
    { name: "Shop", url: `${SITE_CONFIG.siteUrl}/shop` },
    { name: product.title, url: `${SITE_CONFIG.siteUrl}/shop/${product.id}` }
  ]);

  const structuredData = [productStructuredData, breadcrumbData];

  return (
    <div>
      <SEO
        title={`${product.title} - ${product.brand} | CLICON`}
        description={`Buy ${product.title} at best price. ${product.brand} product with warranty. Price: $${product.price}. Free shipping available.`}
        keywords={`${product.title}, ${product.brand}, ${product.category}, buy online, best price`}
        url={`/shop/${product.id}`}
        image={product.image}
        type="product"
        product={{
          price: product.price,
          availability: "in stock",
          brand: product.brand,
          condition: "new"
        }}
        structuredData={structuredData}
      />
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-24 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-down flex items-center gap-2">
          <IoCheckmarkCircle className="text-2xl" />
          <span className="font-medium">{notification}</span>
        </div>
      )}
      <div className="flex flex-col lg:flex-row px-36 py-5 gap-10 lg:gap-12 mb-10">
        {/*--------Left Div-----------*/}
        <div className="flex bg-gray-50 flex-col w-full lg:w-1/2 rounded-lg">
          {/*--------Product large image with navigation arrows*/}
          <div className="relative flex w-full h-[464px] p-5 justify-center items-center bg-white rounded-lg overflow-hidden group">
            {/* Previous Arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 z-10 bg-white hover:bg-btnColor text-gray-800 hover:text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <IoArrowBackOutline className="text-2xl" />
            </button>
            
            {/* Main Product Image */}
            <img 
              className="w-full h-full object-contain rounded-md transition-all duration-300" 
              src={productImage} 
              alt={product.title}
            />
            
            {/* Next Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 z-10 bg-white hover:bg-btnColor text-gray-800 hover:text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <IoArrowForwardOutline className="text-2xl" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm font-medium">
              {selectedImageIndex + 1} / {smallImageLength}
            </div>
          </div>

          {/*--------Product thumbnail gallery*/}
          <div className="flex relative w-full h-[120px] items-center justify-center mt-4 px-2">
            <button
              onClick={() => {
                if (currentIndex > 0) {
                  setCurrentIndex(currentIndex - 1);
                  setclickedPage(clickedPage - 1);
                }
              }}
              className={`absolute z-10 text-2xl text-white p-2 rounded-full left-0 transition-all duration-200 ${
                currentIndex === 0 
                  ? "bg-gray-300 cursor-not-allowed" 
                  : "bg-btnColor hover:bg-opacity-80 hover:scale-110 shadow-md"
              }`}
              disabled={currentIndex === 0}
              aria-label="Previous thumbnails"
            >
              <IoArrowBackOutline />
            </button>

            <div className="flex px-12 gap-3 overflow-hidden">
              {smallImages.length > 0 &&
                smallImages
                  .slice(currentIndex, currentIndex + 5)
                  .map((item, index) => {
                    const actualIndex = currentIndex + index;
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleThumbnailClick(item.image, actualIndex)}
                        className={`relative flex-shrink-0 w-[100px] h-[90px] rounded-lg cursor-pointer overflow-hidden transition-all duration-300 ${
                          selectedImageIndex === actualIndex
                            ? "ring-4 ring-btnColor scale-105 shadow-lg"
                            : "ring-2 ring-gray-300 hover:ring-gray-400 hover:scale-105"
                        }`}
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={item.image}
                          alt={`Product thumbnail ${actualIndex + 1}`}
                        />
                        {selectedImageIndex === actualIndex && (
                          <div className="absolute inset-0 bg-btnColor bg-opacity-20 flex items-center justify-center">
                            <IoCheckmarkCircle className="text-btnColor text-3xl drop-shadow-lg" />
                          </div>
                        )}
                      </div>
                    );
                  })}
            </div>

            <button
              onClick={() => {
                if (currentIndex < smallImageLength - 5) {
                  setCurrentIndex(currentIndex + 1);
                  setclickedPage(clickedPage + 1);
                }
              }}
              className={`absolute z-10 text-2xl text-white p-2 rounded-full right-0 transition-all duration-200 ${
                currentIndex >= smallImageLength - 5
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-btnColor hover:bg-opacity-80 hover:scale-110 shadow-md"
              }`}
              disabled={currentIndex >= smallImageLength - 5}
              aria-label="Next thumbnails"
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
                  disabled={product.status === "Out of Stock"}
                  className={`h-11 flex items-center gap-2 justify-center text-white px-8 py-2 rounded transition-all duration-200 font-semibold ${
                    product.status === "Out of Stock" 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-btnColor hover:scale-105 hover:shadow-lg"
                  }`}>
                  ADD TO CART <IoCartOutline className="text-xl" />
                </button>
              </div>
              <div>
                <button 
                  onClick={handleBuyNow}
                  disabled={product.status === "Out of Stock"}
                  className={`border-2 h-11 font-medium px-5 py-2 rounded transition-all duration-200 ${
                    product.status === "Out of Stock"
                      ? "border-gray-400 text-gray-400 cursor-not-allowed"
                      : "border-btnColor text-btnColor hover:scale-105 hover:bg-btnColor hover:text-white hover:shadow-lg"
                  }`}>
                  BUY NOW
                </button>
              </div>
            </div>
            {/*--------Product Details lower part---------*/}
            <div className="flex gap-6 mb-5 items-center justify-between">
              <div className="flex gap-5 items-center">
                <button 
                  onClick={handleAddToWishlist}
                  className="flex group gap-2 items-center justify-center cursor-pointer hover:text-red-500 transition-colors duration-200 px-3 py-1 rounded hover:bg-red-50">
                  <GoHeart className="text-lg font-light" />
                  <span className="text-sm font-medium">Add to Wishlist</span>
                </button>
                <button 
                  onClick={handleAddToCompare}
                  className="flex group gap-2 items-center justify-between cursor-pointer hover:text-blueButton transition-colors duration-200 px-3 py-1 rounded hover:bg-blue-50">
                  <img
                    className="h-5 font-light"
                    src={assets.compare}
                    alt="compare"
                  />
                  <span className="text-sm font-medium">Add to Compare</span>
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-medium">Share:</p>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleCopyLink}
                    className="hover:text-btnColor cursor-pointer transition-all duration-200 hover:scale-110 relative"
                    title="Copy link">
                    {copied ? <FaCheck className="text-green-500" /> : <GoCopy />}
                  </button>
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="hover:text-blue-600 cursor-pointer transition-all duration-200 hover:scale-110"
                    title="Share on Facebook">
                    <FaFacebook />
                  </button>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="hover:text-blue-400 cursor-pointer transition-all duration-200 hover:scale-110"
                    title="Share on Twitter">
                    <FaTwitter />
                  </button>
                  <button 
                    onClick={() => handleShare('pinterest')}
                    className="hover:text-red-600 cursor-pointer transition-all duration-200 hover:scale-110"
                    title="Share on Pinterest">
                    <FaPinterestP />
                  </button>
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
        <div className="border rounded-md border-gray-300 shadow-lg">
          <div className="flex flex-col border-b border-gray-300 py-3 gap-3 w-full lg:gap-12 lg:flex-row items-center justify-center bg-gray-50">
            <button 
              onClick={() => setActiveTab("description")}
              className={`text-xl cursor-pointer transition-all duration-200 px-4 py-2 rounded ${
                activeTab === "description" 
                  ? "font-bold text-btnColor border-b-2 border-btnColor" 
                  : "text-gray-800 hover:text-btnColor hover:font-medium"
              }`}>
              Description
            </button>
            <button 
              onClick={() => setActiveTab("additionalInfo")}
              className={`text-xl cursor-pointer transition-all duration-200 px-4 py-2 rounded ${
                activeTab === "additionalInfo" 
                  ? "font-bold text-btnColor border-b-2 border-btnColor" 
                  : "text-gray-800 hover:text-btnColor hover:font-medium"
              }`}>
              Additional information
            </button>
            <button 
              onClick={() => setActiveTab("specification")}
              className={`text-xl cursor-pointer transition-all duration-200 px-4 py-2 rounded ${
                activeTab === "specification" 
                  ? "font-bold text-btnColor border-b-2 border-btnColor" 
                  : "text-gray-800 hover:text-btnColor hover:font-medium"
              }`}>
              Specification
            </button>
            <button 
              onClick={() => setActiveTab("review")}
              className={`text-xl cursor-pointer transition-all duration-200 px-4 py-2 rounded ${
                activeTab === "review" 
                  ? "font-bold text-btnColor border-b-2 border-btnColor" 
                  : "text-gray-800 hover:text-btnColor hover:font-medium"
              }`}>
              Review
            </button>
          </div>
          {/* Tab Content */}
          <div className="px-5 py-8">
            {activeTab === "description" && (
              <div className="flex flex-col gap-5 lg:flex-row animate-fade-in">
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
            )}

            {activeTab === "additionalInfo" && (
              <div className="animate-fade-in">
                <ProductAdditionalInfo product={product} />
              </div>
            )}

            {activeTab === "specification" && (
              <div className="animate-fade-in">
                <ProductSpecification product={product} />
              </div>
            )}

            {activeTab === "review" && (
              <div className="animate-fade-in">
                <ProductReview product={product} />
              </div>
            )}
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
