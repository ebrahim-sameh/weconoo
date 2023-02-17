import React, { useEffect } from "react";
import SingleCollection from "../SingleCollection";
import { useTranslation } from "react-i18next";
import { imagesCollections } from "../assets";

import "./Collections.scss";
import { Link } from "react-router-dom";

const Collections = () => {
  const { t } = useTranslation();

  const collections = [
    {
      label: `${t("collections.Home_Decor")}`,
      img: imagesCollections.Home__Decor,
      category__id: "Home_Decor",
    },
    {
      label: `${t("collections.Medical_Sector")}`,
      img: imagesCollections.Medical_Sector,
      category__id: "Medical_Sector",
    },
    {
      label: `${t("collections.Studies")}`,
      img: imagesCollections.studies,
      category__id: "Studies",
    },
    {
      label: `${t("collections.Commercial_Facilities")}`,
      img: imagesCollections.Commercial_Facilities,
      category__id: "Commercial_Facilities",
    },
  ];

  return (
    <section className="section__space collection__section">
      <h2 className="section__title" data-aos="fade-up">
        {t("collections.Our_Collection")}
      </h2>
      <div className="collection__content" data-aos="fade-up">
        {collections.map((collection, i) => (
          <SingleCollection
            key={i}
            collection={collection}
            aos={collection.aos}
            categoryID={collection.category__id}
          />
        ))}
      </div>
      <Link to="/projects" className="sec__button" data-aos="fade-up">
        {t("Show_More")}
      </Link>
    </section>
  );
};

export default Collections;
