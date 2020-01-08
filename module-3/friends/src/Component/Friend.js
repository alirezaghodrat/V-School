import React from "react"
import Pet from "./Pet"

function Friend(props){

    const petsHolder=props.friend.pets.map(animal => <Pet key={animal.age} pet={animal}/>)
    return(
        <div className="frinds">
                <h2>name: {props.friend.name}</h2>
                <h2>age: {props.friend.age}</h2>
                <h3>{props.friend.name}'s pets: </h3>
                {petsHolder}
        </div>
    )
}
export default Friend

























