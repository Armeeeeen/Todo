import React, { useState } from 'react'
import TodoList from './TodoList';

function TodoHeader({onAdd}) {
  const [text,setText] = useState('')
  return (
    <form className='todo-header' onSubmit={(e)=>{
      e.preventDefault()
      onAdd(text)
    }}>
       <input type="text" onChange={(e)=>{
        setText(e.target.value)
        // console.log(text);
       }}/> 
       <button onClick={()=>{

        <TodoList value={text}/>

       }}>Add</button>
    </form>
  )
}

export default TodoHeader