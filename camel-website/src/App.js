import React, { useEffect, useState } from "react";

// sub-components
import Particle from "./components/sub-components/body/ParticlesComponent";
import GoToTop from "./components/sub-components/body/GoToTop";
import ThemeSettings from "./components/sub-components/body/ThemeSettings";
import Preloader from "./components/sub-components/body/Preloader";

// main-components
import Nav from "./components/main-components/body/Nav";
import Header from "./components/main-components/body/Header";
import Banner from "./components/main-components/body/Banner";
import FullSlider from "./components/main-components/body/FullSlider";
import Poster from "./components/main-components/body/Poster";
import FeaturedArtist from "./components/main-components/body/FeaturedArtist";
import TransparentPhotoColors from "./components/main-components/body/TransparentPhotoColors";
import Writeup from "./components/main-components/body/Writeup";
import Wonderland from "./components/main-components/body/Wonderland";
import KidsCards from "./components/main-components/body/KidsCards";
import ExploreArtistsGallery from "./components/main-components/body/ExploreArtistsGallery";
import Quotation from "./components/main-components/body/Quotation";
import FAQ from "./components/main-components/body/FAQ";
import Footer from "./components/main-components/body/Footer";

// styles
import "./App.css";
import "./components/sub-components/style/Theme.css";

// code
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
