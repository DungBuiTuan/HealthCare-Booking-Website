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
    <div>MyBookings</div>
  )
}

export default MyBookings