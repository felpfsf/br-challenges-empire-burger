import React, { useState } from 'react'
import { useEffect } from 'react'

import { client } from '../../data/api'

const Cardapio = () => {
  const [plate, setPlate] = useState([])

  useEffect(() => {
    client.get('menu').then(response => {
      setPlate(response.data)
    })
  }, [])

  const formatPrice = (price) => {
    const fmtdPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
    return fmtdPrice
  }

  return (
    <section id='cardapio' className='w-screen bg-burgerPalette-beige'>
      <div className="w-full flex flex-col lg:flex-row">
        {/* Call */}
        <div className='cardapio__cta__container' >
          {/* <img src="/assets/banner-menu-mobile.png" alt="" /> */}
          <div className='cardapio__cta__content'>
            <h1 className='cardapio__cta__title'>Escolha o seu combo imperial, <span>peça agora!</span></h1>
            <p className='cardapio__cta__subtitle'>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</p>
            <a className='cardapio__cta__button' href="#">Ver Cardápio Completo</a>
          </div>
        </div>
        {/* Cardapio */}
        <div className='cardapio__menu'>
          <h2 className='cardapio__menu__title'>Nossa especialidade</h2>
          <h2 className='hidden lg:block cardapio__menu__title'>Cardápio imperial | Burger</h2>
          {/* API */}
          {plate.map((item) => (
            <div key={JSON.stringify(item)} className='cardapio__plate '>
              <h3 className='cardapio__plate__name'>{item.plate}
                <span>
                  {formatPrice(item.price)}
                </span>
              </h3>
              <p className='cardapio__plate__ingrd'>{item.ingredients}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Cardapio