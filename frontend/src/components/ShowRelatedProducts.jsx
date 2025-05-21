import React from 'react'
import { bestSellers, flashSaleToday, newArrival, topRated } from '../assets/assets'
import AboutUsSales from './AboutUsSales'

const ShowRelatedProducts = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-10 px-36 py-10">
        {/*--------FLASH SALE TODAY-----------*/}
        <div className="">
          <p className="font-medium text-xl">FLASH SALE TODAY</p>
          <div>
            {flashSaleToday.map((item, index) => (
              <AboutUsSales
                key={index}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/*--------BEST SELLERS-----------*/}
        <div>
          <p className="font-medium text-xl">BEST SELLERS</p>
          <div>
            {bestSellers.map((item, index) => (
              <AboutUsSales
                key={index}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/*--------TOP RATED-----------*/}
        <div>
          <p className="font-medium text-xl">TOP RATED</p>
          <div>
            {topRated.map((item, index) => (
              <AboutUsSales
                key={index}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/*--------NEW ARRIVAL-----------*/}
        <div>
          <p className="font-medium text-xl">NEW ARRIVAL</p>
          <div>
            {newArrival.map((item, index) => (
              <AboutUsSales
                key={index}
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