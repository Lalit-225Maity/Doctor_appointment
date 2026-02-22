const {Schema,model}=require('mongoose');
const Appointment=new Schema({
    Patient_Name:{
        type:String
    },
    Phone_no:{
        type:String
    },
    Appointment_Date:{
        type:String
    },
    Doctor_name:{
        type:String
    },
    Department:{
        type:String
    },
    Paid:{
        type:String
    }

})
const Appointments=model("Appointment",Appointment);
module.exports=Appointments