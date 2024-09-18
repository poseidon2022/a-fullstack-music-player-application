const mongoose = require("mongoose")
const pendingSchema = new mongoose.Schema({
    first_name : {
        type : String,
        required: true
    },

    last_name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    created_at : {
        type : Date,
        expires: '5m',
        default: Date.now
    }
})

const Pending = mongoose.model('pendings', pendingSchema)
module.exports = Pending