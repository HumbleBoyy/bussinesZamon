import React from 'react'
import "./aboutsecond.css"
import { useTranslation } from 'react-i18next';
import images from '../../src/constants/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,faHouse,faMapLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from './Slider/Slider';
const AboutSecond = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
    <section className='aboutSecond'>
      <div className="container">
        <div className="aboutSecond_items">
            <div className="aboutSecond_title">
              <h2>{t("aboutContinues")}</h2>
              <p>{t("aboutOffers")}</p>
            </div>


            <div className="aboutSecondItems_Info">
              <div className="aboutSecond_image">
                 <img src={images.ancient} alt="" />
              </div>
              
               <div className="aboutSecondItems_info_header">
                  <div className="country_name">
                     <div className='inner_dive_title'>
                     <h2>{t("city")}</h2>
                     <p>{t("uzbekistan")}</p>
                     </div>
                     <a href="#contact"><button className='aboutSecond_btn'>{t("explore")}</button></a>
                  </div>
                  <div className="description_city">
                     <p>{t("samarkandInfo")}</p>
                  </div>
                    <div className="linetwo"></div>

                  <div className="city_info_numbers">
                     <div className="populaton_money">
                       <FontAwesomeIcon icon={faUsers} className='AboutFontAwesomeIcon'/>
                       <p>1.000.000Mil</p>
                     </div>
                     <div className="populaton_money">
                       <FontAwesomeIcon icon={faMapLocationDot} className='AboutFontAwesomeIcon'/>
                       <p>16,773km²</p>
                     </div>
                     <div className="populaton_money">
                       <FontAwesomeIcon icon={faHouse} className='AboutFontAwesomeIcon'/>
                       <p>$120.000</p>
                     </div>
                  </div>
                  <div className="linetwo"></div>
                  <div className="link_to_contact">
                    <a href="#contact">{t("needD")}</a>
                    <FontAwesomeIcon icon={faArrowRight} className='AboutFontAwesomeIcon'/>
                  </div>
               </div>
            </div>
            
            <div className="aboutSecondItems_Info">
              <div className="aboutSecond_image">
                 <img src={images.cairo} alt="" />
              </div>
              
               <div className="aboutSecondItems_info_header">
                  <div className="country_name">
                     <div className='inner_dive_title'>
                     <h2>{t("cairo")}</h2>
                     <p>{t("egypt")}</p>
                     </div>
                     <a href="#contact"><button className='aboutSecond_btn'>{t("explore")}</button></a>
                  </div>
                  <div className="description_city">
                     <p>{t("cairoInfo")}</p>
                  </div>
                    <div className="linetwo"></div>

                  <div className="city_info_numbers">
                     <div className="populaton_money">
                       <FontAwesomeIcon icon={faUsers} className='AboutFontAwesomeIcon'/>
                       <p>10.248.000Mil</p>
                     </div>
                     <div className="populaton_money">
                       <FontAwesomeIcon icon={faMapLocationDot} className='AboutFontAwesomeIcon'/>
                       <p>2,734km²</p>
                     </div>
                     <div className="populaton_money">
                       <FontAwesomeIcon icon={faHouse} className='AboutFontAwesomeIcon'/>
                       <p>$180.000</p>
                     </div>
                  </div>
                  <div className="linetwo"></div>
                  <div className="link_to_contact">
                    <a href="#contact">{t("needD")}</a>
                    <FontAwesomeIcon icon={faArrowRight} className='AboutFontAwesomeIcon'/>
                  </div>
               </div>
            </div>
            <div className="aboutSecondItems_Info">
              <div className="aboutSecond_image">
                 <img src={images.nightdubai} alt="" />
              </div>
              
               <div className="aboutSecondItems_info_header">
                  <div className="country_name">
                     <div className='inner_dive_title'>
                     <h2>{t("dubai")}</h2>
                     <p>{t("uae")}</p>
                     </div>
                     <a href="#contact"><button className='aboutSecond_btn'>{t("explore")}</button></a>
                  </div>
                  <div className="description_city">
                     <p>{t("dubaiInfo")}</p>
                  </div>
                    <div className="linetwo"></div>

                  <div className="city_info_numbers">
                     <div className="populaton_money">
                       <FontAwesomeIcon icon={faUsers} className='AboutFontAwesomeIcon'/>
                       <p>3.604.000Mil</p>
                     </div>
                     <div className="populaton_money">
                       <FontAwesomeIcon icon={faMapLocationDot} className='AboutFontAwesomeIcon'/>
                       <p>1,994km²</p>
                     </div>
                     <div className="populaton_money ">
                       <FontAwesomeIcon icon={faHouse} className='AboutFontAwesomeIcon'/>
                       <p>$370.000</p>
                     </div>
                  </div>
                  <div className="linetwo"></div>
                  <div className="link_to_contact">
                    <a href="#contact">{t("needD")}</a>
                    <FontAwesomeIcon icon={faArrowRight} className='AboutFontAwesomeIcon'/>
                  </div>
               </div>
            </div>
        </div>
        </div>
    </section>
    
    <Slider/>
   </>
  )
}

export default AboutSecond
