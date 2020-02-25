const express = require('express')
const personRouter = express.Router()
const uuid = require("uuid/v4")

const person =[
    { name:"shayan" , age: 20 ,_id:uuid()} ,
    { name:"shawn" , age: 20 ,_id:uuid()} 
]
//get all
personRouter.get("/",(req,res)=>{
    res.send(person)
})

//get one 
personRouter.get("/:personId",(req,res)=>{
    const personId = req.params.personId
    const find = person.find(item => item._id === personId )
    res.send(find)
})

//post one 
personRouter.post("/",(req,res)=>{
    const newPerson = req.body
    newPerson._id=uuid()
    person.push(newPerson)
    res.send(`succtess send ${newPerson.name}`)
})

//get by qurey
personRouter.get("/search/name",(req,res)=>{
  const name = req.query.name
  const hereisname = person.filter(item => item.name === name )
  res.send(hereisname)
})

//delete
personRouter.delete("/:personId",(req,res)=>{
    const personId = req.params.personId
    const findindex = person.findIndex(item => item._id === personId)
    person.splice(findindex,1)
    res.send(`we remove the name!`)
})
//put
personRouter.put("/:personId",(req,res)=>{
    const personId = req.params.personId
    const updated = req.body
    const findeindex = person.findIndex(item => item._id === personId)
    const final = Object.assign(person[findeindex],updated)
    res.send(final)
})
module.exports=personRouter