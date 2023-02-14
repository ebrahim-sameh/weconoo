import React from "react";
import { useTranslation } from "react-i18next";

import "./Services.scss";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    `${t("services.service_1")}`,
    `${t("services.service_2")}`,
    `${t("services.service_3")}`,
    `${t("services.service_4")}`,
    `${t("services.service_5")}`,
    `${t("services.service_6")}`,
    `${t("services.service_7")}`,
    `${t("services.service_8")}`,
    `${t("services.service_9")}`,
    `${t("services.service_10")}`,
    `${t("services.service_11")}`,
  ];

  return (
    <section className="section__padding section__space services__section">
      <div className="container">
        <h2 className="section__title">{t("Our_Services")}</h2>
        <ul className="services__content">
          {services.map((service, i) => (
            <li key={i}>
              <span>{i + 1}</span>
              {service}
            </li>
          ))}
        </ul>
        <button className="sec__button">{t("All_Services")}</button>
      </div>
    </section>
  );
};

export default Services;
