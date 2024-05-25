import React from "react";
// import { Outlet } from "react-router-dom";

import ParticlesComponent from "./components/ParticlesComponent";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Banner from "./components/Banner";
import FullSlider from "./components/FullSlider";
import Poster from "./components/Poster";
import FeaturedArtist from "./components/FeaturedArtist";
import TransparentPhotoColors from "./components/TransparentPhotoColors";
import Writeup from "./components/Writeup";
import Wonderland from "./components/Wonderland";
import KidsCards from "./components/KidsCards";
import ExploreArtistsGallery from "./components/ExploreArtistsGallery";
import Quotation from "./components/Quotation";
import ExtraContents from "./components/ExtraContents";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className=" bg-background">
      <ParticlesComponent />

      <Nav />
      <Header />
      <Banner />
      <FullSlider />
      <Poster />
      <FeaturedArtist />
      <TransparentPhotoColors />
      <Writeup />
      <Wonderland />
      <KidsCards />
      <Third />
      <Fifth />
      <ExploreArtistsGallery />

      <Quotation />
      <ExtraContents />
      <FAQ />
      <Footer />

      {/* <Outlet /> */}
    </div>
  );
}

export default App;
