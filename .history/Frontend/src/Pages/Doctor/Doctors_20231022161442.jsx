import React from 'react'

const Doctors = () => {
  return (
    <section className='bg-[#fff9ea]'>
      <div className='container text-center'>
        <h2 className='heading'>Find a doctors</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
          <input 
          type='search'
          className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer' 
          placeholder='Search Doctors'/>
        </div>
      </div>
    </section>
  )
}

export default Doctors