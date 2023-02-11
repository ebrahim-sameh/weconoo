import React from "react";

import "./Services.scss";

const Services = () => {
  const services = [
    "Batch production & mass customization",
    "Consulting and training",
    "Production line design & optimization",
    "Production line design & optimization",
    "Prototyping & prototyping support",
    "Custom furniture design & fabrication",
    "Laser cutting & engraving",
    "Design & engineering support",
  ];

  return (
    <section className="section__padding section__space services__section">
      <div className="container">
        <h2 className="section__title">Our Services</h2>
        <ul className="services__content">
          {services.map((service, i) => (
            <li key={i}>
              <span>{i + 1}</span>
              {service}
            </li>
          ))}
        </ul>
        <button className="sec__button">All Services</button>
      </div>
    </section>
  );
};

export default Services;
