import React from 'react'
import ReviewSlider from './ReviewSlider';

const HomeReview = () => {
    return (
        <div id='reviews' className='bg-[#003144] text-[#fff] mb-16 px-3'>
        <h2 className='text-6xl text-[#fff] font-bold !leading-normal text-center mt-5'>Why Us</h2>
        <h1 className='text-4xl text-[#98c83f] !leading-normal text-center mb-5 font-bold'>HOME IMPROVEMENT IS ALL WE KNOW</h1>
            <div className='sm:flex'>
                <div className='sm:flex justify-between gap-1 items-center '>
                    <img src="https://i.ibb.co/hRcJ07v/testimonials-img-01.png" alt="" className='!sm:w-[800px] !w-auto h-auto' />
                    <div className='px-2 py-2 text-center'>
                        <h2 className='text-2xl font-bold'> Between Us & Our Clients</h2>
                    </div>
                </div>
                <div>
                    <ReviewSlider />
                </div>
            </div>
        </div>
    )
}

export default HomeReview