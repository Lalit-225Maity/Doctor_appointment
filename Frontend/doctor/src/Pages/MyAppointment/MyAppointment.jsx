import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
const MyAppointment = () => {
    const [booking, setbooking] = useState([]);
    const { state } = useLocation();
    const { UserID } = state || {};
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`/api/appointmentdetails?UserCheck=${UserID}`);
                setbooking(response.data.Book)

            } catch (error) {

            }
        })()
    }, [])

    return (
        <div className='myappointment'>

        </div>
    )
}

export default MyAppointment
