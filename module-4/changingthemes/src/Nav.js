import React from "react"
import {ThemeContextConsumer} from "./theme"

function Header(){
    return(
       
           <ThemeContextConsumer>
               {context =>{
                   return(
                      <header className={`${context.theme==="dark" ? "dark" : "nav"}-theme`}> Home    About      Contact</header>
                   )
               }  }
           </ThemeContextConsumer>
    )
}

export default Header

