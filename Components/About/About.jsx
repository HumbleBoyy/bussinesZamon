import React from 'react'
import "./about.css"
import { useTranslation } from 'react-i18next';
import images from '../../src/constants/images';
import AboutSecond from '../AboutSecon/AboutSecond';

const About = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <section className='about' id='about'>
        <div className="container">
         <div className="about_section_main">
            <div className="about_section_title">
              <h2>{t("aboutSec")}</h2>
              <p>{t("aboutDescrib")}</p>
            </div>

            <div className="about_section_items">
               <div className="about_image">
                 <img className='about_image' src={images.train} alt="" />
               </div>

               <div className="about_text_items">
                <div className="about_text_items_header">
                   <div className="aboutText_item">
                      <h2>{t("railway")}</h2>
                      <p>{t("whole")}</p>
                   </div>
                  <div>
                  <a href="#contact"><button className='about_button'>{t("explore")}</button></a>
                  </div>
                </div>
                <p className='large_text_about'>{t("embark")}</p>
               </div>

               
            </div>
            <div className='line'></div>
            <div className="about_section_items">
               <div className="about_image">
                 <img className='about_image' src={images.plane} alt="" />
               </div>

               <div className="about_text_items">
                <div className="about_text_items_header">
                   <div className="aboutText_item">
                      <h2>{t("airplanea")}</h2>
                      <p>{t("whole")}</p>
                   </div>
                  <div>
                  <a href="#contact"><button className='about_button'>{t("explore")}</button></a>
                  </div>
                </div>
                <p className='large_text_about'>{t("embarktwo")}</p>
               </div>

               
            </div>
         </div>
         <div className='line'></div>
         </div>
      </section>
     
      <AboutSecond/>
    </>
  )
}

export default About
