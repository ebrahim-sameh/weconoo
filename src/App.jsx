import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ButtonScrollTop, Footer, Header } from "./Components";
import { Home, About, Projects, ServicesPage, ContactUs } from "./Pages";
import AOS from "aos";

import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {};
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="new-wecan" />} />
        <Route path="/new-wecan" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      <ButtonScrollTop />
    </div>
  );
};

export default App;
