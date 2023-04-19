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
            desc: 'Our Plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays.',
        },
        {
            id: 2,
            name: 'Plumbing and Drains',
            link: '/',
            desc: 'As the largest plumbing and drain service company, we make thousands of repairs every day.',
        },
        {
            id: 3,
            name: 'Water Damage',
            link: '/',
            desc: 'Our teams are equipped with state-of-the-art water extraction and cleanup equipment.',
        },
        {
            id: 4,
            name: 'Water Heaters',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
    ]
  return (
    <div className='background-service py-10 mb-10'>
    <div className='sm:w-[1380px] mx-auto'>
        <h2 className='text-[45px] text-[#fff] font-extrabold'>Our Services</h2>
        <div className='grid sm:grid-cols-4 grid-cols-1 gap-5 mt-8'>
        {services.map(service => (
            <div key={service} className='bg-[#fff] px-5 w-[320px]'>
                <img src="" alt="" />
                <h1 className='text-center font-bold text-[25px] mt-10'>{service.name}</h1>
                <h4 className='text-[20px] text-center font-medium'>{service.desc}</h4>
                <div className='uppercase mb-5 text-[#506bb7] mt-1 font-semibold text-[23px]'><span className='hover:underline hover:pr-2'>Explore This Service</span> {textButton}</div>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default OurService