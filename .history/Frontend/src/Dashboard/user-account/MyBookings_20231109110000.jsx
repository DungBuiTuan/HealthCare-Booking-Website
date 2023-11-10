/* eslint-disable no-unused-vars */
import React from 'react'
import useFetchData from '../../Hooks/useFetchData'
import { BASE_URL } from '../../config'
import DoctorCard from './../../Components/Doctors/DoctorCard'
import Loading from '../../Components/Loader/Loading'
import Error from '../../Components/Error/Error'

const MyBookings = () => {
  const {data:appointments, loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
    {error && !loading && <Error errMessage={error}/>}
      {loading && !error && <Loading/>}
      {!loading && !error && (
          <div className=''>
            {
              appointments.map(doctor => (
                <DoctorCard doctor={doctor} key={doctor._id}/>
              ))
            }
          </div>
      )}
      {!loading && !error && appointments.length === 0 && (
        <h2 className='mt-5 text-center text-primaryColor leading-7 text-[20px] font-semibold '></h2>
    )}
    </div>
  )
}

export default MyBookings