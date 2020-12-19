const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcryptjs');
const passportLocalMongoose = require('passport-local-mongoose');

const DoctorSchema = new mongoose.Schema({

    Speciality: {
        type: String,
        trim: true
    },
    Start_time: {
        type: String,
        required: true,
        trim: true
    },
    End_time: {
        type: String,
        required: true,
        trim: true
    }, 
    Average_time: {
        type: String,
        required: true,
        trim: true
    }, 
    Address: {
        type: String,
        required: true,
        trim: true
    }, 
    Fees: {
        type: String,
        required: true,
        trim: true
    },
    Certificates: {
        type: String
    }, 
    Experience: {
        type: Number
    }     
})


const Doctor = mongoose.model('Doctor',userSchema);

module.exports = Doctor;