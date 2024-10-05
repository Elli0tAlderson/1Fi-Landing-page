import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/Home'

function App() {

  return (
    <>
    <Navbar/>
       {/* <div className="section">
        <p>hello this is me suryansh</p>
       </div> */}
    {/* <Footer/> */}
    <Home/>
    </>
  )
}

export default App
