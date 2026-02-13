import React from 'react'
import { useLocation } from 'react-router-dom'
import './Doctors.css'
import { useNavigate } from 'react-router-dom'
const Doctors = () => {
    const navigate=useNavigate();
    const { state } = useLocation();
    const { doc } = state || {};

    return (
        <div className='doctors'>
            {doc.map((i) => (
                <div className='doc-details'>
                    <div className="doc-img"> <img src={i.photo} alt="" /></div>
                    <div className="doc-info"> <p>{i.name}</p>
                    <h5>{i.specialty}</h5>
                    <h5>{i.experience} Experience</h5>
                    <h5>Clinic in {i.city}</h5></div>
                    <div className="contact-info">  <h5>Contact Info : {i.phone}</h5><button className='call'>call</button></div>
                    <div className="appoint-doc">
                        <button onClick={()=>{navigate('/appointment')}}>Book Appointment</button>
                        <button>Review</button>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Doctors
