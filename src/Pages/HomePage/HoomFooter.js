import React from 'react'

const HoomFooter = () => {
    return (
        <div className='bg-[#f3f3f3]'>
            <footer className="footer px-10 pt-10 text-base-content mx-auto">
                <div>
                    <span className="text-[#003144] mb-2 font-extrabold uppercase text-[18px] !leading-normal">Products</span>
                    <a href='/' className="link link-hover font-semibold !text-[#303030]">Windows</a>
                    <a href='/' className="link link-hover font-semibold !text-[#303030]">Garage Doors </a>
                    <a href='/' className="link link-hover font-semibold !text-[#303030]">Roofing</a>
                    <a href='/' className="link link-hover font-semibold !text-[#303030]">Storm Doors</a>
                </div>
                <div>
                    <span className=" text-[#003144] mb-2 font-extrabold uppercase text-[18px] !leading-normal">Company</span>
                    <a href='/' className="link link-hover font-semibold !text-[#303030]">About us</a>
                    <a href='/' className="link link-hover font-semibold !text-[#303030]">Why Choose US</a>
                    <a href='/' className="link link-hover font-semibold !text-[#303030]">Privacy Policy</a>
                    <a href='/' className="link link-hover font-semibold !text-[#303030]">Terms & Service</a>
                </div>
                <div>
                    <span className="text-[#003144] mb-2 font-extrabold uppercase text-[18px] !leading-normal">Social</span>
                    <div className='text-[#003144] text-2xl font-extrabold'><a href="/">Call Us Today</a></div>
                    <div className='flex gap-3'>
                    <a href="/">
                                <img src="https://i.ibb.co/KwmNXCN/twitter.jpg" alt="" className='w-10 h-10' />
                                </a>
                                <a href="/">
                                <img src="https://i.ibb.co/6NnGWkY/facebook.jpg" alt="" className='w-10 h-10' />
                                </a>
                                <a href="/">
                                <img src="https://i.ibb.co/2tNJBCD/instagram.jpg" alt="" className='w-10 h-10' />
                                </a>
                                <a href="/">
                                <img src="https://i.ibb.co/fCgNVz2/linkedin.jpg" alt="" className='w-10 h-10' />
                                </a>
                            </div>
                            <div>
                            <img src="https://i.ibb.co/yFv6tCK/awards.png" alt="" className='w-40' />
                            </div>
                            
                    {/* <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div> */}
                </div>
            </footer>
            <footer className="footer px-10 pb-10   text-base-content  mx-auto">
                <div className="items-center ">
                    <div> <p className='text-sm text-[#003144] text-center mt-8'>© 2023 Mr. Home Service, All Rights Reserved. <a className='underline hover:text-[#f6b234]' href="/privacy-policy">Privacy Policy</a> Cookie Policy <a className='underline hover:text-[#f6b234]' href="/terms">Terms & Condition</a></p></div>
                    <p className='text-xs'>Important Disclosures
                        This site is a free service to assist homeowners in connecting with local service contractors. All contractors are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video in any advertisement associated with this site are actors or models and not contractors affiliated with this site.

                        Any service marks, logos, and trademarks (collectively the "Trademarks") displayed are registered and/or unregistered Trademarks of their respective owners. This site contains affiliate and partner links and may receive compensation for referrals or purchases made through our links. Subject matter within this website are copyrighted property of the owner of this site. This website and its owner is not responsible for any photographic or typographical errors.</p>

                </div>

            </footer>
        </div>
    )
}

export default HoomFooter