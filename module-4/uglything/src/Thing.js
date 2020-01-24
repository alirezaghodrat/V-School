import React, { Component } from "react"

class Thing extends Component {

    state={
        title:"",
        img: "",
        description:"",
        editToggle: false
    }
    
    componentDidMount(){
        this.setState({
            title: this.props.title,
            img: this.props.img,
            description: this.props.description
        })
    }
    
    handlChange=(event)=>{
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    mySubmit=(e)=>{
        e.preventDefault()
        const updates = {
            title: this.state.title,
            img: this.state.img,
            description: this.state.description
        }
        this.props.edite(this.props.title, updates)
    
    }
    
    editfind=()=>{
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }
    render(){
        console.log(this.props)
     return(
        
       <>
     
        <div>
            <h1>{this.props.title}</h1>
            <img  height="200px" src={this.props.img}/>
            <p>{this.props.description}</p>
            <button onClick={this.editfind}>edit</button>
        </div>
        <button onClick={() => this.props.delete(this.props.title)}>delete</button>
         { this.state.editToggle &&
                <form onSubmit={this.mySubmit}>
                    <input
                        placeholder="Title" 
                        value={this.state.title}
                        name="title"
                        onChange={this.handlChange}/>
                    <input 
                        placeholder="img URL" 
                        value={this.state.img}
                        name="img"
                        onChange={this.handlChange}/>
                    <input 
                        placeholder="Description" 
                        value={this.state.description}
                        name="description"
                        onChange={this.handlChange}/>

                    <button>Submit</button>
               </form>  
        
         }
         
       </>
     )
}
}
export default Thing




//3: HandleSubmit should call the edit function from the App.js, and update the arr 