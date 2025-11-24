import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUsSales = (props) => {
    const {image, price, description, productId} = props
    const navigate = useNavigate()

    const handleClick = () => {
        if (productId) {
            navigate(`/shop/${productId}`)
        }
    }

  return (
    <div 
        onClick={handleClick}
        className='flex gap-5 my-3 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 items-center border border-blue-200 px-3 py-2 rounded-md transition-all duration-300 hover:shadow-lg hover:border-btnColor group'
    > 
        <div className='flex-shrink-0'>
            <img className='h-20 w-20 object-cover rounded-md' src={image} alt={description} />
        </div>
        <div className='flex-1 min-w-0'>
            <p className='text-sm font-medium text-gray-800 group-hover:text-btnColor transition-colors line-clamp-2'>{description}</p>
            <p className='font-semibold text-btnColor mt-1'>${price}</p>
        </div>
    </div>
  )
}

export default AboutUsSales