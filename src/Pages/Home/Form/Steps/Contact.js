import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = ({ page, setPage, setAllData, AllData }) => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setAllData({
            ...AllData,
            phone_home: data.phone_home,
            email_address: data.email_address,
        })
        setPage(page + 1);
        console.log(AllData, data, page)
    }
    return (
        <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
            <h2 className='text-2xl font-semibold text-center mb-5'>Contact Information<em className='text-red-700'>*</em></h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    <div className=" mx-2">
                        <div className="font-bold h-6 mt-3 text-gray-900 text-sm !leading-normal uppercase">Email<em className='text-red-700'>*</em>
                        </div>
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
                    <div className="mx-2">
                        <div className="font-bold h-6 mt-3 !text-gray-900 text-sm !leading-normal uppercase">
                            Phone Number<em className='text-red-700'>*</em>
                        </div>
                        <div className="bg-white mb-2 p-1 flex border border-gray-400 hover:border-yellow-400 rounded">
                            <input name="phone" type="text" className="text-[16px] p-1 px-2 appearance-none outline-none w-full text-gray-800"
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
                                placeholder='Phone Number' />
                        </div>
                        <p>
                            {errors.phone_home?.type === 'required' && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                            {errors.phone_home?.type === 'maxLength' && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                            {errors.phone_home?.type === 'minLength' && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                        </p>
                    </div>
                </div>
                <div className="footer mt-16">
                    <input className="sm:text-xl w-full text-lg cursor-pointer rounded-lg bg-[#eaa613] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#e48a03] hover:text-white" type="submit" value="Next" />
                </div>
            </form>
        </div>
    )
}

export default Contact