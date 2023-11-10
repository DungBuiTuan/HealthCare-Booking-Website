/* eslint-disable no-unused-vars */
import React from 'react'
import DoctorDetailsImg from '../../assets/images/doctor-img01.jpg'

const DoctorDetails = () => {
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] max-h-[200px]'>
                <img src={DoctorDetailsImg} alt='Doctor Details Image' />
              </figure>

              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 teaxxt-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                Surgoen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails