import React from 'react'
import TodoList from './TodoList.js'
import Todo from './Todo.js'

export default function Public(){
  return (
    <div className="public">
         <div>
           <h1>Donald Trump(Republican)</h1>
             <img className="trump" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Donald_Trump_official_portrait_%28cropped%29.jpg/1280px-Donald_Trump_official_portrait_%28cropped%29.jpg"/>
             <div className="button-holder">
             <button>up vote</button>
             <button>down vote</button>
             </div>
             </div> 
             <div>
             <h1>Joe Biden(Democratic)</h1>
             <img className="joe" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Joe_Biden_2013.jpg/1280px-Joe_Biden_2013.jpg" />
             <div className="button-holder">
             <button>up vote</button>
             <button>down vote</button>
             </div>
         </div>
    </div>
  )
}