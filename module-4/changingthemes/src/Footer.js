import React from "react"
import {ThemeContextConsumer} from "./theme"

function Footer(){
    return(
       
           <ThemeContextConsumer>
               {context =>{
                   return(
                     <footer className={`${context.theme}-theme`}>footer</footer> 
                   )   
                }
        
               }
           </ThemeContextConsumer>
    )
}

export default Footer