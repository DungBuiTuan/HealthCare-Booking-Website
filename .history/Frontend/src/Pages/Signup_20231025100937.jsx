/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import LoginIMG from '../assets/images/faq-img.png'
import UserAvatar from '../assets/images/doctor-img01.png'
import {BsGoogle, BsTwitter, BsApple} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Signup = () => {

  const [selectedFile,setSelectedFile] = useState(null)
  const [previewURL,setPreviewURL] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role:'patient'
  });

  const handleSignUpChange = e =>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleFileInputChange = async event =>{
    const file = event.target.files[0];

    console.log(file)
  }

  const handleSubmit = async event => {
    event.preventDefault();
  }

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
                  Sign Up
                </h1>
                <form className='mt-6' onSubmit={handleSubmit}>
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
                      value={formData.name}
                      onChange={handleSignUpChange}
                      placeholder='Type your full name...'
                      className='block w-full px-4 py-2 mt-2 text-[#01B5C5] bg-white border rounded-md focus:border-[#90eef7] focus:ring-text-[#90eef7] focus:outline-none focus:ring focus:ring-opacity-40 text-sm'
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
                      value={formData.email}
                      onChange={handleSignUpChange}
                      placeholder='Type your email...'
                      className='block w-full px-4 py-2 mt-2 text-[#01B5C5] bg-white border rounded-md focus:border-[#90eef7] focus:ring-text-[#90eef7] focus:outline-none focus:ring focus:ring-opacity-40 text-sm'
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
                      value={formData.password}
                      onChange={handleSignUpChange}
                      placeholder='Type your password...'
                      className='block w-full px-4 py-2 mt-2 text-[#01B5C5] bg-white border rounded-md focus:border-[#90eef7] focus:ring-text-[#90eef7] focus:outline-none focus:ring focus:ring-opacity-40 text-sm'
                      required
                    />
                  </div>
                  
                  <div className='mb-5 flex items-center justify-between'>
                    <label 
                      className='text-headingColor font-semibold text-sm leading-7'
                    >
                      Are you a:
                       <select 
                       name='role'
                       value={formData.role}
                       onChange={handleSignUpChange} 
                       className='text-textColor font-semibold text-[13px] leading-7 px-4 py-3 focus:outline-none'>
                        <option value=''>Select</option> 
                        <option value='patient'>Patient</option>
                        <option value='doctor'>Doctor</option>
                       </select>
                    </label>

                    <label 
                      className='text-headingColor font-semibold text-sm leading-7'
                    >
                      Gender:
                       <select 
                       name='gender'
                       value={formData.gender}
                       onChange={handleSignUpChange}
                       className='text-textColor font-semibold text-[13px] leading-7 px-4 py-3 focus:outline-none'>
                        <option value=''>Select</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                       </select>
                    </label>
                  </div>

                  <div className='mb-5 flex items-center gap-3'>
                    <figure className='w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                        <img src={UserAvatar} className='w-full rounded-full' alt=''/>
                    </figure>

                    <div className='relative w-[130px] h-[50px]'>
                        <input
                          type={'file'}
                          name='photo' 
                          id='customFile' 
                          accept='.jpg, .png' 
                          onChange={handleFileInputChange}
                          className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
                        <label 
                        htmlFor='customFile' 
                        className='absolute top-0 left-0 w-full h-full flex items-center px-[1.4rem] py-[0.375rem] text-[13px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'
                        >
                          Upload photo
                        </label>
                    </div>
                  </div>

                  <div className='mt-6'>
                    <button type={'submit'} className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#01B5C5] rounded-md hover:bg-[#54c6d0] focus:outline-none focus:bg-[#54c6d0]'>
                      Sign Up
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
                  Already have an account?{' '}
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