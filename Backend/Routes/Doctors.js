const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const API = require('../API/Api');
const Doctormodel = require('../Models/DoctorModel');
router.post('/createdoctor', async (req, res) => {
    try {
        const DATA = [];
        for (i of API) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(i.specialty, salt);
            const doctor = new Doctormodel({
                id: i.id,
                name: i.name,
                specialty: hash,
                city: i.city,
                phone: i.phone,
                email: i.email,
                photo: i.photo,
            });
            DATA.push(doctor);
        }
        const INSERT = await Doctormodel.insertMany(DATA);
        res.status(200).json({
            success:true,
            message:"Data is Inserted",
            doctors: INSERT
        })


    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })

    }
})
router.get('/fethdoctor',async(req,res)=>{
    try {
        const Fetch=[];
        const{keyword}=req.query;
        
        if (!keyword) {
            return res.status(400).json({
                message: "Keyword is required"
            });
        }
        const DOCTOR=await Doctormodel.find();
        for(j of DOCTOR){
            
            const result= await bcrypt.compare(keyword,j.specialty);
            if(result){
                Fetch.push(j);
            }
        }
        res.status(200).json({
            docDetail:Fetch
        })
        
    } catch (error) {
        console.log(error.message);
        
    }
})
module.exports = router