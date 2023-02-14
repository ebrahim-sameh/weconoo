import React from "react";
import { useTranslation } from "react-i18next";
import { ServicesBlock } from "../../Components";
import { serviceimages } from "../../Components/assets";

import "./ServicesPage.scss";

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      img: serviceimages.service1,
      title: `${t("services.service1__title")}`,
      text: `${t("services.service1__text")}`,
    },
    {
      img: serviceimages.service2,
      title: `${t("services.service2__title")}`,
      text: `${t("services.service2__text")}`,
    },
    {
      img: serviceimages.service3,
      title: `${t("services.service3__title")}`,
      text: `${t("services.service3__text")}`,
    },
    {
      img: serviceimages.service4,
      title: `${t("services.service4__title")}`,
      text: `${t("services.service4__text")}`,
    },
    {
      img: serviceimages.service5,
      title: `${t("services.service5__title")}`,
      text: `${t("services.service5__text")}`,
    },
    {
      img: serviceimages.service6,
      title: `${t("services.service6__title")}`,
      text: `${t("services.service6__text")}`,
    },
    {
      img: serviceimages.service7,
      title: `${t("services.service7__title")}`,
      text: `${t("services.service7__text")}`,
    },
    {
      img: serviceimages.service8,
      title: `${t("services.service8__title")}`,
      text: `${t("services.service8__text")}`,
    },
    {
      img: serviceimages.service9,
      title: `${t("services.service9__title")}`,
      text: `${t("services.service9__text")}`,
    },
    {
      img: serviceimages.service10,
      title: `${t("services.service10__title")}`,
      text: `${t("services.service10__text")}`,
    },
    {
      img: serviceimages.service11,
      title: `${t("services.service11__title")}`,
      text: `${t("services.service11__text")}`,
    },
  ];

  return (
    <div className="services__page">
      <div className="container">
        <h2 className="section__title">{t("Our_Services")}</h2>
        <div className="sevices__list">
          {services.map((service, i) => (
            <ServicesBlock
              key={i}
              title={service.title}
              text={service.text}
              img={service.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
