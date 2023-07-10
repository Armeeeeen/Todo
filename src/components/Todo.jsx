import React, { useReducer } from 'react'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import './css/todo.css'

function reducer(state,action){
   if(action.type === 'add'){
    return [
      ...state,{
        id: Math.random(),
        text: action.payload.text,
        isCompleted:false
      }
    ]
  }else if(action.type ==='delete'){
    return state.filter((t)=> t.id !== action.payload.id)
  }
  else if(action.type ==='clear'){
   return state.filter((t) => t.isCompleted !== true )
}
  else if(action.type === 'change'){
        state.map((todo) => {
          if (action.payload.id === todo.id) {
            return action.payload.id
          }
          return todo
        })
      
    }
    }
  


function Todo() {
const [todos,dispatch] = useReducer(reducer,[
  {
    id: Math.random(),
    text: 'learn JS',
    isCompleted: true
  },
  {
    id: Math.random(),
    text: 'learn CSS',
    isCompleted: false
  },
  {
    id: Math.random(),
    text: 'learn JSX',
    isCompleted: false
  }
])
  return (
    <div className='todo'>
     <TodoHeader onAdd={(text)=>{
      dispatch({
        type:'add',
        payload:{
          text:text
        }
      }
      )
     }}/>
     <TodoList todos={todos} onDelete={(todo)=>{
        dispatch({
          type:'delete',
         payload: {
            id:todo.id
          }
        })
     }}
     onChange={(todo)=>
      dispatch({
        type:'change',
        payload:{
          id:todo.id
        }
      })
     }
     />
     <TodoFooter todos={todos} onClearCompleted={() => {
      dispatch({
        type:'clear',
        
      })
          
        }}/>
    </div>
  )
}

export default Todo