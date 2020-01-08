import React from "react"
import frinds from "./frinds"
import Friend from "./Component/Friend"
import "./style.css"

function App(){
    const frienNewList = frinds.map(person =>  <div key={person.age}>{person.name}</div>)
    const friendHolder = frinds.map(person =>  <Friend key={person.age} friend={person} />)
 
        return (
                <div className="main-container" >
                   <h1 className="second" > {frienNewList} </h1>
                    <div>{friendHolder } </div>
                </div>
            )
    }
export default App


