import React from "react";
import { useNavigate } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";

const ItemCard = (props) => {
  const { product, Total, addToCart, addToWishList, wishList } = props;
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/shop/${product.id}`);
  };

  return (
    <div>
      <div
        key={product.id}
        className="flex flex-col border border-b-2 cursor-pointer rounded-md overflow-hidden hover:shadow-lg transition-shadow hover:-translate-y-2 hover:duration-500 hover:scale-105"
      >
        {/* Image Section */}
        <div 
          onClick={handleProductClick}
          className="relative justify-center items-center flex px-2 py-1 w-full h-[50%]"
        >
          <div className="object-cover">
            <img className="h-full w-full" src={product.image} alt="product" />
          </div>
          {product.offer && (
            <span
              className={`absolute top-1 left-1 px-2 py-0.5 text-sm font-light rounded text-white ${
                product.offer === "HOT"
                  ? "bg-red-600"
                  : product.offer === "BEST DEALS"
                  ? "bg-blue-500"
                  : product.offer === "SALE"
                  ? "bg-green-600"
                  : product.offer.includes("OFF")
                  ? "bg-yellow-600"
                  : ""
              }`}
            >
              {product.offer}
            </span>
          )}
          <span
            onClick={(e) => {
              e.stopPropagation();
              addToWishList(product);
            }}
            className="absolute right-1.5 top-2"
          >
            <GoHeartFill className="text-2xl md:text-3xl text-blue-300 hover:text-red-500" />
          </span>
        </div>

        {/* Info Section */}
        <div className="flex flex-col flex-grow justify-between">
          <div 
            onClick={handleProductClick}
            className="flex px-2 md:px-3 lg:px-5 py-1 gap-5"
          >
            <span className="flex items-center">
              <CiStar className="text-xl text-yellow-400" />
              {product.rating}
            </span>
            <span className="text-gray-800">({product.sell})</span>
          </div>

          {/* Title */}
          <div 
            onClick={handleProductClick}
            className="h-10 px-2 md:px-3 lg:px-5 justify-center"
          >
            <h3 className="text-sm font-medium text-start leading-none line-clamp-2 mt-1">
              {product.title}
            </h3>
          </div>

          <div className="flex px-2 items-center md:gap-2 justify-between lg:justify-around  my-2">
            {/* Price */}
            <p 
              onClick={handleProductClick}
              className="text-[18px] leading-none text-blue-400 font-medium"
            >
              ${product.price.toFixed(2)}
            </p>
            {/* Add to Cart Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="flex items-center gap-2 md:gap-0 bg-blueButton text-white px-3 py-1.5 w-fit rounded-md hover:bg-blue-600 transition-colors"
            >
              <FaCartArrowDown className="text-xl block lg:hidden " />
              <p className="hidden lg:block">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
