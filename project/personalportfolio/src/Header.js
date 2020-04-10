import React from "react"
import family from "./my-family.JPG"

function Header(){
   
    // const person = name.map((item) => (
    //     <div className="img-holder"> 
    //             <img className="box" height="100px" src={item.src}/>
    //             <div className="p-container">
    //                 <p className="p">{item.name}</p>
    //             </div>
    //     </div>
  
    // ))
    return(
        <div className="header-container">
           <div className="img-holder"> 
                <img className="box" height="100px" src={family}/>
                <div className="p-container">
                    <p className="p">I have an amazing familly</p>
                </div>
            </div>
            <div className="img-holder"> 
                    <img className="box" height="100px" src="https://images.unsplash.com/photo-1530915365347-e35b749a0381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                    <div className="p-container">
                        <p className="p">I love tennis</p>
                    </div>
            </div>
            <div className="img-holder"> 
                    <img className="box" height="100px" src="https://miro.medium.com/max/5040/1*KYSliSP3N229fAgbPev3hA.jpeg"/>
                    <div className="p-container">
                        <p className="p">Coding is life!</p>
                    </div>
        </div>
        </div>
    )
}
export default Header