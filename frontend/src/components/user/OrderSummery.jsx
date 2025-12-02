import React from "react";

const OrderSummery = (props) => {
  const { image, title, quantity, price } = props;
  return (
    <div>
      <div className="flex items-center gap-5 px-5  border-b">
        {/*-------image-----------*/}
        <div className="w-24 h-24 flex">
          <img
            className="items-center justify-center self-center"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          {/*-------Product Name-----------*/}
          <p className="line-clamp-2 leading-none">{title}</p>
          {/*-------Product Price and quantity-----------*/}
          <p className="flex gap-1">
            <span className="text-gray-600 font-medium">{quantity}</span> x
            <span className="text-blue-400 font-medium">${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
