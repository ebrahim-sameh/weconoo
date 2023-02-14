import React from "react";
import { useTranslation } from "react-i18next";
import AboutSection from "../../Components/AboutSection";
import AboutImage from "../../Components/assets/about1.png";
import MissionImage from "../../Components/assets/mission.png";
import VisionImage from "../../Components/assets/vision.png";

import "./About.scss";

const About = () => {
  const { t } = useTranslation();

  const aboutcontent = {
    heading: `${t("Header.About_Us")}`,
    content: `${t("About_Text")}`,
    img: AboutImage,
  };

  const mission = {
    heading: `${t("MISSION")}`,
    content: `${t("Mission_Text")}`,
    img: MissionImage,
  };

  const vision = {
    heading: `${t("VISION")}`,
    content: `${t("Vision_Text")}`,
    img: VisionImage,
  };

  return (
    <div className="page">
      <AboutSection
        heading={aboutcontent.heading}
        content={aboutcontent.content}
        img={aboutcontent.img}
        i={1}
      />
      <AboutSection
        heading={mission.heading}
        content={mission.content}
        img={mission.img}
        i={2}
      />
      <AboutSection
        heading={vision.heading}
        content={vision.content}
        img={vision.img}
        i={3}
      />
    </div>
  );
};

export default About;
