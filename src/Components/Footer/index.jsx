/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillDribbbleCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="section__title">
          <span>WE CAN</span>
          <span>Wooden Products</span>
        </h2>
        <div className="footer__details">
          <div>
            <h5>Phones</h5>
            <a className="text__details" href="tel:01013503160">
              'icon'01013503160
            </a>
            <a className="text__details" href="tel:0452148925">
              'icon'0452148925
            </a>
          </div>
          <div>
            <h5>Location</h5>
            <p className="text__details">
              'icon'Al Mahkama, Monshaat Al Awqaf, Kafr El Dawwar, El Beheira
              Governorate 22621
            </p>
          </div>
          <div className="location__container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.9393442518826!2d30.130555!3d31.1391992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5dfb3d21175bf%3A0xb2cb903e75101a74!2sWE%20CAN%20for%20wooden%20products!5e0!3m2!1sen!2seg!4v1676429834079!5m2!1sen!2seg"
              width="400"
              height="300"
              style={{
                border: "0",
                height: "100%",
                width: "300px",
                borderRadius: "10px",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <ul className="footer__social__list">
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
        <a href="#" className="sec__button">
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
