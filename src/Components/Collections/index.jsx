import React from "react";
import SingleCollection from "../SingleCollection";

import "./Collections.scss";

const Collections = () => {
  const collections = [
    {
      label: "collection 1",
      img: "https://livedemo00.template-help.com/wt_51678/images/about-3-273x451.jpg",
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
      img: "https://livedemo00.template-help.com/wt_51678/images/about-3-273x451.jpg",
    },
  ];

  return (
    <section className="section__space collection__section">
      <div className="container">
        <h2 className="section__title">Our Collection</h2>
        <div className="collection__content">
          {collections.map((collection, i) => (
            <SingleCollection key={i} collection={collection} />
          ))}
        </div>
        <button className="main__button">Show More</button>
      </div>
    </section>
  );
};

export default Collections;
