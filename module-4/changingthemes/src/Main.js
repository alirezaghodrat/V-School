import React from "react"
import {ThemeContextConsumer} from "./theme"

function Main(){
    return(
       
           <ThemeContextConsumer>
               {context =>{
                   return(
                      <main className={`${context.theme==="dark" ? "dark" : "main"}-theme`}>Click the button the {`${context.theme}`}  theme !</main>
                   )
               }  }
           </ThemeContextConsumer>
    )
}

export default Main