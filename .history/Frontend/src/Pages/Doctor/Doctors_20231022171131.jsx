import React from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from '../../Components/Doctors/DoctorCard'

const Doctors = () => {
  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className='container text-center'>
        <h2 className='heading'>Find a doctors</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
          <input 
          type='search'
          className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' 
          placeholder='Search Doctors'/>
          <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
        </div>
      </div>
    </section>
    <section>
    <div className='container'>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
    </div>
    </section>
    <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>What our patient say </h2>
            <p className='text_para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <Testimonial/>
        </div>
      </section>
    </>
  )
}

export default Doctors