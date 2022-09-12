import React from 'react'
import SalesCards from '../ui/cards/ofertas/SalesCards'
import WorkshiftCard from '../ui/cards/workshift/WorkshiftCard'
import iconRelogio from '/assets/icons/timer.svg'

const Ofertas = () => {
  const isOpen = false
  return (
    <section className='section__content p-4 xl:p-0'>
      <div className='mt-16'>
        <h1 className='section__ofertas__title'>Ofertas Especiais</h1>
        <p className='section__ofertas__sub'>Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque sempre estamos mudando o nosso cardapio.</p>
      </div>

      {/* Grid */}
      <div className='grid__ofertas'>

        {/* grid card 1 */}
        <SalesCards dayOffer={true} />

        {/* grid card 2 */}
        <SalesCards dayOffer={false} id={2} />

        {/* grid card 3 */}
        <SalesCards dayOffer={false} id={3} />

      </div>

      <div className='my-16 flex flex-col lg:flex-row items-center gap-7'>
        {/* Cartao de horário */}
        <WorkshiftCard turn={isOpen}/>

        {/* hashtag */}
        <div className='text-center lg:text-left'>
          <p className='text-lg text-burgerPalette-title_black_38/70'>Não esqueça de marcar a gente no Instagram:</p>
          <h2 className='text-3xl lg:text-[42px] font-heading uppercase text-burgerPalette-red'>#empireburger </h2>
        </div>

      </div>

    </section>
  )
}

export default Ofertas