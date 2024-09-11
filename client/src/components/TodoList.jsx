import React from 'react'
import {ACTIONS} from '../pages/Todo'

export default function Todo({todo, dispatch}) {
  return (
    <div>
      <span style={{color: todo.complete ? '#AAA' : '#000'}}>{todo.task}</span>
      <button onClick={()=>dispatch({ type: ACTIONS.complete ,payload:{ id:todo.id }})}>Complete</button>
      <button onClick={()=>dispatch({ type: ACTIONS.delete ,payload:{ id:todo.id }})}> Delete</button>
    </div>
  )
}
