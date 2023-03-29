import React from 'react'

const Pnature = ({ setCurrently, setPage }) => {
    const handleChange = (e) => {
        setCurrently(e);
        setPage(2)
      };
  return (
    <div className="flex flex-col w-full " data-aos="zoom-in-right" data-aos-delay="800" data-aos-duration="800">
      <div className="mx-2 flex-1">
        <div className='text-center'>
          <h2 className='text-[24px] font-bold mb-10'>What is the nature of your windows project?<em className='text-red-700'>*</em></h2>
          <div className='my-5'>
            <div className='text-xl'>
              <div onClick={() => handleChange("repair")} className='radio-item'>
                <input name='radio' id='radio1' type="radio" />
                <label htmlFor="radio1">Repair</label>
              </div>
              <div onClick={() => handleChange("replace")} className='radio-item'>        
                    <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">Replace</label>
              </div>
              <div onClick={() => handleChange("unsure")} className='radio-item'>        
                    <input name='radio' id='radio2' type="radio" />
                <label htmlFor="radio2">Unsure</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pnature