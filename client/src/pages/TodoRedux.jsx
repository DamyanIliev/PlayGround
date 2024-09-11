import React, { useState } from 'react'
import Menu from '../components/Menu'
import { useDispatch, useSelector } from 'react-redux'
import  { addNewTask, completeTask, deleteTask }  from '../redux/todoSlice'

const TodoRedux = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch();
    const todos = useSelector(state=>state.todos.tasks || [])
    const taskText = task

  return (
    <div className=''>
      <Menu/>
      <div className='flex justify-center mt-10'>
        <input className='border border-black p-2' value={task} onChange={(e)=>{setTask(e.target.value)}}/>
        <button className='border border-black p-2' onClick={()=>{dispatch(addNewTask(taskText))}}>Save</button>
      </div>
      <div className='flex-col'>
            {todos.map(todo => (
                <div className='mt-10' key={todo.id}>
                    <span className='border border-black p-2 px-16 mr-10' style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.task}</span>
                    <button className='border border-black p-4' onClick={() => dispatch(completeTask(todo.id))}>Complete</button>
                    <button className='border border-black p-4' onClick={() => dispatch(deleteTask(todo.id))}>Delete</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TodoRedux
