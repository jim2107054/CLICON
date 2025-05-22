import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import shopItems from '../../assets/ShopItem';
import ItemCard from './../ItemCard';

const BestDeals = () => {
    const navigate = useNavigate();
  return (
    <div>
        {/*------------------Header Section-------------------*/}
        <div className='flex justify-between items-center'>
            {/*------------------Header Section Left Div-------------------*/}
            <div className='flex flex-col md:flex-row gap-5'>
                <p className='flex text-xl font-medium'>Best Deals</p>
                <div className='flex gap-2'>
                    <p className='flex items-center text-sm font-medium'>Deals ends in</p>
                    <div className='flex gap-2 bg-yellow-400 rounded p-1'>
                        <p>00d</p>
                        <p>:</p>
                        <p>00h</p>
                        <p>:</p>
                        <p>00m</p>
                        <p>:</p>
                        <p>00s</p>
                    </div>
                </div>
            </div>
            {/*------------------Header Section Right Div-------------------*/}
            <div>
                <p onClick={()=>navigate('/shop')} className='flex items-center gap-2 cursor-pointer text-blueButton font-medium'>Browse All Product <span><FaArrowRightLong/></span></p>
            </div>
        </div>
        {/*------------------Product Section-------------------*/}
        <div className='flex w-full flex-col md:flex-row gap-5 mt-5'>
            {/*------------------Product Section Left Div-------------------*/}
            <div className='bg-yellow-300 w-full md:w-[25%]'> 
                dfasdf
            </div>
            {/*------------------Product Section Right Div-------------------*/}
            <div className='w-full md:w-[75%]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        shopItems.length > 0 && 
                        shopItems.slice(0,8).map((item,index)=>(
                            <>
                            <ItemCard
                                key={index}
                                id={item.id}
                                image={item.image}
                                rating={item.rating}
                                sell={item.sell}
                                title={item.title}
                                price={item.price}
                                offer={item.offer}
                            />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestDeals