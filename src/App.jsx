import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Utilities/Navbar'
import About from './Pages/About'
import Card from './Components/Utilities/Card'
import Projects from './Pages/Projects'
import Contacts from './Pages/Contacts'

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App