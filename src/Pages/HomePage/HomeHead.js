import React, { useState } from 'react';
import './HomePage.css';

const HomeHead = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggle = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className='bg-[#f6f6f6] fixed w-full z-50'>
            <div className='sm:mx-32 mx-2'>
                <div className='flex items-center justify-between' >
                    <div className='flex gap-5 items-center'>
                        <div className='my-1'>
                            <a href="/">
                                <img src="https://i.ibb.co/q0J2x1P/fav-home-removebg-preview.png" alt="" className='w-24' />
                            </a>
                        </div>
                        {/* <div>
                            <img src="https://i.ibb.co/yFv6tCK/awards.png" alt="" className='sm:w-44 w-24' />
                        </div> */}
                    </div>
                    <div className='ml-32 py-1'>
                        <div className='sm:block hidden'>
                            <div className='flex gap-5 justify-end '>
                                {/* <div className='text-[25px] font-bold text-[#198ec0]  header-font italic mb-5'>Call Guida Today <a className='text-[#98c07d]' href="/">1-111-232-6848</a></div> */}
                                <div>
                                    <img src="https://i.ibb.co/yFv6tCK/awards.png" alt="" className='sm:w-44 w-24' />
                                </div>
                                <div className='flex gap-3'>
                                    <span className='font-bold text-xl mt-1'>Follow Us On:</span>
                                    <img src="https://i.ibb.co/6NnGWkY/facebook.jpg" alt="" className='w-8 rounded-full h-8' />
                                </div>
                            </div>
                        </div>
                        <div className='sm:block hidden'>
                            <div className='flex uppercase header-font text-[19px] font-bold '>
                                <div className='px-4 text-[#003144] hover:text-[#98c83f] py-3 hover:bg-[#fff]'><a href="/">Home</a> </div>
                                <div className='px-4 text-[#003144] hover:text-[#98c83f] py-3 hover:bg-[#fff]'><a href="/about-us">About Us</a> </div>
                                <div className='px-4 text-[#003144] hover:text-[#98c83f] py-3 hover:bg-[#fff] flex items-center' onClick={handleToggle}><span>Products</span> <i class="fa-solid fa-angle-down pl-1"></i>
                                </div>
                                <div>
                                    <ul className={showMenu ? 'submenu show-submenu' : 'submenu hide-submenu'}>
                                        <li>
                                            <a href="#">Service 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Service 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Service 3</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="/why-choose-us">
                                    <div className='px-4 text-[#003144] hover:text-[#98c83f] py-3 hover:bg-[#fff]'>Why Choose US </div>
                                </a>
                            </div>
                        </div>
                        <div className='block sm:hidden'>

                            <div className='text-[#f6b234] uppercase header-font text-[19px] font-bold mr-5'><i class="fa-solid fa-bars text-4xl"></i></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHead