import React from 'react'

const Cardapio = () => {
  return (
    <section className='w-screen bg-burgerPalette-beige'>
      <div className="section__content flex flex-col">
        {/* Call */}
        <div className='w-full m-auto px-6 py-10 bg-[url("/assets/banner-menu-mobile.png")] lg:bg-[url("/assets/banner-menu.png")] bg-no-repeat' >
          {/* <img src="/assets/banner-menu-mobile.png" alt="" /> */}
          <div className=''>
            <h1 className='main__title text-2xl [&>*]:text-burgerPalette-brown [&>*]:bg-burgerPalette-yellow [&>*]:p-2 [&>*]:rounded-md'>Escolha o seu combo imperial, <span>peça agora!</span></h1>
            <p className='mt-2 text-sm'>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</p>
            <a className='mt-2 contact__button w-52 h-11 text-white bg-burgerPalette-red' href="#">Ver Cardápio Completo</a>
          </div>
        </div>
        {/* Cardapio */}
        <div className='h-[465px] bg-burgerPalette-brown'>
          {/* API */}
          API do menu aqui
        </div>
      </div>
    </section>
  )
}

export default Cardapio