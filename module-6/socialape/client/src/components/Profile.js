import React, { useContext } from 'react'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import Todo from './Todo.js'
import { UserContext } from '../context/UserProvider.js'

export default function Profile(){
  const { 
    user: { 
      username ,
      img
    }, 
    addTodo, 
    todos ,
    getComments
  } = useContext(UserContext)

  return (
    <div className="profile">
      <img src={img} className="profile-img"/>
      <h1>Welcome @{username}!</h1>
      <h3>Add A Todo</h3>
      <TodoForm addTodo={addTodo}/>
      <h3>Your Todos</h3>
      <TodoList todos={todos} getComments={getComments}/>
    </div>
  )
}