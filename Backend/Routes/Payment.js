const express = require('express');
const router = express.Router();
router.post('/pay', (req, res) => {
    try {
        const { Card_Number, Expairy_Month, Expairy_Year, pay, CVV } = req.body;
        if (pay === 'Credit Card') {
            if (!Card_Number || !Expairy_Month || !Expairy_Year) {
                return res.status(500).json({
                    message: "All  fields are required"
                })
            }
            if (!/^\d{16}$/.test(Card_Number)) {
                return res.status(401).json({
                    message: "Card must be 16 digits"
                })
            }
            if (CVV.length !== 3) {
                return res.status(401).json({
                    message: "CVV must be 3 digit"
                })
            }

        }
        res.status(200).json({
            success: true,
            message: "card is valid"
        })

    } catch (error) {

    }
})
module.exports = router