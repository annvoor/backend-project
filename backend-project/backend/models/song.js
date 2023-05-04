const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const songSchema = new Schema({
    // Simple declaration of datatype that will be used:
    name: {
        type: String,
        // required: true,
        unique: true
    },
    artist: String,

    album: String, 

    albumCover: {

    },
    genre: {
        type: String,
        enum: ["K-Pop", "Classical", "Theater", "Pop"]
    },
    mood: {
        type: String,
        enum: ["Happy", "Sad", "Angry", "Chill"]
    },
    audio: {

    }
});


module.exports = mongoose.model("Song", songSchema);