import React from 'react'
import './Payment.css'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

const Payment = () => {
    const { state } = useLocation();
    const { PatientName, Mobile, DoctorName, Department, Price } = state || {};
    const [credit, setcredit] = useState(false)
    const [debit, setdebit] = useState(false)
    const [net, setnet] = useState(false);
    const [UPI, setUPI] = useState(false);
    const [exp, setexp] = useState();
    const [year, setyear] = useState();
    const [payerror, setpayerror] = useState();
    const [pay, setpay] = useState();


    const {
        register,
        handleSubmit, setValue,
        formState:{isSubmitting}

    } = useForm();
    const PaymentDetail = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    if (pay === "Credit Card") {
                        const check = {
                            ...data, Expairy_Month: data.Expairy_Month.toLocaleString("en-IN", {
                                month: "long",
                            }),
                            Expairy_Year: data.Expairy_Year.toLocaleString("en-IN", {

                                year: "numeric",
                            }),
                            pay: pay
                        }
                        console.log(check);

                        const response = await axios.post('/api/pay', check);
                        console.log(response.data);


                        resolve("sucess");
                    }
                    if (pay === 'Debit Card') {


                    }
                } catch (error) {
                    setpayerror(error.response.data.message);

                }
            }, 3000);
        })


    }
    return (
        <div className='payment'>

            <div className="payment-process">
                <img src="https://dashboard.ccavenue.com/ImgStore/Images/214507_LookNFeel_738403d3-aef1-411a-bf14-4b71a667ba87.png" alt="Error" />
                <div className="payment-wrapper">
                    <p>additional Info </p>
                    <div className="payment-types">
                        <div className="payment-methods">
                            <button className={credit ? "pink" : "orange"} onClick={() => { setcredit(true); setdebit(false); setUPI(false); setpay("Credit Card") }}>Credit Card</button>
                            <button className={debit ? "pink" : "orange"} onClick={() => { setdebit(true); setcredit(false); setUPI(false); setpay("Debit Card") }}>Debit Card</button>
                            <button className={UPI ? "pink" : "orange"} onClick={() => { setUPI(true); setdebit(false); setcredit(false); }}>UPI</button>
                        </div>
                        {credit && (
                            <form onSubmit={handleSubmit(PaymentDetail)}>
                                <label>Card Number</label>
                                <input type="number" {...register("Card_Number")} />
                                <label>Expiry Date</label>
                                <div className="card-wrapper">
                                    <span className="expiry-field">
                                        <DatePicker
                                            selected={exp}
                                            onChange={(e) => { setexp(e); setValue("Expairy_Month", e) }}
                                            showMonthYearPicker
                                            dateFormat="MM"
                                            placeholderText='Month'
                                        />
                                        <input type="hidden" {...register("Expairy_Month")} />
                                        <img src="/arrow-down-sign-to-navigate.png" alt="" width={30} />
                                    </span>

                                    <span className='expiry-field'>
                                        <DatePicker
                                            selected={year}
                                            onChange={(e) => { setyear(e); setValue("Expairy_Year", e) }}
                                            showYearPicker
                                            dateFormat="yyyy"
                                            placeholderText='Year'
                                            yearItemNumber={10}
                                            minDate={new Date(2026, 0)}
                                            maxDate={new Date(2040, 0)}
                                        />
                                        <input type="hidden" {...register("Expairy_Year")} />
                                        <img src="/arrow-down-sign-to-navigate.png" alt="" width={30} />
                                    </span>
                                    <div className="cvv">
                                        <label>CVV</label>
                                        <input type="text" {...register("CVV")} />
                                    </div>
                                </div>
                                <input type="submit" value={isSubmitting?"Making Payment":"make payment"} />
                                {payerror && <p style={{ color: "red" }}>{payerror}</p>}
                            </form>
                        )}
                        {debit && (
                            <form onSubmit={handleSubmit(PaymentDetail)}>
                                <input type="submit" value={isSubmitting?"Making Payment":"make payment"} />
                            </form>
                        )}
                        {UPI && (
                            <form>

                            </form>
                        )}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
