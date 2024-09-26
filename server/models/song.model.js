const mongoose = require("mongoose")
const songSchema = new mongoose.Schema({
    song_name : {
        type : String,
        required: true
    }, 
    artist_name : {
        type : String,
        required: true
    }, 
    audio_url : {
        type : String,
        required : true
    },
    image_url : {
        type : String,
        required: true
    },
    user_id : {
        type : String,
        required: true
    }, 
    date : {
        type : String,
        required : true
    }
})

const Song = mongoose.model("songs", songSchema)
module.exports = Song