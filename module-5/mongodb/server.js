const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//Middleware (for every request) //
app.use(express.json())//req.body
app.use(morgan('dev'))

//connect to DB//
mongoose.connect('mongodb://localhost:27017/moviesdb',
{
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true ,
   useFindAndModify: false
},
() => console.log("connected to the DB")
)
 
//Routes//
app.use("/movies",require('./routs/movieRouter.js'))

//Error handler//
app.use((err,req,res,nex) =>{
    console.log(err)
    return res.send({errMsg: err.massage })
})

app.listen(9002,()=>{
    console.log("the server is running on port 9002")
})