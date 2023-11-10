// import React from 'react';
import Home from "../Pages/Home"
import Service from "../Pages/Services"
import Contact from "../Pages/Contact"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import Doctors from "../Pages/Doctor/Doctors"
import DoctorDetails from "../Pages/Doctor/DoctorDetails"
import MyAccount from "../Dashboard/user-account/MyAccount"
import Dashboard from "../Dashboard/doctor-account/Dashboard"

import {Routes,Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/doctors" element={<Doctors/>} />
      <Route path="/doctors/:id" element={<DoctorDetails/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Service/>} />
      <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount/></ProtectedRoute>} />
      <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard/></ProtectedRoute>} />
    </Routes>
  )
}

export default Routers