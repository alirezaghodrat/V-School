const express = require("express")
const app = express()
const uuid = require("uuid/v4")
const morgan = require('morgan')

//midel
app.use(express.json())
app.use(morgan('dev'))
// app.use("/user", require('./routes/movieRouter.js'))

const movie =[
    {name:"jamshid",genre:"action" , _id:uuid()},
    {name:"jamshid1",genre:"honre", _id:uuid()},
    {name:"jamshid2",genre:"comedy", _id:uuid()}
]

//get all
app.get("/",(req,res)=>{
    res.send(movie)
})

//get one
app.get("/:movieId",(req,res)=>{
    const movieId = req.params.movieId
    const newnew = movie.find(item => item._id === movieId )
    res.send(newnew)
})
//post one
app.post("/",(req,res)=>{
    const newMovie = req.body
    newMovie._id=uuid()
    movie.push(newMovie)
    res.send(`you make ${newMovie.name} success`)
})

//get by genre
app.get("/saerch/genre",(req,res)=>{
    const genre = req.query.genre
    const inahash = movie.filter(item => item.genre === genre)
    res.send(inahash)
})

//delete req
app.delete("/:movieId",(req,res)=>{
    const movieId = req.params.movieId
    const findIndex = movie.findIndex(item => item._id === movieId )
    movie.splice(findIndex,1)
    res.send('remove movie success ')

})

//put request
app.put("/:movieId",(req,res)=>{
    const movieId = req.params.movieId
    const findIndex = movie.findIndex(item => item._id === movieId )
    const updateMovie = Object.assign(movie[findIndex],req.body)
    res.send(updateMovie)
})

//port 9000
app.listen(9002,()=>{
    console.log("the server is runing on port 9000")
})