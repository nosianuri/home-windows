import React from 'react';
import { useForm } from 'react-hook-form';

const Address = ({ page, setPage, onSubmit, submitButton, loading }) => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    return (
        <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
        <h2 className='sm:text-[27px] text-[25px] font-bold text-center mb-8'>What is your Address?<em className='text-red-700'>*</em></h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mx-2">
                <div className="input-container">
                    <input name="address" type="text" className="input"
                        {...register("address", {
                            required: {
                                value: true,
                                message: 'Address is required'
                            },
                        })}
                        placeholder='Street Address' />
                </div>
                <p>
                    {errors.address?.type === 'required' && <span className="text-xs text-red-500">{errors.address.message}</span>}
                </p>
            </div>
                <div className="flex-1 mx-2">
                    <div className="input-container ">
                        <input name="city" type="text" className="input"
                            {...register("city", {
                                required: {
                                    value: true,
                                    message: 'City Name is required'
                                },
                            })}
                            placeholder='City' />
                    </div>
                    <p>
                        {errors.city?.type === 'required' && <span className="text-xs text-red-500">{errors.city.message}</span>}
                    </p>
                </div>
                <div className=" flex-1 mx-2">
                <div className="input-container">
                        <input name="state" type="text" className="input uppercase"
                            {...register("state", {
                                required: {
                                    value: true,
                                    message: 'state Name is required'
                                },
                            })}
                            placeholder='STATE (EX. CA)' />
                    </div>
                    <p>
                        {errors.state?.type === 'required' && <span className="text-xs text-red-500">{errors.state.message}</span>}
                    </p>
                </div>
            <div className="footer text-center mt-16 mx-auto">
                {/* <input id='submitButton' className=" sm:text-xl w-full text-lg cursor-pointer rounded-lg bg-[#eaa613] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#e48a03] hover:text-white" type="submit" value="Submit" /> */}
                {!loading && (
                    <button id='form-submit' className=" sm:text-xl w-full text-lg cursor-pointer rounded-lg bg-[#eaa613] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#e48a03] hover:text-white" ><span className='!mx-auto !text-center'>Submit</span> </button>
                  )}
                  {loading && (
                    <button id='form-submit' className="text-center sm:text-xl w-full text-lg cursor-pointer rounded-lg bg-[#eaa613] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#e48a03] hover:text-white flex" disabled> <div className='pl-5'><i className='fas fa-spinner fa-spin'></i>{" "}</div> <span className='!mx-auto !text-center'>Submit...</span> </button>
                  )}
            </div>
        </form>
    </div>
    )
}

export default Address