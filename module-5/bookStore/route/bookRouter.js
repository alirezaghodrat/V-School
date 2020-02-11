const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/book')


//get all//
bookRouter.get("/",(req,res,next)=>{
    Book.find((err,books) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})  

//get one//
bookRouter.get("/:bookId",(req,res,next)=>{
   Book.findOne({_id:req.params.bookId},(err,findItem)=>{
   if(err){
       res.status(500)
      return next(err)
   }
   res.status(200).send(findItem)
})
})
//get by genre//
bookRouter.get("/search/genre",(req,res,next) =>{
    Book.find({ genre: req.query.genre }, (err,book) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(book)
    })
})

//post one//
bookRouter.post("/",(req,res,next)=>{ 
   const newBook = new Book(req.body) 
   newBook.save((err, savedMovie) =>{
     if(err){
         res.status(500)
         return next(err)
     }
     return res.status(201).send(savedMovie)
   })
})
//
//delet one//
bookRouter.delete("/:bookId",(req,res,next) =>{
  Book.findByIdAndDelete({_id:req.params.bookId},(err,deleteItem)=>{
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(200).send(`successfully deleted item ${deleteItem.title} from the database`)
  })
})

//update one //
bookRouter.put("/:bookId",(req,res)=>{
    Book.findByIdAndUpdate(
        {_id:req.params.bookId}, //find this one to update
        req.body,//update the object with this data
        { new: true },
        (err,updateNovie)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updateNovie.title)
    })
})
 
module.exports=bookRouter  