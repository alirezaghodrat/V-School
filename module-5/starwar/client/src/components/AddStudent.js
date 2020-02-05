import React,{useState} from "react"

export default function AddStudent (props){
    const initInputs = { name: props.name || "" , graduate: props.graduate || false }
    const [ inputs ,setInputs ] = useState(initInputs)

    function handleChange(e){
        const {name , value} = e.target
        setInputs(prevInputs => ({...prevInputs , [name]:value }))
    }
    function handelSubmit(e){
        e.preventDefault()
        props.submit(inputs , props._id)
        setInputs(initInputs)
       
    }
    return(
        <form onSubmit={handelSubmit}>
              <input 
              type="text" 
              name="name" 
              value={inputs.name} 
              onChange={handleChange} 
              placeholder="name"/>

              <input 
              type="text" 
              name="graduate" 
              value={inputs.graduate} 
              onChange={handleChange} 
              placeholder="graduate"/>
              <button>{props.btnText}</button>
        </form>
    )
}