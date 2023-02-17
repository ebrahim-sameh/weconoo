/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination, Navigation } from "swiper";
import { heroImages } from "../assets";
import LogoIcon from "../assets/icon_logo.png";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
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
        navigation={true}
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
        modules={[Pagination, EffectCreative, Autoplay, Navigation]}
        className="hero__slider"
      >
        {content.map((content, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div className="div">
                <img src={content.img} alt="" />
                {i === 0 && (
                  <div
                    className={`hero__wecan__title ${isActive ? "active" : ""}`}
                  >
                    <div className="hero__wecan__icon">
                      <img src={LogoIcon} alt="" />
                    </div>
                    <div className="wecan__text">
                      <h1 className="wecan__title">WE CAN</h1>
                      <div className="wooden__text">
                        <p>Wooden Products</p>
                      </div>
                    </div>
                  </div>
                )}
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
                        <a
                          href="https://www.facebook.com/profile.php?id=100086677671717"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaFacebookSquare />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/wecan.eg/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <RiInstagramFill />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/We_Can_Wood"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaTwitterSquare />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/wecaneg/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/wecaneg/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaWhatsappSquare />
                        </a>
                      </li>
                    </ul>
                    <Link to="/contact-us" className="sec__button">
                      {t("Contact_Us")}
                    </Link>
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
