import React from 'react'

const AboutBanner = () => {
    return (
        <div style={{
            background: `url(https://i.ibb.co/zPFWK0V/female-construction-worker-PM3-R974-scaled.jpg)`
        }} className="bg-no-repeat !bg-cover">
            <div className=" bg-black bg-opacity-60">
                <div className='text-[#fff] text-center py-16 px-2'>
                    <h1 className='sm:text-[45px] text-[28px] font-extrabold'>About Mr Home Service</h1>
                    <h5 className='text-[18px] font-medium'>Experience the Difference of Working with a Trusted  </h5>
                    <h6 className='text-[#f6b234] font-medium'>Home Improvement Company - Contact Mr. Home Service Today!</h6>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner