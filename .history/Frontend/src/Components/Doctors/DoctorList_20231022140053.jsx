import React from 'react'
import {Pagination } from 'swiper/modules'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import {doctors} from './../../assets/data/doctors'
import DoctorCard from './DoctorCard'

const DoctorList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
      <Swiper 
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
            640: {
                slidesPerView:1,
                spaceBetween:0
            },
            768: {
                slidesPerView:2,
                spaceBetween:20
            },
            1024: {
                slidesPerView:3,
                spaceBetween:30
            },
        }}
        >
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src={patientAvatar} alt=''/>
                    <div>
                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Bui Tuan Dung</h4>
                        <div className='flex items-center gap-[2px]'>
                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                        <HiStar className='text-yellowColor w-[18px] h-5'/>
                    </div>
                    </div>
                </div>
                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                &quot;Just a short letter to say I can&apos;t thank you enough for the results of my surgery.
                     I am absolutely amazed with what you have been able to do.&quot;
                </p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default DoctorList