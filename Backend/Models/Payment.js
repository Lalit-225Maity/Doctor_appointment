const { Schema, model } = require('mongoose');
const Pay = new Schema({
    UserID: {
        type: String,

    },
    PaymentMethod: {
        type: String,
    },
    UPI_ID: {
        type: String,
        required: function () {
            return this.PaymentMethod === 'UPI'
        },
        validate: {
            validator: function (value) {

                return /^[a-zA-Z0-9._-]{2,}@[a-zA-Z]{2,}$/.test(value)

            },
            message: "Invalid UPI ID"
        }
         

    },
    Debit_Card: {
        type: String,
        required: function () {
            return this.PaymentMethod === 'Debit Card'
        },
        validate: {
            validator: function (value) {
                return /^[0-9]{16}$/.test(value)

            },
            message:"Invalid Card Number"
        }

    },
    DebitCard_Password:{
        type:String,
        required:function(){
            return this.PaymentMethod==='Debit Card'
        },
        
    }
})
const Payment = model("Payment", Pay);
module.exports = Payment