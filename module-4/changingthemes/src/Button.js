import React from "react"
import {ThemeContextConsumer} from "./theme"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button style={{position:"relative", left:600}}onClick={context.toggleTheme} className={`${context.theme==="dark" ? "dark" : "red"}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}

export default Button