const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({

    Speciality: {
        type: String,
        trim: true
    },
    Start_time: {
        type: String,
        required: true,
    },
    End_time: {
        type: String,
        required: true,
    }, 
    Average_time: {
        type: String,
        required: true,
    }, 
    Address: {
        type: String,
        required: true,
    }, 
    Fees: {
        type: String,
        required: true,
        trim: true
    },
    // Certificates: {
    //     type: String
    // }, 
    Experience: {
        type: Number
    }     
})


const Doctor = mongoose.model('Doctor',doctorSchema);

module.exports = Doctor;