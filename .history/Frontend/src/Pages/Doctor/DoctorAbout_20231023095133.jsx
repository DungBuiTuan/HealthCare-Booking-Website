/* eslint-disable no-unused-vars */
import React from 'react'
import { FormatDate } from './../../Utils/FormatDate';

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
                    <span className='text-[24px] font-bold text-irisBlueColor leading-9'>
                        Mikyx
                    </span>
            </h3>
            <p className='text_para'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
            </p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>
            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-[15px] leading-6 text-irisBlueColor font-semibold'>
                            {FormatDate("15-08-2020")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgoen
                        </p>
                    </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                            LifeShine Hospital, Viet Nam
                        </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-[15px] leading-6 text-irisBlueColor font-semibold'>
                            15 August, 2020
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgoen
                        </p>
                    </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                            LifeShine Hospital, Viet Nam
                        </p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout