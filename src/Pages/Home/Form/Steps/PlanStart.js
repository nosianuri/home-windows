import React from 'react'

const PlanStart = ({ page, setPage, setTimeFrame }) => {
  const handleChange = (e) => {
    setTimeFrame(e);
    setPage(5);
  };
  return (
    <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
      <div className="mx-2  flex-1">
        <div className='text-center'>
          <h2 className='sm:text-[27px] text-[25px] font-bold mb-8'>When do you plan to start this project?<em className='text-red-700'>*</em></h2>
          <div className='my-5'>
            <div className='text-xl'>
              <div onClick={() => handleChange("Immediate")} className='radio-item'>
                <input name='radio' id='radio1' type="radio" />
                <label htmlFor="radio1">Immediate</label>
              </div>
              <div onClick={() => handleChange("More Than 1 Month")} className='radio-item'>
                <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">More Than 1 Month</label>
              </div>
              <div onClick={() => handleChange("Timing is Flexible")} className='radio-item'>
                <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">Timing is Flexible</label>
              </div>
              <div onClick={() => handleChange("Within 1 Month")} className='radio-item'>
                <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">Within 1 Month</label>
              </div>
              <div onClick={() => handleChange("Within 1 Week")} className='radio-item'>
                <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">Within 1 Week</label>
              </div>
              <div onClick={() => handleChange("Within 2 Weeks")} className='radio-item'>
                <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">Within 2 Weeks</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanStart