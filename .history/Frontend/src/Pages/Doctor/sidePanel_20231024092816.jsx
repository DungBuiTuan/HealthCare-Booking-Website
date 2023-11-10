/* eslint-disable no-unused-vars */
import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between'>
            <p className='text_para mt-0 font-semibold'>Ticket Price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                500 BDT
            </span>
        </div>

        < className='mt-[30px]'>
            <p className='text_para mt-0 font-semibold text-headingColor'>
                Available time slot
            </p>
            <ul className='mt-3'>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Monday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        03:00 PM - 10:00 PM
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Tuesday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        03:00 PM - 10:00 PM
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Wednesday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        03:00 PM - 10:00 PM
                    </p>
                </li>
            </ul>   
            <button className='btn '>Book an appointment</button>
        </div>
    </div>
  )
}

export default SidePanel