import React from 'react'
import bg2 from '../../assets/bg2.png';

const HvacBody = () => {
    return (
        <div className="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/ccFfP6W/bg2.png)`
        }}>
            <div className='bg-[#09193d] bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto items-end text-white py-10 px-3'>
                    <div className=''>
                        <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>HVAC Service</h1>
                        <div className='text-2xl my-8 font-bold text-[#ED8502] '>  Our HVAC services are backed by a money-back guarantee, and we offer financing options for larger projects.
                        </div>

                        <div className='max-w-[690px] '>
                            <div className='text-2xl font-bold mt-5'><i className="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Air Conditioning Repair:</div> <div className='text-xl font-medium mb-4'>  Is your AC unit not working correctly? Our HVAC technicians can diagnose and repair any issue, from refrigerant leaks to faulty thermostats.</div>

                            <div className='text-2xl font-bold mt-5'><i className="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Furnace Installation:</div>
                            <div className='text-xl font-medium mb-4'>  Need a new furnace installed in your home? We offer top-of-the-line energy-efficient models that can save you money on your heating bills.</div>
                            <div className='text-2xl font-bold mt-5'><i className="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Indoor Air Quality Testing:</div>
                            <div className='text-xl font-medium mb-4'> Poor indoor air quality can lead to health problems. Let us test the air quality in your home and recommend solutions to improve it.
                            </div>
                            <div className='bg-[#de1b23] text-center sm:w-[40%] text-white text-2xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HvacBody