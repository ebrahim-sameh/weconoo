import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./ServicesBlock.scss";

const ServicesBlock = ({ title, img, text }) => {
  const { t } = useTranslation();
  const [wrap, setWrap] = useState(true);

  return (
    <div className="service__block">
      <div className="service__media">
        <img src={img} alt="" />
      </div>
      <h3 to="/" className="service__title">
        {title}
      </h3>
      <p className={`service__desc main__text ${wrap ? "wrap" : ""}`}>{text}</p>
      <button className="sec__button" onClick={() => setWrap((prev) => !prev)}>
        {wrap ? `${t("Show_More")}` : `${t("Show_Less")}`}
      </button>
    </div>
  );
};

export default ServicesBlock;
