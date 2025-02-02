import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";


import Home from "./Pages/Home";
import About from "./Pages/About";
import Order from "./Pages/Order"

export default function App() {
  return (
    <div>
      <Nav />
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
    </div>
  );
}
