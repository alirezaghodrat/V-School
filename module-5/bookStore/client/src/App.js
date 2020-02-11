import React, { useState , useEffect } from "react"
import axios from 'axios'
import Book from './components/Book.js'
import "./style.css"
import AddMovieForm from "./components/AddBookForm.js"

export default function App(){
       const [book,setBook]=useState([])

       function getMovies(){
            axios.get("/book")
            .then(res =>setBook(res.data))
            .catch(err => console.log(err.response.data.errMsg))
       }

       function addMovie(newbook){
           axios.post("/book",newbook)
            .then(res => {
                setBook(prev => [...prev,res.data])
            })
            .catch(err => console.log(err))
       }
        
       function deleteMovie(movieId){
           axios.delete(`/book/${movieId}`)
           .then(res =>{
               setBook(prev => prev.filter(item => item._id !== movieId ))
           })
           .catch(err => console.log(err))
       }
       
       function EditMovies( update, movieId ){
           axios.put(`/book/${movieId}`, update)
                .then(res =>{
                    setBook(pre => pre.map(item => item._id !== movieId ? item : res.data))
                })
                .catch(err => console.log(err))
       }

       function handleFilter(e){
           if(e.target.value === "genre"){
              getMovies()
           }else{
            axios.get(`/book/search/genre?genre=${e.target.value}`)
            .then(res => setBook (res.data))
            .catch(err => console.log(err))
       }
    }
        useEffect(()=>{
            getMovies()
        },[])

    return(
        <div className="book-container">
            
           <h4>Filter by Genre</h4>
           <select onChange={handleFilter} className="filter-form">
               <option value="genre">Select a Genre</option>
               <option value="action">Action</option>
               <option value="fantasy">Fantasy</option>
               <option value="horror">Horror</option>
           </select>

           {book.map(item => 
           <Book 
           {...item} 
           key={item._id}
           deleteMovie={deleteMovie}
           EditMovies={EditMovies}/>)}

          

           <AddMovieForm 
           submit={addMovie} 
           btnText="Add Movie"/>
        </div>
    )
}