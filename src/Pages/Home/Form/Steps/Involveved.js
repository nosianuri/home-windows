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
                    <h2 className='sm:text-[27px] text-[25px] font-bold mb-8'>How many windows are involved?<em className='text-red-700'>*</em></h2>
                    <div className='my-5'>
                        <div className='text-xl'>
                            <div onClick={() => handleChange("1")} className='radio-item'>
                                <input name='radio' id='radio1' type="radio" />
                                <label htmlFor="radio1">1</label>
                            </div>
                            <div onClick={() => handleChange("10+")} className='radio-item'>
                                <input name='radio' id='radio2' type="radio" />
                                <label htmlFor="radio2">10+</label>
                            </div>
                            <div onClick={() => handleChange("2")} className='radio-item'>
                                <input name='radio' id='radio2' type="radio" />
                                <label htmlFor="radio2">2</label>
                            </div>
                            <div onClick={() => handleChange("3-5")} className='radio-item'>
                                <input name='radio' id='radio2' type="radio" />
                                <label htmlFor="radio2">3-5</label>
                            </div>
                            <div onClick={() => handleChange("6-9")} className='radio-item'>
                                <input name='radio' id='radio2' type="radio" />
                                <label htmlFor="radio2">6-9</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Involveved