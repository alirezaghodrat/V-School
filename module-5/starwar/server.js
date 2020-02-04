const express = require('express')
const app = express()
const uuid = require('uuid/v4')
   
     app.use(express.json())

const starwar=[
    { name:"yoda", Living:true , BountyAmount:33 , Type:"Sith" , _id:"123" },
    { name:"boba", Living:false , BountyAmount:22 , Type:"jedi" , _id:"1234" },
    { name:"yoda", Living:true , BountyAmount:11 , Type:"Sith" , _id:"12345" }
]

//get all//
app.get("/bounty",(req,res)=>{
    res.send(starwar)
})

//get one //
app.get("/:bountyId" , (req,res)=>{
    const bountyId=req.params.bountyId
       console.log(bountyId)
    const getone = starwar.find( item => {
        console.log(item._id,bountyId )
        return item._id === bountyId 
    })        
    res.send(getone)
})


//post//
app.post("/",(req,res)=>{
    const newStar = req.body
    newStar._id=uuid()
    starwar.push(newStar)
    res.send(`successfully added ${newStar.name} `)
})

//delete//
app.delete("/:bountyId" , (req,res)=>{
   const bountyId = req.params.bountyId
   const starIndex = starwar.findIndex( item => item._id === bountyId )
   starwar.splice(starIndex,1)
   res.send(`remove successfully`)
})

//put//
app.put("/:bountyId" ,(req,res)=>{
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const findIndexstar = starwar.findIndex( item => item._id === bountyId )
    const update = object.assign(starwar[findIndexstar],updateObject)
    res.send(`success update ${update} `)
})


//listen//
app.listen('9001',()=>{
    console.log('the server is running on the 9001 port')
})