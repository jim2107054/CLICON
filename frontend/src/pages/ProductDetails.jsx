import React, { useState } from 'react'
import { assets } from './../assets/assets';

const ProductDetails = () => {
    const [productImage, setProductImage] = useState(assets.laptopDetails);
  return (
    <div>
        <div className='flex flex-col lg:flex-row px-36 py-5 gap-10 bg-red-300 mb-10'>
            {/*--------Left Div-----------*/}
            <div className='flex flex-col w-full lg:w-1/2'>
                {/*--------Product large image*/}
                <div className='flex w-[616px] h-[464px] p-5 justify-center'>
                    <img className='w-full' src={productImage} alt="" />
                </div>
                {/*--------Product small images*/}
                <div className='flex px-5 gap-5'>
                    <img onClick={()=>setProductImage(assets.laptopDetails)} className='w-[100px] h-[80px] rounded cursor-pointer border-btnColor border-2' src={assets.laptopDetails} alt="" />
                    <img onClick={()=>setProductImage(assets.laptopDetails1)} className='w-[100px] h-[80px] rounded cursor-pointer border-btnColor border-2' src={assets.laptopDetails1} alt="" />
                    <img onClick={()=>setProductImage(assets.laptopDetails2)} className='w-[100px] h-[80px] rounded cursor-pointer border-btnColor border-2' src={assets.laptopDetails2} alt="" />
                    <img onClick={()=>setProductImage(assets.laptopDetails3)} className='w-[100px] h-[80px] rounded cursor-pointer border-btnColor border-2' src={assets.laptopDetails3} alt="" />
                </div>
            </div>
            {/*--------Right Div-----------*/}
            <div className='flex flex-col w-full lg:w-1/2'>
                {/*--------Product large image*/}
                <div className='flex justify-center border-2'>
                    <img src={assets.laptopDetails} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails