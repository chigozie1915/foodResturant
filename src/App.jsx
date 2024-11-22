
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Menu from './components/Pages/Menu'
import Pagenotfound from './components/Pages/Pagenotfound'




function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='*' element={<Pagenotfound />}/>     
      </Routes>
    </div>
  )
}

export default App
