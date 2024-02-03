import React from 'react'
import { FaQuoteLeft,FaQuoteRight,FaChevronRight ,FaChevronLeft } from "react-icons/fa";

 const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-10 mx-auto'>
            <img 
            className='aspect-square rounded-full h-[140px] w-[140px] z-30'
            src={review.image} 
            />
            <div className='w-[140px] bg-violet-500 rounded-full absolute h-[140px] top-[-6px] left-[10px] z-[-20]'>

            </div>
        </div>
        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>
        <div className='text-center'>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>
        <div className='text-violet-300 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>

        <div className='text-violet-300 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>
        
    </div>
  )
}


export default Card;