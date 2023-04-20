import React from 'react'
import OurService from '../HomePage/OurService'

const WhyUsBody = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto mt-10'>
                <h3 className='font-extrabold sm:text-[38px] text-[23px] sm:w-[900px]  text-[#98c83f]'>Upgrade Your Home with Confidence Choose Mr. Home Service for Expert Renovations!</h3>
                <h1>When it comes to home improvement and repair services, you want to work with a team that you can trust to get the job done right. At Mr. Home Service, we believe that we are the best choice for homeowners who are looking for high-quality, reliable, and affordable services. Here are just a few reasons why you should choose us for your next project:</h1>
                <div className='grid sm:grid-cols-3 grid-cols-1 gap-5 my-8'>
                    <div className='text-center'>
                        <img src="https://i.ibb.co/CwGCX3q/experience-001.png" alt="" className='mx-auto' />
                        <h2>Experience:</h2>
                        <p>Our team has years of experience in the home improvement industry, and we have completed thousands of projects for satisfied customers. Our knowledge and expertise allow us to tackle even the most complex projects with ease, and we are always up-to-date with the latest industry trends and technologies.</p>
                    </div>
                    <div className='text-center'>
                        <img src="https://i.ibb.co/zhwZdNT/quality-001.png" alt="" className='mx-auto' />
                        <h2>Quality: </h2>
                        <p>We believe that quality is the key to success in our industry. We use only the best materials and equipment in our work, and we employ skilled professionals who are dedicated to delivering exceptional results. We also offer comprehensive warranties on all of our services to ensure that our customers are completely satisfied with their experience.</p>
                    </div>
                    <div className='text-center'>
                        <img src="https://i.ibb.co/tc2H4Dz/service-001.png" alt="" className='mx-auto' />
                        <h2>Customer Service:</h2>
                        <p> We believe that customer service is the foundation of our business. We take the time to understand our customers' needs and provide tailored solutions that meet their unique requirements. We also communicate openly and honestly throughout the entire process, so our customers always know what to expect.</p>
                    </div>
                    <div className='text-center'>
                        <img src="https://i.ibb.co/XpNx5xM/honor-001.png" alt="" className='mx-auto' />
                        <h2>Affordable Pricing:</h2>
                        <p> We understand that home improvement projects can be expensive, which is why we offer competitive pricing on all of our services. We also offer flexible financing options to help our customers get the services they need without breaking the bank.</p>
                    </div>
                    <div className='text-center'>
                        <img src="https://i.ibb.co/7GGXSYp/experts-001.png" alt="" className='mx-auto' />
                        <h2>Comprehensive Services:</h2>
                        <p> We offer a wide range of home improvement and repair services, including window and door installation, siding, roofing, kitchen and bathroom remodeling, and much more. Whatever your needs may be, we have the expertise and resources to get the job done right.
                        </p>
                    </div>
                </div>
                
                
                <p>In addition to our years of experience, commitment to quality, exceptional customer service, affordable pricing, and comprehensive services, there are several other reasons why you should choose Mr. Home Service for your home improvement needs.</p>
                {/* <p>First and foremost, we believe in transparency and honesty. We always provide detailed, itemized estimates for every project we undertake, so our customers know exactly what they are paying for. We never tack on hidden fees or charges, and we always strive to complete our projects on time and within budget.
                </p> */}
                {/* <p>Another reason why we stand out from our competitors is our dedication to safety. We take every precaution necessary to ensure the safety of our customers, our team members, and our job sites. We are fully licensed and insured, and we follow all applicable safety regulations and guidelines.
                </p> */}
                {/* <p>At Mr. Home Service, we are also committed to minimizing our impact on the environment. We use eco-friendly materials whenever possible, and we take steps to reduce waste and recycle whenever possible. We believe that by taking these steps, we can help our customers reduce their carbon footprint and contribute to a more sustainable future.</p> */}
                {/* <p>Finally, we are a locally owned and operated business, which means that we are invested in the communities we serve. We believe in giving back to our communities and supporting local organizations and charities. When you work with us, you can feel good knowing that you are supporting a local business that cares about the people and places we serve.</p> */}
            </div>
            <OurService />
            <p>In summary, when you choose Mr. Home Service, you can rest assured that you are getting the best possible service at an affordable price. Contact us today to learn more about our services and how we can help you with your next home improvement project.
                </p>
            <div className='bg-[#003144] mt-5'>
                <div className='max-w-7xl mx-auto'>
                    <div className=' py-5 sm:flex gap-3 items-center'>
                        <img src="https://i.ibb.co/m9NSXbr/layer-703.png" alt="" className='w-full' />
                        <div className='px-2'>
                            <p className='text-[30px] font-bold text-[#98c83f]'>Revitalize Your Living Space</p>
                            <p className='font-medium text-[#ddd] text-justify'>In conclusion, at Mr. Home Service, we are committed to providing our customers with the highest quality home improvement and repair services possible. With our years of experience, commitment to quality, exceptional customer service, affordable pricing, comprehensive services, transparency, dedication to safety, commitment to sustainability, and investment in our communities, we believe that we are the best choice for homeowners looking for reliable, trustworthy, and skilled home improvement professionals. Contact us today to learn more about how we can help you with your next project.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUsBody