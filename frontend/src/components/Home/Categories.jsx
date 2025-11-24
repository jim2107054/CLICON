import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Categories = (props) => {
    const {image, name, category} = props
    const navigate = useNavigate()

    const handleCategoryClick = () => {
        if (category) {
            navigate(`/shop?category=${category}`)
        } else {
            navigate('/shop')
        }
    }

  return (
    <div className='group flex justify-center items-center'>
        <div 
            onClick={handleCategoryClick}
            className='relative flex flex-col gap-3 justify-center items-center bg-white border-2 border-gray-200 shadow-md rounded-xl cursor-pointer w-[120px] h-[120px] md:h-[220px] md:w-[220px] overflow-hidden transition-all duration-300 hover:border-btnColor hover:shadow-2xl hover:-translate-y-2 hover:scale-105'
        >
            {/* Background gradient on hover */}
            <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-btnColor/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            {/* Image container with enhanced styling */}
            <div className='relative z-10 flex items-center justify-center p-4 md:p-6 transition-transform duration-300 group-hover:scale-110'>
                <img 
                    className='w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-lg' 
                    src={image} 
                    alt={name} 
                />
            </div>
            
            {/* Text with icon */}
            <div className='relative z-10 flex flex-col items-center justify-center gap-1 px-2'>
                <p className='text-center font-semibold text-sm md:text-base text-gray-800 group-hover:text-btnColor transition-colors duration-300'>
                    {name}
                </p>
                <div className='flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                    <span className='text-xs text-btnColor font-medium'>Shop Now</span>
                    <FaArrowRight className='text-xs text-btnColor' />
                </div>
            </div>
            
            {/* Decorative corner accent */}
            <div className='absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-btnColor/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
    </div>
  )
}

export default Categories