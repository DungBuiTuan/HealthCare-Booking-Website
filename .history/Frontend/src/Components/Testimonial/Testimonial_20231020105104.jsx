import React from 'react'
import {Pagination} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper 
        modules={{Pagination}}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
            640:{
                slidesPerView:1,
                spaceBetween:0
            },
            768:{
                slidesPerView:2,
                spaceBetween:20
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30
            },
        }}
        ></Swiper>
    </div>
  )
}

export default Testimonial