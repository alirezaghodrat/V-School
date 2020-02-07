import React from 'react'

 export default function Movie(props){
     const {_id,title,genre} = props
     return(
         <div className="movie">
                <h1> title:{title}</h1>
                <p> genre:{genre}</p>
                <button 
                className="delete-btn"
                onClick={() => props.deleteMovie(_id)}>delete</button>
         </div>
     )
 }