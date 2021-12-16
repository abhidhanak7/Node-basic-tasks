const mongoose = require("mongoose")
const playSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String
    })

const Playlist = mongoose.model("Playlist", playSchema)
module.exports = (Playlist)