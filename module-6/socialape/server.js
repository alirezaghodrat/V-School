const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const Todo = require('./models/todo.js')
const expressJwt = require('express-jwt')


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  'mongodb://localhost:27017/socialape',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to the DB')
)

app.use('/user', require('./routes/authRouter.js'))
app.use('/api', expressJwt({ secret: process.env.SECRET })) // req.user
app.use('/api/todo', require('./routes/todoRouter.js'))
//upload a img
// app.use(multer({ dest: ‘./uploads/’,
//     rename: function (fieldname, filename) {
//       return filename;
//     },
//    }));


app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9001, () => {
  console.log(`Server is running on local port 9001`)
})
