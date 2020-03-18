const express = require('express')
const movieRouter = express.Router()
const uuid = require("uuid/v4")
movies = [
    {"title":"god father" , "genre":"dram" ,_id:uuid()},
    {"title":"father" , "genre":"action" ,_id:uuid()},
    {"title":"god " , "genre":"fancy" ,_id:uuid()}
]

//get all
movieRouter.get("/",(req,res)=>{
   res.send(movies)
})

//get one
movieRouter.get("/:movieId",(req,res)=>{
    const movieId = req.params.movieId
    const findone = movies.find( item => item._id === movieId )
    res.send(findone)
})

//updatd one
movieRouter.put("/:movieId",(req,res)=>{
    const movieId = req.params.movieId
    const findIndex = movies.findIndex( item => item._id === movieId )
    Object.assign(movies[findIndex],req.body)
    res.send('update successfully')
})

//delete one 
movieRouter.delete("/:movieId",(req,res)=>{
    const movieId = req.params.movieId
    const findIndex = movies.findIndex(item => item._id === movieId)
    movies.splice(findIndex,1)
    res.send('success delete the movie')
})

//post one 
movieRouter.post("/",(req,res)=>{
    const newmovie = req.body
    newmovie._id=uuid()
    const vakhi = movies.push(newmovie)
    res.send(`you add ${vakhi.title}jigili`)
})

//get by genre
movieRouter.get("/search/genre",(req,res)=>{
    const genre = req.query.genre
    const inhanish = movies.filter(item => item.genre===genre)
   res.send(inhanish)

})

module.exports=movieRouter