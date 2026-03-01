import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const MyAppointment = () => {
    const{state}=useLocation();
    const{ Mobile, DoctorName, Department, newData, Date}=state||{};
    useEffect(() => {
      console.log(Mobile);
      console.log(Department);
      console.log(newData);
      console.log(Date);
      
      
      
      
    }, [])
    
    return (
        <div className='myappointment'>

        </div>
    )
}

export default MyAppointment
