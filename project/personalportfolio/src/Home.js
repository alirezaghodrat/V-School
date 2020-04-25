import React from "react"
import Header from "./Header"

function Home(){
    return(
        <div>
            <h1 className="h1-home">Alireza ghodratipour</h1>
            <div className="myself">
             <p className="p-myself"> I recently built a responsive React app (see my project below!)
            that allows the user to search for currency and compare it to other currencies. 
            It was a great opportunity to incorporate a lot of what I've been learning, React/JavaScript, CSS, HTML, and data fetching.
            In addition to building applications using front-end technologies, I'm also learning how to build servers in Node.js using Express,
            and how to store and process data with MongoDB.</p> 
             </div>
                 
            <main className="main">
                <Header  />
            </main>
        </div>
    )
}
export default Home