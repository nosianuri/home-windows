import React, { useState } from 'react';
import classNames from 'classnames';

const ComProject = () => {
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
                                        <img className='!w-96 h-48' src={blog.url} alt="" />
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
                            'px-4 py-3 text-white text-3xl font-bold rounded sm:w-[40%]',
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