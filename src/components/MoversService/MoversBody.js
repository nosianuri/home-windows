import React from 'react'

const MoversBody = () => {
    return (
        <div class="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/QvZqQHG/bg10.png)`
        }}>
            <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto text-white py-10 px-3'>
                    <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Movers Service</h1>
                    <div className='text-2xl my-8 font-bold text-[#ED8502]'>Our moving services are licensed and insured, and we offer competitive pricing and flexible scheduling options.
                    </div>

                    <div>
                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Local Moving:</div> <div className='text-xl font-medium mb-4'> Whether you're moving across town or to a neighboring city, our professional movers can handle all the heavy lifting for you.</div>

                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Long-Distance Moving:</div>
                        <div className='text-xl font-medium mb-4'> If you're moving across the country, we can help you with packing, loading, and transporting your belongings safely and efficiently.
                        </div>

                        <div className='bg-[#de1b23] text-center sm:w-[40%] text-white text-2xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                    </div>

                </div>
                {/* <div className='text-xl my-4'>Benefits:</div>  */}

            </div>
        </div>
    )
}

export default MoversBody