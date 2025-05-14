import React from 'react'
import { assets } from '../assets/assets'
import { FaArrowLeft } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

const ErrorPageNotFound = () => {
  return (
    <div className='flex '>
        <div className='flex flex-col items-center mx-auto mb-10'>
            <div className='flex items-center justify-center'>
                <img className='w-2/3' src={assets.oppsError} alt="" />
            </div>
            <div className='flex flex-col gap-5 items-center'>
                <h1 className='text-3xl font-medium'>404, Page not founds</h1>
                <p className='text-center w-1/2'>Something went wrong. It's look that your requested could not be found. It's look like the link is broken or the page is removed.</p>
                <div className='flex gap-5'>
                <button className='border border-orange-500 text-gray-900 hover:text-white hover:bg-orange-300 transition-all duration-200 hover:scale-105 px-6 py-2 rounded my-1 flex items-center gap-2'><span><FaArrowLeft/></span>GO BACK</button>
                <button className='border border-orange-500 text-gray-900 hover:text-white hover:bg-orange-300 transition-all duration-200 hover:scale-105 px-6 py-2 rounded my-1 flex items-center gap-2'><span><IoHomeOutline/></span>GO TO HOME</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorPageNotFound