const { Schema, model } = require('mongoose');
const Doctors = new Schema({
    id: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
    specialty: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    photo: {
        required: true,
        type: String
    }

})
const Doctor=model("Doctor",Doctors);
module.exports=Doctor;