import React,{useState} from "react"

export default function AddBookForm(props){
    const initInputs ={ title: props.title || "" , genre: props.genre || "" }
    const [ input , setInput ] = useState(initInputs)

    function handleChange(e){
        const {name,value} = e.target
        setInput(prevInput => ({...prevInput ,[name]:value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(input,props._id)
        setInput(initInputs)
    }
    return(
        <form onSubmit={handleSubmit}>
             <input 
             type="text"
             name="title"
             value={input.title}
             placeholder="title"
             onChange={handleChange}
             />
              <input 
             type="text"
             name="genre"
             value={input.genre}
             placeholder="genre"
             onChange={handleChange}
             />
             <button>{props.btnText}</button>
        </form>
    )
}