const express = require('express');
const router = express.Router();
const Payment = require('../Models/Payment')
const bcrypt=require('bcrypt')
router.post('/pay', async (req, res) => {
    try {
        const { UserID, PaymentMethod, Debit_Card, UPI_ID,DebitCard_Password } = req.body;
        let Payment_Process;
        if (PaymentMethod === 'UPI') {
            Payment_Process = new Payment({ PaymentMethod, UPI_ID, UserID })

        }
        if(PaymentMethod==='Debit Card'){
            const salt=await bcrypt.genSalt(10);
            const Hash=await bcrypt.hash(DebitCard_Password,salt);
            Payment_Process = new Payment({ PaymentMethod,Debit_Card, UserID,DebitCard_Password:Hash  });
           

        }
        await Payment_Process.save();
        res.status(200).json({
            success: true,
            message: "Payment is complete",
            Payment_Process: Payment_Process
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})
module.exports = router