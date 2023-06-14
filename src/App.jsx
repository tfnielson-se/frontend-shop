import { useState } from 'react'
import './App.css'
import Home from './components/home'
import NavBar from './components/NavBar'

function App() {


  return (
    <section className='m-5'>
        <NavBar/>
      <Home />
    </section>
  )
}

export default App
