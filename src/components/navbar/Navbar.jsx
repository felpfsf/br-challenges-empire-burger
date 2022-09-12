import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import iconWhatsapp from '/assets/icons/whatsapp.svg'
import iconIFood from '/assets/icons/ifood.svg'
import iconInstagram from '/assets/icons/instagram.svg'

const Navbar = () => {
  const [menu, setMenu] = useState()

  const handleNavButton = () => { setMenu(!menu) }

  return (
    <header className="header__section">
      <div className="section__content flex items-center lg:justify-between">

        <img src="/assets/logo.png" alt="" className="ml-6 lg:ml-[0px]" />
        <nav className="hidden mr-6 xl:flex items-center">
          <ul className="text-lg flex gap-4">
            <li className="">
              <a onClick={() => setMenu(false)} href='#' className="menu__text">Home</a>
            </li>
            <li className="">
              <a onClick={() => setMenu(false)} href='#' className="menu__text">Promoção</a>
            </li>
            <li className="">
              <a onClick={() => setMenu(false)} href='#cardapio' className="menu__text">Cardápio</a>
            </li>
            <li className="">
              <a onClick={() => setMenu(false)} href='#' className="menu__text">Comentários</a>
            </li>
            <li className="">
              <a onClick={() => setMenu(false)} href='#' className="menu__text">Contato</a>
            </li>
          </ul>
          {/* Social Links */}
        </nav>
        <div className="hidden pr-20 xl:flex items-center gap-3">
          <a href="#"><img src={iconIFood} alt="" className="w-8" /></a>
          <a href="#"><img src={iconInstagram} alt="" className="w-8" /></a>
          <div className="w-[1px] h-10 bg-[#B50B04]"></div>
          <a href="#" className="contact__button"><span><img src={iconWhatsapp} alt="" className="w-5" /></span>Contato</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu ?
        <div className="hamb__menu__box">
          <AiOutlineClose onClick={handleNavButton} className="mob__menu__icon" />
        </div>
        :
        <div className="hamb__menu__box">
          <AiOutlineMenu onClick={handleNavButton} className="mob__menu__icon" />
        </div>
      }
      <nav className={
        menu ?
          ('menu__mobile__on')
          :
          ('menu__mobile__off')
      }
      >
        <ul className="text-lg text-white">
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="menu__text">Home</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="menu__text">Promoção</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#cardapio' className="menu__text">Cardápio</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="menu__text">Comentários</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="menu__text">Contato</a>
          </li>
        </ul>
        {/* Social Links */}
        <div className="m-4 flex flex-col gap-3">
          <a href="#"><img src={iconIFood} alt="" className="w-12" /></a>
          <a href="#"><img src={iconInstagram} alt="" className="w-12" /></a>
          <div className="w-[90%] h-[1px] bg-black"></div>
          <a href="#" className="contact__button ">
            <img src={iconWhatsapp} alt="" className="w-5" />
            <span>Contato</span>
          </a>
        </div>
      </nav>
    </header >
  )
}

export default Navbar