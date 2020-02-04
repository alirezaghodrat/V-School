const express = require('express')
const movieRouter = express.Router()
const uuid = require("uuid/v4")

const movies=[
    { title: "die hard" , genre: "action" , _id:uuid() },
    { title: "star wars 5" , genre: "fantasy" , _id:uuid() },
    { title: "lion king" , genre: "fantasy" , _id:uuid() },
    { title: "fridy the 13th" , genre: "horror" , _id:uuid() }
  ]

  //get all//
movieRouter .get("/" ,(req,res)=>{
    res.send(movies)
})

  //get one//
  movieRouter.get("/:movieId",(req,res)=>{
     const movieId = req.params.movieId
     const findMovie = movies.find( movie => movie._id === movieId )
     res.send(findMovie)
  })

  //get by genre//
  movieRouter.get("/search/genre" , (req,res) =>{
     const genre = req.query.genre
     const findgenre = movies.filter(item => item.genre===genre)
     res.send(findgenre)
  })

  //post one//
movieRouter .post("/" ,(req,res)=>{
   const newMovies=req.body
   newMovies._id=uuid()
   movies.push(newMovies)
   res.send(`success pushing ${newMovies.title} to the data base`)
})

//delete one//??

movieRouter.get("/:movieId",(req,res)=>{
   const movieId = req.params.movieId
   const movieIndex = movies.findIndex(item => item._id === movieId )
     movies.splice(movieIndex, 1)
     res.send(`remove success `)
})

//update one //
movieRouter.put("/:movieId",(req,res)=>{
    const movieId = req.params.movieId
    const updateObject = req.body
    const movieIndex = movies.findIndex(item => {
        // console.log( item._id, movieId)
        return item._id === movieId 
    })
    // console.log(movieIndex)
    const updateMovie = movies[movieIndex] ? Object.assign(movies[movieIndex],updateObject) : { err: "Movie not found" }
    res.send(updateMovie)
})







module.exports=movieRouter