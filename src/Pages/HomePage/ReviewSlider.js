import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import star from '../../assets/citrus-stars.svg';

const ReviewSlider = () => {
    const logos = [
        {
            id: 1,
            name: "Bartol Stone",
            image: star,
            desc: "I was blown away by the quality of work that Mr. Home Service provided. Their team was professional, efficient, and friendly. I would recommend them to anyone in need of home repairs.",
            shorts: "I was blown away by the quality of work that Mr. Home Service provided. Their team was professional, efficient, and friendly. I would recommend them to anyone in need of home repairs.",
        },
        {
            id: 2,
            name: "David D.",
            image: star,
            desc: "I had a leaky faucet that had been driving me crazy for months. Mr. Home Service fixed it in no time, and it's been working perfectly ever since. Thanks!",
            shorts: "I had a leaky faucet that had been driving me crazy for months. Mr. Home Service fixed it in no time, and it's been working perfectly ever since. Thanks!",
        },
        {
            id: 3,
            name: "Patricia T.",
            image: star,
            desc: "I was hesitant to hire a repair service, but Mr. Home Service exceeded all of my expectations. They were affordable, responsive, and knowledgeable. I will definitely use them again.",
            shorts: "I was hesitant to hire a repair service, but Mr. Home Service exceeded all of my expectations. They were affordable, responsive, and knowledgeable. I will definitely use them again.",
        },
        {
            id: 4,
            name: "Felix",
            image: star,
            desc: "The team at Mr. Home Service did an amazing job renovating my bathroom. They were attentive to my needs and preferences, and the end result was better than I ever could have imagined.",
            shorts: "The team at Mr. Home Service did an amazing job renovating my bathroom. They were attentive to my needs and preferences, and the end result was better than I ever could have imagined.",          
        },
        {
            id: 5,
            name: "Karen Johnson",
            image: star,
            desc: "I had a pipe burst in my basement and was in a panic. Mr. Home Service came to the rescue and fixed it quickly and efficiently. They even helped me with the insurance paperwork. I can't thank them enough."
            ,
            shorts: "I had a pipe burst in my basement and was in a panic. Mr. Home Service came to the rescue and fixed it quickly and efficiently. They even helped me with the insurance paperwork. I can't thank them enough."
            ,
        },
        {
            id: 6,
            name: "Tamara Dew",
            image: star,
            desc: "I had a few odd jobs around the house that I just couldn't seem to get done. Mr. Home Service came in and took care of everything in no time. I'm so grateful for their help.",
            shorts: "I had a few odd jobs around the house that I just couldn't seem to get done. Mr. Home Service came in and took care of everything in no time. I'm so grateful for their help.",
        },
        {
            id: 7,
            name: "Ann Fuchs",
            image: star,
            desc: "I had some electrical issues that I was really worried about. Mr. Home Service was able to diagnose the problem and fix it right away. I feel much safer in my home now."
            ,
            shorts: "I had some electrical issues that I was really worried about. Mr. Home Service was able to diagnose the problem and fix it right away. I feel much safer in my home now."
            ,
        },
        {
            id: 8,
            name: "Ann Fuchs",
            image: star,
            desc: "Mr. Home Service replaced my old, worn-out roof with a new one that looks fantastic. I couldn't be happier with the work they did."
            ,
            shorts: "Mr. Home Service replaced my old, worn-out roof with a new one that looks fantastic. I couldn't be happier with the work they did."
            ,
        },
        {
            id: 9,
            name: "Ann Fuchs",
            image: star,
            desc: "The team at Mr. Home Service painted my house and did an incredible job. They were respectful of my property and really paid attention to the details. I love the way it looks now."
            ,
            shorts: "The team at Mr. Home Service painted my house and did an incredible job. They were respectful of my property and really paid attention to the details. I love the way it looks now."
            ,
        },
        {
            id: 10,
            name: "Ann Fuchs",
            image: star,
            desc: "I had some damage to my drywall that needed to be repaired. Mr. Home Service came in and fixed it so well that you can't even tell it was ever damaged. They're amazing."
            ,
            shorts: "I had some damage to my drywall that needed to be repaired. Mr. Home Service came in and fixed it so well that you can't even tell it was ever damaged. They're amazing."
            ,
        },
        {
            id: 11,
            name: "Ann Fuchs",
            image: star,
            desc: "I was skeptical about using a repair service, but Mr. Home Service put all my worries to rest. They were professional, reliable, and got the job done right."
            ,
            shorts: "I was skeptical about using a repair service, but Mr. Home Service put all my worries to rest. They were professional, reliable, and got the job done right."
            ,
        },
        {
            id: 12,
            name: "Ann Fuchs",
            image: star,
            desc: "I had some serious plumbing issues that were causing major problems in my house. Mr. Home Service was able to fix everything and restore my peace of mind. Thank you so much."
            ,
            shorts: "I had some serious plumbing issues that were causing major problems in my house. Mr. Home Service was able to fix everything and restore my peace of mind. Thank you so much."
            ,
        },
        {
            id: 13,
            name: "Ann Fuchs",
            image: star,
            desc: "Mr. Home Service replaced my old windows with new, energy-efficient ones that have made a huge difference in my home. I'm so glad I made the investment."
            ,
            shorts: "Mr. Home Service replaced my old windows with new, energy-efficient ones that have made a huge difference in my home. I'm so glad I made the investment."
            ,
        },
        {
            id: 14,
            name: "Ann Fuchs",
            image: star,
            desc: "I had some door repairs that I just couldn't do on my own. Mr. Home Service came in and fixed them quickly and efficiently. I'm so grateful for their help."
            ,
            shorts: "I had some door repairs that I just couldn't do on my own. Mr. Home Service came in and fixed them quickly and efficiently. I'm so grateful for their help."
            ,
        },
        {
            id: 15,
            name: "Ann Fuchs",
            image: star,
            desc: "Mr. Home Service was able to install a new air conditioning unit in my home just in time for the summer heat. They were professional and knowledgeable, and the unit works great."
            ,
            shorts: "Mr. Home Service was able to install a new air conditioning unit in my home just in time for the summer heat. They were professional and knowledgeable, and the unit works great."
            ,
        },
        {
            id: 16,
            name: "Ann Fuchs",
            image: star,
            desc: "I had some landscaping work that I needed done, but I didn't know where to start. Mr. Home Service came in and designed a beautiful new landscape that has completely transformed my yard."
            ,
            shorts: "I had some landscaping work that I needed done, but I didn't know where to start. Mr. Home Service came in and designed a beautiful new landscape that has completely transformed my yard."
            ,
        },
        {
            id: 17,
            name: "Ann Fuchs",
            image: star,
            desc: "The team at Mr. Home Service was able to install new gutters on my home that have saved me so much hassle and headache. They really know their stuff."
            ,
            shorts: "The team at Mr. Home Service was able to install new gutters on my home that have saved me so much hassle and headache. They really know their stuff."
            ,
        },
        
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Set autoplay to true
        autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
        beforeChange: (current, next) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
        <div className='py-8 space-s-3 w-[1800px]'>
            <Slider {...settings} ref={sliderRef}>
                {logos.map((logo) => (
                    <div key={logo.id} className='p-5'>
                            <img src="https://i.ibb.co/9g0VDYP/reviewthunder-removebg-preview.png" alt="" className='!w-24' />
                        <div className='text-[16px] mt-3'>{logo.shorts}</div>
                        <div className='flex justify-between items-center mt-2'>
                        <h4 className='sm:text-[18px] text-[12px]'>{logo.name}</h4>
                        <p className='hover:underline sm:text-sm text-xs text-[#ED8502]'>Read More</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ReviewSlider