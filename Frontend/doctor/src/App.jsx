import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Doctors from './Pages/Doctors/Doctors';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Admin/Login/Login';
import FreeAppoint from './Pages/FreeAppointment/FreeAppoint';
import Signup from './Pages/Admin/Signup/Signup';
import { useLocation } from 'react-router-dom';
const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/login' element={<Login />} />
        <Route path='/free' element={<FreeAppoint />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
