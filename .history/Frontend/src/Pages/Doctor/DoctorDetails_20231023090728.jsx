/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import DoctorDetailsImg from '../../assets/images/doctor-img01.jpg'
import StarIcon from '../../assets/images/Star.png'

const DoctorDetails = () => {
  const [tab,setTab] = useState('about')

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-xs max-h-[200px]'>
                <img src={DoctorDetailsImg} className='rounded-md' alt='Doctor Details Image' />
              </figure>

              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                Surgoen</span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                Mikyx
                </h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={StarIcon} alt=""/>4.8
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                    (272)
                  </span>
                </div>
                  <div className='text_para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff2c]'>
              <button
                onClick={() => setTab('about')}
                className={` ${tab === 'about' && 'border-b border-solid border-[#508aef2c]'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
               >
                About
              </button>
              <button
                onClick={() => setTab('feedback')}
                className={` ${tab === 'feedback' && 'border-b border-solid border-[#508aef2c]'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
               >
                Feedback
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails