import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../HHome/Index.jsx";
import CardsAdd from "../CardsAdd/index.jsx";

const Rotas = () => {
  return (
    <div className="bg-sky-500/50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<CardsAdd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rotas;
