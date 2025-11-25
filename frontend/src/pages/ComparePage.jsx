import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { 
  FaShoppingCart, 
  FaHeart, 
  FaStar, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaTimes,
  FaExchangeAlt,
  FaPlus
} from "react-icons/fa";
import { MdCategory, MdLocalShipping } from "react-icons/md";
import { BsSpeedometer2 } from "react-icons/bs";
import { useState } from "react";

const ComparePage = () => {
  const navigate = useNavigate();
  const { compareList = [], removeFromCompare, addToCart, addToWishList } = useAppContext();
  const [notification, setNotification] = useState("");

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showNotification(`${product.title.substring(0, 30)}... added to cart!`);
  };

  const handleAddToWishlist = (product) => {
    addToWishList(product);
    showNotification(`${product.title.substring(0, 30)}... added to wishlist!`);
  };

  const handleRemove = (productId) => {
    removeFromCompare(productId);
    showNotification("Product removed from comparison");
  };

  const clearAll = () => {
    if (window.confirm("Remove all products from comparison?")) {
      compareList.forEach(product => removeFromCompare(product.id));
      showNotification("All products removed from comparison");
    }
  };

  if (compareList.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-20">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md">
          <FaExchangeAlt className="text-6xl text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">No Products to Compare</h2>
          <p className="text-gray-600 mb-8">Add products from the shop to compare their features side by side</p>
          <button
            onClick={() => navigate("/shop")}
            className="bg-gradient-to-r from-btnColor to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-down">
          <div className="flex items-center gap-2">
            <FaCheckCircle />
            <span>{notification}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">Compare Products</h1>
            <p className="text-sm sm:text-base text-gray-600">
              Comparing {compareList.length} product{compareList.length > 1 ? 's' : ''} - Maximum 4 products
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
            {compareList.length < 4 && (
              <button
                onClick={() => navigate("/shop")}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-blueButton text-white rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm font-semibold"
              >
                <FaPlus className="text-sm" />
                <span>Add More</span>
              </button>
            )}
            {compareList.length > 0 && (
              <button
                onClick={clearAll}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 text-sm font-semibold"
              >
                <FaTimes className="text-sm" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-btnColor to-orange-500">
                  <th className="p-4 lg:p-6 text-left text-white font-bold text-base lg:text-lg min-w-[150px] lg:min-w-[200px] sticky left-0 bg-gradient-to-r from-btnColor to-orange-500 z-10">
                    Features
                  </th>
                  {compareList.map((product) => (
                    <th key={product.id} className="p-4 lg:p-6 text-center relative min-w-[240px] lg:min-w-[280px] border-l-2 border-orange-400">
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="absolute top-2 right-2 bg-white text-red-500 hover:bg-red-500 hover:text-white rounded-full p-2 transition-all duration-300 shadow-lg hover:scale-110 z-20"
                        aria-label="Remove product"
                      >
                        <IoClose className="text-lg lg:text-xl" />
                      </button>
                      <div className="mt-6 lg:mt-8">
                        <div className="bg-white rounded-lg p-3 lg:p-4 mb-3 shadow-md transform transition-transform hover:scale-105">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-32 h-32 lg:w-40 lg:h-40 object-contain mx-auto"
                          />
                        </div>
                        <p className="font-semibold text-white text-xs lg:text-sm line-clamp-2 mb-2 px-2">{product.title}</p>
                        <div className="flex items-center justify-center gap-2">
                          <span className="bg-white text-btnColor px-3 lg:px-4 py-1 rounded-full font-bold text-base lg:text-lg">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Rating Row */}
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold text-gray-800 text-sm lg:text-base sticky left-0 bg-white z-10">
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-400 text-lg lg:text-xl flex-shrink-0" />
                      <span>Rating</span>
                    </div>
                  </td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 lg:p-6 text-center border-l">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`text-base lg:text-xl ${i < Math.floor(product.rating || 4) ? "text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs lg:text-sm text-gray-600">
                        {product.rating || 4.0} out of 5
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Category Row */}
                <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold text-gray-800 text-sm lg:text-base sticky left-0 bg-gray-50 z-10">
                    <div className="flex items-center gap-2">
                      <MdCategory className="text-blueButton text-lg lg:text-xl flex-shrink-0" />
                      <span>Category</span>
                    </div>
                  </td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 lg:p-6 text-center border-l">
                      <span className="inline-block bg-blue-100 text-blueButton px-3 lg:px-4 py-1.5 lg:py-2 rounded-full font-medium text-xs lg:text-sm">
                        {product.category || "Electronics"}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Availability Row */}
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold text-gray-800 text-sm lg:text-base sticky left-0 bg-white z-10">
                    <div className="flex items-center gap-2">
                      <BsSpeedometer2 className="text-green-600 text-lg lg:text-xl flex-shrink-0" />
                      <span>Availability</span>
                    </div>
                  </td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 lg:p-6 text-center border-l">
                      <div className="flex items-center justify-center gap-2">
                        {product.status !== "Out of Stock" ? (
                          <>
                            <FaCheckCircle className="text-green-600 text-lg lg:text-xl" />
                            <span className="text-green-600 font-semibold text-sm lg:text-base">In Stock</span>
                          </>
                        ) : (
                          <>
                            <FaTimesCircle className="text-red-600 text-lg lg:text-xl" />
                            <span className="text-red-600 font-semibold text-sm lg:text-base">Out of Stock</span>
                          </>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Shipping Row */}
                <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold text-gray-800 text-sm lg:text-base sticky left-0 bg-gray-50 z-10">
                    <div className="flex items-center gap-2">
                      <MdLocalShipping className="text-btnColor text-lg lg:text-xl flex-shrink-0" />
                      <span>Shipping</span>
                    </div>
                  </td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 lg:p-6 text-center border-l">
                      <span className="text-gray-700 text-sm lg:text-base">
                        {product.price > 100 ? "Free Shipping" : "$15.00"}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Description Row */}
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold text-gray-800 text-sm lg:text-base sticky left-0 bg-white z-10">Description</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 lg:p-6 text-center border-l">
                      <p className="text-xs lg:text-sm text-gray-600 line-clamp-3">
                        {product.description || "High-quality product with excellent features and specifications. Perfect for your needs."}
                      </p>
                    </td>
                  ))}
                </tr>

                {/* Actions Row */}
                <tr className="bg-gray-100">
                  <td className="p-4 lg:p-6 font-semibold text-gray-800 text-sm lg:text-base sticky left-0 bg-gray-100 z-10">Actions</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 lg:p-6 text-center border-l">
                      <div className="flex flex-row gap-2 justify-center items-center flex-wrap">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex items-center justify-center gap-1.5 lg:gap-2 bg-gradient-to-r from-btnColor to-orange-500 text-white px-3 lg:px-4 py-2 lg:py-2.5 rounded-lg hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-semibold text-xs lg:text-sm whitespace-nowrap"
                          title="Add to Cart"
                        >
                          <FaShoppingCart className="text-sm lg:text-base" />
                          <span className="hidden xl:inline">Cart</span>
                        </button>
                        <button
                          onClick={() => handleAddToWishlist(product)}
                          className="flex items-center justify-center gap-1.5 lg:gap-2 bg-red-500 text-white px-3 lg:px-4 py-2 lg:py-2.5 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-semibold text-xs lg:text-sm whitespace-nowrap"
                          title="Add to Wishlist"
                        >
                          <FaHeart className="text-sm lg:text-base" />
                          <span className="hidden xl:inline">Wishlist</span>
                        </button>
                        <button
                          onClick={() => navigate(`/shop/${product.id}`)}
                          className="flex items-center justify-center gap-1.5 lg:gap-2 bg-blueButton text-white px-3 lg:px-4 py-2 lg:py-2.5 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-semibold text-xs lg:text-sm whitespace-nowrap"
                          title="View Details"
                        >
                          <FaStar className="text-sm lg:text-base" />
                          <span className="hidden xl:inline">Details</span>
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet View */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 space-y-6">
        {compareList.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-btnColor to-orange-500 p-4 sm:p-6 relative">
              <button
                onClick={() => handleRemove(product.id)}
                className="absolute top-3 right-3 bg-white text-red-500 hover:bg-red-500 hover:text-white rounded-full p-2 transition-all duration-300 shadow-md hover:scale-110 z-10"
                aria-label="Remove product"
              >
                <IoClose className="text-xl" />
              </button>
              <div className="bg-white rounded-lg p-3 sm:p-4 mb-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-contain"
                />
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg line-clamp-2 mb-2 pr-8">{product.title}</h3>
              <span className="inline-block bg-white text-btnColor px-4 py-2 rounded-full font-bold text-lg sm:text-xl">
                ${product.price}
              </span>
            </div>
            
            <div className="p-4 sm:p-6 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center justify-between sm:justify-start sm:flex-col sm:items-start py-2 border-b sm:border-b-0">
                  <span className="font-semibold text-gray-700 text-sm sm:text-base mb-0 sm:mb-1">Rating:</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-sm sm:text-base ${i < Math.floor(product.rating || 4) ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                    <span className="text-xs sm:text-sm text-gray-600 ml-1">({product.rating || 4.0})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-start sm:flex-col sm:items-start py-2 border-b sm:border-b-0">
                  <span className="font-semibold text-gray-700 text-sm sm:text-base mb-0 sm:mb-1">Category:</span>
                  <span className="bg-blue-100 text-blueButton px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {product.category || "Electronics"}
                  </span>
                </div>

                <div className="flex items-center justify-between sm:justify-start sm:flex-col sm:items-start py-2 border-b sm:border-b-0">
                  <span className="font-semibold text-gray-700 text-sm sm:text-base mb-0 sm:mb-1">Availability:</span>
                  <span className={`font-semibold text-sm sm:text-base ${product.status !== "Out of Stock" ? "text-green-600" : "text-red-600"}`}>
                    {product.status !== "Out of Stock" ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <div className="flex items-center justify-between sm:justify-start sm:flex-col sm:items-start py-2 border-b sm:border-b-0">
                  <span className="font-semibold text-gray-700 text-sm sm:text-base mb-0 sm:mb-1">Shipping:</span>
                  <span className="text-gray-700 text-sm sm:text-base">
                    {product.price > 100 ? "Free Shipping" : "$15.00"}
                  </span>
                </div>
              </div>

              {/* Action Buttons in Row */}
              <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-btnColor to-orange-500 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-semibold text-sm"
                >
                  <FaShoppingCart className="text-base" />
                  <span className="hidden xs:inline">Add to Cart</span>
                  <span className="xs:hidden">Cart</span>
                </button>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-semibold text-sm"
                >
                  <FaHeart className="text-base" />
                  <span className="hidden xs:inline">Wishlist</span>
                  <span className="xs:hidden">Wish</span>
                </button>
                <button
                  onClick={() => navigate(`/shop/${product.id}`)}
                  className="flex-1 flex items-center justify-center gap-2 bg-blueButton text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-semibold text-sm"
                >
                  <FaStar className="text-base" />
                  <span className="hidden xs:inline">Details</span>
                  <span className="xs:hidden">View</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePage;
