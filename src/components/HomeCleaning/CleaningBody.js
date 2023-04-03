import React from 'react'

const CleaningBody = () => {
    return (
        <div class="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/Kz1Y6f5/f1bdff22-brantuck.jpg)`
        }}>
            <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto text-white py-10 px-3'>
                    <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Home Cleaning Service</h1>
                    <div className='text-2xl my-8 font-bold text-[#ED8502]'> Our home cleaning services use eco-friendly cleaning products, and we offer flexible scheduling options to accommodate your busy lifestyle.
                    </div>

                    <div>
                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Deep Cleaning:</div> <div className='text-xl font-medium mb-4'>  Our team can provide a thorough deep cleaning of your home, including hard-to-reach areas like baseboards and high shelves.
                        </div>

                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Regular Cleaning:</div>
                        <div className='text-xl font-medium mb-4'>  Keep your home looking its best with our regular cleaning services. We offer weekly, bi-weekly, or monthly cleaning schedules to fit your needs.
                        </div>
                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Move-In/Move-Out Cleaning:</div>
                        <div className='text-xl font-medium mb-4'> Moving can be stressful. Let us handle the cleaning so you can focus on settling into your new home or preparing it for the next occupant.

                        </div>
                        <div className='bg-[#de1b23] text-center sm:w-[40%] text-white text-xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CleaningBody