import React from 'react'

const Pnature = ({ nature, setNature, setPage }) => {
    const handleChange = (e) => {
      setNature(e);
        setPage(2)
      };
  return (
    <div className="flex flex-col w-full " data-aos="zoom-in-right" data-aos-delay="800" data-aos-duration="800">
      <div className="mx-2 flex-1">
        <div className='text-center'>
          <h2 className='text-[24px] font-bold mb-10'>What is the nature of your windows project?<em className='text-red-700'>*</em></h2>
          <div className='my-5'>
            <div className='text-xl'>
              <div onClick={() => handleChange("Cleaning")} className='radio-item'>
                <input name='nature' id='cleaning'  type="radio" />
                <label htmlFor="cleaning">Cleaning</label>
              </div>
              <div onClick={() => handleChange("Replace")} className='radio-item'>        
                    <input name='nature' id='replace'  type="radio" />
                <label htmlFor="replace">Replace</label>
              </div>
              <div onClick={() => handleChange("Repair")} className='radio-item'>        
                    <input name='nature' id='repair'  type="radio" />
                <label htmlFor="repair">Repair</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pnature