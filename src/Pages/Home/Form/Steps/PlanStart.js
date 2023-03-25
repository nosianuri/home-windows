import React from 'react'

const PlanStart = ({ page, setPage, setTimeFrame }) => {
  const handleChange = (e) => {
    setTimeFrame(e);
    setPage(4);
  };
  return (
    <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
      <div className="mx-2  flex-1">
        <div className='text-center'>
          <h2 className='text-2xl font-semibold'>When do you plan to start this project?<em className='text-red-700'>*</em></h2>
          <div className='my-5'>
            <div className='text-xl'>
              <div onClick={() => handleChange("immediately")} className='radio-item'>
                <input name='radio' id='radio1' type="radio" />
                <label htmlFor="radio1">Immediately</label>
              </div>
              <div onClick={() => handleChange("1-6 months")} className='radio-item'>
                <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">1-6 Months</label>
              </div>
              <div onClick={() => handleChange("don't Know")} className='radio-item'>
                <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">Don't Know</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer mt-5">

        <button className="sm:text-xl w-full text-lg cursor-pointer rounded-lg bg-[#eaa613] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#e48a03] hover:text-white"
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}>Next</button>
      </div> */}
    </div>
  )
}

export default PlanStart