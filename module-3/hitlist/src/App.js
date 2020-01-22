import React, { Component } from "react"

class App extends Component{
     constructor(){
         super()
         this.state={
             storing:[]
         }
     }
     componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(res => res.json())
        .then(data => {
            this.setState({storing: data})
            })
        } 
    
        
     render(){
        const mappedItems = this.state.storing.map(item => {
            return(
                <div className="cotain">
                        <h1>{item.name}</h1>
                        <img className="img" src={item.image}/>
                </div>
            )
        })

            return(
                <div>
                    { mappedItems }
                </div>
            )
     }
        
}
export default App