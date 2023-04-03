import React from 'react'

const CleaningFooter = () => {
  return (
    <div className=' bg-[#09193d] text-[#ffffff]'>
    <div className='sm:flex justify-between max-w-[900px] mx-auto my-5 px-3'>
        <div>Copyright © 2023 <span className='text-blue-400'>MrHomeService</span>. All rights reserved.</div>
        <div><a className='hover:text-[#e48a03]' href="/terms">Terms and Conditions</a> | <a className='hover:text-[#e48a03]' href="/privacy-policy">Privacy Policy</a></div>
    </div>
</div>
  )
}

export default CleaningFooter