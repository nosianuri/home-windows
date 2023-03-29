import React from 'react'
import { useForm } from 'react-hook-form';

const Phone = ({ page, setPage, setAllData, AllData }) => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setAllData({
            ...AllData,
            phone_home: data.phone_home,
        })
        setPage(page + 1);
        console.log(AllData, data, page)
    }
  return (
    <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
    <h2 className='text-[24px] font-bold text-center mb-5'>What is the best phone number to reach you?<em className='text-red-700'>*</em></h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
           
            <div className="mx-2 input-container">
                {/* <div className="font-bold h-6 mt-3 !text-gray-900 text-sm !leading-normal uppercase">
                    Phone Number<em className='text-red-700'>*</em>
                </div> */}
                <div className="bg-white mb-2 p-1 flex border border-gray-400 hover:border-yellow-400 rounded">
                    <input name="phone" type="text" autoComplete='off' className="input "
                        {...register("phone_home", {
                            required: {
                                value: true,
                                message: 'Phone Number is required'
                            },
                            maxLength: {
                                value: 10,
                                message: 'Must be 10 characters longer'
                            },
                            minLength: {
                                value: 10,
                                message: 'Must be 10 characters longer'
                            }
                        })}
                        placeholder='10 Digits (Ex. 5231231234)' />
                </div>
                <p>
                    {errors.phone_home?.type === 'required' && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                    {errors.phone_home?.type === 'maxLength' && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                    {errors.phone_home?.type === 'minLength' && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                </p>
            </div>
            <p className='text-[8px]'>BY CLICKING NEXT, YOU AUTHORIZE WINDOWSInstallation.COM, YOURHOMESCONNECTION.COM AND UP TO <a className='text-orange-500 hover:underline' href="/">FOUR PARTNER COMPANIES</a> TO CALL YOU AND SEND YOU PRE-RECORDED MESSAGES AND TEXT MESSAGES AT THE NUMBER YOU ENTERED ABOVE, USING AN AUTODIALER, WITH OFFERS ABOUT THEIR PRODUCTS OR SERVICES, EVEN IF YOUR PHONE NUMBER IS ON ANY NATIONAL OR STATE DO NOT CALL LIST. MESSAGE AND DATA RATES MAY APPLY. YOUR CONSENT HERE IS NOT BASED ON A CONDITION OF PURCHASE.YOU ALSO AGREE TO THE <a className='text-orange-500 hover:underline' href="/terms">TERMS AND CONDITION</a> AND <a className='text-orange-500 hover:underline' href="/privacy-policy">PRIVACY POLICY</a></p>
            
        </div>
        <div className="footer mt-16">
            <input className="sm:text-xl w-full text-lg cursor-pointer rounded-lg bg-[#eaa613] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#e48a03] hover:text-white" type="submit" value="Next" />
        </div>
    </form>
</div>
  )
}

export default Phone