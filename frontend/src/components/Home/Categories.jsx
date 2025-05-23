import React from 'react'

const Categories = (props) => {
    const {image, name} = props
  return (
    <div className='flex justify-center items-center hover:scale-105 transition-all duration-300'>
        <div className='flex py-2 flex-col gap-2 justify-center items-center border border-gray-400 shadow-lg rounded cursor-pointer w-[100px] h-[100px] md:h-[200px] md:w-[200px]'>
            <div className='items-center justify-center'>
                <img className='h-full' src={image} alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <p className='text-center font-medium'>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default Categories