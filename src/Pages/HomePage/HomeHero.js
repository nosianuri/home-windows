import React from 'react'

const HomeHero = () => {
    return (
        <div className="hero mt-24 !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/GFZTpK0/home-service-banner2.png)`
        }}>
            <div className='bg-black sm:bg-opacity-10 bg-opacity-70 w-[100%] h-[100%]'>
                <div className='grid sm:grid-cols-2 grid-cols-1'>
                    <div></div>
                    <div className='max-w-[800px] mx-auto font-primary py-16 px-3'>
                    <h3 className='font-bold text-[25px] italic text-[#98c83f]'>Revitalize Your Living Space</h3>
                        <h1 className=' sm:text-[60px] text-[38px] font-bold text-[#fff] tshadow'> Get Your Home in <br /> Perfect Shape</h1>
                        <div className='text-2xl mt-5 font-bold text-[#ED8502]'> Schedule a Consultation with Mr. Home Service Today!
                        </div>
                        <div>
                            <div className='text-xl font-medium mb-1 sm:text-[#000] text-[#fff]'> Experience the Power of Professional Repairs & Upgrade Your Home with Confidence. Ready for a Change? Contact Mr. Home Service TO Start Your Home Renovation Project.</div>

                            <a href="#home-service">
                            <div className='bg-[#ED8502] mx-auto text-center sm:w-[40%] text-white text-2xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero