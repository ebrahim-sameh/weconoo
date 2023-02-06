import React from "react";

import "./SingleCollection.scss";

const SingleCollection = ({ collection }) => {
  return (
    <div className="collection__box">
      <img src={collection.img} alt="" />
      <h3>{collection.label}</h3>
    </div>
  );
};

export default SingleCollection;
