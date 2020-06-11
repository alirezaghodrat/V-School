import React from 'react'


export default function AuthForm(props){
  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    errMsg,
    inputs: {
      username, 
      password,
      img
    } 
  } = props
  
  return (
    <div className="text-container">
    {/* <img src={"https://raw.githubusercontent.com/hidjou/classsed-react-firebase-client/master/src/images/icon.png"} height={64} width={64}/> */}
    <img src={img} height={64} width={64}/>
    <form className="text-seprator" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"
        className="input-text"/>
      <input 
        type="text" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"
        className="input-text"/>
        <input 
        type="text" 
        name="img" 
        value={img} 
        onChange={handleChange} 
        placeholder="Image profile"/>
      <button className="button-text">{ btnText }</button>
      <p style={{color:"red"}}>{errMsg}</p>
    </form>
    </div>
  )
}