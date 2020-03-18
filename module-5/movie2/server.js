const express = require('express')
const app = express()

//midellWare
app.use(express.json())
app.use("/movie",require("./routes/movie.js"))


app.listen(9022,()=>{
    console.log('port install in 9022')
})

module.exports = app