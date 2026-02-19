import React from 'react'
import './PersonalDetails.css'
import { useForm } from 'react-hook-form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const PersonalDetails = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }
    } = useForm();
    return (
        <div className='personalinfo'>

            <img src="https://www.peerlesshospital.com/images/appointment-banner.webp" alt="Error" />
            <div className="doc-appoiont-schedules">
                <div className="schedule-appointment">
                    <div className="circle-1">1</div>
                    <p>Schedule Appointment</p>
                </div>
                <div className="patient">
                    <div className="circle-2">2</div>
                    <p>Patient Details</p>
                </div>
                <div className="confirmation">
                    <div className="circle-3">3</div>
                    <p>Confirmation</p>
                </div>
            </div>
            <div className="personaldetails">
                <form>
                    <div className="personalinfo">
                        <h5>Personal Information</h5>
                        <div className="Patientname">
                            <span>
                                <label>Personal Information</label>
                                <input type="text" {...register("FirstName")} />
                            </span>
                            <span>
                                <label>Last Name</label>
                                <input type="text" {...register("LastName")} />
                            </span>
                            <span>
                                
                            </span>

                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default PersonalDetails
