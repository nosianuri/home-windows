import React from 'react';

const OwnHome = ({ page, setPage, setHowner }) => {
  const handleChange = (e) => {
    setHowner(e);
    setPage(page + 1);
  };
  return (
    <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
      <div className="mx-2  flex-1">
        <div className='text-center'>
          <h2 className='sm:text-[27px] text-[25px] font-bold mb-20'>Do you own your home?<em className='text-red-700'>*</em></h2>
          <div className='my-16'>
            <div className='text-xl'>
              <div onClick={() => handleChange("yes")} className='radio-item'>
                <input name='radio' id='radio1' type="radio" />
                <label htmlFor="radio1">Yes</label>
              </div>
              <div onClick={() => handleChange("no")} className='radio-item'>
                <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnHome