const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  imgUrl: {
    type: String,
    required: true
  },
  comments: {
    type: [Object],
    default: []
  },
  vote: {
    type: Number,
    default: 0
  },
  usersWhoHaveVoted: {
    type: [Schema.Types.ObjectId],
    default: []
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Todo", todoSchema)