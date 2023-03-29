import React from 'react'
import { useForm } from 'react-hook-form';

const Email = ({ page, setPage, setAllData, AllData }) => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setAllData({
            ...AllData,
            email_address: data.email_address,
        })
        setPage(page + 1);
        console.log(AllData, data, page)
    }
  return (
    <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
    <h2 className='text-[24px] font-bold text-center mb-5'>What is your email?<em className='text-red-700'>*</em></h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
            <div className=" mx-2">
                {/* <div className="font-bold h-6 mt-3 text-gray-900 text-sm !leading-normal uppercase">Email<em className='text-red-700'>*</em>
                </div> */}
                <div className="bg-white mb-2 p-1 flex border border-gray-400 hover:border-yellow-400 rounded">
                    <input name="email" className="text-[16px] p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        {...register("email_address", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                        })}
                        placeholder='Email' />
                </div>
                <p>
                    {errors.email_address?.type === 'required' && <span className="text-xs text-red-500">{errors.email.message}</span>}
                </p>
            </div>
           
            <p className='text-[8px]'>BY CLICKING NEXT, YOU AUTHORIZE WINDOWSInstallation.COM, YOURHOMESCONNECTION.COM AND UP TO <a className='text-orange-500 hover:underline' href="/">FOUR PARTNER COMPANIES</a> TO CALL YOU AND SEND YOU PRE-RECORDED MESSAGES AND TEXT MESSAGES AT THE NUMBER YOU ENTERED ABOVE, USING AN AUTODIALER, WITH OFFERS ABOUT THEIR PRODUCTS OR SERVICES, EVEN IF YOUR PHONE NUMBER IS ON ANY NATIONAL OR STATE DO NOT CALL LIST. MESSAGE AND DATA RATES MAY APPLY. YOUR CONSENT HERE IS NOT BASED ON A CONDITION OF PURCHASE.YOU ALSO AGREE TO THE <a className='text-orange-500 hover:underline' href="/terms">TERMS AND CONDITION</a> AND <a className='text-orange-500 hover:underline' href="/privacy-policy">PRIVACY POLICY</a></p>
            <p className='text-[8px]'>BY CLICKING SUBMIT, YOU AUTHORIZE YOURHOMESWINDOWS.COM, YOURHOMESCONNECTION.COM AND UP TO FOUR PARTNER COMPANIES TO CALL YOU AND SEND YOU PRE-RECORDED MESSAGES AND TEXT MESSAGES AT THE NUMBER YOU ENTERED ABOVE, USING AN AUTODIALER, WITH OFFERS ABOUT THEIR PRODUCTS OR SERVICES, EVEN IF YOUR PHONE NUMBER IS ON ANY NATIONAL OR STATE DO NOT CALL LIST. MESSAGE AND DATA RATES MAY APPLY. YOUR CONSENT HERE IS NOT BASED ON A CONDITION OF PURCHASE.YOU ALSO AGREE TO THE TERMS AND CONDITION AND PRIVACY POLICY</p>
            
        </div>
        <div className="footer mt-16">
            <input className="sm:text-xl w-full text-lg cursor-pointer rounded-lg bg-[#eaa613] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#e48a03] hover:text-white" type="submit" value="Next" />
        </div>
    </form>
</div>
  )
}

export default Email