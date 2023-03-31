import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';
import StepForm from './Form/StepForm';
import Loader from '../../Shared/Loader';

const Home = () => {
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
                <title>Home Windows Installation</title>
            </Helmet>
            {isLoading ? (
                <Loader />
            ) : (
                <div className=''>
                    <div className='body sg-body '>
                        <div className='bg-opacity-25 bg-black'>
                            <div className='max-w-7xl mx-auto px-2 mt-3'>
                                <div className='flex justify-between items-center'>
                                    <img src="https://i.ibb.co/jftkr0f/mr-homepng.png" alt="" className='sm:w-24 w-16' />

                                    <div className='flex justify-center items-center'>
                                        <a href="tel:+18559390621"><i class="fa-solid fa-phone-volume pr-3 text-[#eaa613] text-3xl"></i></a>
                                        <p className='text-white !leading-normal agent'>Speak to a Licensed Agent <br />
                                            <a className='text-3xl font-bold text-[#f4b836]' href="tel:+18888560197">(888) 856-0197</a> <br />
                                            Licensed Agents available now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='speak-agent'>
                                <div className='flex justify-center items-center'>
                                    <a href="tel:+18559390621"><i class="fa-solid fa-phone-volume pr-3 text-[#eaa613] text-3xl"></i></a>
                                    <p className='text-white !leading-normal'>Speak to a Licensed Agent <br />
                                        <a className='text-3xl font-bold text-[#f4b836]' href="tel:+18888560197">(888) 856-0197</a> <br />
                                        Licensed Agents available now
                                    </p>
                                </div>
                            </div> */}

                            <div className='sm:flex  sm:space-y-0 space-y-5 max-w-[900px] mx-auto my-16 px-3'>

                                <div className='bg-[#fff8f0b0] px-5 sm:py-5'>
                                    <img src='https://i.ibb.co/vZxr3dp/window-logo.png' alt="" className='sm:w-64 mx-auto' />
                                    <h4 className='text-2xl font-medium mb-2 text-center'>Find <span className='font-bold'>Local</span> Home Window <span className='font-bold'>Prices</span> By Zip Code</h4>
                                    <h5 className='text-xl font-medium mb-8 text-center'>Compare Home Window <span className='font-bold'>Prices</span> Today!</h5>
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
                                    <i class="fa-solid fa-caret-down pl-3"></i>
                                </a>
                            </div>
                            <div id='cac-footer-legal'>
                                <div className='max-w-[990px] mx-auto'>
                                    <h3 className='text-xl mb-2 text-[#e48a03]'>Update Your Existing Home Windows By Replacing Them With Affordable Window Alternatives</h3>
                                    <p className='mb-5'>Looking for replacement windows at great prices? You're in luck. windowinstallation.com helps you streamline and expedite the process of replacement window shopping without the hassle. Once you’ve completed the windows questionnaire above, numerous quotes from local window professionals (unique to your area) will be made available instantly so you can be sure you're getting the best value on your replacement windows!</p>

                                    <h3 className='text-xl mb-2 text-[#e48a03]'>Save On Costs And Be Energy Efficient By Purchasing New House Windows</h3>
                                    <p className='mb-5'>Did you know you that by simply replacing the windows in your home you can enjoy the cost-effective benefits when it comes to utility bills? The proper windows can keep heat locked in during cold weather and your home cool in the summer without the inconvenience of additional appliances, which can cost you hundreds in in expenses. Instead of spending too much on intricate home improvement projects in order to make your home more energy efficient, new home windows can be a convenient solution. If you reside in an older home, you may have single-pane windows that do little to preserve the proper indoor temperature within your home. Due to innovative home windows technology, there are now more cutting-edge windows that you can install in your home now.</p>

                                    <h3 className='text-xl mb-2 text-[#e48a03]'>Investing And Saving With Double-Pane Home Windows</h3>
                                    <p className='mb-2'>Single-pane home windows are now obsolete. Yes, they may be cheaper than double-pane windows but the amount in associated energy costs alone makes single-pane windows less ideal. Double-pane windows help shield your home from extreme climates, pollution, and even insects - saving you significant money in the long run, and you’ll experience the advantages immediately. The National Fenestration Rating Council determines market guidelines for today's highest standard double-pane windows - so if the windows in your home are labelled "NFRC," you can be confident that it’s top tier quality.</p>
                                    <p className='mb-5'>Older single-multiple pane models consist of krypton and argon, gases that assist in elevating the R-values (heat loss resistance) among your windows. Higher R-values in your windows regulate home temperature. Higher U-values are beneficial as well (window's heat transfer resistance). While some manufacturers solely extend R and U value ratings for the center portion of a window, it’s optimal to ensure both R and U value details are available for the full window. With the number of varied styles in today's windows, searching for the right selection within your budget is imperative. Not all presented opportunities will deliver the same savings. There are some window companies out there that may try to convince you to purchase double-pane windows with more than an inch of space between panes. This may provide supplementary insulation but more than an inch is typically not essential.</p>

                                    <h3 className='text-xl mb-2 text-[#e48a03]'>Browsing For Window Quotes To Find The Average Cost Of Home Windows Replacement</h3>
                                    <p className='mb-2 '>There is no time like today to purchase suitable home windows at a reasonable value. Premium window companies will even assign a personalized home windows technician to your house for a tailored consultation experience - walking you through an assortment of replacement windows and window accessories, assisting you every step of the way. It’s best to acquire quotes from several window installers, so that you may take advantage of first-time customer deals or new home window consumer promotions. With a little research on multiple home window rates, you can make sure you’re getting the best energy-efficient and budget friendly windows out there.</p>
                                    <p className='mb-5'>With pertinent tools, resources and adequate information at your disposal - you can have a multi-faceted understanding of which windows work best for your home and budget, whether you go the route of working with a certified professional or installing windows on your own. With new home windows installation, there will be a notable improvement all around - your home's value and appearance will be enhanced while you save money. Window replacement automatically upgrades your home and is an effortless lifetime investment that you can enjoy with ease.</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-opacity-10 bg-black'>
                            <div className='text-white font-medium max-w-7xl px-3 mx-auto sm:my-16 my-5'>
                                <h6 className='text-xs'>Important Disclosures</h6>
                                <p className='text-xs'>This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video in any advertisement associated with this site are actors or models and not contractors affiliated with this site.
                                    <br /> <br />
                                    Any service marks, logos, and trademarks (collectively the "Trademarks") displayed are registered and/or unregistered Trademarks of their respective owners. This site contains affiliate and partner links and may receive compensation for referrals or purchases made through our links. Subject matter within this website are copyrighted property of the owner of this site. This website and its owner is not responsible for any photographic or typographical errors.</p>

                                <p className='text-xs text-center mt-8'>© 2023 window installation, All Rights Reserved. <a className='underline hover:text-[#f6b234]' href="/privacy-policy">Privacy Policy</a> Cookie Policy <a className='underline hover:text-[#f6b234]' href="/terms">Terms & Condition</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Home