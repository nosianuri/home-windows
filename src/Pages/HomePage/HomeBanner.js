import React from 'react'

const HomeBanner = () => {
    return (
        <div>
            <div className='bg-black bg-opacity-60'>
                <div className='container mx-auto  flex justify-center items-center'>
                    <div className='text-center flex flex-col '>
                        <div
                            className='font-primary  font-semibold mb-1 lg:px-36 md:px-8 lg:mx-36 pt-16 px-5 pb-16'>
                            <h2 className='text-[38px] lg:text-[70px] md:text-[40px] text-white italic'>Ready for a Change
                            </h2>
                            <h4 className='text-[20px] lg:text-[38px] md:text-[25px]  text-[#f6b234] font-extrabold'>Contact Mr. Home Service</h4>
                            <h4 className='text-[20px] lg:text-[35px] md:text-[25px] text-white'>TO  </h4>
                            <h4 className='text-[20px] lg:text-[70px] md:text-[25px] text-[#f6b234] font-extrabold italic'>Start Your Home </h4>
                            {/* <h4 className='text-[20px] lg:text-[38px] md:text-[25px] text-white'></h4> */}
                            <h4 className='text-[20px] lg:text-[38px] md:text-[25px] text-white'>Renovation Project  <span className='text-[#f6b234]'>Today!</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner