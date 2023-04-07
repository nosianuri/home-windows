import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import Loader from '../../Shared/Loader';
import StepForm from './Form/StepForm';
import RoofingFaq from './RoofingFaq';
import './Roofing.css';
import RoofLoader from '../../Shared/RoofLoader';

const Roofing = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // simulate a delay of 3 seconds to show the loader
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Roofing Replacement</title>
            </Helmet>
            {isLoading ? (
                <RoofLoader />
            ) : (
                <div>
                    <div className='body rf-body '>
                        <div className='bg-opacity-30 bg-black'>
                            <div className='max-w-[980px] mx-auto px-2 mt-3'>

                                <div className='flex justify-between items-center '>
                                    <a href="https://mrhomeservice.net/roofing-campaign">

                                        <img src="https://i.ibb.co/jrNqB5g/home-service.png" alt="" className='sm:w-36 w-24 ' />
                                    </a>

                                    <div className='flex justify-center items-center px-1'>
                                        <a href="tel:+18559390621"><i class="fa-solid fa-phone-volume pr-3 text-[#f4b836] sm:text-3xl text-xl"></i></a>
                                        <p className='text-white !leading-normal sm:text-base text-xs agent '>Speak to a Licensed Agent <br />
                                            <a className='sm:text-3xl font-bold text-[#f4b836] ' href="tel:+18888560197">(888) 856-0197</a> <br />
                                            Licensed Agents available now
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='sm:flex  sm:space-y-0 space-y-5 max-w-[950px] mx-auto mt-8 mb-16 px-3'>
                                <div className='bg-[#fff8f0b0] px-5 sm:py-5'>
                                    <img src='https://i.ibb.co/CVG0PfP/Home-Windows-5.png' alt="" className='sm:w-64 mx-auto' />
                                    <div className='px-3'>
                                    <h4 className='text-[26px] font-medium mb-2 text-center'>Find <span className='font-bold'>Local</span> Roofing <span className='font-bold'>Prices</span> By Zip Code</h4>
                                    <h5 className='text-[24px] font-medium mb-8 text-center'>Compare Roofing <span className='font-bold'>Prices</span> Today!</h5>
                                    </div>
                                    
                                </div>
                                <div className='bg-[#fff8f0] rounded-r-lg sm:w-[700px] '>
                                    <StepForm />
                                </div>
                            </div>
                        </div>
                        <div id='details'>
                            <div className='bg-[#ED8502] text-xl text-white font-bold py-2 flex items-center justify-center'>
                                <a href="#details">
                                    <span>More Info</span>
                                    <i class="fa-solid fa-caret-down pl-3"></i>
                                </a>
                            </div>
                            <div id='cac-mid-legal'>
                                <div className='max-w-[1000px] mx-auto'>
                                    <p className='mb-5 text-[17px] '>We understand that it can be difficult to visualize the quality of our roofing work without seeing it for yourself. That's why we've included a gallery section showcasing some of our previous roofing projects. From simple repairs to full-scale installations, our team has the expertise to handle any roofing job with precision and care. Take a look at the before-and-after photos to see the dramatic difference a new roof can make for your home's appearance and functionality.</p>


                                    <p className='mb-5  text-[17px] '>We believe that transparency is key to building trust with our customers, which is why we are proud to showcase our previous roofing work. If you have any questions about the photos or the specific roofing services we offer, please don't hesitate to reach out to our team. We are happy to provide additional information and answer any questions you may have.</p>


                                    <p className='mb-2 text-[17px] '>Our team of skilled professionals is equipped with the latest tools and techniques to handle any roofing project, no matter how big or small. From leaky roofs to full-scale replacements, we have the expertise to get the job done right, the first time around.
                                    </p>


                                    <p className='mb-5 text-[17px] '>What sets us apart from the competition? It's simple - we care about our customers. We understand that your home is your most valuable asset, and we treat it with the respect and care it deserves. That's why we use only the highest-quality materials and techniques to ensure that your roof will stand the test of time.</p>


                                    <p className='mb-2 text-[17px] '>Don't let a damaged or outdated roof put a damper on your home's appearance or safety. Contact us today to schedule a consultation and let us show you why we're the best in the business. Simply fill out the form below with your contact information, and we'll be in touch with you soon to discuss your roofing needs.</p>

                                    <p className='text-xl font-semibold mb-2 text-[#e48a03]'>Benefits of Our Service:</p>
                                    <ul className=' text-[17px] '>
                                        <li>1. Competitive pricing: We offer fair and transparent pricing for all of our services, with no hidden fees or surprises.</li>
                                        <li>2. Quick turnaround time: Our team works efficiently to get your roofing project completed in a timely manner, without sacrificing quality.</li>
                                        <li>3. Comprehensive services: From repairs to installations and everything in between, we have the expertise to handle all of your roofing needs.</li>
                                    </ul>
                                    <div className=' text-[17px]  mt-2'>Thank you for considering our services. We look forward to working with you to keep your home safe and secure for years to come.
                                    </div>
                                    <div className='grid grid-cols-1 gap-3 sm:mt-5'>
                                        <div className='sm:text-xl text-xl mt-5 font-semibold text-[#e48a03]'>ROOF REPLACEMENT FAQS</div>
                                        <div className="max-w-xl ">
                                            <RoofingFaq title="What type of roofing materials do you offer?">
                                                <p className='font-medium'>
                                                    We offer a variety of roofing materials, including asphalt shingles, metal roofing, and flat roofing systems.
                                                </p>
                                            </RoofingFaq>
                                            <RoofingFaq title="How long does a roofing installation typically take?">
                                                <p className='font-medium'>
                                                    The length of time for a roofing installation can vary depending on the size and complexity of the project. However, we work efficiently to complete the job as quickly as possible without sacrificing quality.
                                                </p>
                                            </RoofingFaq>
                                            <RoofingFaq title=" Do you offer financing options?">
                                                <p className='font-medium'>
                                                    Yes, we offer financing options to make our roofing services more accessible for homeowners. Please contact us for more information.
                                                </p>
                                            </RoofingFaq>
                                            <RoofingFaq title="Do you provide a warranty for your roofing services?">
                                                <p className='font-medium'>
                                                    Yes, we stand behind the quality of our work and offer a warranty for our roofing services. The specific details of the warranty may vary depending on the project, so please contact us for more information.
                                                </p>
                                            </RoofingFaq>
                                            <RoofingFaq title="Can you repair a leaky roof, or does it need to be replaced?">
                                                <p className='font-medium'>
                                                    In many cases, we are able to repair a leaky roof. However, if the damage is extensive or the roof is nearing the end of its lifespan, a full replacement may be necessary. We will assess the situation and provide a recommendation based on the specific needs of your home.
                                                </p>
                                            </RoofingFaq>
                                            <RoofingFaq title="Do you provide free estimates?">
                                                <p className='font-medium'>
                                                    Yes, we provide free estimates for all of our roofing services. Contact us today to schedule a consultation and get started on your roofing project.
                                                </p>
                                            </RoofingFaq>
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
                                                    <p className='font-medium text-[#ED8502]'>Sarah M.</p>
                                                    <p className='mt-1 text-sm'>I was so impressed with the professionalism and quality of work from this roofing company. They were able to quickly repair a leak in my roof and I haven't had any issues since. I highly recommend them!</p>
                                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 13 . Like . <span className='underline text-gray-400'>12 minutes ago</span></p>
                                                </div>
                                            </div>
                                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                                <img src="https://i.ibb.co/zfvSPzM/c1.jpg" alt="" className='review-img' />
                                                <div>
                                                    <p className='font-medium text-[#ED8502]'>John P.</p>
                                                    <p className='mt-1 text-sm'>I recently had my entire roof replaced by this team and I couldn't be happier with the results. They were courteous, efficient, and the end result was absolutely stunning. I would definitely use their services again in the future.</p>
                                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 6 . Like . <span className='underline text-gray-400'>13 minutes ago</span></p>
                                                </div>
                                            </div>
                                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                                <img src="https://i.ibb.co/k0FdgVf/c2.jpg" alt="" className='review-img' />
                                                <div>
                                                    <p className='font-medium text-[#ED8502]'>Mark H.</p>
                                                    <p className='mt-1 text-sm'>I was blown away by the level of expertise and professionalism of this roofing company. They were able to quickly identify and fix a problem with my roof that other contractors had missed. I would highly recommend their services to anyone in need of roofing repairs.</p>
                                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 19 . Like . <span className='underline text-gray-400'>25 minutes ago</span></p>
                                                </div>
                                            </div>
                                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                                <img src="https://i.ibb.co/4TfDMb1/c3.jpg" alt="" className='review-img' />
                                                <div>
                                                    <p className='font-medium text-[#ED8502]'>Kelly S.</p>
                                                    <p className='mt-1 text-sm'>
                                                        I recently had my roof replaced by this company and I couldn't be happier with the results. The crew was efficient, courteous, and went above and beyond to ensure that the job was done right. I have already recommended them to several friends and family members.
                                                    </p>
                                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. Like . <span className='underline text-gray-400'>46 minutes ago</span></p>
                                                </div>
                                            </div>
                                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                                <img src="https://i.ibb.co/Zg6g4j4/c4.jpg" alt="" className='review-img' />
                                                <div>
                                                    <p className='font-medium text-[#ED8502]'>Michael T.</p>
                                                    <p className='mt-1 text-sm'>
                                                        The team at this roofing company is truly exceptional. They were able to replace my entire roof in just a few days, and the end result was absolutely stunning. I couldn't have asked for better service or quality workmanship.
                                                    </p>
                                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 43 . Like . <span className='underline text-gray-400'>about an hour ago</span></p>
                                                </div>
                                            </div>
                                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                                <img src="https://i.ibb.co/D1ng0JG/c6.jpg" alt="" className='review-img' />
                                                <div>
                                                    <p className='font-medium text-[#ED8502]'>Jessica L.</p>
                                                    <p className='mt-1 text-sm'>
                                                        I was so impressed with the level of care and attention to detail that this roofing company provided. They took the time to listen to my concerns and provided personalized recommendations that were tailored to the needs of my home. I would definitely use their services again in the future.
                                                    </p>
                                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 3 . Like . <span className='underline text-gray-400'>1 hour ago</span></p>
                                                </div>
                                            </div>
                                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                                <img src="https://i.ibb.co/5L4G9x6/c7.jpg" alt="" className='review-img' />
                                                <div>
                                                    <p className='font-medium text-[#ED8502]'>Thomas R.
                                                    </p>
                                                    <p className='mt-1 text-sm'>
                                                        I had a leak in my roof that was causing significant damage to my home. The team at this roofing company was able to quickly identify and fix the problem, saving me thousands of dollars in potential repairs. I am so grateful for their expertise and professionalism.
                                                    </p>
                                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. Like . <span className='underline text-gray-400'>2 hours ago</span></p>
                                                </div>
                                            </div>
                                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                                <img src="https://i.ibb.co/WxHVhjS/c8.jpg" alt="" className='review-img' />
                                                <div>
                                                    <p className='font-medium text-[#ED8502]'> Rachel K.</p>
                                                    <p className='mt-1 text-sm'>
                                                        I was hesitant to invest in a new roof for my home, but the team at this roofing company made the process easy and stress-free. They provided a detailed estimate, answered all of my questions, and completed the job on time and on budget. I couldn't be happier with the results.
                                                    </p>
                                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 12 . Like . <span className='underline text-gray-400'>2 hours ago</span></p>
                                                </div>
                                            </div>
                                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                                <img src="https://i.ibb.co/p1RC9xy/c9.jpg" alt="" className='review-img' />
                                                <div>
                                                    <p className='font-medium text-[#ED8502]'>David W.
                                                    </p>
                                                    <p className='mt-1 text-sm'>
                                                        I have worked with several roofing companies over the years, but none have been as reliable and trustworthy as this team. They truly care about their customers and go above and beyond to ensure that the job is done right. I would highly recommend their services to anyone in need of roofing repairs or installations.
                                                    </p>
                                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 30 . Like <span className='underline text-gray-400'>.2 hours ago</span></p>
                                                </div>
                                            </div>
                                            <div className='sm:flex gap-5 border border-white border-b-gray-300 px-1 py-5'>
                                                <img src="https://i.ibb.co/wsV52V1/noelia.webp" alt="" className='review-img' />
                                                <div>
                                                    <p className='font-medium text-[#ED8502]'>Sarah H.
                                                    </p>
                                                    <p className='mt-1 text-sm'>
                                                        I had a great experience working with this roofing company. They were prompt, professional, and provided high-quality workmanship throughout the entire process. I would definitely use their services again and recommend them to others.
                                                    </p>
                                                    <p className='text-sm text-[#ED8502] mt-1'>Reply. 30 . Like <span className='underline text-gray-400'>.2 hours ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' max-w-7xl px-3 mx-auto sm:my-6 my-5'>
                                    <h6 className='text-sm'>Important Disclosures</h6>
                                    <p className='text-sm'>This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video in any advertisement associated with this site are actors or models and not contractors affiliated with this site.
                                        <br /> <br />
                                        Any service marks, logos, and trademarks (collectively the "Trademarks") displayed are registered and/or unregistered Trademarks of their respective owners. This site contains affiliate and partner links and may receive compensation for referrals or purchases made through our links. Subject matter within this website are copyrighted property of the owner of this site. This website and its owner is not responsible for any photographic or typographical errors.</p>

                                    <p className='text-sm text-center mt-8'>© 2023 Mr. Home Service, All Rights Reserved. <a className='underline hover:text-[#ED8502]' href="/privacy-policy">Privacy Policy</a> Cookie Policy <a className='underline hover:text-[#ED8502]' href="/terms">Terms & Condition</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Roofing;