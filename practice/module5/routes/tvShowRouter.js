const express = require('express')
const tvShowRouter = express.Router()
const uuid = require("uuid/v4")

const tvShows =[
    { title: "Rick and Morty"  , _id:uuid() },
    { title: "watchmen" , _id:uuid() },
    { title: "westword" ,  _id:uuid() },
    { title: "friends" , _id:uuid() }
  ]

  //get all//
  tvShowRouter.get("/" ,(req,res)=>{
    res.send(tvShows)
})

//get one //

tvShowRouter.get("/:tvshowId" , (req,res) =>{
   const tvshowId = req.params.tvshowId
  const findtvshows = tvShows.find(tv => tv._id === tvshowId )
  res.send(findtvshows)
})

//get by genre//
// tvShowRouter.get("/search/title",(req,res)=>{
//     const findquery = req.query.genre
//     const findtvshows = tvShows.filter(item => item.genre===findquery)
//     res.send(findtvshows)
// })

  //post one//
// tvShowsRouter.post("/" ,(req,res)=>{
//     const newShow = req.body
//     newShow._id=uuid()
//     tvShows.push(newShow)
//     res.send(`successfully added ${newShow.title} `)
// })
//delete one//

// tvShowRouter.delete("/:tvshowId" , (req,res)=>{
//     const tvshowId = req.params.tvshowId
//     const findIndexshows = tvShows.findIndex(item => item._id === tvshowId)
//     tvShows.splice(findIndexshows,1)
//    res.send(`remove successfully`)
// })

//update one //

//   tvShowRouter.post("/" ,(req,res)=>{
//     const newtvShows = req.body
//     newtvShows._id=uuid()
//     tvShows.push(newtvShows)
//     res.send(`success pushing ${newtvShows.title} to the data base`)
// })





module.exports=tvShowRouter
