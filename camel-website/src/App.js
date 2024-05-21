import React from "react";
// import { Outlet } from "react-router-dom";

import ParticlesComponent from "./components/ParticlesComponent";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Second from "./components/Second";
import FullSlider from "./components/FullSlider";
import "./App.css";

function App() {
  return (
    <div className=" bg-background">
      <ParticlesComponent />
      <Nav />
      <Header />
      <Banner />
      <Second />
      <FullSlider />
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
