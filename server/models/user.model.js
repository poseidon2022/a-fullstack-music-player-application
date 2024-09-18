const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    first_name : {
        type : String,
        required : false
    },
    last_name : {
        type : String,
        required : false
    }, 
    email : {
        type : String,
        required : false
    },
    password : {
        type : String,
        required : true
    }, 
}, {timestamp:true})

const User = mongoose.model("users", userSchema)
module.exports = User