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

//post one scream
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



  module.exports = screamRouter;