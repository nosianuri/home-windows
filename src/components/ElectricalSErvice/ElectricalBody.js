import React from 'react'

const ElectricalBody = () => {
  return (
    <div class="hero h-screen !bg-no-repeat !bg-cover" style={{
        background: `url(https://i.ibb.co/Kz1Y6f5/f1bdff22-brantuck.jpg)`
    }}>
        <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
            <div className='max-w-[800px] mx-auto text-white py-10'>
                <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Electrical Service</h1>
                <div className='text-2xl my-8 font-bold text-[#ED8502]'>  Our electricians are licensed and insured, and we offer a lifetime warranty on our electrical work.
                </div>

                <div>
                    <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Lighting Installation:</div> <div className='text-xl font-medium mb-4'> Upgrade your home's lighting with our professional installation services. We can install anything from ceiling fans to dimmer switches to help you save energy and enhance your home's ambiance.</div>

                    <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Circuit Breaker Repair:</div>
                    <div className='text-xl font-medium mb-4'>  Faulty circuit breakers can cause power outages or even fires. Let our electricians repair or replace your circuit breakers to ensure your home's safety.</div>
                    <div className='text-2xl font-bold mt-5'><i class="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Electrical Panel Upgrades:</div>
                    <div className='text-xl font-medium mb-4'>  If you're experiencing electrical problems in your home, it may be time for an electrical panel upgrade. Our professionals can assess your needs and install a new panel to improve your home's electrical system.
                    </div>
                    





                    <div className='bg-[#de1b23] text-center w-[40%] text-white text-xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                </div>

            </div>
            {/* <div className='text-xl my-4'>Benefits:</div>  */}

        </div>
    </div>
  )
}

export default ElectricalBody