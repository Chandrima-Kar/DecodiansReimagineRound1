import React from "react";
// import { Outlet } from "react-router-dom";

import ParticlesComponent from "./components/ParticlesComponent";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Banner from "./components/Banner";

import FullSlider from "./components/FullSlider";
import Second from "./components/Second";
import TransparentPhotoColors from "./components/TransparentPhotoColors";
import KidsCards from "./components/KidsCards";
import ExploreArtistsGallery from "./components/ExploreArtistsGallery";
import "./App.css";

function App() {
  return (
    <div className=" bg-background">
      <ParticlesComponent />
      <Nav />
      <Header />
      <Banner />
      <FullSlider />
      <Second />
      <TransparentPhotoColors />
      <KidsCards />
      <ExploreArtistsGallery />

      {/* <Outlet /> */}
    </div>
  );
}

export default App;
