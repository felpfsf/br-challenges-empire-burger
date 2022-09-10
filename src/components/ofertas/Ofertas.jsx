import React from 'react'

const Ofertas = () => {
  return (
    <section className='section__content p-6 xl:p-0'>
      <div className='mt-16'>
        <h1 className='section__ofertas__title'>Ofertas Especiais</h1>
        <p className='section__ofertas__sub'>Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque sempre estamos mudando o nosso cardapio.</p>
      </div>

      {/* Grid */}
      <div className='grid__ofertas'>

        {/* grid card 1 */}
        <div className='relative flex xl:row-span-2'>
          <img className='' src="/assets/ofertas/oferta-1.png" alt="" />
          <div className='absolute top-3 left-4'>
            <h2 className='main__card__oferta__title'>Burger Imperial+Batata</h2>
            <p className='main__card__oferta__sub'>250g</p>
          </div>
          <div className='absolute bottom-8 right-6'>
            <h2 className='main__card__oferta__day'>Apenas <br /><span>Hoje</span></h2>
          </div>
        </div>

        {/* grid card 2 */}
        <div className='relative flex'>
          <img className='' src="/assets/ofertas/oferta-2.png" alt="" />
          <div className='absolute top-3 left-4'>
            <h3 className='sub__card__oferta_title'>Batata</h3>
            <p className='sub__card__oferta_sub'>150g</p>
          </div>
        </div>
        
        {/* grid card 3 */}
        <div className='relative flex'>
          <img className='' src="/assets/ofertas/oferta-3.png" alt="" />
          <div className='absolute top-3 left-4'>
            <h3 className='sub__card__oferta_title'>Sorvete</h3>
            <p className='sub__card__oferta_sub'>50g</p>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        Cartao de horário
      </div>

    </section>
  )
}

export default Ofertas