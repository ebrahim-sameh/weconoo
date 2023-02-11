import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./Components";
import { Home, About, Projects, ServicesPage } from "./Pages";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="new-wecan" />} />
        <Route path="/new-wecan" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
