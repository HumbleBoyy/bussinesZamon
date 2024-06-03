import React from 'react'
import "./tourt.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import images from '../../src/constants/images';
import { faUsers, faCar, faPlaneDeparture,faBuildingCircleCheck, faTag, faClock, faCheckToSlot} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TourT = () => {
    const {t, i18n} = useTranslation();
  return (
    <section className='tourt_section' id='tour'>
        <div className="container">
        <div className="tour__guide_title">
            <div className="title__main title_main_second">
                <h2>{t("visa")}</h2>
                <p>{t("visadesC")}</p> 
                <p>{t("visadesCr")}</p>
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
        <SwiperSlide className='swiper_tour'>
            <img src={images.slide__two} className='tourt_image' alt="samarkand" />
            <div className="information_block tourst_information">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("uzbekistan")}</h2>
                    </div>
                    <div className="cover_span_two">
                      <p ><FontAwesomeIcon style={{color:"#c4c4c4", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>2355 {t("register")}</p>
                    </div>
                </div>

                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title benefit_of_visa">
                        <h2>{t("benefitofVisa")}</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faTag} />
                        <p>{t("bestPrice")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faClock} />
                        <p>{t("shortTime")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCheckToSlot} />
                        <p>{t("trust")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_tour'>
            <img src={images.canada} className='tourt_image' alt="turkiye" />
            <div className="information_block tourst_information">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("canada")}</h2>
                    </div>
                    <div className="cover_span_two">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#c4c4c4", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>375 {t("register")}</p>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title benefit_of_visa">
                        <h2>{t("benefitofVisa")}</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faTag} />
                        <p>{t("bestPrice")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faClock} />
                        <p>{t("shortTime")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCheckToSlot} />
                        <p>{t("trust")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_tour'>
            <img src={images.japan} className='tourt_image' alt="turkiye" />
            <div className="information_block tourst_information">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("japan")}</h2>
                    </div>
                    <div className="cover_span_two">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#c4c4c4", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>605 {t("register")}</p>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title benefit_of_visa">
                        <h2>{t("benefitofVisa")}</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faTag} />
                        <p>{t("bestPrice")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faClock} />
                        <p>{t("shortTime")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCheckToSlot} />
                        <p>{t("trust")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_tour'>
            <img src={images.america} className='tourt_image' alt="turkiye" />
            <div className="information_block tourst_information">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("usa")}</h2>
                    </div>
                    <div className="cover_span_two">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#c4c4c4", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>534 {t("register")}</p>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title benefit_of_visa">
                        <h2>{t("benefitofVisa")}</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faTag} />
                        <p>{t("bestPrice")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faClock} />
                        <p>{t("shortTime")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCheckToSlot} />
                        <p>{t("trust")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_tour'>
            <img src={images.cairo} className='tourt_image' alt="turkiye" />
            <div className="information_block tourst_information">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price">
                        <h2>{t("egypt")}</h2>
                    </div>
                    <div className="cover_span_two">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#c4c4c4", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>780 {t("register")}</p>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title benefit_of_visa">
                        <h2>{t("benefitofVisa")}</h2>
                    </div>

                    <div className="deal_details">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faTag} />
                        <p>{t("bestPrice")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faClock} />
                        <p>{t("shortTime")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCheckToSlot} />
                        <p>{t("trust")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
      
      <div className="small_screen_phone_size_second">
      <Swiper className="mySwiper">
      <SwiperSlide className='swiper_tour'>
            <img src={images.slide__two} className='tourt_image' alt="samarkand" />
            <div className="information_block tourst_information">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price second_info">
                        <h2>{t("uzbekistan")}</h2>
                    </div>
                    <div className="cover_span_two">
                      <p ><FontAwesomeIcon style={{color:"#c4c4c4", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>2355 {t("register")}</p>
                    </div>
                </div>

                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title benefit_of_visa">
                        <h2>{t("benefitofVisa")}</h2>
                    </div>

                    <div className="deal_details deal_details_second">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faTag} />
                        <p>{t("bestPrice")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faClock} />
                        <p>{t("shortTime")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCheckToSlot} />
                        <p>{t("trust")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className='swiper_tour'>
            <img src={images.america} className='tourt_image' alt="turkiye" />
            <div className="information_block tourst_information">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price second_info">
                        <h2>{t("usa")}</h2>
                    </div>
                    <div className="cover_span_two">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#c4c4c4", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>605 {t("register")}</p>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title benefit_of_visa">
                        <h2>{t("benefitofVisa")}</h2>
                    </div>

                    <div className="deal_details deal_details_second">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faTag} />
                        <p>{t("bestPrice")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faClock} />
                        <p>{t("shortTime")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCheckToSlot} />
                        <p>{t("trust")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className='swiper_tour'>
            <img src={images.cairo} className='tourt_image' alt="turkiye" />
            <div className="information_block tourst_information">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price second_info">
                        <h2>{t("egypt")}</h2>
                    </div>
                    <div className="cover_span_two">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#c4c4c4", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>780 {t("register")}</p>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title benefit_of_visa">
                        <h2>{t("benefitofVisa")}</h2>
                    </div>

                    <div className="deal_details deal_details_second">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faTag} />
                        <p>{t("bestPrice")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faClock} />
                        <p>{t("shortTime")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCheckToSlot} />
                        <p>{t("trust")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className='swiper_tour'>
            <img src={images.canada} className='tourt_image' alt="turkiye" />
            <div className="information_block tourst_information">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price second_info">
                        <h2>{t("canada")}</h2>
                    </div>
                    <div className="cover_span_two">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#c4c4c4", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>375 {t("register")}</p>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title benefit_of_visa">
                        <h2>{t("benefitofVisa")}</h2>
                    </div>

                    <div className="deal_details deal_details_second">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faTag} />
                        <p>{t("bestPrice")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faClock} />
                        <p>{t("shortTime")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCheckToSlot} />
                        <p>{t("trust")}</p>
                       </div>
                       <a href="#contact"><button>{t("booking")}</button></a>
                    </div>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className='swiper_tour'>
            <img src={images.japan} className='tourt_image' alt="turkiye" />
            <div className="information_block tourst_information">
                <div className="info_block_headItem">
                    <div className="info_block_headItem_price second_info">
                        <h2>{t("japan")}</h2>
                    </div>
                    <div className="cover_span_two">
                    <p style={{display:"flex", alignItems:"center"}}><FontAwesomeIcon style={{color:"#c4c4c4", fontSize:"1.2rem"}} icon={faUsers} className='FontAwesomeIcon'/>375 {t("register")}</p>
                    </div>
                </div>
                <hr className='line__divider'/>

                <div className="deal__include">
                    <div className="deal_title benefit_of_visa">
                        <h2>{t("benefitofVisa")}</h2>
                    </div>

                    <div className="deal_details deal_details_second">
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faTag} />
                        <p>{t("bestPrice")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faClock} />
                        <p>{t("shortTime")}</p>
                       </div>
                       <div className="dealt_detail">
                       <FontAwesomeIcon className='tourIcon' icon={faCheckToSlot} />
                        <p>{t("trust")}</p>
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
  )
}

export default TourT
