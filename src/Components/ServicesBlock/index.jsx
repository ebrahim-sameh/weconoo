import React from "react";
import { Link } from "react-router-dom";

import "./ServicesBlock.scss";

const ServicesBlock = () => {
  return (
    <div className="service__block">
      <div className="service__media">
        <img
          src="https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg"
          alt=""
        />
      </div>
      <Link to="/" className="service__title">
        Service Title
      </Link>
      <p className="service__desc main__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
        sapiente excepturi voluptatibus atque, ullam sint impedit repellendus
        ducimus, aut architecto doloribus vel quae accusantium cupiditate
        quisquam commodi recusandae, quaerat quam!
      </p>
      <Link to="/" className="sec__button">
        Show More
      </Link>
    </div>
  );
};

export default ServicesBlock;
