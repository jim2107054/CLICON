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
    <div className='flex justify-center items-center hover:scale-105 transition-all duration-300'>
        <div 
            onClick={handleCategoryClick}
            className='flex py-2 flex-col gap-2 justify-center items-center border border-gray-400 shadow-lg rounded cursor-pointer w-[100px] h-[100px] md:h-[200px] md:w-[200px] hover:border-btnColor hover:shadow-xl transition-all'
        >
            <div className='items-center justify-center'>
                <img className='h-full' src={image} alt={name} />
            </div>
            <div className='flex justify-center items-center'>
                <p className='text-center font-medium'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default Categories