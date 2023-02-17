import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

import "./ContactUs.scss";

const ContactUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="contact__us__page">
      <div className="container">
        <div className="contact__us__content">
          <h2 className="section__title">{t("Contact_Us")}</h2>
          <p className="contact__us__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            consequatur accusantium perspiciatis fugit beatae non totam aliquam
            vitae, velit fugiat optio eos officiis.
          </p>
          <div className="contact__form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Your Name" required />
                <AiOutlineUser className="icon" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" required />
                <AiOutlineMail className="icon" />
              </div>
              <div>
                <input type="number" placeholder="Your Number" required />
                <AiOutlinePhone className="icon" />
              </div>
              <textarea placeholder="Your Message" required />
              <button type="submit" className="main__button">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="section__title">Use Whatsapp</h2>
            <p className="contact__us__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              consequatur accusantium perspiciatis fugit beatae non totam
              aliquam vitae, velit fugiat optio eos officiis.
            </p>
            <a href="#" target="_blank" className="whatsapp">
              Whatsapp Us
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
