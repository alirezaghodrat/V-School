
const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose=require('mongoose')

//midelware (for every request)//
app.use (express.json()) //req.body
app.use(morgan('dev'))

//connect to DB//
mongoose.connect(`mongodb://localhost:27017/persondb`,
{
    'useNewUrlParser':true,
    'useFindAndModify':false,
    'useCreateIndex':true,
    'useUnifiedTopology':true,
},
  () => console.log("conected to the DB")
)

//route//
app.use ("/person" , require("./route/personRouter.js"))

//err handeler
app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

//server listener
app.listen(9004,()=>{
    console.log("port runing on port 9014")
})

