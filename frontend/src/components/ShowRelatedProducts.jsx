import React from 'react'
import { bestSellers, flashSaleToday, newArrival, topRated } from '../assets/assets'
import AboutUsSales from './AboutUsSales'

const ShowRelatedProducts = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-10 px-5 md:px-36 py-10">
        {/*--------FLASH SALE TODAY-----------*/}
        <div className="">
          <p className="font-semibold text-xl mb-4 text-gray-800 uppercase tracking-wide">Flash Sale Today</p>
          <div>
            {flashSaleToday.map((item) => (
              <AboutUsSales
                key={item.id}
                productId={item.productId}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/*--------BEST SELLERS-----------*/}
        <div>
          <p className="font-semibold text-xl mb-4 text-gray-800 uppercase tracking-wide">Best Sellers</p>
          <div>
            {bestSellers.map((item) => (
              <AboutUsSales
                key={item.id}
                productId={item.productId}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/*--------TOP RATED-----------*/}
        <div>
          <p className="font-semibold text-xl mb-4 text-gray-800 uppercase tracking-wide">Top Rated</p>
          <div>
            {topRated.map((item) => (
              <AboutUsSales
                key={item.id}
                productId={item.productId}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/*--------NEW ARRIVAL-----------*/}
        <div>
          <p className="font-semibold text-xl mb-4 text-gray-800 uppercase tracking-wide">New Arrival</p>
          <div>
            {newArrival.map((item) => (
              <AboutUsSales
                key={item.id}
                productId={item.productId}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowRelatedProducts