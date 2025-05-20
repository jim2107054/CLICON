import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const AddToCard = (props) => {
  const [productQuantity, setproductQuantity] = useState(1);
  const [cancled, setCancled] = useState(true);
  const [total, setTotal] = useState(0);

  //distructure props
  const {image,title,price}=props;
  return (
    <div>
      {
        cancled && 
        <>
        <div className="flex bg-red-500 h-24 md:gap-2 xl:gap-2 2xl:gap-4 w-full py-2">
        <div className="flex bg-blue-500 flex-row gap-5 w-[55%] px-2 rounded line-clamp-2">
          <div className="flex items-center">
            <MdOutlineCancel
              onClick={() => setCancled(false)}
              className="text-2xl text-red-600"
            />
          </div>
          <div className="flex items-center">
            <img className="object-cover" src={image} alt="logo" />
          </div>
          <div className="flex justify-start">
            <p className="leading-none my-1 text-xl text-gray-700">
              {title}
            </p>
          </div>
        </div>
        <div className="bg-yellow-300 my-auto w-[10%]">
          <p className="text-center line-through text-sm font-medium text-gray-600">
            $752
          </p>
          <p className="text-center text-base font-medium">${price}</p>
        </div>
        <div className="bg-green-300 items-center my-auto px-1 py-1 md:w-[15%] lg:w-[15%]">
          <div className="flex gap-5 justify-center items-center border-2 border-gray-300 rounded px-2 py-1 w-full">
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
        </div>
        <div className="bg-yellow-300 m-auto w-[10%]">
          <p className="text-center text-base font-medium">
            ${price * productQuantity}
          </p>
        </div>
      </div>
        </>
      }
    </div>
  );
};

export default AddToCard;
