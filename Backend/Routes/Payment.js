const express = require('express');
const router = express.Router();
const Payment = require('../Models/Payment')
const bcrypt = require('bcrypt')
router.post('/pay', async (req, res) => {
    try {
        const { UserID, PaymentMethod, Debit_Card, UPI_ID, DebitCard_Password, Username, Paid, Appoint_Date,
            Mobile,
            DoctorName,
            Department } = req.body;
        let Payment_Process;
        if (PaymentMethod === 'UPI') {
            Payment_Process = new Payment({
                PaymentMethod, UPI_ID, UserID, Username, Paid, Appoint_Date,
                Mobile,
                DoctorName,
                Department
            })

        }
        if (PaymentMethod === 'Debit Card') {
            if (DebitCard_Password.length !== 4) {
                return res.status(500).json({
                    message: "Password must be exactly 4 digits"
                })
            }
            const salt = await bcrypt.genSalt(10);
            const Hash = await bcrypt.hash(DebitCard_Password, salt);
            Payment_Process = new Payment({
                PaymentMethod, Debit_Card, UserID, DebitCard_Password: Hash, Username, Paid, Appoint_Date,
                Mobile,
                DoctorName,
                Department
            });


        }
        await Payment_Process.save();
        res.status(200).json({
            success: true,
            message: "Payment is complete",
            Payment_Process: Payment_Process
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})
router.get('/appointmentdetails', async (req, res) => {
    try {
        const { UserCheck } = req.query;
        const Fetch = await Payment.find({
            UserID: { $in: UserCheck }
        });
        res.status(200).json({
            Book: Fetch
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
})
router.delete('/cancelappointment', async (req, res) => {
    try {
        const { Userid } = req.query;
        const Cancel = await Payment.findOneAndDelete({
            UserID: { $in: Userid }
        })
        res.status(200).json({
            success: true,
            message: "Appointment is Cancel",
            Cancel: Cancel
        })
    } catch (error) {

    }
})
module.exports = router