import React,{useState ,useEffect} from "react"
import axios from "axios"
import Movie from "./component/Movie.js"
import addMovieForm from "./component/addMovieForm.js"

export default function App (){
   const [movies,setMovie]=useState([])
  function getMovie(){
      return(
        axios.get("/movie")
        .then(res => setMovie(res.data))
        .catch(err => console.log(err))
      )
  }

   function postMovie(){
       return(
           axios.post("/movie")
           .then(res => console.log(res))
           .catch(err => console.log(err))
       )
   }
    useEffect(()=>{
        getMovie()
    },[])

    return(
        <div>
            <addMovieForm />
             {movies.map(item => <Movie {...item} key={item._id}/>)}
        </div>
    )
}