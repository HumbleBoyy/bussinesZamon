import React from 'react'
import "./home.css"
 import { useTranslation } from 'react-i18next'
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';;
import 'swiper/css/navigation'

import { Pagination } from 'swiper/modules';
import images from '../../src/constants/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,faHouse,faMapLocationDot } from '@fortawesome/free-solid-svg-icons';



 const Home = () => {
  const {t, i18n} = useTranslation();
   return (
      <>
      
    <section className='home' id='home'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         
        <SwiperSlide>
          <img src={images.slide__one} alt="" />
           <div className="image_items">
          <div className="home_text">
               <h2>{t("takeaGlimps")}</h2>
              <h1>{t("city")}</h1>
              <a href="#contact"><button className='gothere'>{t("gothere")}</button></a>
          </div>
            
             <div className="solid__block">
               <div className="solid__block_items">
                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faUsers} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("population")}:</p>
                     <h3>1,000M</h3>
                  </div>
                  </div>

                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faHouse} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("average")}:</p>
                     <h3>$350.00</h3>
                  </div>
                  </div>
                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faMapLocationDot} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("area")}:</p>
                     <h3>16,773km²</h3>
                  </div>
                  </div>
                  <a href="#contact"><button className='explore_btn'>{t("explore")}</button></a>
               </div>
              </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.istanbul} alt="" />

           <div className="image_items">
           <div className="home_text">
              <h2>{t("takeaGlimps")}</h2>
              <h1>{t("istanbul")}</h1>
              <a href="#contact"><button className='gothere'>{t("gothere")}</button></a>
            </div>
             <div className="solid__block">
               <div className="solid__block_items">
                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faUsers} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("population")}:</p>
                     <h3>15,848M</h3>
                  </div>
                  </div>

                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faHouse} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("average")}:</p>
                     <h3>$10000</h3>
                  </div>
                  </div>
                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faMapLocationDot} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("area")}:</p>
                     <h3>5,461km²</h3>
                  </div>
                  </div>
                  <a href="#contact"><button className='explore_btn'>{t("explore")}</button></a>
               </div>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.cairo} alt="" />

           <div className="image_items">
           <div className="home_text">
              <h2>{t("takeaGlimps")}</h2>
              <h1>{t("cairo")}</h1>
              <a href="#contact"><button className='gothere'>{t("gothere")}</button></a>
              </div>
             <div className="solid__block">
               <div className="solid__block_items">
                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faUsers} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("population")}:</p>
                     <h3>10,248M</h3>
                  </div>
                  </div>

                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faHouse} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("average")}:</p>
                     <h3>$485.00</h3>
                  </div>
                  </div>
                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faMapLocationDot} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("area")}:</p>
                     <h3>2,734km²</h3>
                  </div>
                  </div>
                  <a href="#contact"><button className='explore_btn'>{t("explore")}</button></a>
               </div>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.dubai} alt="" />

           <div className="image_items">
           <div className="home_text">
              <h2>{t("takeaGlimps")}</h2>
              <h1>{t("dubai")}</h1>
              <a href="#contact"><button className='gothere'>{t("gothere")}</button></a>
            </div> 
             <div className="solid__block">
               <div className="solid__block_items">
                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faUsers} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("population")}:</p>
                     <h3>3,604M</h3>
                  </div>
                  </div>

                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faHouse} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("average")}:</p>
                     <h3>$3,700</h3>
                  </div>
                  </div>
                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faMapLocationDot} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("area")}:</p>
                     <h3>1,994km²</h3>
                  </div>
                  </div>
                  <a href="#contact"><button className='explore_btn'>{t("explore")}</button></a>
               </div>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={images.london} alt="" />

           <div className="image_items">
           <div className="home_text">
              <h2>{t("takeaGlimps")}</h2>
              <h1>{t("london")}</h1>
              <a href="#contact"><button className='gothere'>{t("gothere")}</button></a>
            </div>
             <div className="solid__block">
               <div className="solid__block_items">
                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faUsers} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("population")}:</p>
                     <h3>9,648M</h3>
                  </div>
                  </div>

                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faHouse} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("average")}:</p>
                     <h3>$1,500</h3>
                  </div>
                  </div>
                  <div className="solid_block__item">
                  <FontAwesomeIcon icon={faMapLocationDot} className='FontAwesomeIcon'/>
                  <div className="solid_block__text">
                     <p>{t("area")}:</p>
                     <h3>1,572km²</h3>
                  </div>
                  </div>
                  <a href="#contact"><button className='explore_btn'>{t("explore")}</button></a>
               </div>
              </div>
              </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
    
      
    </>
  )
}

export default Home
