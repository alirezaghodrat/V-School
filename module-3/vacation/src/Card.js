import React from "react"

function Card (props){
    return(
        <div>
              <h2>{props.place}</h2>
              <p>{props.price}</p>
              <p>{props.timeToGo}</p>
        </div>
    )
}
export default Card