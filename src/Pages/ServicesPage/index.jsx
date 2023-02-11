import React from "react";
import { ServicesBlock } from "../../Components";

import "./ServicesPage.scss";

const ServicesPage = () => {
  return (
    <div className="services__page">
      <div className="container">
        <h2 className="section__title">Our Services</h2>
        <div className="sevices__list">
          <ServicesBlock />
          <ServicesBlock />
          <ServicesBlock />
          <ServicesBlock />
          <ServicesBlock />
          <ServicesBlock />
          <ServicesBlock />
          <ServicesBlock />
          <ServicesBlock />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
