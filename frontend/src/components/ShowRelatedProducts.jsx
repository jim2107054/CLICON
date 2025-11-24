import React from 'react'
import { bestSellers, flashSaleToday, newArrival, topRated } from '../assets/assets'
import AboutUsSales from './AboutUsSales'

const ShowRelatedProducts = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-10 px-5 md:px-36 py-10">
        {/*--------FLASH SALE TODAY-----------*/}
        <div className="">
          <p className="font-medium text-xl mb-4 text-gray-800">FLASH SALE TODAY</p>
          <div>
            {flashSaleToday.map((item) => (
              <AboutUsSales
                key={item.id}
                image={item.image}
                price={item.price}
                description={item.description}
                productId={item.productId}
              />
            ))}
          </div>
        </div>
        {/*--------BEST SELLERS-----------*/}
        <div>
          <p className="font-medium text-xl mb-4 text-gray-800">BEST SELLERS</p>
          <div>
            {bestSellers.map((item) => (
              <AboutUsSales
                key={item.id}
                image={item.image}
                price={item.price}
                description={item.description}
                productId={item.productId}
              />
            ))}
          </div>
        </div>
        {/*--------TOP RATED-----------*/}
        <div>
          <p className="font-medium text-xl mb-4 text-gray-800">TOP RATED</p>
          <div>
            {topRated.map((item) => (
              <AboutUsSales
                key={item.id}
                image={item.image}
                price={item.price}
                description={item.description}
                productId={item.productId}
              />
            ))}
          </div>
        </div>
        {/*--------NEW ARRIVAL-----------*/}
        <div>
          <p className="font-medium text-xl mb-4 text-gray-800">NEW ARRIVAL</p>
          <div>
            {newArrival.map((item) => (
              <AboutUsSales
                key={item.id}
                image={item.image}
                price={item.price}
                description={item.description}
                productId={item.productId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowRelatedProducts