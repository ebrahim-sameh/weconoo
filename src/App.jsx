import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./Components";
import { Home } from "./Pages";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
