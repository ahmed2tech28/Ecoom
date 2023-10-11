import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './output.css'

import Home from './components/Home'
import Navbar from './common/Navbar'
import Cart from './components/Cart'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
