import React from 'react'

const RoofingBody = () => {
    return (
        <div class="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/Kz1Y6f5/f1bdff22-brantuck.jpg)`
        }}>
            <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto text-white py-10'>
                    <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Roofing Service</h1>
                    <div className='text-2xl my-8 font-bold text-[#ED8502]'> Our roofing services are licensed and insured, and we offer competitive pricing and free estimates.
                    </div>

                    <div>
                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Roof Repair:</div> <div className='text-xl font-medium mb-4'> If your roof is damaged or leaking, our professional roofing team can repair it quickly and efficiently. We use high-quality materials that are designed to last for years to come.
                        </div>

                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Roof Replacement:</div>
                        <div className='text-xl font-medium mb-4'> If your roof is beyond repair or has reached the end of its lifespan, we can replace it with a new, energy-efficient roof that fits your style and budget.
                        </div>

                        <div className='bg-[#de1b23] text-center w-[40%] text-white text-2xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default RoofingBody