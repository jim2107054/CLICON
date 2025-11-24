import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div 
        onClick={handleCategoryClick}
        className='group bg-white border border-gray-200 rounded-lg p-4 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-btnColor hover:-translate-y-1 flex flex-col items-center justify-center gap-3 min-h-[140px] md:min-h-[160px]'
    >
        {/* Icon Container */}
        <div className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-orange-50 transition-colors duration-300'>
            <img 
                className='w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110' 
                src={image} 
                alt={name} 
            />
        </div>
        
        {/* Category Name */}
        <div className='text-center'>
            <p className='text-sm md:text-base font-semibold text-gray-800 group-hover:text-btnColor transition-colors duration-300'>
                {name}
            </p>
        </div>
    </div>
  )
}

export default Categories