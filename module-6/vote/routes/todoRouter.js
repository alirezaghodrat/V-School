const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo.js')
const User = require("../models/user.js")

// Get All Todos
todoRouter.get("/", (req, res, next) => {
  Todo.find((err, todos) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})

// Get todos by user id
todoRouter.get("/user", (req, res, next) => {
  Todo.find({ user: req.user._id }, (err, todos) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})

// Add new Todo
todoRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id
  const newTodo = new Todo(req.body)
  newTodo.save((err, savedTodo) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedTodo)
  })
})

// Delete Todo
todoRouter.delete("/:todoId", (req, res, next) => {
  Todo.findOneAndDelete(
    { _id: req.params.todoId, user: req.user._id },
    (err, deletedTodo) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete todo: ${deletedTodo.title}`)
    }
  )
})

// Update Todo
todoRouter.put("/:todoId",  (req, res, next) => {

 
  Todo.findOneAndUpdate(
    { _id: req.params.todoId, user: req.user._id },
    req.body,
    { new: true },
    (err, updatedTodo) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedTodo)
    }
  )
})

// vote the president

  // check whether the person voting has already voted on this issue, and deny them
  // Either upvote/downvote issue.
todoRouter.put("/upvote/:todoId", async (req, res, next) =>{
  try {
    // Has this user already voted
    const todoToUpdate = await Todo.findOne({_id: req.params.todoId})
   
    if(todoToUpdate.usersWhoHaveVoted.includes(req.user._id)){
      res.status(401)
      return next(new Error("You can only vote once per issue."))
    }

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: req.params.todoId },
      { 
        $inc: {vote: 1},
        $push: { usersWhoHaveVoted: req.user._id}
      },
      {new: true}
    )
    
    return res.status(201).send(updatedTodo)
  }
  catch(err){
    res.status(500)
    return next(err)
  }
})

todoRouter.put("/downvote/:todoId", async (req, res, next) =>{
 
  try {
    // Has this user already voted
    const todoToUpdate = await Todo.findOne({_id: req.params.todoId})
   
    if(todoToUpdate.usersWhoHaveVoted.includes(req.user._id)){
      res.status(401)
      return next(new Error("You can only vote once per issue."))
    }

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: req.params.todoId },
      { 
        $inc: {vote: -1},
        $push: { usersWhoHaveVoted: req.user._id}
      },
      {new: true}
    )
    
    return res.status(201).send(updatedTodo)
  }
  catch(err){
    res.status(500)
    return next(err)
  }

})

module.exports = todoRouter