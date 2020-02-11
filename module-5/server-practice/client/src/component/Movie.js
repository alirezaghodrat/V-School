import React,{useState} from 'react'
import AddMovieForm from './AddMovieForm.js'

 export default function Movie(props){
     const {_id,title,genre} = props
     const [ editToggle , setEditToggle ] = useState(false)
     return(
         <div className="movie">
           {   !editToggle ?
                <>
                    <h1> title:{title}</h1>
                    <p> genre:{genre}</p>
                    <button 
                    className="delete-btn"
                    onClick={() => props.deleteMovie(_id)}>delete</button>
                    <button 
                    className="edite-btn"
                    onClick={() => setEditToggle(pre => !pre)}>
                        Edite
                    </button>
                </>
                :
                <>
                <AddMovieForm 
                    title={title}
                    _id={_id}
                    genre={genre}
                    btnText="Submit Edit"
                    submit={props.editmovie}
                />
                <button
                onClick={() => setEditToggle(pre => !pre)}>close</button>
                </>
                }
         </div>
     )
 }