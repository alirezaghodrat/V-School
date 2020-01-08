import React from "react"
import text from "./text"
import Header from "./Header"

function App(){
    const textPlay =text.map(item => <Header key={item.id} item={item}/>)
    return(
            <div>
                {textPlay}
            </div>
    )
}

export default App