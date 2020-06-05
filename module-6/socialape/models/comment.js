const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  body: {
    type: String,
    required: true 
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  scream: {
    type: Schema.Types.ObjectId,
    ref: "Screams",
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  postingUser: {
    type: String,
    required: true
  },
  todo: {
    type: Schema.Types.ObjectId,
    ref: "Todo",
    required: true
  }
})

module.exports = mongoose.model("Comment", commentSchema)