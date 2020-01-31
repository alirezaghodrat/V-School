import React from "react"
import Header from "./Header"

function Home(){
    return(
        <div>
            <div className="myself">
             <h3>Let me introduce myself...</h3>
             <br />
             <p className="p-myself">I am a : developer ,traveler, Learner , </p>
             <p>My driving force is a passion for learning new things.</p>
             </div>
                 
            <main className="main">
        
                <Header  />
            </main>
        </div>
    )
}
export default Home