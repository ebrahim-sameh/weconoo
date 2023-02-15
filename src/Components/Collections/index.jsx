import React, { useEffect } from "react";
import SingleCollection from "../SingleCollection";
import { useTranslation } from "react-i18next";
import { imagesCollections } from "../assets";
import AOS from "aos";

import "aos/dist/aos.css";
import "./Collections.scss";

const Collections = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const collections = [
    {
      label: `${t("collections.Home_Decor")}`,
      img: imagesCollections.Home__Decor,
    },
    {
      label: `${t("collections.Medical_Sector")}`,
      img: imagesCollections.Medical_Sector,
    },
    {
      label: `${t("collections.Studies")}`,
      img: imagesCollections.studies,
    },
    {
      label: `${t("collections.Commercial_Facilities")}`,
      img: imagesCollections.Commercial_Facilities,
    },
  ];

  return (
    <section className="section__space collection__section">
      {/* <div className=""> */}
      <h2 className="section__title" data-aos="fade-up">
        {t("collections.Our_Collection")}
      </h2>
      <div className="collection__content" data-aos="fade-up">
        {collections.map((collection, i) => (
          <SingleCollection
            key={i}
            collection={collection}
            aos={collection.aos}
          />
        ))}
      </div>
      <button className="sec__button" data-aos="fade-up">
        {t("Show_More")}
      </button>
      {/* </div> */}
    </section>
  );
};

export default Collections;
