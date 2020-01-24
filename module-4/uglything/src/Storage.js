
import React, { Component } from "react"
const {Provider, Consumer} = React.createContext()
class StorageProvider extends Component{
  state={
  arr:[]
}

mySubmitHandler = (event, newProfile) => {
  event.preventDefault()
  this.setState(prevState => {
      return{
          arr: [ ...prevState.arr, newProfile]
      }
  })
}

delete=(title)=>{
  this.setState(prevState=>{
      console.log(title)
      return {
          arr: prevState.arr.filter(item => title !== item.title )
      }
  })

}


edite=(title, updates)=>{
  this.setState(prevState=>{
      return{
          arr: prevState.arr.map(item => title !== item.title ? item : updates)
      }
  })
}

      render(){
          return(
            <Provider value={{mySubmitHandler: this.mySubmitHandler,edite:this.edite, delete:this.delete, ...this.state}}>
                 {this.props.children}
            </Provider> 
          )
      }
}

export {StorageProvider, Consumer as StorageConsumer}