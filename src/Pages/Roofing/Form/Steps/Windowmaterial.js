import React from 'react'

const Windowmaterial = ({ service, setService, setPage }) => {
    const handleChange = (e) => {
      setService(e);
        setPage(3);
      };
  return (
    <div className="flex flex-col w-full " data-aos="zoom-in-right" data-aos-delay="800" data-aos-duration="800">
    <div className="mx-2 flex-1">
      <div className='text-center'>
        <h2 className='sm:text-[27px] text-[25px] font-bold mb-8'>Which service Id do you prefer ?<em className='text-red-700'>*</em></h2>
        <div className='my-5'>
          <div className='text-xl'>
            <div onClick={() => handleChange("Aluminum")} className='radio-item'>
              <input name='material' id='aluminum'  type="radio" />
              <label htmlFor="aluminum">4001
</label>
            </div>
            <div onClick={() => handleChange("4002")} className='radio-item'>        
                  <input name='material' id='brick'  type="radio" />
              <label htmlFor="brick">4002</label>
            </div>
            <div onClick={() => handleChange("4003")} className='radio-item'>        
                  <input name='material' id='metal'  type="radio" />
              <label htmlFor="metal">4003</label>
            </div>
            <div onClick={() => handleChange("4004")} className='radio-item'>        
                  <input name='material' id='notSure'  type="radio" />
              <label htmlFor="notSure">4004</label>
            </div>
            <div onClick={() => handleChange("4005")} className='radio-item'>        
                  <input name='material' id='vinyl'  type="radio" />
              <label htmlFor="vinyl">4005</label>
            </div>
            <div onClick={() => handleChange("4006")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4006</label>
            </div>
            <div onClick={() => handleChange("4007")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4007</label>
            </div>
            <div onClick={() => handleChange("4008")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4008</label>
            </div>
            <div onClick={() => handleChange("4009")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4009</label>
            </div>
            <div onClick={() => handleChange("4010")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4010</label>
            </div>
            <div onClick={() => handleChange("4011")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4011</label>
            </div>
            <div onClick={() => handleChange("4012")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4012</label>
            </div>
            <div onClick={() => handleChange("4013")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4013</label>
            </div>
            <div onClick={() => handleChange("4014")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4014</label>
            </div>
            <div onClick={() => handleChange("4015")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4015</label>
            </div>
            <div onClick={() => handleChange("4016")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4016</label>
            </div>
            <div onClick={() => handleChange("4017")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4017</label>
            </div>
            <div onClick={() => handleChange("4018")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">4018</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Windowmaterial