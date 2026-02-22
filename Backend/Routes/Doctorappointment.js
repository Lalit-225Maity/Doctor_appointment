const express = require('express');
const router = express.Router();
const Appointmentmodel = require('../Models/Appointment');
router.post('/appointment', async (req, res) => {
    try {
        const { Patient_Name, Phone_no, Appointment_Date, Doctor_name, Department, Paid } = req.body;
        const Doctor_Appointment = new Appointmentmodel({ Patient_Name, Phone_no, Appointment_Date, Doctor_name, Department, Paid });
        await Doctor_Appointment.save();
        res.status(200).json({
            success: true,
            message: "Appointment is Confirmed",
            Doctor_Appointment: Doctor_Appointment
        })

    } catch (error) {

    }
})
module.exports=router