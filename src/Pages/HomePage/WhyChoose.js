import React from 'react'

const WhyChoose = () => {
    return (
            <div className='bg-[#003144] !w-full mb-16 mt-10'>
                <div className=' !mx-auto '>
                    <div className='sm:flex justify-between gap-5 sm:mx-16'>
                        {/* <div className='relative top-[-50px] left-[-30px]'><img src="https://i.ibb.co/D5qFBKJ/safest-169.webp" alt="" className='' /></div> */}
                        <div className=' hidden lg:block'>
                            <img className='!mt-[-60px] absolute w-96' src='https://i.ibb.co/JjPVBGt/mr-home-service.png' alt="" />
                        </div>
                        <div className=' text-[#fff] sm:ml-16 ml-2 py-10'>
                            <h1 className=' sm:text-5xl text-3xl font-extrabold !leading-normal uppercase'>WHY CHOOSE Mr Home Service</h1>
                            <h3 className='text-3xl !leading-normal'>We provide a comprehensive range of home services to meet <br /> all your household needs.</h3>
                            <div className='sm:flex gap-5 text-[20px] mt-5'>
                                <div>
                                    <div className='mt-1 uppercase'><i class="fa-solid fa-circle-check text-[#f6b234] pr-1"></i> Emergency Service</div>
                                    <div className='mt-1'><i class="fa-solid fa-circle-check text-[#f6b234] pr-1"></i> LICENSED & INSURED</div>
                                    <div className='mt-1'><i class="fa-solid fa-circle-check text-[#f6b234] pr-1"></i> TRUSTED & RECOMMENDED SINCE 1935</div>
                                </div>
                                <div>
                                    <div className='mt-1 '><i class="fa-solid fa-circle-check text-[#f6b234] pr-1"></i> AVAILABLE 24/7</div>
                                    <div className='mt-1'><i class="fa-solid fa-circle-check text-[#f6b234] pr-1"></i> WELL KNOWN REPUTATION</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default WhyChoose