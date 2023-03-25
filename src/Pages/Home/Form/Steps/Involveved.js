import React from 'react'

const Involveved = ({ setPage, setFault }) => {
    const handleChange = (e) => {
        setFault(e);
        setPage(3)
    };
    return (
        <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
            <div className="mx-2  flex-1">
                <div className='text-center'>
                    <h2 className='text-2xl font-semibold'>How many windows are involved?<em className='text-red-700'>*</em></h2>
                    <div className='my-5'>
                        <div className='text-xl'>
                            <div onClick={() => handleChange("yes")} className='radio-item'>
                                <input name='radio' id='radio1' type="radio" />
                                <label htmlFor="radio1">6+</label>
                            </div>
                            <div onClick={() => handleChange("no")} className='radio-item'>
                                <input name='radio' id='radio2' type="radio" />
                                <label htmlFor="radio2">3-5</label>
                            </div>
                            <div onClick={() => handleChange("no")} className='radio-item'>
                                <input name='radio' id='radio2' type="radio" />
                                <label htmlFor="radio2">2</label>
                            </div>
                            <div onClick={() => handleChange("no")} className='radio-item'>
                                <input name='radio' id='radio2' type="radio" />
                                <label htmlFor="radio2">1</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Involveved