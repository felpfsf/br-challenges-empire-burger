import React from 'react'
import Cardapio from './components/cardapio/Cardapio'
import Comentarios from './components/comentarios/Comentarios'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Ofertas from './components/ofertas/Ofertas'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Ofertas />
      <Cardapio />
      <Comentarios />
    </>
  )
}

export default App