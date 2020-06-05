const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo.js')
const User = require("../models/user.js")


//get scream 
//{
//     screamId:644545,
//     body: "",
//     createAt:3/3/0200
// }
//I whant the latest one first ?????

todoRouter.get("/screams", (req, res, next) => {
    let screams =[]
    Todo.find((err, todos) => {
        Todo.find({ user: req.user._id }, (err, data) => {
            if(err){
                res.status(500)
                return next(err)
              }
              return  res.status(200).send(todos.data.forEach((doc)=>{
                  screams.push({
                      scraemId: doc.id,
                      body: doc.data().userHandle,
                      createdAt: doc.data().createdAt
                  })
              }))
        })
    })
})

//post one scream
todoRouter.post("/", (req, res, next) => {
    const newScream ={
        body:req.body.body,
        userHandle: req.body.userHandle, 
        createdAt: new Date().toISOString()
    }
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


// Get All Todos-reduce user detail
todoRouter.get("/", (req, res, next) => {
  Todo.find((err, todos) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})


// Get user todos -get own user detail
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
////////////////////////////////////////
// upload img 
todoRouter.post("/", (req, res, next) => {
    var newItem = new Item();
 newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
 newItem.img.contentType = "image/png";
 newItem.save();
})
/////////////////////////////////////////////
//upload img 2
// todoRouter.post("/", (req, res, next) => {
//     const BusBooy = require('busboy');
//     const path = require("path");
//     const os = require("os");
//     const fs = require("fs")

//     const busboy = new BusBooy({ headers : req.headers })
      
//     let imageFileName;
//     let imageToBeUploaded ={}

//     busboy.on('file',(fieldname,file,filename,encoding,mimtype)=>{
//         console.log(fieldname)
//         console.log(filename)
//         console.log(mimetype)
//         // my.image.png
//         const imageExtension = filename.split('.')[filename.split('.').length-1]
//         //476756387563445378.png
//         ImageFileName = `${Math.round(Math.random()*1000000000000)}.${imageExtension}`
//         const filepath = path.join(os.tmpdir(),imageFileName)
//         imageToBeUploaded ={ filepath,mimtype}
//         file.pipe(fs.createWriteStream())
//     })
//     busboy.on('finish',()=>{
//         admin.storage().bucket().upload(imageToBeUploaded.filepath, {
//             resumable: false,
//             metadata:{
//                 metadata:{
//                 contentType: imageToBeUploaded.mimetype
//             }
//         }
//         })
//         .then(()=> {
//             const imageUrl =`https://fi `
//         })
//     })
// })
//////////////////////////////////////////////////////////
//reduce user detail
// todoRouter.get("/", (req, res, next) => {
//     let userDetail={};

//     if(!isEmpty(data.bio.trim())) userDetail.bio = data.bio
//     if(!isEmpty(data.bio.trim())){
//         //https://website.com
//         if(data.website.trim().substring(0,4) !== 'http'){
//             userDetail.website=`http://${data.website.trim()}`
//         }else userDetail.website = data.website
//     }
//     if(!isEmpty(data.location.trim())) userDetail.location = data.location
//     return userDetail
// })

/////////////////////////////////////////
// like

todoRouter.put("/like/:todoId", async (req, res, next) =>{
   Todo.findOneAndUpdate(
      { _id: req.params.todoId },
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
todoRouter.put("/unlike/:todoId", async (req, res, next) =>{
    Todo.findOneAndUpdate(
        { _id: req.params.todoId },
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
 //comment - sort with create at

 //get notification
module.exports = todoRouter