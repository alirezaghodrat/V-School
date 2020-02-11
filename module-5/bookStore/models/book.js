const mongoose = require('mongoose')
const Schema = mongoose.Schema

//book blue print 
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum:['action','fantasy','horror'],
        required: true
    },
    releaseYear: Number
})

module.exports = mongoose.model("Book", movieSchema)