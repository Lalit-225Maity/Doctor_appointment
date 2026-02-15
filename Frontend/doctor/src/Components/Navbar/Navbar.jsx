import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Navbar = () => {
    const {
        register,
        setValue,
        reset

    } = useForm();
    const navigate = useNavigate();
    const [book, setbook] = useState(false);
    return (
        <div className='navbar'>
            <div className="nav-one">
                <img src="https://assets.lybrate.com/f_auto,c_limit,w_256,q_auto/imgs/product/logos/Lybrate-Logo.png" alt="Error" onClick={() => { navigate('/') }} />
                <div className="nav-components">
                    <NavLink ><p>Get the App</p></NavLink>
                    <NavLink > <p>For Doctors</p></NavLink>
                    <NavLink to='/free' className={(e) => { return e.isActive ? "red" : "green" }} id='free'><button>Book Free Appointment</button></NavLink>
                    <NavLink to='/login' className={(e) => { return e.isActive ? "red" : "green" }} ><p>Login/Signup</p></NavLink>
                </div>
            </div>
            <div className="nav-two">
                <div className="book" onClick={() => { setbook(true) }}>
                    <img src="/booking.png" alt="" />
                    <h4>Book Appointment</h4>
                </div>
                <div className="treat-patient">
                    <img src="/treatment-plan.png" alt="" />
                    <h4>Treatment</h4>
                </div>
                <div className="question">
                    <img src="/ask (1).png" alt="" />
                    <h4>Ask question</h4>
                </div>
                <div className="surgery">
                    <img src="/surgery-room (1).png" alt="" />
                    <h4>Plan my Surgery</h4>
                </div>
                <div className="feed">
                    <img src="/feeding-pump.png" alt="" />
                    <h4>Health Feed</h4>
                </div>
            </div>
            {book && (
                <div className='home-book-appointment'>
                    <div className="appoint-container">
                        <div className="book-appoint">
                            <h3>Book Appointment</h3>
                            <span onClick={() => { setbook(false);reset() }}>X</span>
                        </div>
                        <div className="appointment-form">

                            <form >
                                <input type="text" placeholder='Speciality/Symptom/Treatment/Doctor/Clinic' {...register("Symptom")} />
                                <input type="submit" value="search" />
                            </form>

                            <div className="select-city">
                                <input type="text" placeholder='Enter City' />
                                <input type="text" placeholder='Locality' />
                            </div>
                            <h5>Common Issues</h5>
                            <div className="appoint-disease">
                                <p onClick={() => { setValue("Symptom", "Acne/Pimples") }}>Acne/Pimples</p>
                                <p onClick={() => { setValue("Symptom", "Hair Fall") }}>Hair Fall</p>
                                <p onClick={() => { setValue("Symptom", "Premature Ejaculation") }}>Premature Ejaculation</p>
                                <p onClick={() => { setValue("Symptom", "Erection Problems") }}>Erection Problems</p>
                                <p onClick={() => { setValue("Symptom", "Weight Loss") }}>Weight Loss</p>
                                <p onClick={() => { setValue("Symptom", "Depression") }}>Depression</p>
                                <p onClick={() => { setValue("Symptom", "Irregular Periods") }}>Irregular Periods</p>
                                <p onClick={() => { setValue("Symptom", "Pregnancy") }}>Pregnancy</p>
                                <p onClick={() => { setValue("Symptom", "Knee Pain") }}>Knee Pain</p>
                                <p onClick={() => { setValue("Symptom", "Childcare") }}>Childcare</p>
                                <p onClick={() => { setValue("Symptom", "Diabetes") }}>Diabetes</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
