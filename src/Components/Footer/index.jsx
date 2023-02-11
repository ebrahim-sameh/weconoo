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
