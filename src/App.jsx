import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/Home/Home'
import Projects from './components/Project/Project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App