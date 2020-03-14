
const express = require("express")
const movieRouter = express.Router()

const movie =[
    {name:"jamshid",genre:"action" , _id:uuid()},
    {name:"jamshid1",genre:"honre", _id:uuid()},
    {name:"jamshid2",genre:"comedy", _id:uuid()}
]

//get all
app.get("/user",(req,res)=>{
    res.send(movie)
})

//post one
app.post("/user",(req,res)=>{
    const newMovie = req.body
    newMovie._id=uuid()
    movie.push(newMovie)
    res.send(`you make ${newMovie.name} success`)
})

module.export = movieRouter