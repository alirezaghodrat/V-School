const express = require("express")
const app = express()
const morgan = require('morgan')


app.use(express.json())//req.body
app.use(morgan('dev'))
 
app.use("/movies",require('./routs/movieRouter.js'))

app.listen(9000,()=>{
    console.log("the server is running on port 9000")
})
