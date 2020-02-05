import React,{useState} from "react"
import AddStudent from "./AddStudent"

export default function Student(props){
    console.log(props._id)
    const { name,graduate,_id } =  props
    const [ editToggle , setEdiToggle ] = useState(false)
    return(
        <div className="student">
            { !editToggle ?
            <>
             <h1>name: {name}</h1>
             <p> statuse: {graduate ? "graduate" : "learning"}</p>
             <button 
             className="delete-btn"
             onClick={() => props.deleteStudent(_id)}>
                 Delete
             </button>
             <button
              className="edit-btn"
              onClick={() => setEdiToggle(preToggle => !preToggle)}>Edite</button>
             </>
             :
             <>
             <AddStudent 
             name={name}
             graduate={graduate}
             _id={_id}
             btnText="Submit Edit"
             submit={props.editStudent}
              />
              <button
              onClick={() => setEdiToggle(preToggle => !preToggle)}>
                  Close
              </button>
              </>
            }
        </div>
    )
}