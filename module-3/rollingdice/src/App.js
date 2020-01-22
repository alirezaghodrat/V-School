import React, { Component } from "react"
import DiceBox from "./DiceBox"
import "./style.css"

class App extends Component{
      constructor(){
          super()
          this.state={
              num:Math.floor(Math.random()*7),
              num2:Math.floor(Math.random()*7),
              num3:Math.floor(Math.random()*7),
              num4:Math.floor(Math.random()*7),
              num5:Math.floor(Math.random()*7),
          }
          this.run=this.run.bind(this)
      }
      run(){
          this.setState({
            num:Math.floor(Math.random()*7),
            num2:Math.floor(Math.random()*7),
            num3:Math.floor(Math.random()*7),
            num4:Math.floor(Math.random()*7),
            num5:Math.floor(Math.random()*7),
          })
      }
      render(){
          return(
          <div className="dice-box">
                <h1 className="h2"><DiceBox num={this.state.num} /></h1>
                <h1 className="h2"><DiceBox num={this.state.num2} /></h1>
                <h1 className="h2"><DiceBox num={this.state.num3} /></h1>
                <h1 className="h2"><DiceBox num={this.state.num4} /></h1>
                <h1 className="h2"><DiceBox num={this.state.num5} /></h1>
                <button onClick={this.run}className="dic">DICE</button>
          </div>
          )
      }
}
export default App

