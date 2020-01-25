import React, { Component } from "react"
import "./stylese.css"
import {StorageConsumer} from "./Storage"
import Thing from "./Thing"

class App extends Component{
    state = {
       title:"",
       img: "",
       description:"",
       arr:[]
    }


    toggle=(event)=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }


    render (){

        // const mappedprofiles = this.state.arr.map(pro =>(<Thing {...pro} edite={this.edite} delete={this.delete}/>))
        return(
            <div>
                   <StorageConsumer>
                       {props =>{
                           return(
                               <>
                            <form className="div" onSubmit={(e) => props.mySubmitHandler(e, {title: this.state.title, img: this.state.img, description: this.state.description,})}> 
                            <input 
                            placeholder="Title" 
                            value={this.state.title}
                            name="title"
                            onChange={this.toggle}/>
                            <input 
                            placeholder="img URL" 
                            value={this.state.img}
                            name="img"
                            onChange={this.toggle}/>
                            <input 
                            placeholder="Description" 
                            value={this.state.description}
                            name="description"
                            onChange={this.toggle}/>
                            <br />
                            <button className="button">submit</button>
                            <br />
                           
                        </form>
                            
                        <div className="div2">
                            { props.arr.map(pro =>(<Thing {...pro} edite={props.edite} delete={props.delete}/>)) }
                        </div>
                        </>
                           )
                       }}

                    </StorageConsumer>
            </div>
         )
    }

}
export default App