import React,{useState,useEffect} from "react"
import axios from 'axios'
import Student from "./components/Student"
import "./styles.css"
import AddStudent from "./components/AddStudent"

export default function App (){
    const [ student , setStudent ] = useState([])
    
    function getStudent(){
        axios.get("/student")
        .then(res => setStudent(res.data))
        .catch(err => console.log(err))
    }
    function addStudents(newStar){
        axios.post("/student",newStar)
        .then(res => {
            setStudent(preStudent => [ ...preStudent , res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteStudent (bountyId){
        axios.delete(`/student/${bountyId}`)
           .then (res =>  {
            setStudent(preStudent => preStudent.filter(item => item._id !== bountyId))
           })
           .catch(err => console.log(err))
    }

    function editStudent(updateObject , bountyId){
         axios.put(`/student/${bountyId}`,updateObject)
           .then(res => {
               console.dir(res.data)
                setStudent(preStudent => preStudent.map( student => {
                    return student._id !== bountyId ? student : res.data
                })) 
           })
           .catch(err => console.log(err))
    }
    useEffect(()=>{
        getStudent()
    },[])

    return(
        <>
        <div className="student-container">
            <AddStudent 
               submit={addStudents}
               btnText="Add Movie"
            />
             {
             student.map(item => 
             <Student 
             {...item} 
             key={item._id } 
             deleteStudent={deleteStudent}
             editStudent={editStudent} _id={item._id}/>)
             }
        </div>
        </>
    )
}