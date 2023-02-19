import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ServicesBlock } from "../../Components";
import Masonry from "react-masonry-css";

import "./ServicesPage.scss";

const ServicesPage = () => {
  const { t } = useTranslation();
  const selectedService = useLocation()?.state?.id;
  useEffect(() => {
    if (!selectedService) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [selectedService]);

  const services = [
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/semo522_huge_machine_in_a_lab_furture_time_wood_manufacutre_dig_072222fd-9267-4770-a16a-2e2e357318a7.png",
      title: `${t("services.service1__title")}`,
      text: `${t("services.service1__text")}`,
    },
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/muslim-male-female-workshop-working-together.jpg",
      title: `${t("services.service2__title")}`,
      text: `${t("services.service2__text")}`,
    },
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/semo522_robot_machinen_manficaturing_wood_design_in_lab_science_61ddd3c3-b68a-4719-aafa-2c54fe587f72.png",
      title: `${t("services.service3__title")}`,
      text: `${t("services.service3__text")}`,
    },
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/production-line-wooden-floor-factory.jpg",
      title: `${t("services.service4__title")}`,
      text: `${t("services.service4__text")}`,
    },
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/modenr-carpenter-s-workshop-space-with-tools-machines.jpg",
      title: `${t("services.service5__title")}`,
      text: `${t("services.service5__text")}`,
    },
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/family-photo-frame-photoframe-collage-multiframe-several-photos-machine-working-cnc.jpg",
      title: `${t("services.service6__title")}`,
      text: `${t("services.service6__text")}`,
    },
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/mortgage-broker-shows-home-floor-plan-clients.jpg",
      title: `${t("services.service7__title")}`,
      text: `${t("services.service7__text")}`,
    },
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/overview-contemporary-designers-bending-workplace.jpg",
      title: `${t("services.service8__title")}`,
      text: `${t("services.service8__text")}`,
    },
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/two-rolls-melamine-edge-finishing-furniture-handmade-furniture-production-selective-focus.jpg",
      title: `${t("services.service9__title")}`,
      text: `${t("services.service9__text")}`,
    },
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/closeup-shot-machine-with-numerical-control-cuts-wood-cnc-tool-woodworking-industry.jpg",
      title: `${t("services.service10__title")}`,
      text: `${t("services.service10__text")}`,
    },
    {
      img: "https://wecan200.s3.amazonaws.com/website/Website+Edits/laser-engraving-cutting-woman-holding-example-cut-out-wooden-heart.jpg",
      title: `${t("services.service11__title")}`,
      text: `${t("services.service11__text")}`,
    },
  ];

  return (
    <>
      <div className="services__page">
        <div className="container">
          <h2 className="section__title">{t("Our_Services")}</h2>
          <Masonry
            // className="sevices__list"
            breakpointCols={2}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {services.map((service, i) => (
              <ServicesBlock
                key={i}
                title={service.title}
                text={service.text}
                img={service.img}
                id={`service_${i + 1}`}
                selectedService={selectedService}
              />
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
