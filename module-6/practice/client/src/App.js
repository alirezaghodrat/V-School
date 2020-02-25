import React,{ useEffect,useState } from "react"
import Person from "./components/Person"
import Axios from "axios"

export default function App(){

    const [movie,setMovie]=useState([])
    
    function getMovie(){
        Axios.get("/person")
        .then(res => setMovie(res.data)) 
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        getMovie()
    },[])

    return(
        <div>
            { movie.map(item => <Person {...item} key={item._id}/>)}
        </div>
    )
}
