import { useState } from 'react';
import Card from './Card';
import { FaQuoteLeft,FaQuoteRight,FaChevronRight ,FaChevronLeft } from "react-icons/fa";

 const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index,setindex] = useState(0);

    function leftarrowHandler(){
        if(index-1 < 0){
            setindex(reviews.length -1);
        }
        else{
            setindex(index-1);
        }
    }

    function rightarrowHandler(){
        if(index+1 >= reviews.length){
            setindex(0);
        }
        else{
            setindex(index + 1);
        }
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random()*reviews.length);
        setindex(randomIndex);
    }
  return (
    <div className='w-[80vw] md:w-[650px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 rounded-md hover:shadow-xl'>
        <Card review={reviews[index]}></Card>

       

        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center items-center'>
            <button 
            onClick={leftarrowHandler}
            className='curser-pointer hover:text-violet-500'>
                <FaChevronLeft/>
            </button>
            <button 
            onClick={rightarrowHandler}
            className='curser-pointer hover:text-violet-500'>
                <FaChevronRight/>
            </button>
        </div>

        <div className=''>
            <button
            onClick={surpriseHandler} 
            className='curser-pointer bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md text-white font-bold text-lg mt-4'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}


export default Testimonial;