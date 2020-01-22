import React from "react"
import text from "./text"
import BlogPost from "./Component/BlogPost"
import "./style.css"

function App(){
    const textPlay =text.map(item => <BlogPost key={item.id} arry={item}/>)

    return(
            <div>
                {textPlay}
            </div>
    )
}

export default App