import React from "react";
import { ProjectBox } from "../../Components";

import "./Projects.scss";

const Projects = () => {
  const projects = [
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
  ];

  return (
    <div className="page our__works__page">
      <div className="container">
        <div className="our__works__header">
          <h2 className="section__title">Our Works</h2>
          <div className="our__works__filter">
            <button className="active">Collection 1</button>
            <button>Collection 2</button>
            <button>Collection 3</button>
            <button>Collection 4</button>
          </div>
        </div>
        <div className="some__project__container">
          {projects.map((project, i) => (
            <ProjectBox key={i} name={project.name} img={project.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
