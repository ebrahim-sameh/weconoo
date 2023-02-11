import React from "react";

import "./AboutSection.scss";

const AboutSection = ({ content, heading, img, i }) => {
  return (
    <div className="about__page__section">
      <div className="container">
        <div className="about__section__content">
          <div className="content__col">
            <h2 className="section__title">{heading}</h2>
            <p className="about__text main__text">
              {content}
              <span>0{i}</span>
            </p>
          </div>
          <div className="img__col">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
