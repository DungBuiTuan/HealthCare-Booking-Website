/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BASE_URL } from '../../config'
import uploadImageToCloudynary from '../../Utils/uploadCloudynary'
import { HashLoader } from 'react-spinners/HashLoader';

const MyProfile = () => {
  const [selectedFile,setSelectedFile] = useState(null)
  const [previewURL,setPreviewURL] = useState('')
  const [loading,setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: null,
    gender: '',
    bloodType:''
  });

  const navigate = useNavigate()

  const handleSignUpChange = e =>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleFileInputChange = async event =>{
    const file = event.target.files[0];
    const data = await uploadImageToCloudynary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo : data.url});
    console.log(data)
  }

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true)
    try {
        const res = await fetch(
          `${BASE_URL}/auth/signup`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
          }
        )
        const {message} = await res.json()
        if (!res.ok){
          throw new Error(message)
        }
        setLoading(false)
        toast.success(message)
        navigate('/login', { replace: true })
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }
  return (
    <div className=''>
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
      <div className='mb-2'>
        <label
          htmlFor='blood'
          className='block text-sm font-semibold text-gray-800'
        >
          Blood Type
        </label>
        <input
          type={'text'}
          name='blood'
          value={formData.name}
          onChange={handleSignUpChange}
          placeholder='Type your blood...'
          className='block w-full px-4 py-2 mt-2 text-[#01B5C5] bg-white border rounded-md focus:border-[#90eef7] focus:ring-text-[#90eef7] focus:outline-none focus:ring focus:ring-opacity-40 text-sm'
          required  
        />
      </div>
      <div className='mb-5 flex items-center justify-between'>

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
        {selectedFile && <figure className='w-[50px] h-[50px] rounded-full flex items-center justify-center'>
            <img src={previewURL} className='w-[50px] h-[50px] rounded-full object-cover' alt=''/>
        </figure>
        }

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
        <button disabled={loading && true} type={'submit'} className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#01B5C5] rounded-md hover:bg-[#54c6d0] focus:outline-none focus:bg-[#54c6d0]'>
          {loading ? <HashLoader size={35} color='#fff' /> : 'Sign Up'}
        </button>
      </div>
    </form>
    </div>
  )
}

export default MyProfile