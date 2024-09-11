import React from 'react'
import { useState, useReducer } from 'react'
import Menu from '../components/Menu'

const ACTIONS ={
    increment: 'increment',
    decrement: 'decrement',
}

function reducer(state, action){
    switch (action.type){
        case ACTIONS.increment:
            return { count:state.count+1}
        case ACTIONS.decrement: 
            return { count:state.count-1}
        default:
            return state
    }
}

function UseReducer() {

    const initialState= { count: 0 };

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleDecres = ()=>{
        dispatch({type:ACTIONS.decrement});
        
    }
    const handleIncreace = ()=>{
        dispatch({type:ACTIONS.increment});
    }

  return (
    <div>
        <Menu/>
        <div className='w-screen h-screen bg-slate-300 p-10'>
            <div className=' flex items-center justify-center'>
                <button className=' w-[50px] border border-red-600 text-red-600 text-5xl p-2 m-6' onClick={handleDecres}>-</button>
                <p className='text-3xl'>{state.count}</p>
                <button className='border border-green-500 text-green-500 text-5xl p-2 m-6'  onClick={handleIncreace}>+</button>
            </div>
        </div>
    </div>
  )
}

export default UseReducer
