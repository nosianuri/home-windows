import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import Loader from '../../Shared/Loader';
import PestControlFaq from './PestControlFaq';
import StepForm from '../Home/Form/StepForm';
import './PestControl.css';
import PcLoader from '../../Shared/PcLoader';

const PestControl = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home Windows Installation</title>
    </Helmet>
    {isLoading ? (
        <PcLoader />
    ) : (
        <div className=''>
            <div className='body pc-body '>
                <div className='bg-opacity-50 bg-black'>
                    <div className='max-w-[980px] mx-auto px-2 mt-3'>

                        <div className='flex justify-between items-center '>
                            <a href="https://mrhomeservice.net/pest-control">

                                <img src="https://i.ibb.co/jrNqB5g/home-service.png" alt="" className='sm:w-36 w-24 ' />
                            </a>

                            <div className='flex justify-center items-center  px-1'>
                                <a href="tel:+18559390621"><i className="fa-solid fa-phone-volume pr-3 text-[#eaa613] sm:text-3xl text-xl"></i></a>
                                <p className='text-white !leading-normal sm:text-base text-xs agent '>Speak to a Licensed Agent <br />
                                    <a className='sm:text-3xl font-bold text-[#f4b836]' href="tel:+18888560197">(888) 856-0197</a> <br />
                                    Licensed Agents available now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='sm:flex  sm:space-y-0 space-y-5 max-w-[950px] mx-auto mt-8 mb-16 px-3'>

                        <div className='bg-[#fff8f0b0] px-5 sm:py-5'>
                            <img src='https://i.ibb.co/GRrpQ1p/pest-control-logo.png' alt="" className='sm:w-64 mx-auto' />
                            <h4 className='text-2xl font-medium mb-2 text-center'>Find <span className='font-bold'>Local</span> Pest Control <span className='font-bold'>Prices</span> By Zip Code</h4>
                            <h5 className='text-xl font-medium mb-8 text-center'>Compare Pest Control <span className='font-bold'>Prices</span> Today!</h5>
                        </div>
                        <div className='bg-[#fff8f0] rounded-r-lg sm:w-[700px] '>
                            <StepForm />
                        </div>
                    </div>
                </div>
                <div id='details'>
                    <div className='bg-[#eaa613] text-xl text-white font-bold py-2 flex items-center justify-center'>
                        <a href="#details">
                            <span>More Info</span>
                            <i className="fa-solid fa-caret-down pl-3"></i>
                        </a>
                    </div>
                    <div id='cac-footer-legal'>
                        <div className='max-w-[990px] mx-auto'>
                            <p className='mb-5 text-[17px]'>Welcome to Mr.Home Service, your trusted source for professional pest control services. We offer quick, safe, effective and responsive pest control solutions to protect you and your property from pest infestations and associated risks.</p>
                            <h3 className='text-xl mb-2 text-[#e48a03]'>Update Your Existing Home Windows By Replacing Them With Affordable Window Alternatives</h3>
                            <p className='mb-5 text-[17px]'>Looking for replacement windows at great prices? You're in luck. windowinstallation.com helps you streamline and expedite the process of replacement window shopping without the hassle. Once you’ve completed the windows questionnaire above, numerous quotes from local window professionals (unique to your area) will be made available instantly so you can be sure you're getting the best value on your replacement windows!</p>
                            <h3 className='text-xl mb-2 text-[#e48a03]'>Save On Costs And Be Energy Efficient By Purchasing New House Windows</h3>
                            <p className='mb-5 text-[17px]'>Did you know you that by simply replacing the windows in your home you can enjoy the cost-effective benefits when it comes to utility bills? The proper windows can keep heat locked in during cold weather and your home cool in the summer without the inconvenience of additional appliances, which can cost you hundreds in in expenses. Instead of spending too much on intricate home improvement projects in order to make your home more energy efficient, new home windows can be a convenient solution. If you reside in an older home, you may have single-pane windows that do little to preserve the proper indoor temperature within your home. Due to innovative home windows technology, there are now more cutting-edge windows that you can install in your home now.</p>
                            <h3 className='text-xl mb-2 text-[#e48a03]'>Investing And Saving With Double-Pane Home Windows</h3>
                            <p className='mb-2 text-[17px]'>Single-pane home windows are now obsolete. Yes, they may be cheaper than double-pane windows but the amount in associated energy costs alone makes single-pane windows less ideal. Double-pane windows help shield your home from extreme climates, pollution, and even insects - saving you significant money in the long run, and you’ll experience the advantages immediately. The National Fenestration Rating Council determines market guidelines for today's highest standard double-pane windows - so if the windows in your home are labelled "NFRC," you can be confident that it’s top tier quality.</p>
                            <p className='mb-5 text-[17px]'>Older single-multiple pane models consist of krypton and argon, gases that assist in elevating the R-values (heat loss resistance) among your windows. Higher R-values in your windows regulate home temperature. Higher U-values are beneficial as well (window's heat transfer resistance). While some manufacturers solely extend R and U value ratings for the center portion of a window, it’s optimal to ensure both R and U value details are available for the full window. With the number of varied styles in today's windows, searching for the right selection within your budget is imperative. Not all presented opportunities will deliver the same savings. There are some window companies out there that may try to convince you to purchase double-pane windows with more than an inch of space between panes. This may provide supplementary insulation but more than an inch is typically not essential.</p>
                            <h3 className='text-xl mb-2 text-[#e48a03]'>Browsing For Window Quotes To Find The Average Cost Of Home Windows Replacement</h3>
                            <p className='mb-2 text-[17px]'>There is no time like today to purchase suitable home windows at a reasonable value. Premium window companies will even assign a personalized home windows technician to your house for a tailored consultation experience - walking you through an assortment of replacement windows and window accessories, assisting you every step of the way. It’s best to acquire quotes from several window installers, so that you may take advantage of first-time customer deals or new home window consumer promotions. With a little research on multiple home window rates, you can make sure you’re getting the best energy-efficient and budget friendly windows out there.</p>
                            <p className='mb-5 text-[17px]'>With pertinent tools, resources and adequate information at your disposal - you can have a multi-faceted understanding of which windows work best for your home and budget, whether you go the route of working with a certified professional or installing windows on your own. With new home windows installation, there will be a notable improvement all around - your home's value and appearance will be enhanced while you save money. Window replacement automatically upgrades your home and is an effortless lifetime investment that you can enjoy with ease.</p>
                            <p className='text-xl font-semibold mb-2 text-[#e48a03]'>Installing new windows from Mr.Home Service comes with numerous benefits, including:</p>
                            <ul className=' text-[17px] '>
                                <li className='mb-1'>1. <span className='underline'> Energy Efficiency</span> : Our energy-efficient windows can help reduce your energy bills and make your home more comfortable.</li>
                                <li className='mb-1'>2. <span className='underline'> Improved Home Value</span> : Upgrading your windows with us can add value to your home and improve its overall appeal.</li>
                                <li className='mb-1'>3. <span className='underline'> Noise Reduction</span> : Our windows are designed to reduce outside noise, creating a more peaceful and enjoyable living environment.</li>
                                <li className='mb-1'>4. <span className='underline' > Increased Security</span> : Our windows feature advanced locking mechanisms, providing added security and peace of mind.</li>
                                <li className='mb-1'>5. <span className='underline'> Better Insulation</span> : Our windows offer superior insulation, helping to keep your home cooler in the summer and warmer in the winter.</li>
                            </ul>
                            <div className=' text-[17px]  mt-2'> Thank you for considering our services. We look forward to working with you to keep your home safe and secure for years to come.
                            </div>
                            <div className='grid grid-cols-1 gap-3 sm:mt-5'>
                                <div className='sm:text-xl text-xl mt-5 font-semibold text-[#e48a03]'>ROOF REPLACEMENT FAQS</div>
                                <div className="max-w-2xl ">
                                    <PestControlFaq title=" What makes Mr.Home Service the best choice for window installation?">
                                        <p className='font-medium'>
                                            Our team of experts is committed to delivering top-quality window installations that meet your unique needs and preferences. We use only the highest-quality materials and work diligently to ensure your complete satisfaction with our services.
                                        </p>
                                    </PestControlFaq>
                                    <PestControlFaq title=" How long does it take to install new windows with Mr.Home Service?">
                                        <p className='font-medium'>
                                            The installation time will depend on the number and size of windows being installed, but our team works quickly and efficiently to minimize any disruption to your daily routine.
                                        </p>
                                    </PestControlFaq>
                                    <PestControlFaq title=" Can I customize the windows to fit my home's unique style and needs?">
                                        <p className='font-medium'>
                                            Yes! Our windows come in a variety of styles and finishes, and we can work with you to customize your windows to meet your specific needs and preferences.
                                        </p>
                                    </PestControlFaq>
                                    <PestControlFaq title=" What kind of warranty do you offer on your window installations?">
                                        <p className='font-medium'>
                                            We stand behind our work with a comprehensive warranty that covers both labor and materials. We are committed to providing our customers with the highest level of service and satisfaction.
                                        </p>
                                    </PestControlFaq>
                                </div>
                            </div>
                            {/* recent comments */}
                            <div className='mb-8 mt-8 sm:px-0 px-3'>
                                <div className='flex justify-between'>
                                    <p>Recent # Comments</p>
                                    <p className='commen'>Add a comment</p>
                                </div>
                                <div>
                                    <div className='sm:flex gap-5 border border-[#003144] border-b-gray-300 px-1 py-5'>
                                        <img src="https://i.ibb.co/dWWt7P9/c10.jpg" alt="" className='review-img' />
                                        <div>
                                            <p className='font-medium text-[#ED8502]'>Susan, San Diego, CA</p>
                                            <p className='mt-1 text-sm'>Mr.Home Service exceeded my expectations with their professional installation and high-quality windows. My home looks and feels amazing!</p>
                                            <p className='text-sm text-[#ED8502] mt-1'>Reply. 13 . Like . <span className='underline text-gray-400'>12 minutes ago</span></p>
                                        </div>
                                    </div>
                                    <div className='sm:flex gap-5 border border-[#003144] border-b-gray-300 px-1 py-5'>
                                        <img src="https://i.ibb.co/zfvSPzM/c1.jpg" alt="" className='review-img' />
                                        <div>
                                            <p className='font-medium text-[#ED8502]'>Michael, Dallas, TX</p>
                                            <p className='mt-1 text-sm'>I highly recommend Mr.Home Service for anyone looking for top-quality window installations. Their team was knowledgeable, professional, and efficient, and the results were stunning.</p>
                                            <p className='text-sm text-[#ED8502] mt-1'>Reply. 6 . Like . <span className='underline text-gray-400'>13 minutes ago</span></p>
                                        </div>
                                    </div>
                                    <div className='sm:flex gap-5 border border-[#003144] border-b-gray-300 px-1 py-5'>
                                        <img src="https://i.ibb.co/k0FdgVf/c2.jpg" alt="" className='review-img' />
                                        <div>
                                            <p className='font-medium text-[#ED8502]'>Mary, Seattle, WA</p>
                                            <p className='mt-1 text-sm'>The team at Mr.Home Service was a pleasure to work with from start to finish. They helped me choose the perfect windows for my home and delivered on their promises with a flawless installation.</p>
                                            <p className='text-sm text-[#ED8502] mt-1'>Reply. 19 . Like . <span className='underline text-gray-400'>25 minutes ago</span></p>
                                        </div>
                                    </div>
                                    <div className='sm:flex gap-5 border border-[#003144] border-b-gray-300 px-1 py-5'>
                                        <img src="https://i.ibb.co/4TfDMb1/c3.jpg" alt="" className='review-img' />
                                        <div>
                                            <p className='font-medium text-[#ED8502]'>John, Miami, FL</p>
                                            <p className='mt-1 text-sm'>
                                                Mr.Home Service provided exceptional service and craftsmanship in the installation of my new windows. The results are truly breathtaking, and I couldn't be happier with the outcome.
                                            </p>
                                            <p className='text-sm text-[#ED8502] mt-1'>Reply. Like . <span className='underline text-gray-400'>46 minutes ago</span></p>
                                        </div>
                                    </div>
                                    <div className='sm:flex gap-5 border border-[#003144] border-b-gray-300 px-1 py-5'>
                                        <img src="https://i.ibb.co/Zg6g4j4/c4.jpg" alt="" className='review-img' />
                                        <div>
                                            <p className='font-medium text-[#ED8502]'>Emily, Chicago, IL</p>
                                            <p className='mt-1 text-sm'>
                                                From the initial consultation to the final installation, Mr.Home Service was professional, courteous, and efficient. They went above and beyond to ensure my complete satisfaction with their services.
                                            </p>
                                            <p className='text-sm text-[#ED8502] mt-1'>Reply. 43 . Like . <span className='underline text-gray-400'>about an hour ago</span></p>
                                        </div>
                                    </div>
                                    <div className='sm:flex gap-5 border border-[#003144] border-b-gray-300 px-1 py-5'>
                                        <img src="https://i.ibb.co/D1ng0JG/c6.jpg" alt="" className='review-img' />
                                        <div>
                                            <p className='font-medium text-[#ED8502]'>Daniel, Boston, MA</p>
                                            <p className='mt-1 text-sm'>
                                                The team at Mr.Home Service was knowledgeable and helpful every step of the way. They answered all of my questions and provided expert guidance to help me make the best decisions for my home.
                                            </p>
                                            <p className='text-sm text-[#ED8502] mt-1'>Reply. 3 . Like . <span className='underline text-gray-400'>1 hour ago</span></p>
                                        </div>
                                    </div>
                                    <div className='sm:flex gap-5 border border-[#003144] border-b-gray-300 px-1 py-5'>
                                        <img src="https://i.ibb.co/5L4G9x6/c7.jpg" alt="" className='review-img' />
                                        <div>
                                            <p className='font-medium text-[#ED8502]'>Rachel, Denver, CO
                                            </p>
                                            <p className='mt-1 text-sm'>
                                                I'm thrilled with my new windows from Mr.Home Service. They look beautiful and have already made a noticeable difference in the energy efficiency of my home. Thank you!
                                            </p>
                                            <p className='text-sm text-[#ED8502] mt-1'>Reply. Like . <span className='underline text-gray-400'>2 hours ago</span></p>
                                        </div>
                                    </div>
                                    <div className='sm:flex gap-5 border border-[#003144] border-b-gray-300 px-1 py-5'>
                                        <img src="https://i.ibb.co/WxHVhjS/c8.jpg" alt="" className='review-img' />
                                        <div>
                                            <p className='font-medium text-[#ED8502]'> Alex, Atlanta, GA</p>
                                            <p className='mt-1 text-sm'>
                                                Mr.Home Service delivered on their promises with a flawless installation and top-quality windows. I highly recommend their services to anyone looking for a trusted partner in home improvement.
                                            </p>
                                            <p className='text-sm text-[#ED8502] mt-1'>Reply. 12 . Like . <span className='underline text-gray-400'>2 hours ago</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-[17px]'>At Mr.Home Service, we are committed to providing our customers with top-quality window installations and exceptional customer service. Contact us today to learn more about our services and how we can help you enhance the beauty and value of your home.</div>
                        </div>
                    </div>
                </div>
                <div className='bg-opacity-60 bg-black'>
                    <div className='text-white font-medium max-w-7xl px-3 mx-auto sm:my-16 my-5'>
                        <h6 className='text-sm'>Important Disclosures</h6>
                        <p className='text-sm'>This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video in any advertisement associated with this site are actors or models and not contractors affiliated with this site.
                            <br /> <br />
                            Any service marks, logos, and trademarks (collectively the "Trademarks") displayed are registered and/or unregistered Trademarks of their respective owners. This site contains affiliate and partner links and may receive compensation for referrals or purchases made through our links. Subject matter within this website are copyrighted property of the owner of this site. This website and its owner is not responsible for any photographic or typographical errors.</p>
                        <p className='text-sm text-center mt-8'>© 2023 Mr. Home Service, All Rights Reserved. <a className='underline hover:text-[#f6b234]' href="/privacy-policy">Privacy Policy</a> Cookie Policy <a className='underline hover:text-[#f6b234]' href="/terms">Terms & Condition</a></p>
                    </div>
                </div>
            </div>
        </div>
    )}
</>
  )
}

export default PestControl