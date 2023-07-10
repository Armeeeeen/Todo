import React from 'react'
import './css/todo.css'

function TodoFooter({todos,onClearCompleted}) {
  let completed = todos.filter((e)=>{
   return e.isCompleted == true
  }).length
  return (
    <div className='todo-footer'>
       <p>{`${completed}/${todos.length}`}</p> 
       <button onClick={onClearCompleted}>Clear Completed</button>
    </div>
  )
}

export default TodoFooter