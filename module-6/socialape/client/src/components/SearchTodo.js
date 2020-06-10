import React, {useState, useRef} from "react"

export default function SearchTodo(props){

    const [newTodoValue, setNewTodoValue] = useState("")
    const [todosList, setTodosList] = useState([])
    // const inputRef = useRef(null)

    function handleChange(event) {
        setNewTodoValue(event.target.value)
    }
    
    function addTodo(event) {
        event.preventDefault()
        setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
        setNewTodoValue("")
        // inputRef.current.focus()
        //ref={inputRef}
    }
    
    const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)
  
    return (
        <div>
            <form>
                <input  type="text" name="todo" value={newTodoValue} onChange={handleChange}/>
                <button onClick={addTodo}>search</button>
            </form>
            {allTodos}
        </div>
    )
}