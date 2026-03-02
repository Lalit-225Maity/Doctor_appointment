import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Myappointment.css'
const MyAppointment = () => {
    const [booking, setbooking] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const useremail = localStorage.getItem("Email_ID");
                const user = JSON.parse(useremail);
                console.log(user);
                
                if (user) {
                    const response = await axios.get(`/api/appointmentdetails?UserCheck=${user}`);
                    console.log(response.data.Book);
                    setbooking(response.data.Book)
                }
                else {

                }




            } catch (error) {

            }
        })()
    }, [])

    return (
        <div className='myappointment'>
            {booking.map((i) => (
                <span>
                    <p>{i.DoctorName}</p>
                </span>

            ))}
        </div>
    )
}

export default MyAppointment
