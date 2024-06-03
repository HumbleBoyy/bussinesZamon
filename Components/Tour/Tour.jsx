import React from 'react'
import "./tour.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import images from '../../src/constants/images';
import { faUsers, faCar, faPlaneDeparture,faBuildingCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TourT from "../Tours/TourT"
const Tour = () => {
    const {t, i18n} = useTranslation();
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
  return (
    <>
    <section className='tour_section' id='tour'>
        <div className="container">
        <div className="tour__guide_title">
            <div className="title__main">
                <h2>{t("tourTitle")}</h2>
                <p>{t("tourTitleDescription")}</p> 
                <p>{t("tourTitleDescription2")}</p>
            </div>
        </div>

      <div className="small_screen_size">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={images.walkingSamarkand} className='tour_image' alt="samarkand" />
            <div className="information_block">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("city")}</h2>
                        <h4>$650.00</h4>
                    </div>
                    <div className="cover_span">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#006bed", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>2155 {t("checkIn")}</p>
                    <span>/{t("person")}</span>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title">
                        <h2>{t("dealinclude")}:</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCar} />
                        <p>{t("trip")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faPlaneDeparture} />
                        <p>{t("airplane")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faBuildingCircleCheck} />
                        <p>{t("dailyvisit")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={images.turkiye} className='tour_image' alt="turkiye" />
            <div className="information_block">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("istanbul")}</h2>
                        <h4>$1500</h4>
                    </div>
                    <div className="cover_span">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#006bed", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>1855 {t("checkIn")}</p>
                    <span>/{t("person")}</span>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title">
                        <h2>{t("dealinclude")}:</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCar} />
                        <p>{t("trip")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faPlaneDeparture} />
                        <p>{t("airplane")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faBuildingCircleCheck} />
                        <p>{t("dailyvisit")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={images.walkingdubai} className='tour_image' alt="dubai" />
            <div className="information_block">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("dubai")}</h2>
                        <h4>$1750</h4>
                    </div>
                    <div className="cover_span">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#006bed", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>1555 {t("checkIn")}</p>
                    <span>/{t("person")}</span>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title">
                        <h2>{t("dealinclude")}:</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCar} />
                        <p>{t("trip")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faPlaneDeparture} />
                        <p>{t("airplane")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faBuildingCircleCheck} />
                        <p>{t("dailyvisit")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={images.walkinglondon} className='tour_image' alt="london" />
            <div className="information_block">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("london")}</h2>
                        <h4>$2150</h4>
                    </div>
                    <div className="cover_span">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#006bed", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>995 {t("checkIn")}</p>
                    <span>/{t("person")}</span>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title">
                        <h2>{t("dealinclude")}:</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCar} />
                        <p>{t("trip")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faPlaneDeparture} />
                        <p>{t("airplane")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faBuildingCircleCheck} />
                        <p>{t("dailyvisit")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={images.pyrimde} className='tour_image' alt="london" />
            <div className="information_block">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("cairo")}</h2>
                        <h4>$850</h4>
                    </div>
                    <div className="cover_span">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#006bed", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>1585 {t("checkIn")}</p>
                    <span>/{t("person")}</span>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title">
                        <h2>{t("dealinclude")}:</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCar} />
                        <p>{t("trip")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faPlaneDeparture} />
                        <p>{t("airplane")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faBuildingCircleCheck} />
                        <p>{t("dailyvisit")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
   
      
      <div className="small_screen_phone_size">
      <Swiper className="mySwiper my_Swiper">
        <SwiperSlide> 
            <img src={images.ancient} className='tour_image' alt="samarkand" />
            <div className="information_block">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("city")}</h2>
                        <h4>$650.00</h4>
                    </div>
                    <div className="cover_span">
                    <p><FontAwesomeIcon  icon={faUsers}  style={{color:"#006bed", fontSize:"1.2rem"}}/>2155 {t("checkIn")}</p>
                    <span>/{t("person")}</span>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title">
                        <h2>{t("dealinclude")}:</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCar} />
                        <p>{t("trip")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faPlaneDeparture} />
                        <p>{t("airplane")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faBuildingCircleCheck} />
                        <p>{t("dailyvisit")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={images.nightdubai} className='tour_image' alt="dubai" />
            <div className="information_block">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("dubai")}</h2>
                        <h4>$1750</h4>
                    </div>
                    <div className="cover_span">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#006bed", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>1555 {t("checkIn")}</p>
                    <span>/{t("person")}</span>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title">
                        <h2>{t("dealinclude")}:</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCar} />
                        <p>{t("trip")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faPlaneDeparture} />
                        <p>{t("airplane")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faBuildingCircleCheck} />
                        <p>{t("dailyvisit")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>  
        <SwiperSlide>
            <img src={images.londontour} className='tour_image' alt="london" />
            <div className="information_block">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("london")}</h2>
                        <h4>$2150</h4>
                    </div>
                    <div className="cover_span">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#006bed", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>995 {t("checkIn")}</p>
                    <span>/{t("person")}</span>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title">
                        <h2>{t("dealinclude")}:</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCar} />
                        <p>{t("trip")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faPlaneDeparture} />
                        <p>{t("airplane")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faBuildingCircleCheck} />
                        <p>{t("dailyvisit")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>  
        <SwiperSlide>
            <img src={images.cairo} className='tour_image' alt="london" />
            <div className="information_block">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("cairo")}</h2>
                        <h4>$850</h4>
                    </div>
                    <div className="cover_span">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#006bed", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>1585 {t("checkIn")}</p>
                    <span>/{t("person")}</span>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title">
                        <h2>{t("dealinclude")}:</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCar} />
                        <p>{t("trip")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faPlaneDeparture} />
                        <p>{t("airplane")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faBuildingCircleCheck} />
                        <p>{t("dailyvisit")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </section>
    <TourT/>
    </>
  )
}

export default Tour
