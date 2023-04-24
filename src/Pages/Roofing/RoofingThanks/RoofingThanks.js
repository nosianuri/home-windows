import React from 'react'
import { Helmet } from 'react-helmet'

const RoofingThanks = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Thanks | Roofing Campaign</title>
    </Helmet>
    <div>
        <div className='bg-[#84754e] h-[50px]'></div>
        <div className='mt-3 mb-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='max-w-[700px] mx-auto text-center px-3'>
                    <h2 className='text-center font-bold text-[#e1b814] sm:text-4xl text-2xl mt-5  !leading-normal'><span className='text-[#5b9436]'>Congratulations</span>, Great news!</h2>
                    <div className='max-w-[500px] mx-auto'>
                        <div>
                            <h3 className='text-center font-medium sm:text-4xl text-2xl !leading-snug'>A Roofing contractor will be reaching out very soon! </h3>
                            <h6 className='font-medium sm:text-[20px] text-[18px] text-[#5b9436]'>Please take a look at some other services we offer!</h6>
                            <div className='flex justify-between items-center mt-5'>
                                <img src="https://i.ibb.co/CVG0PfP/Home-Windows-5.png" alt="" className='w-36' />
                                <div className='text-center'>
                                    <h2 className='font-bold text-xl'>Roofing Replacement</h2>
                                    <p className='font-medium'>See if this is right for your home</p>
                                    <p className='text-[#eaa613] font-medium'><a href="https://mrhomeservice.net/roofing-campaign">Get Repair Now</a></p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <img src="https://i.ibb.co/XFDHxZD/hvac-solution.png" alt="" className='w-36' />
                                <div className='text-center'>
                                    <h2 className='font-bold text-xl'>HVAC Solution</h2>
                                    <p className='font-medium'>Connect with a Remodel expert today</p>
                                    <p className='text-[#eaa613] font-medium'>Find a contractor Now!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <a href="tel:+18559390621">
                <img src={gify} alt="" className='w-96 mx-auto' />
            </a> */}
                    <h4 className='text-lg mt-5 font-medium'>Rest assured, our team is dedicated to helping you every step of the way.</h4>
                    <p className='text-sm font-medium'> So sit back, relax, and let us take care of everything for you!</p>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default RoofingThanks