const express =require("express")
const app = express()


app.use(express.json())//req.body 



app.use("/movies",  require("./routes/movieRouter.js"))

app.use("/tvshows" , require("./routes/tvShowRouter.js"))




app.listen(9000,()=>{
    console.log('9000 is runing')
})