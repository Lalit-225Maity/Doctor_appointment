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
import ForDoctor from './Pages/ForDoctor/ForDoctor';
import GetApp from './Pages/GetApp/GetApp';
import Confirmation from './Pages/Appointment/Confirmation/Confirmation';
import PersonalDetails from './Pages/Appointment/PersonalDetails';
import MyAppointment from './Pages/MyAppointment/MyAppointment';
import Payment from './Payment/Payment';
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
        <Route path='/fordoctor' element={<ForDoctor />} />
        <Route path='/getapp' element={<GetApp />} />
        <Route path='/personalinfo' element={<PersonalDetails />} />
        <Route path='/confirm' element={<Confirmation />} />
        <Route path='/myappointment' element={<MyAppointment />} />
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </div>
  )
}

export default App
