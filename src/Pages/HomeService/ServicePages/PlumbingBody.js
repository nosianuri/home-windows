import React from 'react'

const PlumbingBody = () => {
  return (
    <div class="hero  !bg-no-repeat !bg-cover" style={{
        background: `url(https://i.ibb.co/Kz1Y6f5/f1bdff22-brantuck.jpg)`
    }}>
        <div className='bg-black bg-opacity-70 w-[100%]'>
            <div className='max-w-[800px] mx-auto text-white py-10'>
                <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Plumbing Service</h1>
                <div className='text-xl  mt-10'><span className='font-semibold'>Drain Cleaning:</span><br /> Our plumbers can help you unclog stubborn drains in your home. Whether it's a kitchen sink or shower drain, we have the expertise to clear it quickly and efficiently.</div>

                <div className='text-xl my-4'><span className='font-semibold'>Leak Detection:</span> <br /> Do you suspect a water leak in your home? Our professionals use state-of-the-art technology to detect even the smallest leaks and repair them before they cause further damage.</div>
                <div className='text-xl my-4'>Water Heater Repair:</div>
                <div className='text-xl my-4'> Don't suffer through cold showers. We offer fast and reliable water heater repair services to get your hot water running again.
                </div>
                <div className='text-xl my-4'>Benefits:</div> 
                <div className='text-xl my-4'>Our plumbing services are available 24/7, and we offer a satisfaction guarantee on all our work.
                </div>
                <div className='bg-[#de1b23] text-center w-[40%] text-white text-xl font-bold px-4 py-2'>Get a Quote</div>
            </div>
        </div>
        
    </div>
  )
}

export default PlumbingBody