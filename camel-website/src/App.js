import React from "react";
// import { Outlet } from "react-router-dom";

import ParticlesComponent from "./components/ParticlesComponent";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  return (
    <div className=" bg-background">
      <ParticlesComponent />
      <Nav />
      <Header />
      <Banner />
      {/* <Outlet /> */}
    </div>
  );
}

export default App;

// background: "#121212",
// background2: "#bb86fc4f",
// "primary-text": "#f0f0f0",
//  "secondary-text": "#cecece",
//  accent: "#BB86FC",
//  highlight: "#03DAC6",
