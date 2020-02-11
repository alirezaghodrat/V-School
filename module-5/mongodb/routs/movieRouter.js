const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie.js')

//get all//
movieRouter.get("/",(req,res ,next)=>{
    Movie.find( (err, movies ) => {
         if(err){
             res.status(500)
             return next(err)
         }
         return res.status(200).send(movies)
    })
})  

//get one//
movieRouter.get("/:movieId",(req,res)=>{
    Movie.findOne({_id:req.params.movieId},(err,findedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(findedItem)
    })
})

//get by genre//
movieRouter.get("/search/genre",(req,res,next) => {
    Movie.find({ genre: req.query.genre },(err,movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

//post one//
movieRouter.post("/",(req,res , next)=>{ 
    const newMovie = new Movie(req.body)
    newMovie.save((err , savedMovie) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

//delet one//
movieRouter.delete("/:movieId",(req,res ,next) =>{
 Movie.findByIdAndDelete({_id:req.params.movieId},(err,deletedItem) =>{
     if(err){
         res.status(500)
         return next(err)
     }
     return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
 })
})

//update one //
movieRouter.put("/:movieId",(req,res,next)=>{
   Movie.findOneAndUpdate(
       {_id: req.params.movieId } ,//find this one to update
       req.body ,//update the object with this data
       { new: true } ,//send back the updated version please
       (err , updatedMovie) => {
           if(err){
               res.status (500)
               return next (err)
           }
           return res.status(201).send(updatedMovie)
       }
   )
})
 
module.exports=movieRouter  