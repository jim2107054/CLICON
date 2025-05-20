import React from 'react'
import shopItems from '../assets/ShopItem'

const OrderSummery = () => {
    const quantity = 1;
    const price = 320;
  return (
    <div>
        <div className="flex items-center gap-5 px-5  border-b">
                  {/*-------image-----------*/}
                  <div className="w-24 h-24 flex">
                    <img
                      className="items-center justify-center self-center"
                      src={shopItems[0].image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {/*-------Product Name-----------*/}
                    <p className="line-clamp-2 leading-none">
                      {shopItems[0].title}
                    </p>
                    {/*-------Product Price and quantity-----------*/}
                    <p className="flex gap-1">
                      <span className="text-gray-600 font-medium">{quantity}</span> x<span className="text-blue-400 font-medium">${price}</span>
                    </p>
                  </div>
        </div>
    </div>
  )
}

export default OrderSummery