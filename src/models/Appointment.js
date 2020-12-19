var mongoose = require("mongoose");

var AppointSchema = new mongoose.Schema({
    AppointOf: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        }
    },
    AppointBy: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    }
},
 { timestamps: true }
);
module.exports = mongoose.model("Appointment",AppointSchema);