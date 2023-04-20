import React from 'react'
import ReviewSlider from './ReviewSlider';

const HomeReview = () => {
    return (
        <div id='reviews' className='bg-[#003144] text-[#fff]  px-3 pb-10'>
        <h2 className='text-6xl text-[#fff] font-bold !leading-normal text-center mt-5'>Why Us</h2>
        <h1 className='text-4xl text-[#98c83f] !leading-normal text-center mb-5 font-bold'>HOME IMPROVEMENT IS ALL WE KNOW</h1>
            <div className='reviewsbody items-center'>
                <div className='sm:flex  gap-1 items-center '>
                    <img src="https://i.ibb.co/W5hK2tF/review-home-page.png" alt="" className='h-auto' />
                    <div className='px-2 py-2 text-center sm:w-[580px] mx-auto'>
                        <h2 className='text-2xl font-bold'> Between Us & <br />
                        Our Clients</h2>
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