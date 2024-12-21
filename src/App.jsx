import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Blog from './components/Blog'
function App() {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </div>
  )
  
}

export default App
