/* eslint-disable no-unused-vars */
import React from 'react'

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
        </div>
    </div>
  )
}

export default DoctorAbout