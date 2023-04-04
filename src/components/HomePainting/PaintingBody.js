import React from 'react'

const PaintingBody = () => {
    return (
        <div class="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/Kz1Y6f5/f1bdff22-brantuck.jpg)`
        }}>
            <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto text-white py-10 px-3'>
                    <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Home Painting Service</h1>
                    <div className='text-2xl my-8 font-bold text-[#ED8502] '> Our painters are licensed and insured, and we offer a satisfaction guarantee on all our work.
                    </div>

                    <div>
                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3  "></i>Interior Painting:</div> <div className='text-xl font-medium mb-4'>  Whether you want to refresh your home's style or prepare it for sale, our professional painters can give your interior walls a fresh coat of paint with a variety of colors and finishes.
                        </div>

                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Exterior Painting:</div>
                        <div className='text-xl font-medium mb-4'>  Protect your home from weather damage and enhance its curb appeal with our exterior painting services. We use high-quality paint that lasts for years to come.
                        </div>

                        <div className='bg-[#de1b23] text-center sm:w-[40%] text-white text-2xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default PaintingBody