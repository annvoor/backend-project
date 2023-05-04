const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    // Simple declaration of datatype that will be used:
    name: {
        type: String,
        // required: true,
        unique: true
    },
    artist: String,

    album: String, 

    // albumCover: {

    // },
    genre: {
        type: String,
        enum: ["K-Pop", "Classical", "Theater", "Pop"]
    },
    mood: {
        type: String,
        enum: ["Happy", "Sad", "Angry", "Chill"]
    },
    // audio: {

    // }
});

// create a schema
const playlistSchema = new Schema({
    // Simple declaration of datatype that will be used:
    playlistname: {
        type: String,
        // required: true,
        unique: true
    },
    songs: [songSchema]
});

module.exports = mongoose.model("Playlist", playlistSchema);