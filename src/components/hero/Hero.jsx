import React from 'react'
import iconBurger from '/assets/icons/burger.svg'
import iconHeadset from '/assets/icons/headset.svg'
import iconDelivery from '/assets/icons/delivery.svg'

const Hero = () => {
  return (
    <section className='hero__section'>
      <div className="section__content py-24 lg:py-36 leading-tight">
        <h2 className='hero__subTitle'>Uma nova experiência!</h2>
        <h1 className='main__title'>King <span>burger</span></h1>
        <p className='hero__paragraph'>Para quem tem um <span>Apetite de um REI!</span></p>
        <a href='#' className='contact__button bg-burgerPalette-red text-white w-[150px] h-11 mt-4 xl:mt-6'>Comprar Agora</a>
      </div>
      {/* Cards */}
      <div className='cards'>

        {/* Card */}
        <div className='card'>
          <div className='card__img'>
            <img src={iconBurger} alt="" className='' />
          </div>
          <div className='card__content'>
            <h1 className='card__title'>Artesanal</h1>
            <p className='card__text'>Nossas receitas são feitas com todo cuidado</p>
          </div>
        </div>

        {/* Card */}
        <div className='card'>
          <div className='card__img'>
            <img src={iconHeadset} alt="" className='' />
          </div>
          <div className='card__content'>
            <h1 className='card__title'>Atendimento</h1>
            <p className='card__text'>
              Totalmente personalizado
            </p>
          </div>
        </div>

        {/* Card */}
        <div className='card border-none'>
          <div className='card__img'>
            <img src={iconDelivery} alt="" className='' />
          </div>
          <div className='card__content'>
            <h1 className='card__title'>Delivery Speed</h1>
            <p className='card__text'>
              Entregamos menos de 30 minutos
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero