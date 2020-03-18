import React from "react"

export default function Movie(props){
    return(
        <div>
            <h1>name:{props.title}</h1>
            <p>genre:{props.genre}</p>
        </div>
    )
}