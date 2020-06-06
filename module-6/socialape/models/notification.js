const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notificationSchema = new Schema({
  title: {
    type: String,
    required: true 
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  read: {
    type: Boolean,
  },
  recepient: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  sender:{
      type:String,
      required:true
  }



})

module.exports = mongoose.model("Comment", notificationSchema)