import React, { useState } from 'react'
import { useEffect } from 'react'
import { client } from '../../data/api'


const Comentarios = () => {
  const [depoimento, setDepoimento] = useState([])

  useEffect(() => {
    client.get('testimonials').then(response => {
      setDepoimento(response.data)
    })
  }, [client])

  return (
    <section id="comentarios" className='section__content px-6 lg:px-0 mb-6'>
      {/* Banner Comentarios */}
      <div className='w-full mt-12 lg:mt-[70px] flex flex-col lg:flex-row items-center gap-4'>
        <div className='w-fit'>
          <img src="/assets/card-woman-eating.png" alt="" />
        </div>
        <div className='lg:w-[30%] lg:mt-[10vh]'>
          {/* Content */}
          <h2 className='cardapio__cta__title'>Atendimento <br /><span>Personalizado</span></h2>
          <p className='mt-2 text-burgerPalette-title_black_38/70'>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
          <a className='cardapio__cta__button w-fit lg:text-2xl py-[10px] px-[20px]' href="#">Cardápio Imperial</a>
        </div>
      </div>
      {/* Divider */}
      <div className='h-[1px] w-full my-16 lg:my-32 bg-burgerPalette-title_black_38/[.15]'></div>
      {/* Depoimentos */}
      <div>
        <h2 className='font-heading text-2xl lg:text-[32px] uppercase text-burgerPalette-title_black_38/90'>Nossa Realeza</h2>
        <p className='text-sm lg:text-base text-burgerPalette-title_black_38/70'>A satisfação de nossos clientes em primeiro lugar!</p>
        {/* Cards */}
        <div className='mt-4'>
          {/* Card */}
          {/* {depoimento.map(item => (
            <div key={JSON.stringify(item)} className='lg:w-96 bg-white p-4 rounded-xl drop-shadow-cardTestimonials'>
              <p className='line-clamp-4 text-burgerPalette-title_black_38/70'>
                {item.testimonial}
              </p>
              <div className='mt-5 flex items-center gap-2'>
                <img className='rounded-full w-12 aspect-square' src={item.image} alt="" />
                <div>
                  <h4 className='font-heading text-lg uppercase text-burgerPalette-title_black_38/90 leading-none'>
                    {item.name}
                  </h4>
                  <p className='text-burgerPalette-title_black_38/70'>{item.age} anos</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  )
}

export default Comentarios