const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose=require('mongoose')


//middleware(for every request)//
app.use(express.json())//req.body
app.use(morgan('dev'))


// connect to DB
mongoose.connect('mongodb://localhost:27017/bookdb',
 {useNewUrlParser: true ,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
},
() => console.log("connect to the DB")
)

//routs//
app.use("/book",require("./route/bookRouter.js"))

//error handeler
app.use((err,req,res,next) =>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9001,()=>{
    console.log("server runing on 9001 port")
})