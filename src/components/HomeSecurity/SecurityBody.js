import React from 'react'

const SecurityBody = () => {
    return (
        <div className="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/VNNvQ3q/bg9.png)`
        }}>
            <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto text-white py-10 px-3'>
                    <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Home Security Service</h1>
                    <div className='text-2xl my-8 font-bold text-[#ED8502]'>Our security services are affordable and customizable to fit your needs, and we offer 24/7 monitoring for added peace of mind.
                    </div>
                    <div>
                        <div className='text-2xl font-bold mt-5'><i className="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Alarm System Installation:</div> <div className='text-xl font-medium mb-4'> Protect your home and family with our state-of-the-art alarm systems. We offer both wired and wireless options to fit your home's layout.
                        </div>
                        <div className='text-2xl font-bold mt-5'><i className="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Smart Home Integration:</div>
                        <div className='text-xl font-medium mb-4'> Monitor your home from anywhere with our smart home integration services. We can help you connect your security system, thermostat, and other devices for easy control.</div>
                        <div className='bg-[#de1b23] text-center sm:w-[40%] text-white text-2xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecurityBody