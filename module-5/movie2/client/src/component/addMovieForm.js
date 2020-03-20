import React,{useState} from "react"

export default function (props){
    const initInput = { title: "" , genre: "" }
    const [input,setInput] = useState(initInput)
 
    function handleChange(e){
       const {name,value}=e.target
       setInput(prevInput => ({ ...prevInput , [name]:value }))
    }

    function handlesubmit(e){
      e.preventDefault()
   
      setInput(initInput)
    }
    return(
        <form onSubmit={handlesubmit}>
            <input 
            type="text"
            name="title"
            value={input.title}
            onChange={handleChange}
            placeholder="Title"/>
            <input 
            type="text"
            name="genre"
            value={input.genre}
            onChange={handleChange}
            placeholder="Genre"/>
        </form>
    )
}