import React,{ useEffect,useState } from "react"
import Person from "./components/Person"
import Axios from "axios"
import AddMovieForm from "./components/AddMovieForm.js"

export default function App(){

    const [movie,setMovie]=useState([])
    //get
    function getMovie(){
        Axios.get("/person")
        .then(res => setMovie(res.data)) 
        .catch(err => console.log(err))
    }
    //post
    function addMovie(newPerson){
        Axios.post("/person",newPerson)
            .then(res => {
                setMovie(pre => [...pre , res.data])
            })
            .catch(err => console.log(err))
    }
    //delete
    function deleteperson(personId){
         Axios.delete(`/person/${personId}`)
             .then(res => {
                 setMovie(pre => pre.filter(item => item._id !== personId ))
             })
             .catch(err => console.log(err))
    }
     //edit
     function editperson (updateduuu,personId){
        Axios.put(`/person/${personId}`,updateduuu)
          .then(res => {
              setMovie(pre => pre.map(item => item._id !== personId ? item : res.data ))
          })
          .catch(err => console.log(err))
     }


    useEffect(()=>{
        getMovie()
    },[])

    return(
        <div>
            <AddMovieForm 
            submit={addMovie}
            btnText="add movie"/>
            { movie.map(item => 
            <Person 
            {...item} 
            key={item._id}
            deleteperson={deleteperson}
            editperson = {editperson} />)}
        </div>
    )
}
