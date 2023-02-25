import React from "react";
import Logo from "../assets/Logo.png";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="left">
            <h4 className="footer__title">
              <BsTelephoneFill />
              {t("Phones")}
            </h4>
            <a href="tel:01013503160" className="footer__item">
              01013503160
            </a>
            <a href="tel:0452148925" className="footer__item">
              0452148925
            </a>
          </div>
          <div className="rigth">
            <h4 className="footer__title">
              <MdLocationOn />
              {t("Location")}
            </h4>
            <p className="footer__item">{t("our__location")}</p>
            <a
              className="location__btn"
              href="https://goo.gl/maps/nTovxiEpTDk1Tggr5"
              target="_blank"
              rel="noreferrer"
            >
              Google Map
            </a>
          </div>
        </div>
        <div className="center">
          <img src={Logo} alt="" />
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
                href="https://api.whatsapp.com/send?phone=01013503160"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
