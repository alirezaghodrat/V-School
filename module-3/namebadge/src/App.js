import React from "react"

class App extends React.Component{
      constructor(){
          super()
          this.state={
              firstName:"",
              lastName:"",
              email:"",
              phone:"",
              place:"",
              food:"",
              aboutYou:"",
              profiles: []
          }
          this.handeling=this.handeling.bind(this)
          this.mySubmitHandler=this.mySubmitHandler.bind(this)
      }
      mySubmitHandler(event){
         event.preventDefault()

            this.setState(prevState => {
                const { firstName, lastName, email, phone, place, food, aboutYou } = prevState
                const newProfile = { firstName, lastName, email, phone, place, food, aboutYou }
                // prevState.profiles.push( { firstName, lastName, email, phone, place, food, aboutYou })
                return {
                    profiles: [...prevState.profiles, newProfile]
                }
            }) 
      }
     
      handeling(event){
          const {name , value}=event.target
          this.setState({
                   [name]:value
          })
      }
      
      render(){

        const mappedProfiles = this.state.profiles.map(profile => {
            return (
                <div className="container1">
                        <header className="header">badge:</header>
                        <p className="container2">
                        <p className="Pname">Name:{profile.firstName} {profile.lastName}</p>
                        <p className="pEmail">Email:{profile.email}</p>
                        <p className="pPhone">Phone:{profile.phone}</p>
                        <p className="pPLace">Place of birth:{profile.place}</p>
                        <p className="pFood">Fave food:{profile.food}</p>
                        </p>
                        <footer className="text">{profile.aboutYou}</footer>
               </div>
            )
        })

          return(
              <div className="main">
                    <div className="container">
                        <form onSubmit={this.mySubmitHandler}>
                                <input 
                                className="firstName" 
                                type="text" 
                                name="firstName"
                                value={this.state.firstName} 
                                placeholder="First Name" 
                                onChange={this.handeling}/>
                                <input 
                                className="lastName" 
                                type="text" 
                                name="lastName" 
                                value={this.state.lastName} 
                                placeholder="Last Name" 
                                onChange={this.handeling}/>
                                <br />
                                <input 
                                className="email" 
                                type="email" 
                                name="email" 
                                value={this.state.email} 
                                placeholder="Email" 
                                onChange={this.handeling}/>
                                <input 
                                className="phone" 
                                type="text" 
                                name="phone" 
                                value={this.state.phone} 
                                placeholder="phone" 
                                onChange={this.handeling}/>
                                <br />
                                <input 
                                className="place" 
                                type="text" 
                                name="place" 
                                value={this.state.place} 
                                placeholder="Place of Birth" 
                                onChange={this.handeling}/>
                                <input 
                                className="food" 
                                type="text" 
                                name="food" 
                                value={this.state.food} 
                                placeholder="Fave Food" 
                                onChange={this.handeling}/>
                                <br />
                                <textarea 
                                className="aboutyou" 
                                type="text" 
                                name="aboutYou" 
                                value={this.state.aboutYou} 
                                placeholder="tell us about yourself" onChange={this.handeling}/>
                                <br />
                                <button 
                                className="submit">submit</button>
                        </form>
                    </div>
                    {mappedProfiles}
             </div>
          )
      }
}

export default App