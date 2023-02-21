import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaImages } from "react-icons/fa";
import FullScreenSlider from "../FullScreenSlider";

import "./ProjectBox.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

const ProjectBox = ({ name, collection_id, imgs, desc }) => {
  const [openSlider, setOprnSlider] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <div className="main__project__box" data-aos="fade-up">
        <Swiper
          onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          dir={"ltr"}
          speed={1200}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="projects__slider"
        >
          {imgs.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="swiper__block">
                <img src={img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="collection">{t(`collections.${collection_id}`)}</span>
        <span className="project__name">{name}</span>
        <button onClick={() => setOprnSlider(true)} className="slider__button">
          <FaImages />
        </button>
      </div>
      {openSlider && (
        <FullScreenSlider
          images={imgs}
          startIndex={currentIndex}
          onClose={() => setOprnSlider(false)}
          desc={desc}
        />
      )}
    </>
  );
};

export default ProjectBox;
