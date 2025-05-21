import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { assets } from '../assets/assets'

const Subscribtion = () => {
  return (
    <div>
        <div className="flex flex-col items-center py-10 w-full bg-secondary">
                <div className="w-full px-5 lg:px-20 md:w-1/2">
                  <h1 className="text-3xl text-white font-medium text-center">
                    Subscribe to our newsletter
                  </h1>
                  <p className="text-base font-light text-center my-5">
                    Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
                    libero et <br className="hidden lg:visible" /> cursus. Donec non
                    quam urna. Quisque vitae porta ipsum.
                  </p>
                  <div className="flex relative">
                    <input
                      className="w-full h-12 px-5 rounded border-b"
                      type="email"
                      placeholder="Email address"
                    />
                    <button className="absolute right-2 bg-[#FA8232] h-10 px-8 py-2 text-white rounded top-1 flex items-center gap-2">
                      Subscribe <span> <FaArrowRight/> </span>
                    </button>
                  </div>
                  <hr className="border w-full lg:w-2/3 mx-auto border-t-0 bg-white mt-5" />
        
                  <div className="flex items-center justify-center gap-5 mb-3">
                    <img className="w-12" src={assets.google} alt="" />
                    <img className="w-12" src={assets.amazom} alt="" />
                    <img className="w-12" src={assets.philips} alt="" />
                    <img className="w-12" src={assets.toshiba} alt="" />
                    <img className="w-12" src={assets.samsung} alt="" />
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Subscribtion