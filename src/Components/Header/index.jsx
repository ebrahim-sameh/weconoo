/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";
import { useTranslation } from "react-i18next";
import AppContext from "../../store/app-context";
import Logo from "../assets/Logo.png";

import "./Header.scss";

const Header = () => {
  const ctx = useContext(AppContext);
  const { t } = useTranslation();

  const links = [
    {
      route: "new-wecan",
      label: `${t("Header.Home")}`,
      link: true,
    },
    {
      route: "services",
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
  ];

  return (
    <div className="main__header">
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
          {/* <button className="language__btn">Ar</button> */}
          <button className="language__btn" onClick={() => ctx.toggleLang()}>
            {ctx.lang === "ar" ? "الانجليزية" : "Arabic"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
