import React from 'react'

const ExpertHome = () => {
    const services = [
        {
            id: 1,
            name: 'Emergency Repairs',
            link: '/',
            desc: 'Our Plumbers are ready to go 24/7 for emergencies - including nights, weekends and holidays.',
        },
        {
            id: 2,
            name: 'Electrical Repair',
            link: '/',
            desc: 'As the largest plumbing and drain service company, we make thousands of repairs every day.',
        },
        {
            id: 3,
            name: 'Circuit Breakers',
            link: '/',
            desc: 'Our teams are equipped with state-of-the-art water extraction and cleanup equipment.',
        },
        {
            id: 4,
            name: 'Electrical Wiring',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 5,
            name: 'Electrical Panels',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 6,
            name: 'Smoke Detectors',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 7,
            name: 'EV Charger Installation',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
        {
            id: 8,
            name: 'Smart Home Service',
            link: '/',
            desc: 'Trust Roto-Rooter for repair and replacement of gas, electric and tankless water heaters.',
        },
    ];
  return (
    <div className='bg-[#212121] py-10 mb-16'>
        <h2 className='text-[#fff] text-center text-[35px]'>Have an Expert Home Electrician Help You Today</h2>
        <div className='grid sm:grid-cols-4 grid-cols-1 w-[1300px] mx-auto '>
        {services.map(service => (
            <div key={service} className='bg-[#212121] hover:underline hover:bg-[#FCE200] rounded-full text-center w-[220px] py-16 text-[#fff] font-medium hover:text-[#000] text-[22px] mt-8'>
            <a href="/">
                <div>
                    <img src="" alt="" />
                    <h3 className='px-3 py-2'>{service.name}</h3>
                </div>
                </a>
            </div>
        ))}
        </div>
    </div>
  )
}

export default ExpertHome