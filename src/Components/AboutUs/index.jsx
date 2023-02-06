import React from "react";

import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="section__space section__padding about__section">
      <div className="container">
        <div className="about__content">
          <div className="left">
            <h2 className="section__title">
              About Our Company <span className="under__line"></span>
            </h2>
            <p className="main__text">
              We Can Company is a family-owned and operated company that has
              been in operation for over a decade. Raised in Egypt , the company
              operates multiple production lines that produce wooden furniture
              to their customers' exacting standards.
            </p>
            <div className="about__us__btns">
              <button className="sec__button">Read More</button>
              <button className="main__button">Download Profile</button>
            </div>
          </div>
          <div className="rigth">
            <img
              src="https://livedemo00.template-help.com/wt_51678/images/about-2-273x214.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
