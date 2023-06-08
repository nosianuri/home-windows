import React, { useState } from 'react';
import './HomePage.css';

const HomeHead = () => {
    const [searchlaw, setSearchlaw] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const toggleShowMore = () => setOpen(!open);
    const toggleShowMenu = () => setIsOpen(!isOpen);
    const [showMenu, setShowMenu] = useState(false);
    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const menus = [
        {
            id: 1,
            name: 'Window Installation',
            Link: '/window-installation',
        },
        {
            id: 2,
            name: 'Roofing Campaign',
            Link: '/roofing-campaign',
        },
        {
            id: 3,
            name: 'Pest Control',
            Link: '/pest-control',
        },
    ];
    const handleToggle = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className='bg-[#f6f6f6] fixed w-full z-50'>
            <div className='sm:mx-32 mx-2'>
                <div className='flex items-center justify-between sm"gap-0 gap-5' >

                    <div className='block sm:hidden'>
                        <div className='text-[16px] text-[#f6b234] px-8  py-2 font-semibold navigation__item hover:bg-[#333] hover:bg-opacity-30' onClick={toggleShowMenu}>{isOpen ? ' ' : ' '} <i class="fa-solid fa-bars text-4xl"></i>
                            {isOpen && (
                                <ul className="dropdown_nav mt-2 text-[#fff] !mr-24 fixed z-50">
                                    <li className=" py-1 pl-4 border border-[#98c83f] border-b-[#98c83f] bg-[#98c83f] hover:bg-opacity-30"><a href="/">Home</a></li>
                                    <li className=" py-1 pl-4  border border-[#98c83f] border-b-[#98c83f] bg-[#98c83f] hover:bg-opacity-30"><a href="/about-us">About Us</a></li>
                                    <li className=" py-1 pl-4  border border-[#98c83f] border-b-[#ddd] bg-[#98c83f] hover:bg-opacity-30" > PRODUCTS <i class="fa-solid fa-angle-down pl-1"></i>
                                        <div className='mr-5 '>
                                            {menus.slice(0, open ? menus.length : 6).map(city => (
                                                <div key={city} className=" ">
                                                    <span className="">
                                                        <li className=" py-1 pl-2  border border-[#98c83f] border-b-[#ddd] hover:bg-opacity-30"><a href={city.Link}>{city.name} </a></li>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                    <li className=" py-1 pl-4  border border-[#98c83f] border-b-[#ddd] bg-[#98c83f] hover:bg-opacity-30"><a href="/why-choose-us">Why Choose US</a></li>
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className='flex  items-center'>
                        <div className='my-1'>
                            <a href="/">
                                <img src="https://i.ibb.co/q0J2x1P/fav-home-removebg-preview.png" alt="" className='w-24' />
                            </a>
                        </div>

                    </div>
                    <div className='sm:block hidden'>
                        <div className='sm:ml-32 py-1'>

                            <div className='flex gap-5 justify-end space-y-1'>
                                {/* <div className='text-[25px] font-bold text-[#198ec0]  header-font italic mb-5'>Call Guida Today <a className='text-[#98c07d]' href="/">1-111-232-6848</a></div> */}
                                <div>
                                    <img src="https://i.ibb.co/yFv6tCK/awards.png" alt="" className='sm:w-44 w-24' />
                                </div>
                                <div className='flex gap-3'>
                                    <span className='font-bold text-xl mt-1'>Follow Us On:</span>
                                    <a href="https://www.facebook.com/mrhomeserviceus">
                                        <img src="https://i.ibb.co/6NnGWkY/facebook.jpg" alt="" className='w-8 rounded-full h-8' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='sm:block hidden'>
                            <div className='flex uppercase header-font text-[19px] font-bold '>
                                <div className='px-4 text-[#003144] hover:text-[#98c83f] py-3 hover:bg-[#fff]'><a href="/">Home</a> </div>
                                <div className='px-4 text-[#003144] hover:text-[#98c83f] py-3 hover:bg-[#fff]'><a href="/about-us">About Us</a> </div>
                                <div className=' px-4 py-3 font-semibold navigation__item hover:text-[#98c83f] uppercase !z-50 overflow-y-visible' onMouseEnter={handleDropdown}>Products <i class="fa-solid fa-angle-down pl-1"></i>
                                    {showDropdown && (
                                        <ul className="dropdown_nav mt-3 fixed z-50">
                                            <li className="dropdown__item py-1 pl-4 pr-1 bg-[#98c83f] border border-[#98c83f] border-b-[#ddd] text-[#fff] hover:bg-[#98c83f]"><a href="/window-installation">Window Installation</a></li>
                                            <li className="dropdown__item py-1 pl-4 pr-1 border border-[#98c83f] border-b-[#ddd] text-[#fff] bg-[#98c83f] hover:bg-[#98c83f]"><a href="/roofing-campaign">Roofing Campaign</a></li>
                                            <li className="dropdown__item py-1 pl-4 pr-1 border border-[#98c83f] border-b-[#98c83f] text-[#fff] bg-[#98c83f] hover:bg-[#98c83f]"><a href="/pest-control">Pest Control</a></li>
                                        </ul>
                                    )}
                                </div>
                                {/* <div className='px-4 text-[#003144] hover:text-[#98c83f] py-3 hover:bg-[#fff] flex items-center' onClick={handleToggle}><span>Products</span> <i class="fa-solid fa-angle-down pl-1"></i>
                                </div> */}
                                {/* <div>
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
                                </div> */}
                                <a href="/why-choose-us">
                                    <div className='px-4 text-[#003144] hover:text-[#98c83f] py-3 hover:bg-[#fff]'>Why Choose US </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHead