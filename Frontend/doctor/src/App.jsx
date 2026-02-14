import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Doctors from './Pages/Doctors/Doctors';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Admin/Login/Login';
import FreeAppoint from './Pages/FreeAppointment/FreeAppoint';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/free' element={<FreeAppoint/>}/>
      </Routes>
    </div>
  )
}

export default App
