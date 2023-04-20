import React, { useState } from 'react';
import classNames from 'classnames';

const ComProject = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => setShowMore(!showMore);
    const services = [
        {
            id: 1,
            name: 'Roofing',
            img: 'https://i.ibb.co/YNc3BGX/bg12.png',
            link: '/roofing-campaign',
        },
        {
            id: 2,
            name: 'Window',
            img: 'https://i.ibb.co/9ZCn0ZH/bg14.png',
            link: '/window-installation',
        },
        {
            id: 3,
            name: 'Solar',
            img: 'https://i.ibb.co/vDcXnPD/bg13.png',
            link: '/',
        },
        {
            id: 4,
            name: 'Plumbing',
            img: 'https://i.ibb.co/zfztVP1/plumbing.png',
            link: '/',
        },
        {
            id: 5,
            name: 'Movers',
            img: 'https://i.ibb.co/QvZqQHG/bg10.png',
            link: '/',
        },
        {
            id: 6,
            name: 'Kitchen',
            img: 'https://i.ibb.co/VmchXPd/kitchen.png',
            link: '/',
        },
        {
            id: 7,
            name: 'HVA',
            img: 'https://i.ibb.co/ccFfP6W/bg2.png',
            link: '/',
        },
        {
            id: 8,
            name: 'Home Security',
            img: 'https://i.ibb.co/TvkwfPz/Home-security.png',
            link: '/',
        },
        {
            id: 9,
            name: 'Gutter',
            img: 'https://i.ibb.co/JtznkJg/bg6.png',
            link: '/',
        },
        {
            id: 10,
            name: 'Home Painting',
            img: 'https://i.ibb.co/hK28DdV/home-cleaning.png',
            link: '/',
        },
        {
            id: 11,
            name: 'Home Cleaning',
            img: 'https://i.ibb.co/z6QqqNB/cleaning-home.png',
            link: '/',
        },
        {
            id: 12,
            name: 'Flooring',
            img: 'https://i.ibb.co/CmN45Dx/bg11.png',
            link: '/',
        },
        {
            id: 13,
            name: 'Electrical',
            img: 'https://i.ibb.co/bRnJCV9/bg3.png',
            link: '/',
        },
        {
            id: 14,
            name: 'Bathroom',
            img: 'https://i.ibb.co/vZqnM6n/bg8.png',
            link: '/',
        },
    ];

    return (
        <div>
            <div>
                <h2 className='text-center font-extrabold text-4xl !leading-normal'>Recently Completed Projects</h2>
                <p className='text-center font-bold'>Throughout the United States</p>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 my-10 max-w-7xl mx-auto' >
                    {services.slice(0, showMore ? services.length : 3).map(blog => (
                        <div key={blog.id}>
                            <div className='flex-wrap  mt-5'>
                                <div className='image-box'>
                                    <a href={blog.link}>
                                        <img className='!w-96 h-48' src={blog.img} alt="" />
                                    </a>
                                </div>
                                <div className='mt-5'>
                                    <h3 className='text-[#13100E] text-center !leading-normal font-semibold text-[20px]'><a className='hover:text-[#800020]' href="/">{blog.name}</a></h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-4 ">
                    <button
                        className={classNames(
                            'px-4 py-3 text-white text-3xl font-bold rounded shadow-2xl sm:w-[40%]',
                            showMore ? 'bg-[#eaa613]' : 'bg-[#e48a03]'
                        )}
                        onClick={toggleShowMore}
                    >
                        {showMore ? 'See Less' : 'See More Projects'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ComProject