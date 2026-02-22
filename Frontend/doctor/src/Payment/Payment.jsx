import React from 'react'
import './Payment.css'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Payment = () => {
    const { state } = useLocation();
    const { PatientName, Mobile, DoctorName, Department, Price, Date } = state || {};
    const [credit, setcredit] = useState(false)
    const [debit, setdebit] = useState(false)
    const [net, setnet] = useState(false);
    const [UPI, setUPI] = useState(false);
    const [pay, setpay] = useState();

    const {
        register,
        handleSubmit

    } = useForm();
    const PaymentDetail = (data) => {
        console.log(pay);

    }
    return (
        <div className='payment'>
            <img src="https://dashboard.ccavenue.com/ImgStore/Images/214507_LookNFeel_738403d3-aef1-411a-bf14-4b71a667ba87.png" alt="Error" />
            <div className="payment-process">
                <p>additional Info </p>
                <div className="payment-types">
                    <div className="payment-methods">
                        <button onClick={() => { setcredit(true); setdebit(false); setpay("Credit Card") }}>Credit Card</button>
                        <button onClick={() => { setdebit(true); setcredit(false); setpay("Debit Card") }}>Debit Card</button>
                        <button>Net Banking</button>
                        <button>UPI</button>
                    </div>
                    {credit && (
                        <form onSubmit={handleSubmit(PaymentDetail)}>
                         <label>Card Number</label>
                         <input type="number" {...register("Card_Number")} />
                         <label>Expiry Date</label>
                         
                            <input type="submit" value="make payment" />
                        </form>
                    )}
                    {debit && (
                        <form onSubmit={handleSubmit(PaymentDetail)}>
                            <input type="submit" value="make payment" />
                        </form>
                    )}

                </div>

            </div>
        </div>
    )
}

export default Payment
