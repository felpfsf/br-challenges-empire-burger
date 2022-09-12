import iconRelogio from '/assets/icons/timer.svg'


const WorkshiftCard = ({ turn }) => {
  console.log(turn);
  return (
    <>
      {/* Cartao de horário */}
      <div className={
        turn ?
          'card__workshift__open'
          :
          'card__workshift__closed'
      }>
        <div className='card__workshift__timmer'>
          {/* relogio */}
          <img src={iconRelogio} alt="" />
        </div>
        {/* divider */}
        <div className='w-[1px] h-[68px] lg:h-[80px] bg-burgerPalette-title_black_38/40'></div>
        {/* horário de funcionmento */}
        <div className=''>
          <h2 className='card__workshift__tittle'>Horário de Funcionamento</h2>
          <p className='card__workshift__dayshift'>Segunda-feira a sexta-feira: <span>17h00 - 23h00</span></p>
          <p className='card__workshift__dayshift'>Sabado a Domíngo: <span>18h00 - 23h00</span></p>
        </div>
      </div>
    </>
  )
}

export default WorkshiftCard