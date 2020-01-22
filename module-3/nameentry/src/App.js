import React, { Component } from "react"
import SaveName from "./SaveName"

class App extends Component{
    constructor(){
        super()
        this.state={
            firstName: '',
            savedNames: []
        }
        this.handelChange=this.handelChange.bind(this)
        this.addName=this.addName.bind(this)
    }
    handelChange(event){
        const {name,value}= event.target
        this.setState({
                [name]:value
            })
        
    }
    addName(){
        this.setState(prevState => {
           let a=  prevState.firstName
           prevState.savedNames.push(a)
           return { firstName: "", savedNames: [ ...prevState.savedNames] }
        })
    }
    render(){

        const mappedNames = this.state.savedNames.map(item=>< SaveName item={item}/>)

    return(
         <div className="div">
             <input 
             type="text" 
             name="firstName" 
             value={this.state.firstName}
             onChange={this.handelChange}
             placeholder="Name"/>
             <br />
             <button
             onClick={this.addName}>click to add</button>
             <h1>{mappedNames}</h1>
         </div>
    )
}
}
export default App

