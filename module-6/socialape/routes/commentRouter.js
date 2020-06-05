const express = require("express");
const commentRouter = express.Router();
const Screams = require('../models/screams.js')
const Comment = require("../models/comment.js");

//get comment
commentRouter.get("/:_id", (req, res, next) => {
  Comment.find({issue: req.params._id}, (err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})
 
//post the comment on the scream as an aray ? order by the lastest ?????????
// /scream/:screamId/comment
commentRouter.post("/:_id", (req, res, next) => {
  req.body.user = req.user._id;
  req.body.scream = req.params._id;
  req.body.postingUser = req.user.username;
  const newComment = new Comment(req.body);
  newComment.save((err, comment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(comment);
  });
});

module.exports = commentRouter;