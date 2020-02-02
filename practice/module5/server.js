// const express = require("express")
// const app = express()

// app.use(express.json())

// const movies=[
//     {title: "die hard", genre: "action"},
//     {title: "star war", genre: "fantasy"},
//     {title: "lion king", genre: "fantcy"},
//     {title: "friday the 13th", genre: "horror"}
// ]
// app.get("/movies",(req,res)=>{
//    res.send(movies)
// })

// app.post("/movies",(req,res) =>{
//    const newMovies = req.body
//    movies.push(newMovies)
//    res.send(`successfully added ${newMovies.title} to the database`)
// })
// app.listen(9000,()=>{
//     console.log("The server is runing on port 9000")
// })

const express = require('express')
const app = express()
const uuid = require('uuid/v4')

app.use(express.json())  //req.body

app.get("/movies", (req,res)=>{
    res.send(movies)
})

app.post("/movies",(req,res)=>{
     movies.push(req.body)
     res.send(`we addes ${req.body} to yours `)
})

app.listen(9000,()=>{
    console.log('here is runing 9000')
})
