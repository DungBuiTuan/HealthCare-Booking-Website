/* eslint-disable no-unused-vars */
import React from 'react'
import DoctorDetailsImg from '../../assets/images/doctor-img03.jpg'
import StarIcon from '../../assets/images/Star.png'

const DoctorDetails = () => {
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-xs max-h-[200px]'>
                <img src={DoctorDetailsImg} alt='Doctor Details Image' />
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails