import React from 'react'
import { useForm } from 'react-hook-form';

const Address = ({ page, setPage, onSubmit, submitButton }) => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    return (
        <div className="flex flex-col w-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="300">
            <h2 className='sm:text-[27px] text-[25px] font-bold text-center mb-8'>What is your Address?<em className='text-red-700'>*</em></h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" mx-2">
                    {/* <div className="font-bold h-6 mt-3 text-gray-900 text-sm !leading-normal mx-auto w-64 uppercase">
                        Address<em className='text-red-700'>*</em>
                    </div> */}
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
                    {/* <div className="font-bold h-6 mt-3 text-gray-900 text-sm !leading-normal uppercase">City<em className='text-red-700'>*</em>
                        </div> */}
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
                    {/* <div className="font-bold h-6 mt-3 text-gray-900 text-sm !leading-normal uppercase">
                            State<em className='text-red-700 !leading-normal'>*</em>
                        </div> */}
                    {/* <div className="relative ">
                            <select className="text-[16px] block appearance-none w-full bg-white border border-gray-400 hover:border-yellow-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                {...register("state", {
                                    required: {
                                        value: true,
                                        message: 'State Name is required'
                                    },
                                })}
                                id='state' name="state" >
                                <option value="">Select State...</option>
                                <option value="AK">AK</option>
                                <option value="AZ">AZ</option>
                                <option value="AR">AR</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DE">DE</option>
                                <option value="DC">DC</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="IA">IA</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="ME">ME</option>
                                <option value="MD">MD</option>
                                <option value="MA">MA</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MS">MS</option>
                                <option value="MO">MO</option>
                                <option value="MT">MT</option>
                                <option value="NE">NE</option>
                                <option value="NV">NV</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NY">NY</option>
                                <option value="NC">NC</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WV">WV</option>
                                <option value="WI">WI</option>
                                <option value="WY">WY</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div> */}
                    <p>
                        {errors.state?.type === 'required' && <span className="text-xs text-red-500">{errors.state.message}</span>}
                    </p>
                </div>


                <div className="footer text-center mt-16 mx-auto">
                    <input id='submitButton' className=" sm:text-xl w-full text-lg cursor-pointer rounded-lg bg-[#eaa613] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-[#e48a03] hover:text-white" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Address