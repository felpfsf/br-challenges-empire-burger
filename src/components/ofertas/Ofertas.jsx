import React from 'react'
import iconRelogio from '/assets/icons/timer.svg'

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
        <div className='relative flex xl:row-span-2 rounded-[10px]'>
          <img className='' src="/assets/ofertas/oferta-1.png" alt="" />
          <div className='absolute top-3 left-2 lg:left-4'>
            <h2 className='main__card__oferta__title'>Burger Imperial+Batata</h2>
            <p className='main__card__oferta__sub'>250g</p>
          </div>
          <div className='absolute bottom-2 lg:bottom-4 right-4'>
            <h2 className='main__card__oferta__day flex flex-col'>Apenas <span>Hoje</span></h2>
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

      <div className='my-16 flex flex-col lg:flex-row items-center gap-7'>
        {/* Cartao de horário */}
        <div className='max-w-[571px] w-full py-5 px-3 rounded-[10px] bg-burgerPalette-red flex items-center gap-2'>
          <div className='card__img w-[73px] h-[73px] lg:w-[93px] lg:h-[93px] p-4 bg-burgerPalette-title_black_38/20'>
            {/* relogio */}
            <img src={iconRelogio} alt="" />
          </div>
          {/* divider */}
          {/* <div className='w-[1px] h-[68px] lg:h-[80px] bg-burgerPalette-title_black_38/40'></div> */}
          {/* horário de funcionmento */}
          <div className='border-l border-burgerPalette-title_black_38/40 p-1'>
            <h2 className='text-lg lg:text-2xl font-heading text-burgerPalette-title_black_38/70 uppercase'>Horário de Funcionamento</h2>
            <p className='text-card__horario__semana lg:font-bold lg:[&>*]:font-black text-white/[0.85]'>Segunda-feira a sexta-feira: <span>17h00 - 23h00</span></p>
            <p className='text-card__horario__semana lg:font-bold lg:[&>*]:font-black text-white/[0.85]'>Sabado a Domíngo: <span>18h00 - 23h00</span></p>
          </div>
        </div>

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