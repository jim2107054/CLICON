import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUsSales = (props) => {
    const {image, price, description, productId} = props
    const navigate = useNavigate()

    const handleClick = () => {
        if (productId) {
            navigate(`/product-details/${productId}`)
        }
    }

  return (
    <div 
        onClick={handleClick}
        className='flex gap-5 my-3 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 items-center border border-blue-200 px-3 py-2 rounded-md transition-all duration-300 hover:border-btnColor hover:shadow-md group'
    > 
        <div className='overflow-hidden rounded-md'>
            <img 
                className='h-20 w-20 object-cover group-hover:scale-110 transition-transform duration-300' 
                src={image} 
                alt={description} 
            />
        </div>
        <div>
            <p className='text-sm font-medium text-gray-700 group-hover:text-btnColor transition-colors line-clamp-2'>{description}</p>
            <p className='font-semibold text-blue-500 mt-1'>${price}</p>
        </div>
    </div>
  )
}

export default AboutUsSales