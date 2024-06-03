import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../Slider/slider.css"
import { useTranslation } from 'react-i18next';
import images from '../../../src/constants/images';

const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const {t, i18n} = useTranslation();
  return (
    <section className='slider'>
      <div className="container">
        <div className="slider_title">
            <h2>{t("sliderTitle")}</h2>
            <p>{t("sliderTitleDesc")}</p>
        </div>
   <div className="slider_images">
   <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    onAutoplayTimeLeft={onAutoplayTimeLeft}
    className="mySwiper"
  >
    <SwiperSlide>
        <img src={images.sliderfour} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={images.sliderfive} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={images.slidertwo} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={images.sliderone} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={images.slidersix} alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={images.sliderseven} alt="" />
    </SwiperSlide>
    <div className="autoplay-progress" slot="container-end">
      <svg viewBox="0 0 48 48" ref={progressCircle}>
        <circle cx="24" cy="24" r="20"></circle>
      </svg>
      <span ref={progressContent}></span>
    </div>
  </Swiper>
   </div>
   </div>
</section>
  )
}

export default Slider
