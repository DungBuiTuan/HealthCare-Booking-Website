/* eslint-disable no-unused-vars */
import React from 'react'
import LoginIMG from '../assets/images/LoginImg1.jpg'

const Login = () => {
  return (
    <section>
      <div className='max-w-[800px] mx-auto p-10 shadow-panelShadow'>
      <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
      <div className='shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12'>
        <img src={LoginIMG} className='w-full' alt=''/>
      </div>
      <div className='mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12'>
        <form>
          <h3 className='text-xl font-bold text-gray-700'>Sign in</h3>
          <p className='mt-4 text-sm leading-5 text-gray-600'>Welcome back! Sign in to your</p>
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='Password' />
          <button className='bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-'>Sign in</button>
        </form>
      </div>
    </div>
      </div>
    </section>
  )
}

export default Login