import React from 'react';
import './HomePage.css';

const HomeHead = () => {
    return (
        <div className='bg-[#f6f6f6] '>
            <div className='mx-32'>
                <div className='flex items-center justify-between' >
                <div className='flex gap-5 items-center'>
                <div className='my-1'>
                        <img src="https://i.ibb.co/TKMPp1p/fav-home.png" alt="" className='w-24' />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/yFv6tCK/awards.png" alt="" className='w-40' />
                    </div>
                </div>
                    <div className=''>
                        {/* <div className='flex gap-5 ml-32'>
                            <div className='text-[33px] font-bold text-[#198ec0]  header-font italic mb-5'>Call Guida Today <a className='text-[#98c07d]' href="/">1-111-232-6848</a></div>
                            <div className='flex gap-3'>
                                <img src="https://i.ibb.co/KwmNXCN/twitter.jpg" alt="" className='w-10 h-10' />
                                <img src="https://i.ibb.co/6NnGWkY/facebook.jpg" alt="" className='w-10 h-10' />
                                <img src="https://i.ibb.co/2tNJBCD/instagram.jpg" alt="" className='w-10 h-10' />
                                <img src="https://i.ibb.co/fCgNVz2/linkedin.jpg" alt="" className='w-10 h-10' />
                            </div>
                        </div> */}
                        <div className='flex text-[#198ec0] uppercase header-font text-[19px] font-bold '>
                            <div className='px-4 py-3 hover:bg-[#fff]'>About Us <i class="fa-solid fa-angle-down pl-1"></i></div>
                            <div className='px-4 py-3 hover:bg-[#fff]'>Products <i class="fa-solid fa-angle-down pl-1"></i></div>
                            <div className='px-4 py-3 hover:bg-[#fff]'>Why Choose US <i class="fa-solid fa-angle-down pl-1"></i></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHead