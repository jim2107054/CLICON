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
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Compare Products</h1>
            <p className="text-gray-600">
              Comparing {compareList.length} product{compareList.length > 1 ? 's' : ''} - Maximum 4 products
            </p>
          </div>
          <div className="flex gap-3">
            {compareList.length < 4 && (
              <button
                onClick={() => navigate("/shop")}
                className="flex items-center gap-2 px-4 py-2 bg-blueButton text-white rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaPlus />
                <span className="hidden md:inline">Add More</span>
              </button>
            )}
            {compareList.length > 0 && (
              <button
                onClick={clearAll}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaTimes />
                <span className="hidden md:inline">Clear All</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-btnColor to-orange-500">
                  <th className="p-6 text-left text-white font-bold text-lg min-w-[200px]">Features</th>
                  {compareList.map((product) => (
                    <th key={product.id} className="p-6 text-center relative min-w-[280px] border-l-2 border-orange-400">
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="absolute top-2 right-2 bg-white text-red-500 hover:bg-red-500 hover:text-white rounded-full p-2 transition-all duration-300 shadow-lg"
                      >
                        <IoClose className="text-xl" />
                      </button>
                      <div className="mt-8">
                        <div className="bg-white rounded-lg p-4 mb-3 shadow-md">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-40 h-40 object-contain mx-auto"
                          />
                        </div>
                        <p className="font-semibold text-white text-sm line-clamp-2 mb-2">{product.title}</p>
                        <div className="flex items-center justify-center gap-2">
                          <span className="bg-white text-btnColor px-4 py-1 rounded-full font-bold text-lg">
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
                  <td className="p-6 font-semibold text-gray-800 flex items-center gap-2">
                    <FaStar className="text-yellow-400 text-xl" />
                    Rating
                  </td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-6 text-center border-l">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`text-xl ${i < Math.floor(product.rating || 4) ? "text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating || 4.0} out of 5
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Category Row */}
                <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="p-6 font-semibold text-gray-800 flex items-center gap-2">
                    <MdCategory className="text-blueButton text-xl" />
                    Category
                  </td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-6 text-center border-l">
                      <span className="inline-block bg-blue-100 text-blueButton px-4 py-2 rounded-full font-medium">
                        {product.category || "Electronics"}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Availability Row */}
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-semibold text-gray-800 flex items-center gap-2">
                    <BsSpeedometer2 className="text-green-600 text-xl" />
                    Availability
                  </td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-6 text-center border-l">
                      <div className="flex items-center justify-center gap-2">
                        {product.status !== "Out of Stock" ? (
                          <>
                            <FaCheckCircle className="text-green-600 text-xl" />
                            <span className="text-green-600 font-semibold">In Stock</span>
                          </>
                        ) : (
                          <>
                            <FaTimesCircle className="text-red-600 text-xl" />
                            <span className="text-red-600 font-semibold">Out of Stock</span>
                          </>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Shipping Row */}
                <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="p-6 font-semibold text-gray-800 flex items-center gap-2">
                    <MdLocalShipping className="text-btnColor text-xl" />
                    Shipping
                  </td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-6 text-center border-l">
                      <span className="text-gray-700">
                        {product.price > 100 ? "Free Shipping" : "$15.00"}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Description Row */}
                <tr className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-semibold text-gray-800">Description</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-6 text-center border-l">
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {product.description || "High-quality product with excellent features and specifications. Perfect for your needs."}
                      </p>
                    </td>
                  ))}
                </tr>

                {/* Actions Row */}
                <tr className="bg-gray-100">
                  <td className="p-6 font-semibold text-gray-800">Actions</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-6 text-center border-l">
                      <div className="flex flex-col gap-3">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-btnColor to-orange-500 text-white px-4 py-3 rounded-lg hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
                        >
                          <FaShoppingCart />
                          Add to Cart
                        </button>
                        <button
                          onClick={() => handleAddToWishlist(product)}
                          className="flex items-center justify-center gap-2 border-2 border-red-500 text-red-500 px-4 py-3 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold"
                        >
                          <FaHeart />
                          Add to Wishlist
                        </button>
                        <button
                          onClick={() => navigate(`/shop/${product.id}`)}
                          className="flex items-center justify-center gap-2 border-2 border-blueButton text-blueButton px-4 py-3 rounded-lg hover:bg-blueButton hover:text-white transition-all duration-300 font-semibold"
                        >
                          View Details
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

      {/* Mobile View */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 space-y-6">
        {compareList.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-btnColor to-orange-500 p-4 relative">
              <button
                onClick={() => handleRemove(product.id)}
                className="absolute top-2 right-2 bg-white text-red-500 hover:bg-red-500 hover:text-white rounded-full p-2 transition-all duration-300"
              >
                <IoClose className="text-xl" />
              </button>
              <div className="bg-white rounded-lg p-4 mb-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain"
                />
              </div>
              <h3 className="text-white font-bold text-lg line-clamp-2 mb-2">{product.title}</h3>
              <span className="inline-block bg-white text-btnColor px-4 py-2 rounded-full font-bold text-xl">
                ${product.price}
              </span>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-semibold text-gray-700">Rating:</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(product.rating || 4) ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.rating || 4.0})</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-semibold text-gray-700">Category:</span>
                <span className="bg-blue-100 text-blueButton px-3 py-1 rounded-full text-sm font-medium">
                  {product.category || "Electronics"}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-semibold text-gray-700">Availability:</span>
                <span className={product.status !== "Out of Stock" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                  {product.status !== "Out of Stock" ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="font-semibold text-gray-700">Shipping:</span>
                <span className="text-gray-700">
                  {product.price > 100 ? "Free Shipping" : "$15.00"}
                </span>
              </div>

              <div className="space-y-2 pt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-btnColor to-orange-500 text-white px-4 py-3 rounded-lg hover:from-orange-600 hover:to-orange-600 transition-all duration-300 font-semibold"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className="w-full flex items-center justify-center gap-2 border-2 border-red-500 text-red-500 px-4 py-3 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 font-semibold"
                >
                  <FaHeart />
                  Add to Wishlist
                </button>
                <button
                  onClick={() => navigate(`/shop/${product.id}`)}
                  className="w-full flex items-center justify-center gap-2 border-2 border-blueButton text-blueButton px-4 py-3 rounded-lg hover:bg-blueButton hover:text-white transition-all duration-300 font-semibold"
                >
                  View Details
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
