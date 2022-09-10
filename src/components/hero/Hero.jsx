import ServicesCards from '../ui/cards/servicesCards/ServicesCards'

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
        <ServicesCards icon={iconBurger} title={'Artesanal'} info={'Nossas receitas são feitas com todo cuidado'} />

        {/* Card */}
        <ServicesCards icon={iconHeadset} title={'Atendimento'} info={'Totalmente personalizado'} />

        {/* Card */}
        <ServicesCards icon={iconDelivery} title={'Delivery Speed'} info={'Entregames em menos de 45 minutos'} />

      </div>
    </section>
  )
}

export default Hero