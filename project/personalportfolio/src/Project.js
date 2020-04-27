import React from "react"
import profile from './AliGhodratipour.jpg'

function Project(){
    return(
    <div className="progect-holder">
        {/* <div className="img-holder-project">
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
        </div> */}
         <div>
            <img className="my-img" src={profile}/>
         </div>
         <h2 className="about-me">
             I'm an Analytical Software Developer, skilled at coding in Scada. 
             I have 8 years of experience developing applications for the control room.
             I have a strong understanding of javascript best practices, standards, and operating procedures.
             I am currently attending V School in Salt Lake City.  I spend my days absorbing whatever new information I can from any resource available,
              as well as experimenting with different programming languages in order to have a more broad range of knowledge.
         </h2>
    </div>
    )
}
export default Project