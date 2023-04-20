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
            name: 'Roofing',
            img: 'https://i.ibb.co/F45bhkf/home-service2.png',
            link: '/',
            desc: 'Our roofing services are licensed and insured, and we offer competitive pricing and free estimates.',
        },
        {
            id: 2,
            name: 'Window',
            img: 'https://i.ibb.co/YQv3qLQ/home-service3.png',
            link: '/',
            desc: 'Our window services are backed by a satisfaction guarantee, and we offer free estimates for all our projects.',
        },
        {
            id: 3,
            name: 'Solar',
            img: 'https://i.ibb.co/XFJ2hCK/home-service4.png',
            link: '/',
            desc: 'Our solar services are affordable and customizable to fit your needs, and we offer financing options to make solar energy more accessible to homeowners.',
        },
        {
            id: 4,
            name: 'Plumbing',
            img: 'https://i.ibb.co/rZPv65W/home-service5.png',
            link: '/',
            desc: 'Our plumbers can help you unclog stubborn drains in your home. Whether its a kitchen sink or shower drain.',
        },
        {
            id: 5,
            name: 'Movers',
            img: 'https://i.ibb.co/4scGSCd/home-service6.png',
            link: '/',
            desc: 'Our moving services are licensed and insured, and we offer competitive pricing and flexible scheduling options.',
        },
        {
            id: 6,
            name: 'Kitchen',
            img: 'https://i.ibb.co/q9rQCwj/home-service7.png',
            link: '/',
            desc: 'Our kitchen services are customized to your needs, and we offer financing options for larger projects.',
        },
        {
            id: 7,
            name: 'HVA',
            img: 'https://i.ibb.co/j3QjSH6/home-service8.png',
            link: '/',
            desc: 'Our HVAC services are backed by a money-back guarantee, and we offer financing options for larger projects.',
        },
        {
            id: 8,
            name: 'Home Security',
            img: 'https://i.ibb.co/PNtRctN/home-service9.png',
            link: '/',
            desc: 'Protect your home and family with our state-of-the-art alarm systems. We offer both wired and wireless options to fit your homes layout.',
        },
        {
            id: 9,
            name: 'Gutter',
            img: 'https://i.ibb.co/MBdP81n/home-service-10.png',
            link: '/',
            desc: 'Keep your homes gutters free of debris and prevent water damage with our gutter cleaning services. We can also install gutter guards to reduce the need for future cleaning.',
        },
        {
            id: 10,
            name: 'Home Painting',
            img: 'https://i.ibb.co/F6RqyPV/home-service1.png',
            link: '/',
            desc: 'Whether you want to refresh your homes style or prepare it for sale, our professional painters can give your interior walls a fresh coat of paint with a variety of colors and finishes.',
        },
        {
            id: 11,
            name: 'Home Cleaning',
            img: 'https://i.ibb.co/zf5HfPQ/home-service-11.png',
            link: '/',
            desc: 'Our team can provide a thorough deep cleaning of your home, including hard-to-reach areas like baseboards and high shelves.',
        },
        {
            id: 12,
            name: 'Flooring',
            img: 'https://i.ibb.co/41MccLR/home-service12.png',
            link: '/',
            desc: 'Add warmth and elegance to your home with our hardwood flooring installation services. We offer a variety of wood types and finishes to fit your style and budget.',
        },
        {
            id: 13,
            name: 'Electrical',
            img: 'https://i.ibb.co/hyTZM0W/home-service13.png',
            link: '/',
            desc: 'Upgrade your homes lighting with our professional installation services. We can install anything from ceiling fans to dimmer switches to help you save energy and enhance your homes ambiance.',
        },
        {
            id: 14,
            name: 'Bathroom',
            img: 'https://i.ibb.co/hy6Y7bb/home-service14.png',
            link: '/',
            desc: 'Upgrade your bathrooms style and functionality with a new shower installation. We offer a range of styles and features to fit your needs and preferences.',
        },
    ]
    return (
        <div className='sm:w-[1300px] mx-auto'>
            <div className='my-10'>
                <h2 className='uppercase sm:text-[45px] text-[28px] font-bold text-center sm:px-10'>What Can Our Home Improvement Professionals Do For You?</h2>
                <div className='d-flex justify-content-center mt-5'>
                    <div className='banner-form items-center form-group '>
                        <div className=' text-[#000] '>
                            <div className='grid sm:grid-cols-4 grid-cols-1 gap-2'>
                                {services.slice(0, showMore ? services.length : 8).map(city => (
                                    <div key={city} className="prof-box bg-[#fff] mx-auto my-5 border border-[#e48a03] hover:bg-[#e48a03] rounded-lg  pb-[40px] w-[300px] text-center  text-[#09193d]  hover:text-[#fff]">
                                        <a href={city.link}>
                                        <div className='mt-5'>
                                            <div className="w-[35%] mx-auto">
                                                    <img src={city.img} alt='' className='w-24 rounded-full absolute mt-[-50px] !mx-auto' />
                                            </div>
                                            {/* <div> 
                                        <img className='w-8' src={city.img} alt="" />
                                        </div> */}
                                            <div className='text-[25px] font-bold !leading-normal px-2 mt-12'>{city.name}</div>
                                            <h3 className='px-2'>{city.desc}</h3>
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