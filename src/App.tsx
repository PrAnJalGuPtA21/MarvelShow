
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Store from './components/Store/Store'
import "./App.css"
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="home" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="store" element={<Store/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
