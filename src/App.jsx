import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Ofertas from './components/ofertas/Ofertas'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Ofertas />
    </>
  )
}

export default App