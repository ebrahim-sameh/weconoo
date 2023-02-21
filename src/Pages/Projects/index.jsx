import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ProjectBox } from "../../Components";
import AppContext from "../../store/app-context";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import "./Projects.scss";

const Projects = () => {
  const { t } = useTranslation();
  const ctx = useContext(AppContext);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [currentActive, setCurrentActive] = useState(
    location?.state?.categoryID ? location.state.categoryID : "all"
  );

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      setProjects(arr);
      setFilteredProjects(arr);
      setLoading(false);
    };
    getData();
    return () => {};
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      {/* <Header /> */}
      <div className="page our__works__page">
        <div className="container">
          <div className="our__works__header">
            <h2 className="section__title">{t("Header.Our_Works")}</h2>
            <div className="our__works__filter">
              <button
                className={`${currentActive === "all" ? "active" : ""}`}
                onClick={() => {
                  setFilteredProjects(projects);
                  setCurrentActive("all");
                }}
              >
                {t("All")}
              </button>
              <button
                className={`${currentActive === "Home_Decor" ? "active" : ""}`}
                onClick={() => {
                  setFilteredProjects(
                    projects.filter(
                      (project) => project.collection_id === "Home_Decor"
                    )
                  );
                  setCurrentActive("Home_Decor");
                }}
              >
                {t("collections.Home_Decor")}
              </button>
              <button
                className={`${
                  currentActive === "Medical_Sector" ? "active" : ""
                }`}
                onClick={() => {
                  setFilteredProjects(
                    projects.filter(
                      (project) => project.collection_id === "Medical_Sector"
                    )
                  );
                  setCurrentActive("Medical_Sector");
                }}
              >
                {t("collections.Medical_Sector")}
              </button>
              <button
                className={`${currentActive === "Studies" ? "active" : ""}`}
                onClick={() => {
                  setFilteredProjects(
                    projects.filter(
                      (project) => project.collection_id === "Studies"
                    )
                  );
                  setCurrentActive("Studies");
                }}
              >
                {t("collections.Studies")}
              </button>
              <button
                className={`${
                  currentActive === "Commercial_Facilities" ? "active" : ""
                }`}
                onClick={() => {
                  setFilteredProjects(
                    projects.filter(
                      (project) =>
                        project.collection_id === "Commercial_Facilities"
                    )
                  );
                  setCurrentActive("Commercial_Facilities");
                }}
              >
                {t("collections.Commercial_Facilities")}
              </button>
            </div>
          </div>{" "}
          {loading ? (
            <div className="Loading">
              <span></span>
            </div>
          ) : !filteredProjects.length ? (
            <p>No Projects</p>
          ) : (
            <div className="some__project__container">
              {filteredProjects.map((project, i) => (
                <ProjectBox
                  key={i}
                  name={ctx.lang === "ar" ? project.ar_name : project.en_name}
                  img={project.images[0]}
                  imgs={project.images}
                  collection_id={project.collection_id}
                  desc={ctx.lang === "ar" ? project.ar_desc : project.en_desc}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Projects;
