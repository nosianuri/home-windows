import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WhoWith = () => {
    const logos = [
        {
            id: 1,
            image: 'https://i.ibb.co/zQD8KPM/Good-Man.png',
        },
        {
            id: 2,
            image: 'https://i.ibb.co/SnwDRpC/Carrier.png',
        },
        {
            id: 3,
            image: 'https://i.ibb.co/xmrbYWR/PGT.png',
        },
        {
            id: 4,
            image: 'https://i.ibb.co/yR4v7Xz/Amana.png',
        },
        {
            id: 5,
            image: ' https://i.ibb.co/VCGGR8k/Therma-Doors.png',
        },
        {
            id: 6,
            image: 'https://i.ibb.co/Wp0ZMQc/Impact-Resistant-Logo.png',
        },
        {
            id: 7,
            image: 'https://i.ibb.co/LSvRKjV/LG-Logo-1.png',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true, // Set autoplay to true
        autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
        beforeChange: (current, next) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % logos.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const sliderRef = React.createRef();

    const handleClickPrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleClickNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div>
            <div>
                <h1 className='text-center sm:text-4xl text-3xl !leading-normal font-extrabold'>Who We Work With</h1>
                <div className='my-8 sm:w-[1000px] mx-auto'>
                    <Slider {...settings} ref={sliderRef}>
                        {logos.map((logo) => (
                            <div key={logo.id}>
                                <img src={logo.image} alt="logo" className="mx-auto h-auto" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default WhoWith