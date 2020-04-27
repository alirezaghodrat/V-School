import React,{useState} from "react"
import { Link , Switch , Route  } from "react-router-dom"
import Home from "./Home"
import Contact from "./skills"
import Project from "./Project"
import Footer from "./Footer"

function App (){
          const [dropdownOpen, setDropdownOpen] = useState(false);

          const toggle = () => {
              setDropdownOpen(prevState => !prevState)
          };
  
    return(
        <div className="home">
             <div className="no-mobile">
                     <div className='nav'>
                        <ul className="nav-list">
                            <Link  to="/" className="Link">home</Link>
                            <Link to="/about" className="Link">about</Link>
                            <Link to="/Contact" className="Link">skills</Link>
                        </ul>
                    </div>
             </div>
             <div className="mobile">
                {/* {dropdownOpen
                ?
                    <div onMouseLeave={toggle} className='nav'> */}
                        {/* onMouseLeave={toggle} */}
                        {/* <button>X</button>
                        <ul className="nav-list">
                            <Link  to="/" className="Link">home</Link>
                            <Link to="/about" className="Link">about</Link>
                            <Link to="/Contact" className="Link">skills</Link>
                        </ul>
                    </div>
                :
                <img onMouseEnter={toggle} className="menu" height="50px" src="https://www.freeiconspng.com/uploads/menu-icon-8.png" /> */}
                {/* //  onMouseEnter={toggle}
                } */}
                <div  onClick={toggle}>
                    <button className="hamburger"> hehehe</button>
                </div>
              </div>
            <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={Project}/>
                    <Route path="/contact" component={Contact}/>
            </Switch>

            <Footer />
        </div>
  
 
    )
}

export default App