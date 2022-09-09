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
    <header className="fixed w-full h-16 px-6 bg-burgerPalette-brown/5 flex items-center justify-between sm:justify-around">
      <img src="/assets/logo.png" alt="" className=""/>
      <nav className="hidden sm:flex items-center">
        <ul className="text-lg flex">
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="hover:text-burgerPalette-title_black_87 hover:font-bold">Home</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="hover:text-burgerPalette-title_black_87 hover:font-bold">Promoção</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="hover:text-burgerPalette-title_black_87 hover:font-bold">Cardápio</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="hover:text-burgerPalette-title_black_87 hover:font-bold">Comentários</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="hover:text-burgerPalette-title_black_87 hover:font-bold">Contato</a>
          </li>
        </ul>
        {/* Social Links */}
        <div className="m-4 flex items-center gap-3">
          <a href="#"><img src={iconIFood} alt="" className="w-8" /></a>
          <a href="#"><img src={iconInstagram} alt="" className="w-8" /></a>
          <div className="w-[1px] h-10 bg-[#B50B04]"></div>
          <a href="#" className="w-32 h-8 font-bold text-burgerPalette-title_black_87 bg-burgerPalette-yellow rounded flex items-center justify-center gap-2"><span><img src={iconWhatsapp} alt="" className="w-5" /></span>Contato</a>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menu ?
        <div className="z-10 sm:hidden w-[30px] h-[30px] bg-burgerPalette-title_black_38/10 flex items-center justify-center">
          <AiOutlineClose onClick={handleNavButton} className="w-6 h-6 cursor-pointer" />
        </div>
        :
        <div className="z-10 sm:hidden w-[30px] h-[30px] bg-burgerPalette-title_black_38/10 flex items-center justify-center">
          <AiOutlineMenu onClick={handleNavButton} className="w-6 h-6 cursor-pointer" />
        </div>
      }
      <nav className={
        menu ?
          ('fixed top-0 right-0 h-screen w-[75%] pl-8 pt-28 bg-burgerPalette-title_black_38/10 backdrop-blur-lg ease-in-out duration-200 flex flex-col')
          :
          ('fixed top-0 right-[-100%] h-screen w-[75%] pl-8 pt-28 bg-burgerPalette-title_black_38/10 backdrop-blur-lg ease-in-out duration-200 flex flex-col')
      }
      >
        <ul className="text-lg">
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="hover:text-burgerPalette-title_black_87 hover:font-bold">Home</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="hover:text-burgerPalette-title_black_87 hover:font-bold">Promoção</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="hover:text-burgerPalette-title_black_87 hover:font-bold">Cardápio</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="hover:text-burgerPalette-title_black_87 hover:font-bold">Comentários</a>
          </li>
          <li className="m-4">
            <a onClick={() => setMenu(false)} href='#' className="hover:text-burgerPalette-title_black_87 hover:font-bold">Contato</a>
          </li>
        </ul>
        {/* Social Links */}
        <div className="m-4 flex flex-col gap-3">
          <a href="#"><img src={iconIFood} alt="" className="w-12" /></a>
          <a href="#"><img src={iconInstagram} alt="" className="w-12" /></a>
          <div className="w-[90%] h-[1px] bg-black"></div>
          <a href="#" className="w-32 h-8 font-bold text-burgerPalette-title_black_87 bg-burgerPalette-yellow rounded flex items-center justify-center gap-2"><span><img src={iconWhatsapp} alt="" className="w-5" /></span>Contato</a>
        </div>
      </nav>
    </header >
  )
}

export default Navbar