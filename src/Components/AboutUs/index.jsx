import React, { useEffect } from "react";
import AOS from "aos";
import AboutImage from "../assets/about__sec.png";

import "aos/dist/aos.css";
import "./AboutUs.scss";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="section__space section__padding about__section">
      <div className="container">
        <div className="about__content">
          <div className="left">
            <h2 className="section__title" data-aos="fade-right">
              {t("About_section.title")} <span className="under__line"></span>
            </h2>
            <p className="main__text" data-aos="fade-up">
              {t("About_section.text")}
            </p>
            <div className="about__us__btns">
              <button className="sec__button" data-aos="fade-right">
                {t("Read_More")}
              </button>
              <button
                className="main__button"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {t("Download_Profile")}
              </button>
            </div>
          </div>
          <div className="rigth" data-aos="fade-left">
            <div>
              <img src={AboutImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
