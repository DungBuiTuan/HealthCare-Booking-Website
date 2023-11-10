/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';


const MyAccount = () => {

  const { user, token, role } = useContext(authContext);

  return (
    <div className='max-w-[1024px] px-1 mt-[100px] mb-[50px] mx-auto border border-solid shadow-md'>
        <div className='grid md:grid-cols-3 gap-10'>
            <div className=''>
                        {
                            <div className='flex flex-col items-center justify-center'>
                                <figure className='relative rounded-full cursor-pointer bottom-[75px]'>
                                  <img src={user?.photo} className='w-[150px] h-[150px] rounded-full object-cover' alt="UserImg" />
                                </figure>
                                  <h2 className='mt-[-50px] font-bold'>{user?.name}</h2>
                                  <h2 className='font-semibold'>{user?.email}</h2>
                                  <button type='submit' className='bg-primaryColor py-2 px-6 text-white font-[500] h-[44px] flex items-center justify-center rounded-[50px] my-[20px]'>Logout</button>

                                  <button type='submit' className='bg-primaryColor py-2 px-6 text-white font-[500] h-[44px] flex items-center justify-center rounded-[50px] mb-[20px]'>Delete Account</button>
                            </div>
                        }
            </div>
        </div>
    </div>
  )
}

export default MyAccount