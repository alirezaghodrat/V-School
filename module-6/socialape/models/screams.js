const mongoose = require('mongoose')
const Schema = mongoose.Schema

const screamsSchema = new Schema({
  body: {
    type: String,
    required: true 
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  likeCount: {
    type: Number,
    default: 0
  },
  commentsCount: {
    type: Object,
    default: 0
  },
  userHandle:{
      type: String
  }
})

module.exports = mongoose.model("Screams", screamsSchema)