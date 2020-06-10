import React, { useState ,useCallback} from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "", 
    todos: [] ,
    errMsg:"",
    allTodos: []
  }

  const [userState, setUserState] = useState(initState)

  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handelAuthErr(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getUserTodos()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handelAuthErr(err))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      todos: [],
      allTodos: []
    })
  }

  function handelAuthErr(errMsg){
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthErr(){
    setUserState(prevState =>({
      ...prevState,
      errMsg:""
    }))
  }

  function getUserTodos(){
    userAxios.get("/api/todo/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          todos: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addTodo(newTodo){
    userAxios.post("/api/todo", newTodo)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          allTodos: [...prevState.allTodos, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function getAllTodos(){
    userAxios.get("/api/todo")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          allTodos: res.data
        }))
      })
      .catch(err => console.log(err))
  }
  
  function getSearchTodos(){
    userAxios.get("/api/todo/search")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          todos: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
  // const addComment = (_id, comment) => {
  //   issueAxios
  //     .post(`/api/comment/${_id}`, comment)
  //     .then(res => {
  //       const issueToUpdate = Object.assign({}, issueState.issue);
  //       issueToUpdate.comments.push(res.data);
  //       setIssueState(prev => ({
  //         ...prev,
  //         issue: issueToUpdate
  //       }));
  //     })
  //     .catch(err => console.log(err));
  // };
/////////////////////////////////////////////////////////
    // const getComments = useCallback(_id => {
  //   userAxios.get(`/api/comment/${_id}`)
  //     .then(res => {
  //       setUserState(prev => {
  //         const todoToUpdate = Object.assign({}, prev.todo);
  //         todoToUpdate.comments.push(...res.data);
  //         return {
  //           ...prev,
  //           todo: todoToUpdate
  //         };
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }, []);
    const addComment = (_id, comment) => {
      userAxios.post(`/api/comment/${_id}`, comment)
      .then(res => {
        setUserState(prev => {
          const todoToUpdate = prev.allTodos.find(todo => todo._id === _id)
          todoToUpdate.comments.push(res.data);
          console.log(todoToUpdate, 'ADD')
          return {
            ...prev,
            allTodos: prev.allTodos.map(todo => {
              if(todo._id === _id){
                return todoToUpdate
              }else {
                return todo
              }
            })
          };
        });
      })
      .catch(err => console.log(err));
  }

  

  const getComments = (_id) => {
    userAxios.get(`/api/comment/${_id}`)
      .then(res => {
        setUserState(prev => {
          console.log(res.data, 'get')
          console.log(prev, 'prev')
          console.log(_id)
          const todoToUpdate = prev.todos.find(todo => todo._id === _id)
          todoToUpdate.comments = res.data;
          todoToUpdate.comments.push(res.data);
          return {
            ...prev,
            allTodos: prev.allTodos.map(todo => {
              if(todo._id === _id){
                return todoToUpdate
              }else {
                return todo
              }
            })
          };
        });
      })
      .catch(err => console.log(err));
  }


  function upVote(id){
    userAxios.put(`/api/todo/upvote/${id}`)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          allTodos: prevState.allTodos.map(todo => todo._id === id ? res.data : todo),
          todos: prevState.todos.map(todo => todo._id === id ? res.data : todo)
        }))      
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function downVote(id){
    userAxios.put(`/api/todo/downvote/${id}`)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          allTodos: prevState.allTodos.map(todo => todo._id === id ? res.data : todo),
          todos: prevState.todos.map(todo => todo._id === id ? res.data : todo)
        }))        
      })
      .catch(err => console.log(err.response.data.errMsg)) // You can only vote once per issue
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addTodo,
        getAllTodos,
        resetAuthErr,
        upVote,
        downVote,
        addComment,
        getComments,
        getSearchTodos
      }}>
      { props.children }
    </UserContext.Provider>
  )
}