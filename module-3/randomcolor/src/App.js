import React from "react"
import axios from "axios"
import "./styles.css"
class App extends React.Component{
    constructor(){
        super()
        this.state={
             color:''
        }
    }
    componentDidMount(){
        axios.get("http://www.colr.org/json/color/random")
            .then(response => {
              const newColor = response.data.colors[0].hex
                this.setState({color:newColor})
            })
    }
    render(){
        return(
                <h1 style={{backgroundColor:` #${this.state.color} `}}>
                     background color
                </h1>
        )
    }
}

export default App
