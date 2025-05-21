import React from 'react'

const AboutUsSales = (props) => {
    const {image,price,description} = props
  return (
    <div className='flex gap-5 my-3 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 items-center border border-blue-200 px-3 py-2'> 
        <div>
            <img className='h-20 w-20 object-cover' src={image} alt="" />
        </div>
        <div>
            <p className='text-sm font-medium'>{description}</p>
            <p className='font-semibold text-blue-500'>${price}</p>
        </div>
    </div>
  )
}

export default AboutUsSales