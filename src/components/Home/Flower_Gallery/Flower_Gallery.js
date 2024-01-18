import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Flower_Gallery.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

import slide_image_1 from './images/img_1.jpg';
import slide_image_2 from './images/img_2.jpg';
import slide_image_3 from './images/img_3.jpg';
import slide_image_4 from './images/img_4.jpg';
import slide_image_5 from './images/img_5.jpg';
import slide_image_6 from './images/img_6.jpg';
import slide_image_7 from './images/img_7.jpg';

function Flower_Gallery() {
  return (
    <div className="flower_container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon
              size="small"
              name="arrow-back-outline"
              className="arrowicon"
            ></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon size="small" name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Flower_Gallery;