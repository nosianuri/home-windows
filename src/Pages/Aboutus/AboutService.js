import React from 'react'

const AboutService = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <div className='grid sm:grid-cols-2 grid-cols-1 mx-2 items-center'>
                <div>
                    <img src="https://i.ibb.co/cr11XPJ/mr-home-about-us.png" alt="" className='rounded w-4/5' />
                </div>
                <div>
                    <h2 className=' font-medium'><span className='text-[35px] text-[#f6b234]'>Mr. Home Service</span> <br /> <span className='text-[20px]'>is a trusted and reliable home improvement company</span> </h2> <p className='text-[#8b8d94] text-justify font-medium'> That has been serving customers with superior service, expert installations, and quality products for years. The company has a rich history that dates back to its founding, which is steeped in a commitment to <span className='text-[#98c83f]'>exceptional craftsmanship</span>  and unparalleled customer satisfaction.
                        <br />
                        The company's story began when its founder, John Smith, started out with a small home repair and remodeling business. Over the years, Mr. Smith's reputation for quality work and exceptional service grew, and the company began expanding into new product lines, including roofing, siding, windows, doors, and more.
                        <br />
                        Today, Mr. Home Service is a thriving business with a team of skilled professionals dedicated to delivering <span className='text-[#98c83f]'>the best possible results</span>  for every customer. The company takes great pride in its family-owned and operated roots, and it shows in everything they do. From the initial consultation to the final installation, Mr. Home Service is committed to providing a personalized experience that meets the unique needs of each and every customer.
                        <br />
                        <h3> The team at Mr. Home Service is made up of experts in their field who are passionate about what they do. From the skilled technicians who perform the installations to the knowledgeable customer service representatives who assist customers every step of the way, every member of the team is dedicated to delivering an exceptional experience.</h3>
                        
                    </p>
                </div>
                
            </div>
            {/* <div className='my-5 font-medium text-justify'>
            <h3> The team at Mr. Home Service is made up of experts in their field who are passionate about what they do. From the skilled technicians who perform the installations to the knowledgeable customer service representatives who assist customers every step of the way, every member of the team is dedicated to delivering an exceptional experience.</h3>
            </div> */}
            
                <div className='bg-[#333] text-[#fff] p-5 text-[18px] mt-2 sm:w-[800px] mb-5 text-justify'> <span className='underline font-bold mr-2'>Note:</span> 
                 At Mr. Home Service, the focus is on quality, reliability, and exceptional service. The company has a long-standing reputation for excellence, and it is committed to continuing to provide the same level of service for many years to come. Whether you're looking to upgrade your home with new windows, doors, or siding, or you need help with a repair or renovation project, Mr. Home Service is here to help.

                </div>
        </div>
    )
}

export default AboutService