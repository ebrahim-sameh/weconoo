/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination } from "swiper";
import { heroImages } from "../assets";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillDribbbleCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import "./Hero.scss";
import AppContext from "../../store/app-context";

const Hero = () => {
  const { t } = useTranslation();
  const ctx = useContext(AppContext);
  const content = [
    {
      text: "We build your dreams",
      img: heroImages.hero1,
    },
    {
      text: "Join Our Social Media Community and Stay Informed.",
      img: heroImages.hero2,
    },
    {
      text: `We’re Here to Help: Fill out Our Website Contact Form and We’ll Be in Contact Soon`,
      img: heroImages.hero3,
    },
  ];

  const dir = ctx.lang === "ar" ? "rtl" : "ltr";

  return (
    <section className="hero__section">
      <Swiper
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        dir={"ltr"}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            opacity: ".6",
            translate: [0, 0, -100],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Pagination, EffectCreative, Autoplay]}
        className="hero__slider"
      >
        {content.map((content, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div className="div">
                <img src={content.img} alt="" />
                <h1
                  className={`Heading ${isActive ? "active" : ""} ${
                    i === 0 ? "one" : i === 1 ? "two" : "three"
                  }`}
                >
                  {content.text}
                </h1>
                {i === 1 && (
                  <div className={`hero__social ${isActive ? "active" : ""}`}>
                    <ul>
                      <li>
                        <a href="" target="_blank">
                          <BsFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank">
                          <AiFillTwitterCircle />
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank">
                          <AiFillInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank">
                          <AiFillDribbbleCircle />
                        </a>
                      </li>
                    </ul>
                    <button className="sec__button">{t("Contact_Us")}</button>
                  </div>
                )}
              </div>
            )}
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
