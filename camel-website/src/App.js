import React, { useEffect, useState } from "react";
import Particle from "./components/ParticlesComponent";
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
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import ThemeSettings from "./components/ThemeSettings";
import Preloader from "./components/Preloader";
import "./App.css";

function App() {
  const [colorTheme, setColorTheme] = useState("theme-red");
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!loading) {
      setIsInitialLoad(false);
    }
  }, [loading]);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
      document.documentElement.classList.add(currentThemeColor);
    }

    const currentMode = localStorage.getItem("theme-mode");
    if (currentMode) {
      setMode(currentMode);
      if (currentMode === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const handleModeSwitch = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("theme-mode", newMode);
  };

  const handleThemeChange = (theme) => {
    document.documentElement.classList.remove(colorTheme); // Remove the old theme class
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
    document.documentElement.classList.add(theme); // Add the new theme class

    // Ensure dark mode class is preserved
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }
  };

  if (loading) {
    return <Preloader setLoading={setLoading} />; // Show preloader while loading is true
  }

  return (
    <div className="bg-[#FFFAF4] dark:bg-darkBackground">
      <Particle colorTheme={colorTheme} />
      <Nav />
      <Header />
      <Banner isInitialLoad={isInitialLoad} />
      <FullSlider />
      <Poster />
      <FeaturedArtist />
      <TransparentPhotoColors />
      <Writeup />
      <Wonderland />
      <KidsCards />
      <ExploreArtistsGallery />
      <Quotation />
      <FAQ />
      <GoToTop />
      <ThemeSettings
        colorTheme={colorTheme}
        onThemeChange={handleThemeChange}
        mode={mode}
        onModeSwitch={handleModeSwitch}
      />
      <Footer />
    </div>
  );
}

export default App;
