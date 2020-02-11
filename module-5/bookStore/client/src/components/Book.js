import React,{useState} from "react"
import AddMovieForm from "./AddBookForm.js"

export default function Book(props){
   const {title,genre,_id}=props
   const [editToggle , setEditToggle] = useState(false)
    return(
        <div className="book">
           {!editToggle ?
            <>
            <h1>{title}</h1>
             <p>{genre}</p>
             <button 
             className="delete-btn"
             onClick={() => props.deleteMovie(_id)}>Delete</button>
             <button 
             className="edite-btn" 
             onClick= {()=> setEditToggle(prev => !prev)} >Edit</button>
             </>
               :
             <>
             <AddMovieForm 
             title={title}
             genre={genre}
             btnText="submit Edit"
             submit={props.EditMovies}
             _id={_id}/>
             <button
             onClick= {()=> setEditToggle(prev => !prev)}>close</button>
             </>
           }
        </div>
    )
}