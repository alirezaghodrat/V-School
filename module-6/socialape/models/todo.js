const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
  },
  createAt:{
      type:Date,
      default:Date.now
  },
   bio:{
       type:String
   },
   website:{
       type:String
   },
   location:{
       type:String
   },   
  like: {
    type: [Number],
    default: []
  },
  unlike: {
    type: [Number],
    default: []
  },
  comments: {
    type: [Object],
    default: []
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Todo", todoSchema)