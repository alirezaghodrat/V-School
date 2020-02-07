const express = require('express')
const movieRouter = express.Router()
const uuid = require("uuid/v4")

const movies = [
    { title:"die hard" , genre:"action" , _id:uuid() },
    { title:"star war" , genre:"fantasy" , _id:uuid() },
    { title:"lion king" , genre:"fantasy" , _id:uuid() },
    { title:"friday the 13th" , genre:"horror" , _id:uuid() }
]

//get all//
movieRouter.get("/",(req,res)=>{
    res.send(movies)
})  

//get one//
movieRouter.get("/:movieId",(req,res)=>{
   const movieId = req.params.movieId
   const getOne = movies.find( movie => movie._id === movieId )
   res.send(getOne)
})

//get by genre//
movieRouter.get("/search/genre",(req,res) =>{
    const genre = req.query.genre
    const findGenre = movies.filter ( movie => movie.genre === genre )
     res.send(findGenre)
})

//post one//
movieRouter.post("/",(req,res)=>{ 
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(newMovie)
})

//delet one//
movieRouter.delete("/:movieId",(req,res) =>{
   const movieId = req.params.movieId
   const findIndex = movies.findIndex(movie => movie._id === movieId )
   movies.splice(findIndex,1)
   res.send(`you cutede the  successfully`)
})

//update one //
movieRouter.put("/:movieId",(req,res)=>{
     const movieId = req.params.movieId
     const findIndex = movies.findIndex(movie => movie._id === movieId )
     const updateObject = req.body
     const updateMovie = Object.assign(movies[findIndex],updateObject)
     res.send(updateMovie)
})
 
module.exports=movieRouter  