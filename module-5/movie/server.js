
const express = require("express")
const app = express()
const uuid = require("uuid/v4")


app.use("/",express.json())
app.use("/",require("./routes/movieRouter.js"))


//port 9000
app.listen(9002,()=>{
    console.log("the server is runing on port 9000")
})