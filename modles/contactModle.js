const { Timestamp } = require('mongodb');
const mongoose= require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required:[
            true,
            "Please type the name"
        ]
        
    },
    designation: {
        type: String,
        required:[
            true,
            "Please type the designation"
        ]
        
    },
    phonenumber: {
        type: Number,
        required:[
            true,
            "Please type the Phone Number"
        ]
        
    }

},{Timestamps:true});
module.exports=mongoose.model("contact",contactSchema);