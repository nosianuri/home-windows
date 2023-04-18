import React from 'react';

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
                <input name='material' id='aluminum' type="radio" />
                <label htmlFor="aluminum">Apply Roof Sealant
                </label>
              </div>
              <div onClick={() => handleChange("4002")} className='radio-item'>
                <input name='material' id='brick' type="radio" />
                <label htmlFor="brick">Repair Flat, Foam, Single Ply Roofing</label>
              </div>
              <div onClick={() => handleChange("4003")} className='radio-item'>
                <input name='material' id='metal' type="radio" />
                <label htmlFor="metal">Repair Asphalt Shingle Roofing</label>
              </div>
              <div onClick={() => handleChange("4004")} className='radio-item'>
                <input name='material' id='notSure' type="radio" />
                <label htmlFor="notSure">Install Wood or composite Roofing</label>
              </div>
              <div onClick={() => handleChange("4005")} className='radio-item'>
                <input name='material' id='vinyl' type="radio" />
                <label htmlFor="vinyl">Repair Metal Roofing</label>
              </div>
              <div onClick={() => handleChange("4006")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Roofing Natural State Roofing</label>
              </div>
              <div onClick={() => handleChange("4007")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Repair Tile Roofing</label>
              </div>
              <div onClick={() => handleChange("4008")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Repair Wood or Composite Roofing</label>
              </div>
              <div onClick={() => handleChange("4009")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Replace Entire Roof</label>
              </div>
              <div onClick={() => handleChange("4010")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Install Flat, Foam, Single Ply Roofing</label>
              </div>
              <div onClick={() => handleChange("4011")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Install Tile Roofing</label>
              </div>
              <div onClick={() => handleChange("4012")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Install Natural Slate Roofing</label>
              </div>
              <div onClick={() => handleChange("4013")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Install Metal Roofing</label>
              </div>
              <div onClick={() => handleChange("4014")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Install Asphalt Shingle Roofing</label>
              </div>
              <div onClick={() => handleChange("4015")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Install Roof Heating Cable to Melt Snow</label>
              </div>
              <div onClick={() => handleChange("4016")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Clean a Roof</label>
              </div>
              <div onClick={() => handleChange("4017")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">New Roof on New Construction</label>
              </div>
              <div onClick={() => handleChange("4018")} className='radio-item'>
                <input name='material' id='wood' type="radio" />
                <label htmlFor="wood">Repair Roof</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Windowmaterial