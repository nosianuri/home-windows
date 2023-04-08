import React from 'react'

const GutterBody = () => {
    return (
        <div className="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/JtznkJg/bg6.png)`
        }}>
            <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto text-white py-10 px-3'>
                    <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Gutter Service</h1>
                    <div className='text-2xl my-8 font-bold text-[#ED8502]'> Our gutter services are affordable and we offer flexible scheduling options to fit your needs.
                    </div>
                    <div>
                        <div className='text-2xl font-bold mt-5'><i className="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Gutter Cleaning:</div> <div className='text-xl font-medium mb-4'>  Keep your home's gutters free of debris and prevent water damage with our gutter cleaning services. We can also install gutter guards to reduce the need for future cleaning.</div>
                        <div className='text-2xl font-bold mt-5'><i className="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Gutter Repair:</div>
                        <div className='text-xl font-medium mb-4'>  If your gutters are leaking or sagging, our professionals can repair them to keep your home protected from rainwater damage.
                        </div>
                        <div className='bg-[#de1b23] text-center sm:w-[40%] text-white text-2xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GutterBody