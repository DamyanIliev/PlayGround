import React, { useState } from 'react'
import Menu from '../components/Menu'
import {useDispatch, useSelector} from 'react-redux'
import { decreace, increace, reset, increaceByInputVal} from '../redux/counterSlice'

const CounterUsingRedux = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.counter.count)
    const [increaceBy, setIncreaceBy] = useState(0);
    const increaceByNumber = Number(increaceBy) || 0;
    const resetAll = () => {
        setIncreaceBy(0);
        dispatch(reset())
    }

  return (
    <div>
      <Menu/>
      <div className=' text-5xl flex  justify-center p-5'>
        <button className='p-3 border border-black ' onClick={()=>dispatch(increace())}>+</button>
        <div className='p-3'>{count}</div>
        <button className='p-3 border border-black' onClick={()=>dispatch(decreace())}>-</button>
      </div>
      <div className=' text-5xl flex  justify-center p-5'>
        <div>
            <button className='border border-black mr-5 p-4 ' onClick={()=>dispatch(increaceByInputVal(increaceByNumber))}>ADD</button>
            <input className=' border border-black w-24' value={increaceBy} onChange={(e)=>{setIncreaceBy(e.target.value)}}/>
            <button className='border border-black p-4 ml-5' onClick={resetAll}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default CounterUsingRedux
