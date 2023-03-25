import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ZipCode = ({ page, setPage, setAllData, AllData }) => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setAllData({
            ...AllData,
            zip_code: data.zip_code,
        })
        setPage(page + 1);
        console.log(AllData, data, page)
    }

    return (
        <div className="flex flex-col " >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mx-2 flex-1">

                    <div className='text-center'>
                        <h2 className='text-xl font-semibold'>What is your Zip Code?<em className='text-red-700'>*</em></h2>
                        <div className=" my-10">

                            <div className="bg-white mb-2 p-1 flex border border-gray-400 hover:border-yellow-400 rounded mx-auto !w-64">
                                <input name="zip_code" type="text" className="text-[16px] p-1 px-2 appearance-none outline-none  text-gray-800"
                                    {...register("zip_code", {
                                        required: {
                                            value: true,
                                            message: 'zip code is required'
                                        },
                                        maxLength: {
                                            value: 5,
                                            message: 'Must be 5 characters longer'
                                        },
                                        minLength: {
                                            value: 5,
                                            message: 'Must be 5 characters longer'
                                        }
                                    })}
                                    placeholder='ZIP Code' />
                            </div>
                            <p>
                                {errors.zip_code?.type === 'required' && <span className="text-xs text-red-500">{errors.address.message}</span>}
                                {errors.zip_code?.type === 'maxLength' && <span className="text-xs text-red-500">{errors.address.message}</span>}
                                {errors.zip_code?.type === 'minLength' && <span className="text-xs text-red-500">{errors.address.message}</span>}
                            </p>

                        </div>
                    </div>
                </div>
                <div className="footer mt-5">
                    <input className="sm:text-xl w-full text-lg cursor-pointer rounded-lg bg-[#eaa613] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#e48a03] hover:text-white" type="submit" value="Next" />
                </div>
            </form>
        </div>
    )
}

export default ZipCode