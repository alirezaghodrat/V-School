import React from "react"

function Person(props){
    const {name , age , _id} = props
    return(
    <div>
         <h1>{name}</h1>
         <p>{age}</p>
    </div>
    )
}
export default Person