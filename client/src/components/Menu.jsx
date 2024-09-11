import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='bg-green-950 w-screen h-16 flex justify-start items-center'>
        <div className='p-2'>
            <Link className='text underline text-blue-500' to="/">Home</Link>
        </div>
        <div className='p-2 flex flex-col'>
            <Link className='text underline text-blue-500' to="/usereducer">useReducer</Link>
            <Link className='text underline text-blue-500' to="/counterUsingRedux">CounterUsingRedux</Link>
        </div>
        <div className='p-2'>
          <Link className='text underline text-blue-500' to="/usereducer2">useReducer</Link>
        </div>
        <div className='p-2'>
          <Link className='text underline text-blue-500' to="/todo">ToDo List</Link>
        </div>
    </div>
  )
}

export default Menu
