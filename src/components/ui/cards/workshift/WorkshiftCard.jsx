import iconRelogio from '/assets/icons/timer.svg'


const WorkshiftCard = ({ turn }) => {
  console.log(turn);
  return (
    <>
      {/* Cartao de horário */}
      <div className={
        turn ?
          'max-w-[571px] w-full py-2 lg:py-5 px-1 lg:px-3 rounded-[10px] bg-green-600 flex items-center gap-2'
          :
          'max-w-[571px] w-full py-2 lg:py-5 px-1 lg:px-3 rounded-[10px] bg-burgerPalette-red flex items-center gap-2'
      }>
        <div className='card__img w-[73px] h-[73px] lg:w-[93px] lg:h-[93px] p-4 bg-burgerPalette-title_black_38/20'>
          {/* relogio */}
          <img src={iconRelogio} alt="" />
        </div>
        {/* divider */}
        <div className='w-[1px] h-[68px] lg:h-[80px] bg-burgerPalette-title_black_38/40'></div>
        {/* horário de funcionmento */}
        <div className=''>
          <h2 className='text-lg lg:text-2xl font-heading text-burgerPalette-title_black_38/70 uppercase'>Horário de Funcionamento</h2>
          <p className='text-card__horario__semana lg:font-bold lg:[&>*]:font-black text-white/[0.85]'>Segunda-feira a sexta-feira: <span>17h00 - 23h00</span></p>
          <p className='text-card__horario__semana lg:font-bold lg:[&>*]:font-black text-white/[0.85]'>Sabado a Domíngo: <span>18h00 - 23h00</span></p>
        </div>
      </div>
    </>
  )
}

export default WorkshiftCard