import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft ,FiChevronRight} from 'react-icons/fi'
const Testimonials = (props) => {
    let reviews = props.reviews;

    const[index,setIndex] = useState(0);
    function leftShifthandler(){
        if(index-1 < 0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }


    function RightShifthandler(){

        if(index+1 >= reviews.length){
            setIndex(0);
        }
        else{
               setIndex(index+1);
        }


    }



    function SurpriseHandler(){

    let randomindex = Math.floor(Math.random() * reviews.length);

    setIndex(randomindex);

    }
  return (
    <div className='w-[80vw]  md:w-[600px] bg-white flex flex-col justify-center items-center
    mt-5 p-10 transition-all duration-700 hover:shadow-xl  rounded-md'>
      <Card review = {reviews[index]}></Card>

      <div className='flex text-3xl mt-2 gap-3 text-red-400 font-bold'>
        <button
        onClick={leftShifthandler}
         className='cursor-pointer  hover:text-red-500 text-xl mt-3'>
            <FiChevronLeft/>
        </button>

        <button 
         onClick={RightShifthandler}
        className='cursor-pointer  hover:text-red-500 text-xl mt-3'>
            <FiChevronRight/>
        </button>
      </div>

      <div  className='mt-5'>
        <button
        onClick={SurpriseHandler}
        className='bg-red-400 hover:bg-red-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-sm'>
            Surprise Me
    </button>
      </div>
    </div>
  )
}
 
export default Testimonials
