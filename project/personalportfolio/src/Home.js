import React from "react"
import Header from "./Header"

function Home(){
    return(
        <div>
            <h1 className="h1-home">Wellcome To My Portfolio</h1>
            <div className="myself">
             <p className="p-myself">I m an Analytical Software Developer, skilled at coding in Scada. 
             I have 8 years of experience developing applications for the control room.
              I have a strong understanding of javascript best practices, standards, and operating procedures.
            I am currently attending V School in Salt Lake City. I recently built a responsive React app (see my project below!)
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