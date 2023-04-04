import React from 'react'

const SolarBody = () => {
    return (
        <div class="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/Kz1Y6f5/f1bdff22-brantuck.jpg)`
        }}>
            <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto text-white py-10 px-3'>
                    <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Solar Service</h1>
                    <div className='text-2xl my-8 font-bold text-[#ED8502]'>Our solar services are affordable and customizable to fit your needs, and we offer financing options to make solar energy more accessible to homeowners.
                    </div>

                    <div>
                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Solar Panel Installation:</div> <div className='text-xl font-medium mb-4'> Reduce your energy bills and your carbon footprint with our solar panel installation services. We use high-quality panels that are designed to maximize your home's energy efficiency.
                        </div>

                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Solar Battery Backup:</div>
                        <div className='text-xl font-medium mb-4'> Keep your home powered even during a blackout with our solar battery backup services. We can install a battery system that stores excess solar energy for use when the sun goes down.</div>

                        <div className='bg-[#de1b23] text-center sm:w-[40%] text-white text-2xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolarBody