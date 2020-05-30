import React from "react"

export default class App extends React.Component {
    state = {
       loading:true
    }
    componentDidMount(){
       const url = "https://api.randomuser.me/"
    }

    render(){
        return(
            <div> 
                {this.state.loading ? <div>loading ... </div> : <div>loading ... </div>}
            </div>
        )
    }
}
