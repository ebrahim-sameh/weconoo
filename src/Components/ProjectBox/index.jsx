import React from "react";

import "./ProjectBox.scss";

const ProjectBox = ({ name, img }) => {
  return (
    <div className="main__project__box">
      <img src={img} alt="" />
      <span className="collection">Collection</span>
      <span className="project__name">{name}</span>
    </div>
  );
};

export default ProjectBox;
