/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";
import { useTranslation } from "react-i18next";
import AppContext from "../../store/app-context";
import Logo from "../assets/Logo.png";
import { AiOutlineWhatsApp } from "react-icons/ai";

import "./Header.scss";

const Header = ({ className }) => {
  const ctx = useContext(AppContext);
  const { t } = useTranslation();
  const [showHeader, setShowHeader] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const links = [
    {
      route: "/new-wecan",
      label: `${t("Header.Home")}`,
      link: true,
    },
    {
      route: "/services",
      label: `${t("Header.Services")}`,
      link: true,
    },
    // {
    //   link: false,
    //   label: "Pages",
    //   options: [
    //     {
    //       label: "Page 1",
    //       route: "",
    //       link: true,
    //     },
    //     {
    //       label: "Page 2",
    //       route: "",
    //       link: true,
    //     },
    //     {
    //       label: "Page 3",
    //       route: "",
    //       link: true,
    //     },
    //   ],
    // },
    {
      route: "/about-us",
      label: `${t("Header.About_Us")}`,
      link: true,
    },
    {
      route: "/projects",
      label: `${t("Header.Our_Works")}`,
      link: true,
    },
    {
      route: "/contact-us",
      label: `${t("Contact_Us")}`,
      link: true,
    },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (document.body.getBoundingClientRect().top < 0) {
        setScrollPosition(document.body.getBoundingClientRect().top);
        setShowHeader(
          document.body.getBoundingClientRect().top > scrollPosition
        );
      } else {
        setShowHeader(null);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [scrollPosition]);

  return (
    <div
      className={`main__header ${`${
        location.pathname === "/new-wecan" ||
        location.pathname === "/new-wecan/"
          ? "home__hero"
          : ""
      }`} ${
        showHeader === null ? "" : showHeader ? "header__show" : "header__hide"
      }`}
    >
      <nav className="nav container">
        <NavLink to="/new-wecan" className="logo">
          <img src={Logo} alt="" />
        </NavLink>
        <div className="nav__list">
          <ul className="links__list">
            {links.map((link, i) => {
              if (link.link) {
                return (
                  <li key={i}>
                    <NavLink
                      to={link.route}
                      className={`main__link ${({ isActive }) =>
                        isActive ? "active" : ""}`}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              } else if (!link.link) {
                return (
                  <li key={i}>
                    <DropdownMenu options={link.options} label={link.label} />
                  </li>
                );
              }
            })}
          </ul>
          <a className="whats__app" target="_blank" href="#">
            {/* {t("Whatssapp")} */}
            <AiOutlineWhatsApp />
          </a>
          <button className="language__btn" onClick={() => ctx.toggleLang()}>
            {ctx.lang === "ar" ? "En" : "Ar"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
