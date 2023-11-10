import React from 'react'
import { doctors } from './../../assets/data/doctors'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import DoctorCard from './DoctorCard'

const DoctorList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        }}
      >
        {doctors.map((doctor) => (
          <SwiperSlide>
            <DoctorCard key={doctor.id} doctor={doctor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default DoctorList