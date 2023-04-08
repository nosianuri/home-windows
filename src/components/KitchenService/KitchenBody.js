import React from 'react'

const KitchenBody = () => {
    return (
        <div className="hero h-screen !bg-no-repeat !bg-cover" style={{
            background: `url(https://i.ibb.co/2Fy6xVh/bg7.png)`
        }}>
            <div className='bg-black bg-opacity-70 w-[100%] h-[100%]'>
                <div className='max-w-[800px] mx-auto text-white py-10 px-3'>
                    <h1 className='text-center text-5xl leading-normal font-bold text-[#fff]'>Kitchen Service</h1>
                    <div className='text-2xl my-8 font-bold text-[#ED8502]'> Our kitchen services are customized to your needs, and we offer financing options for larger projects.
                    </div>
                    <div>
                        <div className='text-2xl font-bold mt-5'><i className="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i> Kitchen Remodeling:</div> <div className='text-xl font-medium mb-4'> Transform your outdated kitchen into a functional and stylish space with our remodeling services. We can help you select materials and appliances that fit your budget and preferences.</div>
                        <div className='text-2xl font-bold mt-5'><i className="fa-solid fa-circle-check text-[#ED8502] pr-3 "></i>Cabinet Refacing:</div>
                        <div className='text-xl font-medium mb-4'> If you want to update your kitchen's look without a full remodel, consider cabinet refacing. Our professionals can help you choose from a variety of finishes and styles.
                        </div>
                        <div className='bg-[#de1b23] text-center sm:w-[40%] text-white text-2xl font-bold px-4 py-2 mt-10'>Get a Quote</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KitchenBody