import React from "react";
import { CiStar } from "react-icons/ci";

const ItemCard = (props) => {
  const { id, image, rating, sell, title, price, offer } = props;

  return (
    <div>
      <div key={id} className="flex flex-col border border-b-2 cursor-pointer rounded-md overflow-hidden hover:shadow-lg transition-shadow hover:-translate-y-2 hover:duration-500 hover:scale-105">
        {/* Image Section */}
        <div className="relative flex px-2 py-1 w-full h-[50%]">
          <div className="h-[50%]"><img className="h-full w-full" src={image} alt="product" /></div>
          {offer && (
            <span
              className={`absolute top-1 left-1 px-2 py-0.5 text-sm font-light rounded text-white ${
                offer === "HOT"
                  ? "bg-red-600"
                  : offer === "BEST DEALS"
                  ? "bg-blue-500"
                  : offer === "SALE"
                  ? "bg-green-600"
                  : offer === "25% OFF"
                  ? "bg-yellow-600"
                  : ""
              }`}
            >
              {offer}
            </span>
          )}
        </div>

        {/* Info Section */}
        <div className="flex flex-col px-2 py-1 flex-grow justify-between">
          <div className="flex gap-5">
            <span className="flex items-center">
              <CiStar className="text-xl text-yellow-400" />
              {rating}
            </span>
            <span className="text-gray-800">({sell})</span>
          </div>

          {/* Title */}
          <div className="h-10 justify-center">
            <h3 className="text-sm font-medium text-start leading-none line-clamp-2 mt-1">
            {title}
          </h3>
          </div>

          {/* Price */}
          <p className="text-[18px] leading-none text-blue-400 font-medium">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
