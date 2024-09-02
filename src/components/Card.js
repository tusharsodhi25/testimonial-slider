import React from 'react'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa'


const Card = (props) => {

    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-10 mx-auto left-[-15px]'>
        <img 
        className='aspect-square rounded-full w-[120px] h-[120px] z-25'
        src={review.image} alt="" />

        <div className='w-[120px] h-[120px] bg-red-500 rounded-full absolute
        top-[-6px] z-[-10] left-[10px]'></div>

      </div>

      <div className='text-center mt-5'>
        <p  className='font-bold text-2xl capitalize'>{review.name}</p>
        <p className='text-red-300  text-sm uppercase'>{review.job}</p>
      </div>

    

      <div className='text-red-400 mx-auto mt-2 text-sm'>
        <FaQuoteLeft/>
      </div>


      <div className='text-center mt-4 text-slate-500 text-sm'>
        {review.text}
      </div>

      <div  className='text-red-400 mx-auto mt-5 text-sm'>
        <FaQuoteRight/>
      </div>
    </div>
  )
}

export default Card
