import React,{useState} from "react"
 
export default function AddMovieForm(props){
    const init = { name:"" , age:"" }
    const [input, setInput] = useState(init)
    return(
           <form>
              <input 
              name=""
              value=""
              />
           </form>
    )
}