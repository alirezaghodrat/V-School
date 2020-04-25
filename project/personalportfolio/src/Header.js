import React from "react"
import family from "./my-family.JPG"
import currencyPreview from './currency-preview.png'
import speedgame from './speedgame.png'

function Header(){

    return(
        <div className="header-container">
           {/* <div className="img-holder"> 
                <img className="box" height="100px" src={family}/>
                <div className="p-container">
                    <p className="p">I have an amazing familly</p>
                </div>
            </div> */}
            <div className="img-holder"> 
                    <img className="box" height="100px" src={currencyPreview }/>
                    <div className="p-container">
                        <p className="p">I love tennis</p>
                    </div>
            </div>
            <div className="img-holder"> 
                    <img className="box" height="100px" src={speedgame}/>
                    <div className="p-container">
                        <p className="p">Coding is life!</p>
                    </div>
        </div>
        </div>
    )
}
export default Header