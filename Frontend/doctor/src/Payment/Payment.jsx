import React from 'react'
import './Payment.css'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

const Payment = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { isSubmitting }
    } = useForm();
    const { state } = useLocation();
    const { PatientName, Mobile, DoctorName, Department, Price } = state || {};
    const [UPI, setUPI] = useState(false);
    const [card, setcard] = useState(false);
    const [open, setopen] = useState(true);
    const OpenPayment=()=>{
        
    }
    return (
        <div className="payment">
            <div className="payment-sidebar">
            <button  onClick={()=>{OpenPayment()}}><img src="/back.png" alt="Error" /></button>
                <div className="hospital-payment">
                     <img src="https://cashfree-checkoutcartimages-prod.cashfree.com/1203420_logo_zcstlr" alt="Error" />
                     <h4>PEERLESS HOSPITEX HOSPITAL AND RESEARCH CENTER LIM...</h4>
                     <span>₹{Price}</span>
                </div>
            </div>
            <div className="select-payment">
                {open && (
                    <div className="pament-methods">
                        <p>Payment Options for +91 8436789520</p>
                        <button className={UPI ? "green" : "pink"} onClick={() => { setUPI(true); setcard(false) }}><img src="/upi.svg" alt="" />Pay by UPI ID</button>
                        <button className={card ? "green" : "pink"} onClick={() => { setUPI(false); setcard(true) }}><img src="/credit-card.png" alt="Error" /> Card</button>
                    </div>
                )}
                {UPI && (
                    <div className="upi-payment">

                    </div>
                )}
            </div>
        </div>
    )
}
export default Payment;