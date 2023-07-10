import React from 'react'
import './css/todo.css'


function TodoItem({todo,onDelete,onChange}) {
  // console.log(todo);
  return (
    <div className='todo-item'>
            <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
              onChange({
                ...todo,
                isCompleted: e.target.value
              })
            }} />
            <p>{todo.text}</p>
            <button onClick={()=>{
            onDelete(todo)
        }}>X</button>
    </div>
  )
}

export default TodoItem