import React from 'react';
import { Helmet } from 'react-helmet';

const WindowLander = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Windows Installation</title>
            </Helmet>
            <div>
                <div className='bg-[#09193d] h-[50px] mb-5'></div>
                <div className='max-w-[1100px] mx-auto py-6'>
                    <h1 className='sm:text-[35pt] text-[28pt] leading-normal font-semibold text-center max-w-[800px] mx-auto '>Transform Your Home with <span className='text-[#de1b23]'>High Quality Window</span> Installations
                    </h1>
                    <div className='max-w-[890px] mx-auto'>
                        <div className='sm:px-0 px-3'>
                            <div className='text-[#ffffff]'>-</div>
                            <h4 className='text-[18pt] text-center my-2 font-medium text-[#ED8502]'>Upgrade Your Home's Energy Efficiency, Comfort, and Curb Appeal with Our Professional Window Installation Services
                            </h4>
                            <p className=' text-center my-2 font-medium'>At Window Installation Service, we know that your home is your sanctuary. That's why we are dedicated to providing the highest quality window installation services to transform your home and enhance your living experience. Our team of experienced professionals offers <span className='text-[#de1b23]'>customizable window solutions</span> to fit your needs, whether you're looking to improve your home's energy efficiency, comfort, or curb appeal.
                            </p>
                        </div>
                        <div className="hero my-8 !bg-no-repeat !bg-cover" style={{
                            background: `url(https://i.ibb.co/q7s7h6d/window-img.png)`
                        }}>
                            <div className='grid sm:grid-cols-2 grid-cols-1 leading-snug bg-black bg-opacity-50'>
                                <div></div>
                                <div className='text-[#ffffff] py-3 sm:px-5 px-3 '>
                                    <div className='font-medium text-lg flex '><i className="fa-solid fa-circle-check  text-[#ED8502] mt-2 pr-3 "></i>
                                        <div>Increase your home's energy efficiency and save money on energy bills</div>
                                    </div>
                                    <div className='font-medium text-lg flex '><i className="fa-solid fa-circle-check text-[#ED8502] mt-2 pr-3 "></i>
                                        <div>Enjoy a more comfortable and secure living space</div>
                                    </div>
                                    <div className='font-medium text-lg flex '><i className="fa-solid fa-circle-check text-[#ED8502] mt-2 pr-3 "></i>
                                        <div>Enhance your home's curb appeal and value</div>
                                    </div>
                                    <div className='font-medium text-lg flex '><i className="fa-solid fa-circle-check text-[#ED8502] mt-2 pr-3 "></i>
                                        <div>Customizable window solutions to fit your unique needs</div>
                                    </div>
                                    <div className='font-medium text-lg flex '><i className="fa-solid fa-circle-check text-[#ED8502] mt-2 pr-3 "></i>
                                        <div>Expert installation services from a team of experienced professionals</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mb-5'>
                            <button className='px-4 py-2 bg-[#de1b23] text-xl text-[#fff] font-bold hover:text-[#0f2863] rounded sm:w-[40%] text-center'>GET A QUOTE</button>
                        </div>
                        <p className='text-center text-xl font-medium'>
                            <span className='text-[#de1b23]'>Book your free consultation</span> now to learn how our <span className='text-[#de1b23]'>professional window</span> installation services can transform your home and enhance your living experience.
                        </p>
                        <div className='my-5 text-center font-bold text-2xl italic' >
                            <p><span className='text-[#de1b23]'>100% satisfaction</span> guarantee</p>
                            <p>Over <span className='text-[#de1b23]'>40 years</span> of experience</p>
                            <p><span className='text-[#de1b23]'>
                                Licensed and insured
                            </span> professionals</p>
                            <p>Positive customer reviews and testimonials</p>
                        </div>
                    </div>
                    {/* recent comments */}
                    <div className='mb-16 mt-8 sm:px-0 px-3'>
                        <div className='flex justify-between'>
                            <p>Recent # Comments</p>
                            <p className='commen'>Add a comment</p>
                        </div>
                        <div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/dWWt7P9/c10.jpg" alt="" className='review-img' />
                                <div>
                                    <p className='font-medium text-[#ED8502]'>Tohloria Lewis</p>
                                    <p className='mt-1 text-sm'>I couldn't be happier with the window installation services provided by Window Installation Service. The team was professional, knowledgeable, and worked efficiently to install my new windows. The final result is beautiful, and I've already noticed a difference in my energy bills. Thank you!</p>
                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 13 . Like . <span className='underline text-gray-400'>12 minutes ago</span></p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/zfvSPzM/c1.jpg" alt="" className='review-img' />
                                <div>
                                    <p className='font-medium text-[#ED8502]'>Tanya Porquez</p>
                                    <p className='mt-1 text-sm'>I was impressed with the level of customization that Window Installation Service offered when installing my new windows. They listened to my needs and provided expert recommendations to ensure that I got exactly what I wanted. The installation process was seamless, and I'm thrilled with the final result. </p>
                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 6 . Like . <span className='underline text-gray-400'>13 minutes ago</span></p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/k0FdgVf/c2.jpg" alt="" className='review-img' />
                                <div>
                                    <p className='font-medium text-[#ED8502]'>Jennifer Jackson Mercer</p>
                                    <p className='mt-1 text-sm'>I highly recommend Window Installation Service for anyone in need of window installation services. Their team was prompt, courteous, and professional throughout the entire process. The end result is stunning, and I couldn't be happier with my new windows.</p>
                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 19 . Like . <span className='underline text-gray-400'>25 minutes ago</span></p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/4TfDMb1/c3.jpg" alt="" className='review-img' />
                                <div>
                                    <p className='font-medium text-[#ED8502]'>Kristy Cash</p>
                                    <p className='mt-1 text-sm'>
                                        From start to finish, Window Installation Service provided exceptional service when installing my new windows. The team was knowledgeable, friendly, and went above and beyond to ensure that the job was done right. I would definitely use their services again in the future.
                                    </p>
                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. Like . <span className='underline text-gray-400'>46 minutes ago</span></p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/Zg6g4j4/c4.jpg" alt="" className='review-img' />
                                <div>
                                    <p className='font-medium text-[#ED8502]'>Katy Barrott</p>
                                    <p className='mt-1 text-sm'>
                                        I was impressed with the level of attention to detail that Window Installation Service provided during my window installation. They took the time to ensure that every aspect of the job was done correctly, and the final result is stunning. I've already recommended their services to several friends.
                                    </p>
                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 43 . Like . <span className='underline text-gray-400'>about an hour ago</span></p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/D1ng0JG/c6.jpg" alt="" className='review-img' />
                                <div>
                                    <p className='font-medium text-[#ED8502]'>Amanda Gibson</p>
                                    <p className='mt-1 text-sm'>
                                        I recently had Window Installation Service install new windows in my home, and I couldn't be happier with the results. Their team was knowledgeable, professional, and worked quickly to complete the installation. I've already noticed a difference in the comfort of my home, and I would definitely use their services again.
                                    </p>
                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 3 . Like . <span className='underline text-gray-400'>1 hour ago</span></p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/5L4G9x6/c7.jpg" alt="" className='review-img' />
                                <div>
                                    <p className='font-medium text-[#ED8502]'>Julie Keyse</p>
                                    <p className='mt-1 text-sm'>
                                        The team at Window Installation Service provided exceptional service when installing my new windows. They were prompt, courteous, and kept me informed throughout the entire process. The final result is beautiful, and I would highly recommend their services to anyone in need of window installation.
                                    </p>
                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. Like . <span className='underline text-gray-400'>2 hours ago</span></p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/WxHVhjS/c8.jpg" alt="" className='review-img' />
                                <div>
                                    <p className='font-medium text-[#ED8502]'>Sarah Williams</p>
                                    <p className='mt-1 text-sm'>
                                        I'm so glad that I chose Window Installation Service for my window installation needs. Their team was friendly, knowledgeable, and worked efficiently to complete the job in a timely manner. The final result is stunning, and I'm already noticing a difference in the energy efficiency of my home.
                                    </p>
                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 12 . Like . <span className='underline text-gray-400'>2 hours ago</span></p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/p1RC9xy/c9.jpg" alt="" className='review-img' />
                                <div>
                                    <p className='font-medium text-[#ED8502]'>Kirsten Bauman Riley</p>
                                    <p className='mt-1 text-sm'>
                                        I had a great experience working with Window Installation Service for my window installation. They provided expert recommendations and worked closely with me to ensure that I got exactly what I wanted. The team was professional and courteous, and the final result is beautiful.
                                    </p>
                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 30 . Like <span className='underline text-gray-400'>.2 hours ago</span></p>
                                </div>
                            </div>
                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                <img src="https://i.ibb.co/wsV52V1/noelia.webp" alt="" className='review-img' />
                                <div>
                                    <p className='font-medium text-[#ED8502]'>Kirsten Bauman Riley</p>
                                    <p className='mt-1 text-sm'>
                                        I would definitely recommend Window Installation Service for anyone in need of window installation services. Their team was knowledgeable, efficient, and provided exceptional customer service throughout the entire process. The end result is stunning, and I couldn't be happier with my new windows.
                                    </p>
                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 30 . Like <span className='underline text-gray-400'>.2 hours ago</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer */}
                    <div className='font-medium px-3'>Don't settle for subpar window installations. Trust the experts at Window Installation Service to transform  your home with high-quality, customizable window solutions. Book your free consultation today and take the first step towards a more comfortable, energy-efficient, and beautiful home.</div>
                </div>
                <div className=' bg-[#09193d] text-[#ffffff] px-3'>
                    <div className='sm:flex justify-between max-w-[900px] mx-auto my-5'>
                        <div>Copyright © 2023 <span className='text-blue-400'>MrHomeService</span>. All rights reserved.</div>
                        <div><a className='hover:text-[#e48a03]' href="/terms">Terms and Conditions</a> | <a className='hover:text-[#e48a03]' href="/privacy-policy">Privacy Policy</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WindowLander