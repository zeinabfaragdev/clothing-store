import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Hats from "./pages/hats/Hats";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop/hats" element={<Hats />} />
    </Routes>
  );
}

export default App;
