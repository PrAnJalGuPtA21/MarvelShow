
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Store from './components/Store/Store'
import Contact from './components/Contact/Contact'
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
      <Route path="contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
