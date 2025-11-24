import { assetsHome } from "../../assets/assetsHome";
import { FaArrowRight } from "react-icons/fa6";
import shopItems from "../../assets/ShopItem";
import ItemCard from "../ItemCard";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useState, useMemo } from "react";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { cart, Total, addToCart, addToWishList, wishList } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return shopItems;
    }
    // For specific accessories subcategories, filter by category and potentially brand/type
    if (selectedCategory === 'keyboard') {
      return shopItems.filter(item => 
        item.category === 'accessories' && 
        (item.title.toLowerCase().includes('keyboard') || item.title.toLowerCase().includes('mouse'))
      );
    }
    if (selectedCategory === 'webcam') {
      return shopItems.filter(item => item.category === 'camera');
    }
    if (selectedCategory === 'printer') {
      return shopItems.filter(item => 
        item.category === 'accessories' && 
        item.title.toLowerCase().includes('printer')
      );
    }
    return shopItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Navigate to shop page with category filter
  const handleCategoryNavigate = (category) => {
    if (category === 'all') {
      navigate('/shop');
    } else {
      navigate(`/shop?category=${category}`);
    }
  };
  return (
    <div className="my-8 md:my-12">
      <div className="flex flex-col-reverse px-2 md:px-5 lg:px-0 md:flex-row gap-6 mt-8">
        {/*------------------Left Div - Promotional Card-------------*/}
        <div className="relative overflow-hidden border-2 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 border-orange-200 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] w-full md:w-[28%] group">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-btnColor/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-300/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col gap-2 justify-center items-center p-6">
              <span className="px-4 py-1.5 bg-red-500 text-white text-xs font-bold tracking-wider rounded-full shadow-md">
                SPECIAL OFFER
              </span>
              <h3 className="text-sm font-semibold text-gray-700 tracking-wide uppercase mt-2">
                Computer & Accessories
              </h3>
              <p className="text-4xl font-bold text-gray-900 my-1">
                32% <span className="text-2xl">OFF</span>
              </p>
              <p className="text-sm text-gray-700 font-medium">
                On all electronics products
              </p>
              <div className="flex flex-col gap-2 items-center text-sm my-3 bg-white/70 backdrop-blur-sm px-4 py-3 rounded-md shadow-sm">
                <p className="font-semibold text-gray-800">Offer ends in:</p>
                <span className="text-xs font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow-md">
                  ENDS OF EID
                </span>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center px-6 mb-4">
              <button 
                onClick={() => navigate('/shop')} 
                className="w-full bg-gradient-to-r from-btnColor to-orange-500 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-4"
              >
                SHOP NOW <FaArrowRight className="text-lg" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <img
              className="object-cover rounded-b-md w-full"
              src={assetsHome.electionicsItems}
              alt="Electronics"
            />
          </div>
        </div>
        {/*------------------Right Div-------------*/}
        <div className="w-full flex flex-col md:w-[72%]">
          {/* --------Header Section---------- */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Computer Accessories</h2>
              <p className="text-sm text-gray-600 mt-1">Discover our handpicked selection</p>
            </div>
            <div className="flex gap-3 justify-between items-center flex-wrap">
              <div className="md:flex hidden gap-2 bg-gray-100 p-1.5 rounded-md">
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === 'all' 
                      ? 'bg-btnColor text-white shadow-md scale-105' 
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  All Products
                </button>
                <button 
                  onClick={() => setSelectedCategory('keyboard')}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === 'keyboard' 
                      ? 'bg-btnColor text-white shadow-md scale-105' 
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  Keyboard & Mouse
                </button>
                <button 
                  onClick={() => setSelectedCategory('headphone')}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === 'headphone' 
                      ? 'bg-btnColor text-white shadow-md scale-105' 
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  Headphone
                </button>
                <button 
                  onClick={() => setSelectedCategory('webcam')}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === 'webcam' 
                      ? 'bg-btnColor text-white shadow-md scale-105' 
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  Webcam
                </button>
                <button 
                  onClick={() => setSelectedCategory('printer')}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === 'printer' 
                      ? 'bg-btnColor text-white shadow-md scale-105' 
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  Printer
                </button>
              </div>
              <button
                onClick={() => navigate("/shop")}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-md hover:border-btnColor hover:text-btnColor hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                Browse All
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
          {/* --------Product Section---------- */}
          <div className="w-full">
            {/* Product count badge */}
            <div className="mb-5 flex items-center gap-2">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-md text-sm font-semibold text-gray-700">
                <svg className="w-4 h-4 mr-2 text-btnColor" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Showing {Math.min(8, filteredProducts.length)} of {filteredProducts.length} products
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {filteredProducts.length > 0 ? (
                filteredProducts.slice(0, 8).map((item) => (
                  <ItemCard
                    key={item.id}
                    cart={cart}
                    addToCart={addToCart}
                    product={item}
                    addToWishList={addToWishList}
                    wishList={wishList}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-16 bg-gray-50 rounded-md border-2 border-dashed border-gray-300">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <p className="text-lg font-semibold text-gray-600">No products found</p>
                  <p className="text-sm text-gray-500 mt-2">Try selecting a different category</p>
                </div>
              )}
            </div>
            {/* View more button if more than 8 products */}
            {filteredProducts.length > 8 && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => handleCategoryNavigate(selectedCategory)}
                  className="group bg-gradient-to-r from-btnColor to-orange-500 text-white font-semibold px-8 py-3.5 rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <span>View More Products</span>
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
