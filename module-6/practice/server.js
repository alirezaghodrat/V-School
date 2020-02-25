
const express = require("express")
const app = express()
const morgan = require('morgan')

app.use (express.json()) //req.body
app.use ("/person" , require("./route/personRouter.js"))
app.use(morgan('dev'))

app.listen(9004,()=>{
    console.log("port runing on port 9014")
})

