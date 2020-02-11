import React,{ useState , useEffect } from "react"
import axios from 'axios'
import Movie from './component/Movie.js'
import AddMovieForm from './component/AddMovieForm.js'

export default  function App(){
    const [ movies , setMovies ] = useState([])
    

    function getMovies(){
        axios.get("/movies")
             .then(res => setMovies(res.data))
             .catch(err => console.log(err))
    }

    function addMovie(newMovie){
        axios.post("/movies",newMovie)
        .then(res => {
            setMovies(prevMovie => [...prevMovie,res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteMovie(movieId){
         axios.delete(`/movies/${movieId}`)
           .then(res => {
               setMovies(prevMovie => prevMovie.filter(movie => movieId !== movie._id))
           })
           .catch(err => console.log(err))
    }

    function editMovi(updates,movieId){
        axios.put(`/movies/${movieId}`,updates)
        .then(res => {
            setMovies(pre => pre.map(movie => movie._id !== movieId ? movie : res.data))
        })
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        getMovies()   
    },[])
    return(
        <div className="movie-container">
                  <AddMovieForm  
                  submit={addMovie}
                  btnText="add Movie"
                  />
                 {movies.map(movie => 
                 <Movie {...movie} 
                 key={movie.title}
                 deleteMovie={deleteMovie}/>)}
        </div>
    )
}
