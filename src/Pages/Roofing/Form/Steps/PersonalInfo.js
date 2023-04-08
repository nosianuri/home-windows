import React from 'react'
import { useForm } from 'react-hook-form';

const PersonalInfo = ({ page, setPage, setAllData, AllData }) => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setAllData({
            ...AllData,
            first_name: data.first_name,
            last_name: data.last_name,
            phone: data.phone,
            email: data.email,
        })
        setPage(page + 1);
        console.log(AllData, data, page)
    }
    return (
        <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
            <h2 className='sm:text-[27px] text-[25px] font-bold text-center mb-8'>What is your First & Last Name?<em className='text-red-700'>*</em></h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='space-y-4'>
                    <div className=" mx-2 ">
                        {/* <div className="font-bold h-6 mt-3 text-gray-900 text-sm !leading-normal uppercase">
                            First Name<em className='text-red-700'>*</em>
                        </div> */}
                        <div className="input-container">
                            <input name="first_name" className="input"
                                {...register("first_name", {
                                    required: {
                                        value: true,
                                        message: 'First Name is required'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Must be 3 characters longer'
                                    }
                                })}
                                placeholder='First Name' />
                        </div>
                        <p>
                            {errors.first_name?.type === 'required' && <span className="text-xs text-red-500">{errors.first_name.message}</span>}
                            {errors.first_name?.type === 'minLength' && <span className="text-xs text-red-500">{errors.first_name.message}</span>}
                        </p>
                    </div>
                    <div className=" mx-2 ">
                        {/* <div className="font-bold h-6 mt-3 text-gray-900 text-sm !leading-normal uppercase">
                            Last Name<em className='text-red-700'>*</em>
                        </div> */}
                        <div className="input-container">
                            <input name="last_name" type="text" className="input"
                                {...register("last_name", {
                                    required: {
                                        value: true,
                                        message: 'Last Name is required'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Must be 3 characters longer'
                                    }
                                })}
                                placeholder='Last Name' />
                        </div>
                        <p>
                            {errors.last_name?.type === 'required' && <span className="text-xs text-red-500">{errors.last_name.message}</span>}
                            {errors.last_name?.type === 'minLength' && <span className="text-xs text-red-500">{errors.last_name.message}</span>}
                        </p>
                    </div>
                </div>

                <div className="footer mt-16 mx-auto">
                    <input className="sm:text-xl w-full text-lg cursor-pointer rounded-lg bg-[#eaa613] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#e48a03] hover:text-white" type="submit" value="Next" />
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo