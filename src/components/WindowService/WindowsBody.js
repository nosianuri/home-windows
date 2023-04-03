import React from 'react'

const WindowsBody = () => {
    return (
        <div class="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/Kz1Y6f5/f1bdff22-brantuck.jpg)`
        }}>
            <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto text-white py-10'>
                    <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Home Windows Service</h1>
                    <div className='text-2xl my-8 font-bold text-[#ED8502]'>Our window services are backed by a satisfaction guarantee, and we offer free estimates for all our projects.
                    </div>

                    <div>
                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Window Replacement:</div> <div className='text-xl font-medium mb-4'> Upgrade your home's energy efficiency and style with our window replacement services. We offer a variety of materials and styles to fit your home's architecture and your personal preferences.
                        </div>

                        <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Window Repair:</div>
                        <div className='text-xl font-medium mb-4'> If your windows are damaged or not functioning properly, our professionals can repair them quickly and efficiently to keep your home protected and comfortable.
                        </div>

                        <div className='bg-[#de1b23] text-center w-[40%] text-white text-xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                    </div>

                </div>
                {/* <div className='text-xl my-4'>Benefits:</div>  */}

            </div>
        </div>
    )
}

export default WindowsBody