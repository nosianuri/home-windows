import React from 'react'

const FlooringBody = () => {
    return (
        <div class="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/Kz1Y6f5/f1bdff22-brantuck.jpg)`
        }}>
            <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto text-white py-10 px-3'>
                    <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Flooring Service</h1>
                    <div className='text-2xl my-8 font-bold text-[#ED8502]'> Our flooring services are available 24/7, and we offer a satisfaction guarantee on all our work.
                    </div>

                    <div>
                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Hardwood Flooring:</div> <div className='text-xl font-medium mb-4'> Add warmth and elegance to your home with our hardwood flooring installation services. We offer a variety of wood types and finishes to fit your style and budget.
                        </div>

                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Tile Installation:</div>
                        <div className='text-xl font-medium mb-4'> Upgrade
                        </div>

                        <div className='bg-[#de1b23] text-center sm:w-[40%] text-white text-2xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                    </div>

                </div>
                {/* <div className='text-xl my-4'>Benefits:</div>  */}

            </div>
        </div>
    )
}

export default FlooringBody