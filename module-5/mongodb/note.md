# installing mongo DB

https://coursework.vschool.io/installing-mongodb-and-postgresql/


# after follow this link start with
npm install mongoose


# after install : in top of the page
const mongoose=require('mongoose')

//////////////////////////////////////////////////////

mongoosejs.com
        mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

# after that go for bellow
/////////////////////////////////////////////////////

https://mongoosejs.com/docs/deprecations.html  '''''''by default'''''''''
 


 # and totall result is :

mongoose.connect('mongodb://localhost:27017/test',
 {useNewUrlParser: true ,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
},
() => console.log("connect to the DB")
)



https://www.mongodb.com/products/compass


# now you should make mongoose schemas
mongoose schemas : blue print for our data

mongoose models : have a name and a blueprint  - moduls are used perform CRUD on data create with the models


# example: thats a Schemas (remeber in module folder)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//book blue print 
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseYear: Number
})

module.exports = mongoose.model("Book", movieSchema)

# afyter we create that schemas com back in movieRouter and create new real data

and intro the bookRouter is :
const Book = require('../models/book') 