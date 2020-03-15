const express = require("express")
const app = express()



app.use(express.json())
app.use("/user",require("./routes/movieRouter.js"))


//port 9000
app.listen(9002,()=>{
    console.log("the server is runing on port 9000")
})