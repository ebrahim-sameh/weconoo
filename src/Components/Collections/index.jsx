import React, { useEffect } from "react";
import SingleCollection from "../SingleCollection";
import AOS from "aos";

import "aos/dist/aos.css";
import "./Collections.scss";

const Collections = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const collections = [
    {
      label: "collection 1",
      img: "https://livedemo00.template-help.com/wt_51678/images/product-04-470x303.jpg",
    },
    {
      label: "collection 2",
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
    },
    {
      label: "collection 3",
      img: "https://livedemo00.template-help.com/wt_51678/images/product-04-470x303.jpg",
    },
    {
      label: "collection 4",
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
    },
  ];

  return (
    <section className="section__space collection__section">
      {/* <div className=""> */}
      <h2 className="section__title" data-aos="fade-up">
        Our Collection
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
        Show More
      </button>
      {/* </div> */}
    </section>
  );
};

export default Collections;
