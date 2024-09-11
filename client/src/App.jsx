import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UseReducer from './pages/UseReducer'
import UseReducer2 from './pages/UseReducer2'
import Todo from './pages/Todo'
import CounterUsingRedux from './pages/CounterUsingRedux'
import TodoRedux from './pages/TodoRedux'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/usereducer' element={<UseReducer/>}/>
        <Route path='/counterUsingRedux' element={<CounterUsingRedux/>}/>
        <Route path='/usereducer2' element={<UseReducer2/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/todoredux' element={<TodoRedux/>}/>
      </Routes>
  )
}

export default App
