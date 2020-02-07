import React,{useState} from "react"

export default function AddMovieForm(props){
    const initInputs = { title: props.title || "" , genre: props.genre || "" }
    const [inputs ,setInputs] = useState(initInputs)
     
    function handelChange(e){
        const { name , value } = e.target
        setInputs(prevInput => ({...prevInput, [name]:value }))
    }
     function handelSubmit(e){
         e.preventDefault()
         props.submit(inputs)
          setInputs(initInputs)
     }
    return(
        <form onSubmit={handelSubmit}>
             <input 
                type="text" 
                name="title" 
                value={inputs.title} 
                onChange={handelChange} 
                placeholder="Title"/>
             <input 
                type="text" 
                name="genre" 
                value={inputs.genre} 
                onChange={handelChange} 
                placeholder="Genre"/>
                <button>{props.btnText}</button>
        </form>
    )
}