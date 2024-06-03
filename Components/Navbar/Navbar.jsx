import React, { useState } from 'react'
import images from '../../src/constants/images'
import "./navbar.css"
import { useTranslation } from 'react-i18next'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const languages = localStorage.getItem("i18nextLng");
  const {t, i18n} = useTranslation();


  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage)
  }
  return (
    <nav className='nav__navbar'>
      <div className="container">
    <div className="navbar_container">
    <div className="navbar__logo">
            <a href="#home"><img src={images.navbarLogo} className='navbarLogo' alt="" /></a>
        </div>
        <ul className='nav__navbar__links'>
         <li className='li__text_navbar'><a href="#home">{t('home')}</a></li>
         <li className='li__text_navbar'><a href="#about">{t('about')}</a></li>
         <li className='li__text_navbar'><a href="#tour">{t("tour")}</a></li>
         <li className='li__text_navbar'><a href="#contact">{t("contact")}</a></li>
        </ul>

        <div className="nav__navbar_left">
        <select name="lng" id="Lng" className='selectNavbar' onChange={handleChange} value={languages}>
          <option value="uz">Uzbek</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
        </div>
    </div>

        <div className="nav__navbar__smallScreen">
           <GiHamburgerMenu color='#fff' fontSize={27} className='overlay_close_second' cursor={"pointer"} onClick={()=> setToggle(true)}/>
           {toggle && ( 
            <>
              <div className="nav__navbar__links_menu">
                 <MdOutlineRestaurantMenu fontSize={27} cursor={"pointer"} className='overlay_close' onClick={()=> setToggle(false)}/>
                 <ul className='nav__navbar__links_small'>
                  <li className='li__text_navbar'><a href="#home" onClick={()=> setToggle(false)}>{t("home")}</a></li>
                  <li className='li__text_navbar'><a href="#about" onClick={()=> setToggle(false)}>{t("about")}</a></li>
                  <li className='li__text_navbar'><a href="#tour" onClick={()=> setToggle(false)}>{t("tour")}</a></li>
                  <li className='li__text_navbar'><a href="#contact" onClick={()=> setToggle(false)}>{t("contact")}</a></li>
                </ul>
              </div>
            </>
           )}
        </div>
        </div>
    </nav>
  )
}

export default Navbar
