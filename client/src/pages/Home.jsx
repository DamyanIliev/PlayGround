import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='text-5xl'>Home</h1>
      <Link className='text underline text-blue-500' to="/usereducer">useReducer</Link>
    </div>
  )
}

export default Home
