import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero__section">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        // effect="coverflow"
        modules={[Pagination, EffectCoverflow]}
        className="hero__slider"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div className="div">
              <img
                src="https://htmldemo.net/robin/robin/assets/img/revimages/homepage01-slide2.jpg"
                alt=""
              />
              <h1 className={`Heading ${isActive ? "active" : ""}`}>
                We Can Wooden Products
              </h1>
            </div>
          )}
          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="div">
              <img
                src="https://htmldemo.net/robin/robin/assets/img/revimages/homepage01-slide3.jpg"
                alt=""
              />
              <h1 className={`Heading ${isActive ? "active" : ""}`}>
                We Can Wooden Products
              </h1>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="div">
              <img
                src="https://htmldemo.net/robin/robin/assets/img/revimages/homepage01-slide2.jpg"
                alt=""
              />
              <h1 className={`Heading ${isActive ? "active" : ""}`}>
                We Can Wooden Products
              </h1>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
