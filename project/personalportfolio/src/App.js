import React,{useState} from "react"
import { Link , Switch , Route  } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Project from "./Project"
import Footer from "./Footer"

function App (){
          const [dropdownOpen, setDropdownOpen] = useState(false);

          const toggle = () => {
              setDropdownOpen(prevState => !prevState)
          };
  
    return(
        <div>
            <nav className="nav">
                   <h1> ALI GODRATI  </h1>
                 
            </nav>
          
            {dropdownOpen
             ?
                <div onMouseLeave={toggle} className='nav-links'>
                    <h1>X</h1>
                    <ul >
                        <Link  to="/">home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/Contact">Contact</Link>
                    </ul>
                </div>
             :
             <img className="menu" height="50px" src="https://www.freeiconspng.com/uploads/menu-icon-8.png" onMouseEnter={toggle}/>
            }
            
            <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/projects" component={Project}/>
                    <Route path="/contact" component={Contact}/>
            </Switch>

            <Footer />
        </div>
  
 
    )
}

export default App