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
    <div>
      <div className="flex flex-col-reverse px-2 md:px-5 lg:px-0 md:flex-row gap-5 mt-8">
        {/*------------------Left Div-------------*/}
        <div className="border bg-yellowButton border-gray-200 rounded h-fit hover:scale-105 w-full md:w-[25%]">
          <div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <p className="px-5 mt-5 flex text-xs font-medium text-red-600 items-center">
                COMPUTER & ACCESSORIES
              </p>
              <p className="text-2xl font-medium">32% Discount</p>
              <p className="text-sm text-gray-800">
                For all ellectronics products
              </p>
              <div className="flex gap-5 justify-between items-center text-sm my-2">
                <p>Offers ends in:</p>
                <p className="text-xs border bg-white border-gray-300 px-2 py-0.5">
                  ENDS OF EID
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center px-5 my-5">
              <button onClick={() => navigate('/shop')} className="shop-now flex items-center gap-2">
                SHOP NOW <FaArrowRight className="text-xl" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center relative rounded">
            <img
              className="object-cover rounded-md"
              src={assetsHome.electionicsItems}
              alt=""
            />
          </div>
        </div>
        {/*------------------Right Div-------------*/}
        <div className="w-full flex flex-col md:w-[75%]">
          {/* --------Header Section---------- */}
          <div className="flex flex-col lg:flex-row lg:justify-between mb-5">
            <div>
              <p className="text-xl font-medium">Featured Products</p>
            </div>
            <div className="flex gap-5 justify-between">
              <div className="md:flex hidden gap-5 justify-between">
                <p 
                  onClick={() => setSelectedCategory('all')}
                  className={`featured-products cursor-pointer transition-all ${
                    selectedCategory === 'all' ? 'text-btnColor font-semibold border-b-2 border-btnColor' : 'hover:text-btnColor'
                  }`}
                >
                  All Product
                </p>
                <p 
                  onClick={() => setSelectedCategory('smartphone')}
                  className={`featured-products cursor-pointer transition-all ${
                    selectedCategory === 'smartphone' ? 'text-btnColor font-semibold border-b-2 border-btnColor' : 'hover:text-btnColor'
                  }`}
                >
                  Smart Phone
                </p>
                <p 
                  onClick={() => setSelectedCategory('accessories')}
                  className={`featured-products cursor-pointer transition-all ${
                    selectedCategory === 'accessories' ? 'text-btnColor font-semibold border-b-2 border-btnColor' : 'hover:text-btnColor'
                  }`}
                >
                  Accessories
                </p>
                <p 
                  onClick={() => setSelectedCategory('headphone')}
                  className={`featured-products cursor-pointer transition-all ${
                    selectedCategory === 'headphone' ? 'text-btnColor font-semibold border-b-2 border-btnColor' : 'hover:text-btnColor'
                  }`}
                >
                  HeadPhone
                </p>
                <p 
                  onClick={() => setSelectedCategory('tv')}
                  className={`featured-products cursor-pointer transition-all ${
                    selectedCategory === 'tv' ? 'text-btnColor font-semibold border-b-2 border-btnColor' : 'hover:text-btnColor'
                  }`}
                >
                  TV
                </p>
              </div>
              <p
                onClick={() => navigate("/shop")}
                className="featured-products flex items-center gap-1 cursor-pointer hover:text-btnColor transition-all"
              >
                Browse All Product{" "}
                <span>
                  <FaArrowRight />
                </span>
              </p>
            </div>
          </div>
          {/* --------Product Section---------- */}
          <div className="w-full">
            {/* Product count */}
            <div className="mb-3 text-sm text-gray-600">
              Showing {Math.min(8, filteredProducts.length)} of {filteredProducts.length} products
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.length > 0 ? (
                filteredProducts.slice(0, 8).map((item, index) => (
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
                <div className="col-span-full text-center py-10 text-gray-500">
                  <p className="text-lg">No products found in this category</p>
                </div>
              )}
            </div>
            {/* View more button if more than 8 products */}
            {filteredProducts.length > 8 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => handleCategoryNavigate(selectedCategory)}
                  className="bg-btnColor text-white px-6 py-2 rounded hover:bg-opacity-90 transition-all flex items-center gap-2"
                >
                  View More Products <FaArrowRight />
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
