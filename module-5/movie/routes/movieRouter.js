
const express = require("express")
const movieRouter = express.Router()
const uuid = require("uuid/v4")

const movie =[
    {name:"jamshid",genre:"action" , _id:uuid()},
    {name:"jamshid1",genre:"honre", _id:uuid()},
    {name:"jamshid2",genre:"comedy", _id:uuid()}
]

//get all
movieRouter.get("/user",(req,res)=>{
    res.send(movie)
})

//get one 
moviem
//post one
movieRouter.post("/user",(req,res)=>{
    const newMovie = req.body
    newMovie._id=uuid()
    movie.push(newMovie)
    res.send(`you make ${newMovie.name} success`)
})

module.export = movieRouter