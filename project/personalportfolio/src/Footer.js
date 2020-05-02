import React from "react"
import resume from "./mypdf/resume22.pdf"

function Footer(){
    return(
        <footer className="footer">
                <a href="https://github.com/alirezaghodrat/">
                    <img className="imgfooter" src="http://pngimg.com/uploads/github/github_PNG40.png" /></a>
                <a href="https://www.linkedin.com/in/alireza-godratipour/">
                    <img className="imgfooter" src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png" /></a>
                {/* <a href={resume} download> */}
                <a href={resume} target="blank" >
                    <img className="imgfooter" src="http://www.pngall.com/wp-content/uploads/2016/04/Resume-PNG.png"/></a>
       </footer>
    )
}

export default Footer