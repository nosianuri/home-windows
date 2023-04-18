import React, { useState } from 'react';
import classNames from 'classnames';

const Professional = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore(!showMore);
    const services = [
        {
            id: 1,
            name: 'Assembly',
            img: 'img',
            link: '/',
        },
        {
            id: 2,
            name: 'Repair',
            img: 'img',
            link: '/',
        },
        {
            id: 3,
            name: 'Carpentry',
            img: 'img',
            link: '/',
        },
        {
            id: 4,
            name: 'Drywall',
            img: 'img',
            link: '/',
        },
        {
            id: 5,
            name: 'Installation',
            img: 'img',
            link: '/',
        },
        {
            id: 6,
            name: 'Tile',
            img: 'img',
            link: '/',
        },
        {
            id: 7,
            name: 'Exterior',
            img: 'img',
            link: '/',
        },
        {
            id: 8,
            name: 'Painting',
            img: 'img',
            link: '/',
        },
        {
            id: 9,
            name: 'Maintenance',
            img: 'img',
            link: '/',
        },
        {
            id: 10,
            name: 'Commercial',
            img: 'img',
            link: '/',
        },
        {
            id: 11,
            name: 'Commercial',
            img: 'img',
            link: '/',
        },
        {
            id: 12,
            name: 'Commercial',
            img: 'img',
            link: '/',
        },
        {
            id: 13,
            name: 'Commercial',
            img: 'img',
            link: '/',
        },
        {
            id: 14,
            name: 'Commercial',
            img: 'img',
            link: '/',
        },
        {
            id: 15,
            name: 'Commercial',
            img: 'img',
            link: '/',
        },
        {
            id: 16,
            name: 'Commercial',
            img: 'img',
            link: '/',
        },
        {
            id: 17,
            name: 'Commercial',
            img: 'img',
            link: '/',
        },
        {
            id: 18,
            name: 'Commercial',
            img: 'img',
            link: '/',
        },
        {
            id: 19,
            name: 'Commercial',
            img: 'img',
            link: '/',
        },
    ]
    return (
        <div className='w-[1300px] mx-auto'>
            <div className='my-10'>
                <h2 className='uppercase text-[35px] font-bold text-center'>What Can Our Home Improvement Professionals Do For You?</h2>
                <div className='d-flex justify-content-center mt-5'>
                    <div className='banner-form items-center form-group '>
                        <div className=' text-[#000] '>
                            <div className='grid sm:grid-cols-5 grid-cols-1 '>
                                {services.slice(0, showMore ? services.length : 10).map(city => (
                                    <div key={city} className=" bg-[#fff] font-semibold text-xl  mx-auto my-5 border border-[#E1251A] hover:bg-[#E1251A]   rounded-lg py-[80px] w-[200px] text-center px-[40px] text-[#09193d] hover:text-[#fff]">
                                        <a href={city.link}><div className=""> <div> 
                                        <img className='w-8' src={city.img} alt="" />
                                        </div>
                                         <div className='  '>{city.name}</div></div></a>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-4 ">
                                <button
                                    className={classNames(
                                        'px-4 py-3 text-white text-3xl font-bold rounded w-[40%]',
                                        showMore ? 'bg-[#0f2863]' : 'bg-[#09193d]'
                                    )}
                                    onClick={toggleShowMore}
                                >
                                    {showMore ? 'See Less' : 'View All Services'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professional