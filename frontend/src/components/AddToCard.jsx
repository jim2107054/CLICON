import React, { useState } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const AddToCard = (props) => {
  const {
    OriginalPrice,
    DiscountPrice,
    cart,
    product,
    removeFromCart,
    updateCartQuantity,
  } = props;

  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeFromCart(product.id);
    }, 300);
  };

  const foundItem = cart.find((item) => item.id === product.id);
  const quantity = foundItem ? foundItem.quantity : 1;
  const itemTotal = DiscountPrice * quantity;

  return (
    <div
      className={`transition-all duration-300 ${
        isRemoving ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-200">
        {/* Product Image and Details */}
        <div className="flex items-center gap-4 w-full md:w-1/2">
          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors duration-200 p-2 hover:bg-red-50 rounded-lg group"
            aria-label="Remove item"
          >
            <FaTimes className="text-xl group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Product Image */}
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-contain p-2"
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* Product Title */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-2 leading-snug">
              {product.title}
            </h3>
            {product.category && (
              <p className="text-xs text-gray-500 mt-1">{product.category}</p>
            )}
          </div>
        </div>

        {/* Price, Quantity, and Total */}
        <div className="flex items-center justify-between md:justify-around w-full md:w-1/2 gap-2">
          {/* Price */}
          <div className="flex flex-col items-center min-w-[80px]">
            {OriginalPrice && OriginalPrice > DiscountPrice && (
              <p className="text-xs text-gray-400 line-through">
                ${OriginalPrice.toFixed(2)}
              </p>
            )}
            <p className="text-base md:text-lg font-semibold text-gray-800">
              ${DiscountPrice.toFixed(2)}
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => {
                  if (quantity > 1) {
                    updateCartQuantity(product.id, quantity - 1);
                  }
                }}
                disabled={quantity <= 1}
                className={`px-3 py-2 hover:bg-gray-100 transition-colors duration-200 ${
                  quantity <= 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-700"
                }`}
                aria-label="Decrease quantity"
              >
                <FaMinus className="text-sm" />
              </button>
              
              <div className="px-4 py-2 min-w-[50px] text-center">
                <span className="text-base md:text-lg font-semibold text-gray-800">
                  {quantity}
                </span>
              </div>
              
              <button
                onClick={() => updateCartQuantity(product.id, quantity + 1)}
                className="px-3 py-2 hover:bg-gray-100 text-gray-700 transition-colors duration-200"
                aria-label="Increase quantity"
              >
                <FaPlus className="text-sm" />
              </button>
            </div>
          </div>

          {/* Item Total */}
          <div className="flex flex-col items-center min-w-[80px]">
            <p className="text-base md:text-lg font-bold text-btnColor">
              ${itemTotal.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">Total</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
