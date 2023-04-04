import React, { useState } from 'react';
import './HomeService.css';
import classNames from 'classnames';
import Review from './Review';

const HomeService = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore(!showMore);
    const reviews = [
        {
            name: 'John',
            company: 'Acme Corp',
            review: 'Lorem ipsum dolor sit amet.',
        },
        {
            name: 'Jane',
            company: 'Widgets Inc',
            review: 'Lorem ipsum dolor sit amet.',
        },
        {
            name: 'Bob',
            company: 'Gizmos LLC',
            review: 'Lorem ipsum dolor sit amet.',
        },
    ];

    const services = [
        {
            id: 1,
            name: 'Plumbing Services',
            Link: '/plumbing-service',
        },
        {
            id: 2,
            name: 'HVAC Services',
            Link: '/hvac-services'
        },
        {
            id: 3,
            name: 'Electrical Services',
            Link: '/electrical-services'
        },
        {
            id: 4,
            name: 'Home Cleaning',
            Link: '/home-cleaning'
        },
        {
            id: 5,
            name: 'Home Painting',
            Link: '/home-painting'
        },
        {
            id: 6,
            name: 'Gutters Services',
            Link: '/gutters-services'
        },
        {
            id: 7,
            name: 'Kitchens Services',
            Link: '/kitchens-services'
        },
        {
            id: 8,
            name: 'Windows Services',
            Link: '/windows-services'
        },
        {
            id: 9,
            name: 'Home Security',
            Link: '/home-security'
        },
        {
            id: 10,
            name: 'Movers Services',
            Link: '/movers-services'
        },
        {
            id: 11,
            name: 'Flooring Services',
            Link: '/flooring-services'
        },
        {
            id: 12,
            name: 'Bathroom Remodeling',
            Link: '/bathroom-remodeling'
        },
        {
            id: 13,
            name: 'Roofing Services',
            Link: '/roofing-services'
        },
        {
            id: 14,
            name: 'Solar Services',
            Link: '/solar-services'
        },

    ];
    return (
        <div className='body hm-body '>
            <div className='bg-[#ffffff] h-[50px] pb-5'>
                <img src="" alt="" />
            </div>
            <div className='bg-[#09193d] bg-opacity-80'>
                <div className='max-w-[1100px] mx-auto py-10 text-white'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 items-center'>
                        <div className='sm:px-0 px-3'>
                            <h1 className='text-4xl leading-snug font-bold'>Find the Best Home Services for Your Needs - Plumbing, HVAC, Electrical, and More!
                            </h1>
                            <h4 className='font-bold my-5'>Welcome to the top-quality home services! Here, you'll find a range of services to meet your home's needs, including plumbing, HVAC, electrical, and more. Our professionals are licensed, insured, and ready to provide you with the best service possible.</h4>
                            <p>.
                            </p>

                            <div className='px-4 py-2 bg-[#de1b23] text-xl text-[#fff] font-bold hover:text-[#0f2863] rounded sm:w-[40%] text-center'>GET A Quote
                            </div>
                        </div>
                        <div className='sm:px-0 px-3'>
                            <div className='sm:w-[400px] mx-auto text-center bg-[#de1b23] pt-[14px] pb-[15px]'>
                                <div className='text-3xl leading-normal font-semibold px-3'>Categorize Home Services
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <div className='banner-form items-center form-group '>

                                        <div className=' text-[#000] '>
                                            <div className=''>
                                                {services.slice(0, showMore ? services.length : 6).map(city => (
                                                    <div key={city} className=" bg-[#f4f6f7] font-semibold text-xl px-4 py-1 max-w-[70%] mx-auto my-5">
                                                        <a href={city.Link}><span className="block">{city.name}</span></a>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-center mt-4 ">
                                                <button
                                                    className={classNames(
                                                        'px-4 py-2 text-white text-xl rounded w-[70%]',
                                                        showMore ? 'bg-[#0f2863]' : 'bg-[#09193d]'
                                                    )}
                                                    onClick={toggleShowMore}
                                                >
                                                    {showMore ? 'See Less' : 'See More'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
                <div id='cac-mid-legal'>
                    <div className='max-w-[990px] mx-auto'>
                        {/* <h3 className='text-xl mb-2 text-[#e48a03] font-semibold'> Some customer testimonials or reviews for each service type.</h3> */}
                        <div className='flex justify-between'>
                                    <p>Recent # Comments</p>
                                    <p className='commen'>Add a comment</p>
                                </div>
                        <div className=' py-3 font-medium'>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/wsV52V1/noelia.webp" alt="" className='review-img' />
                                <div>
                                    <p className='text-sm text-[#ec9123]'><span className='font-medium text-xl text-black'>Maria</span>, 22.01.2023</p>
                                    <p className='mt-1'>I had a great experience with your plumbing service. The technician arrived on time and fixed the issue quickly. I would highly recommend your service to anyone!</p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/nbd9kMt/julia5.webp" alt="" className='review-img' />
                                <div>
                                    <p className='text-sm text-[#ec9123]'><span className='font-medium text-xl text-black'>Julia</span>, 23.01.2023</p>
                                    <p className='mt-1'>Your HVAC team installed a new air conditioning unit in my home, and I'm very happy with the results. The unit is energy-efficient and has lowered my utility bills. Thanks for your great work!</p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/CnYXzV5/noelia2.webp" alt="" className='review-img' />
                                <div>
                                    <p className='text-sm text-[#ec9123]'><span className='font-medium text-xl text-black'>Maritza</span>, 23.01.2023</p>
                                    <p className='mt-1'>I was impressed with your home cleaning service. The team arrived on time and did an excellent job. My home was spotless when they finished. Thank you!</p>
                                </div>
                            </div>

                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/QMs9B9h/pablo9.webp" alt="" className='review-img' />
                                <div>
                                    <p className='text-sm text-[#ec9123]'><span className='font-medium text-xl text-black'>Paul</span>, 25.01.2023</p>
                                    <p className='mt-1'>Yes right on the manufacturer's site, she ordered, there is a button on the article. Here is the link: click here: and go to your desired site.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className=' bg-[#09193d] text-[#ffffff]'>
                <div className='sm:flex justify-between max-w-[900px] mx-auto my-5 px-3'>
                    <div>Copyright © 2023 <span className='text-blue-400'>MrHomeService</span>. All rights reserved.</div>
                    <div><a className='hover:text-[#e48a03]' href="/terms">Terms and Conditions</a> | <a className='hover:text-[#e48a03]' href="/privacy-policy">Privacy Policy</a></div>
                </div>
            </footer>
        </div>
    )
}

export default HomeService