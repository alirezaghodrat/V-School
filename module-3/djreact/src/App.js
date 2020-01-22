import React, { Component } from "react"
import Squares from "./Squares"

class App extends Component{
    constructor(){
        super()
        this.state={
            color:['white', 'black', 'black', 'white'],
            lastColors: ['white', 'black', 'black', 'white']
        }
        this.backWith=this.backWith.bind(this)
        this.purple=this.purple.bind(this)
        this.blueLeft=this.blueLeft.bind(this)
        this.blueWrite=this.blueWrite.bind(this)
        this.greenColor=this.greenColor.bind(this)
    }
    backWith(){
        this.setState(prestate => {
            const newColor = prestate.color.map(eachColor =>  eachColor==='black' ?  "white" : 'black' )
            return{
                color:newColor
            }
        })
    }
    purple(){

        this.setState(prevState => {

            if(prevState.color[0] !== 'purple' || prevState.color[1] !== 'purple' || prevState.color[2] !== 'black' || prevState.color[3] !== 'white'){
                return { 
                    color:['purple','purple','black', 'white'],
                    lastColors: prevState.color
            }

            }else{
                 return { 
                    color: prevState.lastColors,
                    lastColors: prevState.color 
                 } 
            }

        })
    } 
    blueLeft(){
        this.setState(prev => {
               const blueleft = prev.color.map((colors , index)=> {
                    if(index === 2){
                        return 'blue'
                    } else if ( index === 3){
                        return 'green'
                    } else {
                        return colors
                    }
               })
               return{
                   color: blueleft
               }
        })
    }
    

    blueWrite(){
         this.setState(prevState=>{
             const blue2 = prevState.color.map((color1,index1)=>{
                 if(index1===3){
                     return 'blue'
                 }else{
                     return color1
                 }
             })
             return{
                   color:blue2
             }
         })
    }   

    greenColor(){
        this.setState(prState =>{
           const green1 = prState.color.map((green,index2)=>{
                  if(index2===1){
                      return 'green'
                  }else if(index2===3){
                      return 'green'
                  }else{
                      return green
                  }
            })
            return{
                color:green1
            }
        })
    }
    render(){

        const mappedColors = this.state.color.map(color => <Squares color={color}/>)

        return(
            <div>
                <div className='container'>
                    { mappedColors }
                </div>
                <button onClick={this.backWith}className="smallDj">SMALL DJ</button>
                <button onClick={this.purple}className="party">PARTY DJ</button>
                <button onClick={this.blueLeft} className="blueleft">Blueleft</button>
                <button onClick={this.blueWrite} className="bluewrite">Bluewrite</button>``
                <button onClick={this.greenColor}className="bigtime3">big time</button>
            </div>
        )
}
}

export default App


