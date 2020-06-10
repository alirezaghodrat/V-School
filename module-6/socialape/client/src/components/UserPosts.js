import React, { useContext,useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
import { UserContext } from "../context/UserProvider.js"
import Comments from "./comment/Comments.js";
import CommentForm from "./comment/CommentForm.js";


function UserPosts(props) {

    
    const { upVote, downVote ,getComments,addComment} = useContext(UserContext)
    const { username,title, description,_id ,imgUrl ,vote ,comments } = props
    const {userId} = useParams()
    const thisuser = username.find(user => user._id === userId)
    
    const [commentToggle, setCommentToggle] = useState(false);
    const [commentInput, setCommentInput] = useState("");
    
  
    useEffect(() => {
       getComments();
    }, [getComments]);
  
    const toggler = () => {
      setCommentToggle(p => !p)
    };
    const handleChange = e => setCommentInput(e.target.value);
    const handleSubmit = e => {
      e.preventDefault();
      console.log(_id, commentInput)
      addComment(_id, { text: commentInput });
    };
    return (
        <>
        { thisuser &&
        <div className="todo">
          <h1>{username}</h1>
          <img src={imgUrl} alt={imgUrl} width={300}/>
          <h1>{ title }</h1>
          <h3>{ description }</h3>
          <h1>LIKES: {vote}</h1>
          <button onClick={() => upVote(_id)}>{"👍"}</button>
          <button onClick={() => downVote(_id)}>{"👎"}</button>
          <button onClick={toggler}>Comments</button>
          {commentToggle && (
            <div>
              <Comments
                id={_id}
                getComments={getComments}
                addComment={addComment}
                comments={comments}
                toggler={toggler}
              />
              <CommentForm
                comment={commentInput}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          )}
        </div>
          }
          </>
      )
}

export default UserPosts