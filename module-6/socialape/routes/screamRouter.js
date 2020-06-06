const express = require("express")
const screamRouter = express.Router()
const Scream = require("../models/screams.js");


// get all screams i want desplay with time in firbase .orderby('createAt','desc')
screamRouter.get("/", (req, res, next) => {
    Scream.find((err, screams) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(screams)
      })
})

//post one scream i want-body-userhandle-imguser-createAt-likecount-commentcount
screamRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    const newScream = new Scream(req.body)
    newScream.save((err, savedTodo) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedTodo)
    })
  })


// Delete scream
screamRouter.delete("/:screamId", (req, res, next) => {
    Scream.findOneAndDelete(
      { _id: req.params.screamId, user: req.user._id },
      (err, deletedScream) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully delete scream`)
      }
    )
  })

// Get scream own user detail
screamRouter.get("/detail", (req, res, next) => {
    Scream.find({ user: req.user._id }, (err, scream) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(scream)
    })
  })

// like a scream
screamRouter.put("/:screamId/like/",(req, res, next) =>{
    Scream.findOneAndUpdate(
       { _id: req.params.screamId },
        { $inc: {like: 1}},
       {new: true},
       (err,updatelike)=>{
           if(err){
               res.status(500)
               return next(err)
           }
           return res.status(201).send(updatelike)
       }
     )
 })
 

 //unlike
 screamRouter.put("/:screamId/unlike/",(req, res, next) =>{
    Scream.findOneAndUpdate(
         { _id: req.params.screamId },
          { $inc: {like: 1}},
         {new: true},
         (err,updatelike)=>{
             if(err){
                 res.status(500)
                 return next(err)
             }
             return res.status(201).send(updatelike)
         }
       )
   })

  module.exports = screamRouter;