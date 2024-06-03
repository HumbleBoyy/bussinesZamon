import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import Tour from '../Components/Tour/Tour'
import Contact from '../Components/Contact/Contact'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Tour/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
