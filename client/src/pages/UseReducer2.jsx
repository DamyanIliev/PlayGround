import React, { useReducer } from 'react'
import Menu from '../components/Menu';

const ACTIONS={
    decreceby10: 'decreceby10',
    decrece: 'decrece',
    increce: 'increce',
    increceby10: 'increceby10'
}

 function reducer(state, action){
    switch (action.type) {
        case ACTIONS.decreceby10:
            return {count: state.count - 10};
        case ACTIONS.decrece:
            return {count: state.count - 1};
        case ACTIONS.increce:
            return {count: state.count + 1};
        case ACTIONS.increceby10:
            return {count: state.count + 10};
        default:
            return state
    }
 }

const UseReducer2 = () => {

    const initialState = { count: 0}

    const[state,dispatch] = useReducer(reducer, initialState)

    const handleDecresBy10 = () =>{
        dispatch({type:ACTIONS.decreceby10})
    }
    const handleDecres = () =>{
        dispatch({type:ACTIONS.decrece})
    }
    const handleIncreace = () =>{
        dispatch({type:ACTIONS.increce})
    }
    const handleIncreaceBy10 = ()=>{
        dispatch({type:ACTIONS.increceby10})
    }


  return (
    <div>
      <Menu/>
        <div className='w-screen h-screen bg-slate-300 p-10'>
            <div className=' flex items-center justify-center'>
            <button className=' w-[100px] border border-red-600 text-red-600 text-5xl p-2 m-6' onClick={handleDecresBy10}>--</button>
                <button className=' w-[50px] border border-red-600 text-red-600 text-5xl p-2 m-6' onClick={handleDecres}>-</button>
                <p className='text-3xl'>{state.count}</p>
                <button className='border border-green-500 text-green-500 text-5xl p-2 m-6'  onClick={handleIncreace}>+</button>
                <button className='border border-green-500 text-green-500 text-5xl p-2 m-6'  onClick={handleIncreaceBy10}>++</button>
            </div>
        </div>
    </div>
  )
}

export default UseReducer2
