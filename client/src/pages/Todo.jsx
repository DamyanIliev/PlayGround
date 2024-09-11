import React, { useReducer, useState } from 'react'
import Menu from '../components/Menu'
import TodoList from '../components/TodoList'

export const ACTIONS={
    newTodo:'NewTodo',
    complete:'Complete',
    delete:'delete'
}

function reducer(state, action){
    switch (action.type) {
        case ACTIONS.newTodo:
            return[...state, addNewTodo(action.payload.task)]
        case ACTIONS.complete:
            return state.map(state=>{
                if(state.id === action.payload.id){
                    return{...state, complete: !state.complete}
                }
                return state
            })
        case ACTIONS.delete:
            return state.filter(state=> state.id !== action.payload.id)
        default:
            return state;
    }
}

function addNewTodo(task){
    return {id: Date.now + Math.random(), task:task, complete: false}
}
const Todo = () => {

    const [task, setTask]= useState('')
    const initialState = [];
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:ACTIONS.newTodo, payload: { task: task}})
        setTask('')
    }
    

  return (
    <div>
        <Menu/>
        <div>
            <form className='' onSubmit={handleSubmit}>
                <input className='border border-black' type='text' value={task} onChange={e => setTask(e.target.value)}/>
                <button>Save</button>
            </form>

            <div>{state.map(state=>{
                return <TodoList key = {state.id + Math.random()} todo={state} dispatch={dispatch}/>
            })}</div>
        </div>
    </div>
  )
}

export default Todo
