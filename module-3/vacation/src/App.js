import React from "react"
import Card from "./Card"
import vacation from "./vacationSpots"

function App (){
    const spot=vacation.map(item =><Card place={item.place} price={item.price} timeToGo={item.timeToGo}/> )
    return(
        <div>
            {spot}
        </div>
    )
}
export default App