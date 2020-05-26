import React,{useState, useEffect, useContext} from 'react'
import {UserContext } from "../context/UserProvider.js"
import TodoList from './TodoList.js'
import Todo from './Todo.js'

export default function Public(){
  const { getAllTodos, allTodos } = useContext(UserContext)
  const [counttrump, setCounttrump] = useState(0)
  const [countjoe, setCountjoe] = useState(0)

  useEffect(() => {
    getAllTodos()
  }, [])

 function increment(){
  setCounttrump(prevState => (prevState + 1))
}

function decrement(){
  setCounttrump(prevState => (prevState - 1))
}

  return (
    <div className="public">
      <TodoList todos={allTodos}/>
         {/* <div>
           <h1>Donald Trump(Republican)</h1>
             <img className="trump" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Donald_Trump_official_portrait_%28cropped%29.jpg/1280px-Donald_Trump_official_portrait_%28cropped%29.jpg"/>
             <div className="button-holder">
             <button onClick={increment}>up vote</button>
             <button onClick={decrement}>down vote</button>
             <h1>{counttrump}</h1>
             </div>
             </div> 
             <div>
             <h1>Joe Biden(Democratic)</h1>
             <img className="joe" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Joe_Biden_2013.jpg/1280px-Joe_Biden_2013.jpg" />
             <div className="button-holder">
             <button onClick={increment}>up vote</button>
             <button onClick={decrement}>down vote</button>
             <h1>{countjoe}</h1>
             </div>
         </div> */}
    </div>
  )
}