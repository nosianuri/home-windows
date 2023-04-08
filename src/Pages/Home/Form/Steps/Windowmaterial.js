import React from 'react'

const Windowmaterial = ({ material, setMaterial, setPage }) => {
    const handleChange = (e) => {
        setMaterial(e);
        setPage(4)
      };
  return (
    <div className="flex flex-col w-full " data-aos="zoom-in-right" data-aos-delay="800" data-aos-duration="800">
    <div className="mx-2 flex-1">
      <div className='text-center'>
        <h2 className='sm:text-[27px] text-[25px] font-bold mb-8'>What is the material of your windows ?<em className='text-red-700'>*</em></h2>
        <div className='my-5'>
          <div className='text-xl'>
            <div onClick={() => handleChange("Aluminum")} className='radio-item'>
              <input name='material' id='aluminum'  type="radio" />
              <label htmlFor="aluminum">Aluminum</label>
            </div>
            <div onClick={() => handleChange("Brick or Stone")} className='radio-item'>        
                  <input name='material' id='brick'  type="radio" />
              <label htmlFor="brick">Brick or Stone</label>
            </div>
            <div onClick={() => handleChange("Metal")} className='radio-item'>        
                  <input name='material' id='metal'  type="radio" />
              <label htmlFor="metal">Metal</label>
            </div>
            <div onClick={() => handleChange("Not Sure")} className='radio-item'>        
                  <input name='material' id='notSure'  type="radio" />
              <label htmlFor="notSure">Not Sure</label>
            </div>
            <div onClick={() => handleChange("Vinyl")} className='radio-item'>        
                  <input name='material' id='vinyl'  type="radio" />
              <label htmlFor="vinyl">Vinyl</label>
            </div>
            <div onClick={() => handleChange("Wood")} className='radio-item'>        
                  <input name='material' id='wood' type="radio" />
              <label htmlFor="wood">Wood</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Windowmaterial