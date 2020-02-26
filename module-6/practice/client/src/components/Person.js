import React,{useState} from "react"
import AddMovieForm from "./AddMovieForm.js"

function Person(props){
    const {name , age , _id} = props
    const [editToggle,setEditToggle]=useState(true)
    return(
    <div>
        {
        editToggle ?
        <>
         <h1>{name}</h1>
         <p>{age}</p>
         <button onClick={() => props.deleteperson(_id)}>delete</button>
         <button
         onClick={() => setEditToggle(pre => !pre)}>Edit</button>
         </>
         :
         <>
         <AddMovieForm 
         name={name}
         age={age}
         _id={_id}
         btnText="submit Edit"
         submit={props.editperson }/>
         <button onClick={() => setEditToggle(pre => !pre)}>close</button>
         </>
        }
    </div>
    )
}
export default Person