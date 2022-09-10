import React from 'react'

const SalesCards = ({ dayOffer, id }) => {
  // Stupid solution for a problem that doesn't exist, but I really enojoyd doing this 
  return (
    <>
      {dayOffer ?

        < div className='relative flex xl:row-span-2 rounded-[10px]'>
          <img className='' src="/assets/ofertas/oferta-1.png" alt="" />
          <div className='absolute top-3 left-2 lg:left-4'>
            <h2 className='main__card__oferta__title'>Burger Imperial+Batata</h2>
            <p className='main__card__oferta__sub'>250g</p>
          </div>
          <div className='absolute bottom-2 lg:bottom-4 right-4'>
            <h2 className='main__card__oferta__day flex flex-col'>Apenas <span>Hoje</span></h2>
          </div>
        </div>

        : id == 2 ?
          <>
            <div className='relative flex'>
              <img className='' src="/assets/ofertas/oferta-2.png" alt="" />
              <div className='absolute top-3 left-4'>
                <h3 className='sub__card__oferta_title'>Batata</h3>
                <p className='sub__card__oferta_sub'>150g</p>
              </div>
            </div>
          </>
          :
          <>
            <div className='relative flex'>
              <img className='' src="/assets/ofertas/oferta-3.png" alt="" />
              <div className='absolute top-3 left-4'>
                <h3 className='sub__card__oferta_title'>Sorvete</h3>
                <p className='sub__card__oferta_sub'>50g</p>
              </div>
            </div>
          </>
      }

    </>
  )
}

export default SalesCards