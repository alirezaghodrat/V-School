import React from "react"
import currencyPreview from './currency-preview.png'
import speedgame from './speedgame.png'

function Project(){
    return(
    <div className="progect-holder">
        <div className="img-holder-project">
        <a href="http://currencyexchange.surge.sh/"><img className="progect" src={currencyPreview}/></a>
        <div className="p-contaner2">
            <h3 className="p2">React web application utilizing Currency API </h3>
            <p className="p2">Built with React, JavaScript, HTML and CSS; integrated Axios to make client-side HTTP requests</p>
        </div>
        </div>
        <div className="img-holder-project">
        <a href="http://speedgame.surge.sh/"><img className="progect" src={speedgame}/></a>
        <div className="p-contaner2">
            <h3 className="p2">React web application game </h3>
            <p className="p2">Built with React, JavaScript, HTML and CSS; integrated Axios to make client-side HTTP requests</p>
        </div>
        </div>
    </div>
    )
}
export default Project