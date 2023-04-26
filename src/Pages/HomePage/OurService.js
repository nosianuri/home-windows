import React from 'react';
// import service1 from '../../assets/emergencyservice.svg'
// import service2 from '../../assets/plumbingdrain.svg'
// import service3 from '../../assets/waterdamage.svg'
// import service4 from '../../assets/waterheaters.svg'

const OurService = () => {
    const textButton = ' >';
    const services = [
        {
            id: 1,
            name: 'Emergency Plumbing Services',
            link: '/',
            desc: 'First and foremost, we believe in transparency and honesty. We always provide detailed, itemized estimates for every project we undertake, so our customers know exactly what they are paying for. We never tack on hidden fees or charges, and we always strive to complete our projects on time and within budget.',
        },
        {
            id: 2,
            name: 'Plumbing and Drains',
            link: '/',
            desc: 'Another reason why we stand out from our competitors is our dedication to safety. We take every precaution necessary to ensure the safety of our customers, our team members, and our job sites. We are fully licensed and insured, and we follow all applicable safety regulations and guidelines.',
        },
        {
            id: 3,
            name: 'Water Damage',
            link: '/',
            desc: 'At Mr. Home Service, we are also committed to minimizing our impact on the environment. We use eco-friendly materials whenever possible, and we take steps to reduce waste and recycle whenever possible. We believe that by taking these steps, we can help our customers reduce their carbon footprint and contribute to a more sustainable future.',
        },
        {
            id: 4,
            name: 'Water Heaters',
            link: '/',
            desc: 'Finally, we are a locally owned and operated business, which means that we are invested in the communities we serve. We believe in giving back to our communities and supporting local organizations and charities. When you work with us, you can feel good knowing that you are supporting a local business that cares about the people and places we serve.',
        },
    ]
  return (
    <div className='background-service py-10 mb-10'>
    <div className='sm:w-[1380px] !mx-auto'>
        <h2 className='text-[45px] text-[#fff] font-extrabold'>why choose Mr. Home Service</h2>
        <div className='grid sm:grid-cols-4 grid-cols-1 gap-5 mt-8 !mx-auto'>
        {services.map(service => (
            <div key={service} className='bg-[#fff] px-5 w-[320px] mx-auto py-5'>
                {/* <img src="" alt="" /> */}
                {/* <h1 className='text-center font-bold text-[25px] mt-10'>{service.name}</h1> */}
                <h4 className='text-[17px] font-medium text-justify'><span className='text-[28px] text-[#fff] px-2 rounded-full bg-[#98c83f] mr-2'>{service.id}.</span>{service.desc}</h4>
                {/* <div className='uppercase mb-5 text-[#506bb7] mt-1 font-semibold text-[23px]'><span className='hover:underline hover:pr-2'>Explore This Service</span> {textButton}</div> */}
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default OurService