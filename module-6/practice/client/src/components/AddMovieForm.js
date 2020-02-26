import React,{useState} from "react"
 
export default function AddMovieForm(props){
    const init = { name:props.name || "" , age:props.age || "" }
    const [input, setInput] = useState(init)

    function handelChange(e){
        const {name,value}=e.target
        setInput(prevInput => ({ ...prevInput , [name]:value }))
    }

    function handelSubmit(e){
          e.preventDefault()
          props.submit(input,props._id)
          setInput(init)
    }
    return(
           <form onSubmit={handelSubmit}>
              <input 
              name="name"
              value={input.name}
              type="text"
              placeholder="name"
              onChange={handelChange}
              />
             <input 
              name="age"
              value={input.age}
              type="number"
              placeholder="age"
              onChange={handelChange}
              />
              <button>{props.btnText}</button>
           </form>
    )
}