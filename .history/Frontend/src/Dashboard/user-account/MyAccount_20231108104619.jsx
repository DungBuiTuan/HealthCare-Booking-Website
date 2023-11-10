/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';
import MyBookings from './MyBookings';
import MyProfile from './MyProfile';
import Loading from '../../Components/Loader/Loading';
import useGetProfile from '../../Hooks/useFetchData'
import { BASE_URL } from '../../config';


const MyAccount = () => {

  const { dispatch, user } = useContext(authContext);
  const [tab, setTab] = useState('settings')
  //get user profile from useFetchData
  const {
    data:userData,
    loading,
    error
  } = useGetProfile(`${BASE_URL}/doctors/profile/me`)
  console.log(userData)
  //choose type logout from authContext
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <section>
      <div className='max-w-[1024px] px-1 mt-[50px] mx-auto border border-solid shadow-md'>
        {loading && <Loading/>}

        {
          !loading && !error && (
            <div className='grid md:grid-cols-3 gap-10'>
          {
            <div className='flex flex-col items-center justify-center'>
              <figure className='relative rounded-full cursor-pointer bottom-[75px]'>
                <img src={user?.photo} className='w-[150px] h-[150px] rounded-full object-cover' alt="UserImg" />
              </figure>
              <h2 className='mt-[-50px] font-bold'>{user?.name}</h2>
              <h2 className='font-semibold'>{user?.email}</h2>
              <div className=' flex flex-col items-center justify-center mt-10'>
                <button type='submit' className='bg-slate-600 py-2 px-6 text-white font-[500] w-full h-[44px] rounded-md my-[20px]' onClick={handleLogout}>Logout</button>

                <button type='submit' className='bg-red-500 py-2 px-6 text-white font-[500] w-full h-[44px] rounded-md mb-[20px]'>Delete Account</button>
              </div>
            </div>
          }
          <div className='md:col-span-2 md:px-[30px]'>
            <div>
              <button type='submit' className={`${tab === 'settings' && 'bg-primaryColor text-white'} py-2 px-6 mx-1 text-headingColor font-[500] h-[44px] rounded-md my-[20px] border border-solid`} onClick={() => setTab('settings')}>Account Settings</button>
              <button type='submit' className={`${tab === 'bookings' && 'bg-primaryColor text-white'} py-2 px-6 mx-1 text-headingColor font-[500] h-[44px] rounded-md my-[20px] border border-solid`} onClick={() => setTab('bookings')}>My Bookings</button>
            </div>
            {tab === 'settings' && <MyProfile />}
            {tab === 'bookings' && <MyBookings />}
          </div>
        </div>
          )
        }
      </div>
    </section>
  )
}

export default MyAccount