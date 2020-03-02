const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    name:{
      type:String,
      required:true
    },  
    age:{
        type:Number,
        require:true
    }

})

module.exports = mongoose.model( "person", personSchema )