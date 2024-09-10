import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UseReducer from './pages/UseReducer'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='//usereducer' element={<UseReducer/>}/>
      </Routes>
  )
}

export default App
