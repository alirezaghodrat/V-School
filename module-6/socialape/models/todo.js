const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  userHandle: {
    type: String,
    required: true
  },
  createAt:{
      type:Date,
      default:Date.now
  },
  commentCount: {
    type: Number
  },
  likeCount: {
    type: Number,
    default: 0
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
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Todo", todoSchema)