import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Feature from './components/Feature'
import LocomotiveScroll from 'locomotive-scroll'

const App = () => {

  const locomotiveScroll = new LocomotiveScroll(); 
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
       <NavBar/>
       <LandingPage/>
       <Marquee/>
       <About/>
       <Eye/>
       <Feature/>
    </div>
  )
}

export default App
