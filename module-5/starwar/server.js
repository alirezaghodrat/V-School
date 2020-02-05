const express = require('express')
const app = express()
const uuid = require('uuid/v4')
   
     app.use(express.json())

const students=[
    { name:"yoda", graduate:true , _id:"123" },
    { name:"bob", graduate:false  , _id:"1234" },
    { name:"ali", graduate:true  , _id:"12345" }
]

//get all//ok
app.get("/student",(req,res)=>{
    res.send(students)
})

//get one //ok
app.get("/student/:studentId" , (req,res)=>{
    const studentId=req.params.studentId
    const getone = students.find( item => {
        return item._id === studentId 
    })        
    res.send(getone)
})


//post//ok
app.post("/student",(req,res)=>{
    const newStar = req.body
    newStar._id=uuid()
    students.push(newStar)
    res.send(newStar)
})

//delete//ok
app.delete("/student/:bountyId" , (req,res)=>{
   const bountyId = req.params.bountyId
   const starIndex = students.findIndex( item => item._id === bountyId )
   students.splice(starIndex,1)
   res.send(`remove successfully`)
})


//put//ok
app.put("/student/:bountyId" ,(req,res)=>{
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const findIndexstar = students.findIndex( item => item._id === bountyId )
    const update = Object.assign(students[findIndexstar],updateObject)
    res.send(update)
})

//listen//ok
app.listen('9002',()=>{
    console.log('the server is running on the 9002 port')
})