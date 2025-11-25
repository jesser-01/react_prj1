import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Section from './Section'
import Hello from './hello'
import Text from './Text'
function App() {

  return (
    <>
      
      <Navbar/>
      <Section/>
      <Hello/>
      <Text/>
    </>
  )
}

export default App
