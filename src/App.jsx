import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Utilities/Navbar'
import About from './Pages/About'

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App