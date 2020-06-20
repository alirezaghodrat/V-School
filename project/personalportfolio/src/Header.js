import React from "react"
import family from "./my-family.JPG"
import currencyPreview from './currency-preview.png'
import socialapp from './socialapp.png'

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
                     <a href="http://currencyexchange.surge.sh/"><img className="box" height="100px" src="https://www.moneywise.co.uk/sites/default/files/styles/node_main/public/currencies.jpg?itok=uIUJ6xJQ"/></a>
                    <div className="p-container">
                        <p className="p">API project Built with React, JavaScript, HTML and CSS; integrated Axios to make client-side HTTP requests</p>
                    </div>
            </div>
            <div className="img-holder"> 
                    <a href="http://speedgame.surge.sh/"><img className="box" height="100px" src="https://media.npr.org/assets/img/2010/10/28/flyingfingers_wide-66394a3796b3a38b91f672f7ff84351dafa2f818-s800-c85.jpg"/></a>
                    <div className="p-container">
                        <p className="p">Speed Games Built with React, JavaScript, HTML and CSS with pushing start you have 10S to type</p>
                    </div>
            </div>
            <div className="img-holder"> 
                    <a href="https://enigmatic-coast-73886.herokuapp.com/"><img className="box" height="100px" src="https://www.dpreview.com/files/p/articles/2938265592/AP_main.jpeg"/></a>
                    <div className="p-container">
                        <p className="p">full stack project frontEnd Built with React, JavaScript, BackEnd with mongDB</p>
                    </div>
            </div>
        </div>
    )
}
export default Header