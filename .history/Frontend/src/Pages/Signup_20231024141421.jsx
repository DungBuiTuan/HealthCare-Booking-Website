/* eslint-disable no-unused-vars */
import React from 'react'
import LoginIMG from '../assets/images/icon01.png'
import {BsGoogle, BsTwitter, BsApple} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section>
      <div className='max-w-[800px] mx-auto border border-solid p-10 shadow-md'>
        <div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
          <div className='shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-5/12 md:shrink-0 lg:w-5/12 xl:w-5/12'>
            <img src={LoginIMG} className='w-full' alt='' />
          </div>
          <div className='mb-12 sm:w-full md:mb-0 md:w-7/12 lg:w-6/12 xl:w-6/12'>
              <div className='w-full p-5 m-auto bg-white rounded-md lg:max-w-xl'>
                <h1 className='text-3xl font-semibold text-center text-[#01B5C5] uppercase'>
                  Sign in
                </h1>
                <form className='mt-6'>
                <div className='mb-2'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-semibold text-gray-800'
                    >
                      Full Name
                    </label>
                    <input
                      type={'text'}
                      name='name'
                      placeholder='Type your full name...'
                      className='block w-full px-4 py-2 mt-2 text-[#01B5C5] bg-white border rounded-md focus:border-[#90eef7] focus:ring-text-[#90eef7] focus:outline-none focus:ring focus:ring-opacity-40'
                      required  
                    />
                  </div>
                  <div className='mb-2'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-semibold text-gray-800'
                    >
                      Email
                    </label>
                    <input
                      type={'email'}
                      name='email'
                      placeholder='Type your email...'
                      className='block w-full px-4 py-2 mt-2 text-[#01B5C5] bg-white border rounded-md focus:border-[#90eef7] focus:ring-text-[#90eef7] focus:outline-none focus:ring focus:ring-opacity-40'
                      required  
                    />
                  </div>
                  <div className='mb-2'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-semibold text-gray-800'
                    >
                      Password
                    </label>
                    <input
                      type={'password'}
                      name='password'
                      placeholder='Type your password...'
                      className='block w-full px-4 py-2 mt-2 text-[#01B5C5] bg-white border rounded-md focus:border-[#90eef7] focus:ring-text-[#90eef7] focus:outline-none focus:ring focus:ring-opacity-40'
                      required
                    />
                  </div>
                  <div className='mb-2'>
                    <label
                      htmlFor='repassword'
                      className='block text-sm font-semibold text-gray-800'
                    >
                     Confirm password
                    </label>
                    <input
                      type={'password'}
                      name='repassword'
                      placeholder='Confirm your password...'
                      className='block w-full px-4 py-2 mt-2 text-[#01B5C5] bg-white border rounded-md focus:border-[#90eef7] focus:ring-text-[#90eef7] focus:outline-none focus:ring focus:ring-opacity-40 text-md'
                      required
                    />
                  </div>
                  <a
                    href='#'
                    className='text-xs text-[#01B5C5]  hover:underline'
                  >
                    Forgot Password?
                  </a>
                  <div className='mt-6'>
                    <button type={'submit'} className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#01B5C5] rounded-md hover:bg-[#54c6d0] focus:outline-none focus:bg-[#54c6d0]'>
                      Login
                    </button>
                  </div>
                </form>
                <div className='relative flex items-center justify-center w-full mt-6 border border-t'>
                  <div className='absolute px-5 bg-white'>Or</div>
                </div>
                <div className='flex mt-4 gap-x-2'>
                  <button
                    type='button'
                    className='flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#90eef7]'
                  >
                  <BsGoogle />
                  </button>
                  <button
                  type='button'
                  className='flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#90eef7]'>
                    <BsTwitter/>
                  </button>
                  <button 
                  type='button'
                  className='flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[#90eef7]'>
                    <BsApple/>
                  </button>
                </div>

                <p className='mt-8 text-xs font-light text-center text-gray-700'>
                  {' '}
                  You have an account?{' '}
                  <Link
                    to='/login'
                    className='font-medium text-[#01B5C5] hover:underline'
                  >
                    Sign in
                  </Link>
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup