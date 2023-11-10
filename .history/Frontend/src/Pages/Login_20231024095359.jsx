/* eslint-disable no-unused-vars */
import React from 'react'
import LoginIMG from '../assets/images/LoginImg1.jpg'

const Login = () => {
  return (
    <section>
      <div className='max-w-[670px] mx-auto border border-solid p-10'>
      <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
      <div className='shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12'>
        <img src={LoginIMG} className='w-full' alt=''/>
      </div>
      <div>
      </div>
    </div>
      </div>
    </section>
  )
}

export default Login