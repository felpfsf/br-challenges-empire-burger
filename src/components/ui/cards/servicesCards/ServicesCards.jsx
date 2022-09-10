
const ServicesCards = ({ icon, title, info }) => {
  return (
    <>
      <div className='card'>
        <div className='card__img'>
          <img src={icon} alt="" className='' />
        </div>
        <div className='card__content'>
          <h1 className='card__title'>{title}</h1>
          <p className='card__text'>
            {info}
          </p>
        </div>
      </div>
    </>
  )
}

export default ServicesCards