const express = require('express')
const personRouter = express.Router()
const Person = require("../models/person.js")

//get all
personRouter.get("/",(req,res,next)=>{
     Person.find((err,person)=>{
         if(err){
             res.status(500)
             return next(err)
         }
         return res.status(200).send(person)
     })
})

//get one 
personRouter.get("/:personId",(req,res,next)=>{
    Person.findone({_id:req.params.personId},(err,person)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(person)
    })
})

//post one 
personRouter.post("/",(req,res,next)=>{
   const newPerson = new Person(req.body)
   newPerson.save((err,savedPerson) =>{
       if(err){
           res.status(500)
           return next(err)
       }
       return res.status(201).send(savedPerson)
   })
})

//get by qurey
personRouter.get("/search/age",(req,res)=>{
  Person.find({age:req.query.age},(err,person)=>{
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(200).send(person)
  })
})

//delete
personRouter.delete("/:personId",(req,res,next)=>{
  Person.findOneAndDelete({_id:req.params.personId},(err,deleteItem)=>{
      if(err){
          res.status(500)
          return next(err)
      }
      return res.status(200).send(`delete success ${deleteItem.name}from the DB`)
  })
})
//put
personRouter.put("/:personId",(req,res,next)=>{
   Person.findOneAndUpdate(
       {_id:req.params.personId},
       req.body,
       {new:true},
       (err,updatedPerson)=>{
           if(err){
               res.status(500)
               return next(err)
           }
           return res.status(201).send(updatedPerson)
           })
})
module.exports=personRouter