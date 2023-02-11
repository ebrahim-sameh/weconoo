import React from "react";
import AboutSection from "../../Components/AboutSection";

import "./About.scss";

const About = () => {
  const aboutcontent = {
    heading: "About Us",
    content: `We Can Company is a family-owned and operated company 
that has been in operation for over a decade. Raised in Egypt
, the company operates multiple production lines that produce 
wooden furniture to their customers' exacting standards. From
the initial consultation to the final product, an experienced
team of professional designers committed to quality control 
ensures that all furniture produced meets their exacting
standards and is made with the utmost care and attention 
to detail.`,
    img: "/assets/about1.png",
  };

  const mission = {
    heading: "MISSION",
    content: `We Can is a company that values quality and customer satisfaction 
above all else. Our team of skilled designers takes pride in creating
unique, high-quality wooden products.We also offer custom design
options to ensure that their customers get exactly what they want. 
In addition to offering a wide range of wooden products, We Can
is committed to providing competitive prices and excellent customer 
service. Despite the challenges of inflation and downsizing that many
businesses face, We Canremains dedicated to providing the best
possible products and services to their customers.`,
    img: "/assets/mission.png",
  };

  const vision = {
    heading: "VISION",
    content: `Our vision is to revolutionize the way people think about 
and interact with wood products by creating a sustainable
alternative using advanced synthetic materials and digital 
fabrication techniques. Leveraging the latest in AI technology, 
we aim to produce high-quality products that are both 
environmentally friendly and aesthetically pleasing. Through
our commitment to innovation and sustainability, we aim 
to make a positive impact on the world and help shape the
future of wood manufacturing for generations to come.`,
    img: "/assets/vision.png",
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
