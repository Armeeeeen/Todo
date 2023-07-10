import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos,onDelete,onChange}) {
  // console.log(todos);
  return (
    
    <div className='list'>

    {  todos.map((todo)=>  <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onChange={onChange}/> )}
    </div>
  )
}

export default TodoList