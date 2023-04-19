import React, { useState } from 'react';
import classNames from 'classnames';

const Professional = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore(!showMore);
    // const services = [
    //     {
    //         id: 1,
    //         name: 'Assembly',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 2,
    //         name: 'Repair',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 3,
    //         name: 'Carpentry',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 4,
    //         name: 'Drywall',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 5,
    //         name: 'Installation',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 6,
    //         name: 'Tile',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 7,
    //         name: 'Exterior',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 8,
    //         name: 'Painting',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 9,
    //         name: 'Maintenance',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 10,
    //         name: 'Commercial',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 11,
    //         name: 'Commercial',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 12,
    //         name: 'Commercial',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 13,
    //         name: 'Commercial',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 14,
    //         name: 'Commercial',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 15,
    //         name: 'Commercial',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 16,
    //         name: 'Commercial',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 17,
    //         name: 'Commercial',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 18,
    //         name: 'Commercial',
    //         img: 'img',
    //         link: '/',
    //     },
    //     {
    //         id: 19,
    //         name: 'Commercial',
    //         img: 'img',
    //         link: '/',
    //     },
    // ]
    const services = [
        {
            id: 1,
            name: 'Emergency Plumbing Services',
            link: '/',
            desc: 'Our Plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays.',
        },
        {
            id: 2,
            name: 'Plumbing and Drains',
            link: '/',
            desc: 'As the largest plumbing and drain service company, we make thousands of repairs every day.',
        },
        {
            id: 3,
            name: 'Water Damage',
            link: '/',
            desc: 'Our teams are equipped with state-of-the-art water extraction and cleanup equipment.',
        },
        {
            id: 4,
            name: 'Water Heaters',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 5,
            name: 'Water Heaters',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 6,
            name: 'Water Heaters',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 7,
            name: 'Water Heaters',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 8,
            name: 'Water Heaters',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 9,
            name: 'Water Heaters',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 10,
            name: 'Water Heaters',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 11,
            name: 'Water Heaters',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
    ]
    return (
        <div className='sm:w-[1300px] mx-auto'>
            <div className='my-10'>
                <h2 className='uppercase sm:text-[45px] text-[28px] font-bold text-center sm:px-10'>What Can Our Home Improvement Professionals Do For You?</h2>
                <div className='d-flex justify-content-center mt-5'>
                    <div className='banner-form items-center form-group '>
                        <div className=' text-[#000] '>
                            <div className='grid sm:grid-cols-4 grid-cols-1 '>
                                {services.slice(0, showMore ? services.length : 8).map(city => (
                                    <div key={city} className=" bg-[#fff] mx-auto my-5 border border-[#e48a03] hover:bg-[#e48a03] rounded-lg px-2 py-[40px] w-[300px] text-center  text-[#09193d]  hover:text-[#fff]">
                                        <a href={city.link}><div className=""> <div> 
                                        <img className='w-8' src={city.img} alt="" />
                                        </div>
                                         <div className='text-[25px] font-bold !leading-normal'>{city.name}</div>
                                         <h3>{city.desc}</h3>
                                         </div></a>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-4 ">
                                <button
                                    className={classNames(
                                        'px-4 py-3 text-white text-3xl font-bold rounded sm:w-[40%] shadow-yellow-600 ',
                                        showMore ? 'bg-[#eaa613]' : 'bg-[#e48a03]'
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