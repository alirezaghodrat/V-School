import React, { useContext } from 'react'
import { UserContext } from "../context/UserProvider.js"

export default function Todo(props){
  const { upVote, downVote } = useContext(UserContext)
  const { title, description, imgUrl, _id, vote } = props
  return (
    <div className="todo">
      <h1>{ title }</h1>
      <h3>{ description }</h3>
      <img src={imgUrl} alt={imgUrl} width={300}/>
      <h1>VOTES: {vote}</h1>
      <button onClick={() => upVote(_id)}>Upvote</button>
      <button onClick={() => downVote(_id)}>Downvote</button>
    </div>
  )
}