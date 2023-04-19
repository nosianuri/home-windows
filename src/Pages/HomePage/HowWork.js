import React from 'react';
import work1 from '../../assets/ICON_Phone_RequestService_DARK.svg';
import work2 from '../../assets/ICON_Truck_RepairProfessional_DARK.svg';
import work3 from '../../assets/ICON_Tools_Repair_DARK.svg';

const HowWork = () => {
    const works = [
        {
            id: 1,
            name: '1. Request service online or by phone. Pay your Trade Service Call Fee.',
            image: work1,
        },
        {
            id: 2,
            name: '2. We assign a repair professional.',
            image: work2,
        },
        {
            id: 3,
            name: '3. We repair or replace your covered home system or appliance.',
            image: work3,
        },
    ]
  return (
    <div className='my-10 bg-slate-200 py-8'>
        <div className='text-center'>
            <h2 className='font-bold text-4xl !leading-normal'>Here's how it works.</h2>
            <p>With an American Home Shield Warranty, getting help for your covered items is easy.</p>
            <div className='grid sm:grid-cols-3 grid-cols-1 my-8 sm:w-[900px] mx-auto'>
            {works.map(work => (
                <div>
                    <img src={work.image} alt="" className='w-24 h-24 mx-auto' />
                    <h2 className='mt-1 font-medium'>{work.name}</h2>
                </div>
            ))}
            </div>
            <p className='sm:w-[800px] text-justify mx-auto text-[12px] px-2'>See the plan contract for coverage details, including service fees, limitations and exclusions. Charges for non-covered items may apply. Offer expires April 30, 2023. Pricing available to new customers only. Discount cannot be applied to previous purchases or combined with other offers. Offer not valid in Alaska, New York City or Hawaii. Not valid in conjunction with a real estate transaction. Discount only available for single-family homes under 5,000 sq. ft. (includes condos and townhomes).</p>
        </div>
    </div>
  )
}

export default HowWork