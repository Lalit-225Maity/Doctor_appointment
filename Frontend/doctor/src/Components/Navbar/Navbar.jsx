import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar '>
            <div className="nav-one">
                <img src="https://assets.lybrate.com/f_auto,c_limit,w_256,q_auto/imgs/product/logos/Lybrate-Logo.png" alt="Error" />
                <div className="nav-components">
                    <p>Get the App</p>
                    <p>For Doctors</p>
                    <button>Book Free Appointment</button>
                    <p>Login/Signup</p>
                </div>
            </div>
            <div className="nav-two">
                <div className="book">
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

        </div>
    )
}

export default Navbar
