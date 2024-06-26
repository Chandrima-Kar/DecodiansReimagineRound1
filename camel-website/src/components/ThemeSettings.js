import React, { useState, useEffect } from "react";
import { IoMdSettings } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { IoIosColorPalette } from "react-icons/io";
import "../components/Theme.css";

const ThemeSettings = ({ colorTheme, onThemeChange, mode, onModeSwitch }) => {
  const [showFooterButton, setShowFooterButton] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(colorTheme);

  const handleThemeClick = (theme) => {
    onThemeChange(theme);
    setSelectedTheme(theme);
    setIsSidebarOpen(false);
  };

  const listenToScroll = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      setShowFooterButton(footerTop <= window.innerHeight);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleModeSwitch = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    onModeSwitch(newMode);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const colorOptions = [
    { id: "theme-red", color: "#e1251a" },
    { id: "theme-pink", color: "#FF94CC" },
    { id: "theme-blue", color: "#1A97F5" },
    { id: "theme-orange", color: "#FFAB76" },
    { id: "theme-purple", color: "#7352FF" },
    { id: "theme-green", color: "#03C9D7" },
    { id: "theme-indigo", color: "#1E4DB7" },
  ];

  return (
    <>
      <div className="sticky bottom-12 lg:bottom-5 z-40 ml-64 mr-[1.1rem] flex justify-end items-center">
        <div
          className={`text-xl text-white bg-accent shadow-lg rounded-full flex justify-center items-center cursor-pointer  w-9 h-9  lg:w-12 lg:h-12 
            ${showFooterButton ? "absolute -top-5 " : ""}`}
          onClick={toggleSidebar}
        >
          <IoMdSettings />
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-opacity-75 flex">
          <div className="flex-1" onClick={toggleSidebar}></div>

          <div className="sm:w-2/5 md:w-1/3 w-1/2 bg-[#484B52] h-full shadow-lg">
            <div className="sm:p-4 p-3 flex flex-col gap-2 justify-center">
              <div>
                <ImCross
                  className="cross md:h-3 md:w-3 sm:h-2 sm:w-2 h-2 w-2 sm:mt-1 mt-0 ml-[10.6rem] xl:ml-[27rem] lg:ml-[19rem] md:ml-[14rem] sm:ml-[11.5rem] text-white cursor-pointer"
                  onClick={toggleSidebar}
                />
              </div>

              <div className="flex flex-row justify-center">
                <h2 className="text-center font-semibold text-[#FFFAF4] mt-10 mr-3 xl:text-3xl lg:text-2xl md:text-xl sm:text-md text-md">
                  Theme Settings
                </h2>
              </div>
            </div>

            <div className="mode-options flex flex-col ">
              <div className=" text-white text-center mb-5 mt-8 text-sm xl:text-2xl lg:text-xl md:text-lg sm:text-sm">
                Mode Options:
              </div>
              <button
                className=" bg-yellow-300 rounded-xl
                mx-14 text-sm px-2 py-1
                xl:px-4 xl:text-lg 
                lg:mx-28 lg:px-2 lg:text-md lg:py-2
                md:py-2 md:px-1 md:text-sm md:mx-12
                sm:mx-10 sm:text-sm sm:py-1 sm:px-1"
                onClick={handleModeSwitch}
              >
                {mode === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            <div className="colour-options max-w-2xl mx-0 mt-16 text-center px-5 py-0">
              <div>
                <div className="mb-6 text-white text-sm xl:text-2xl lg:text-xl md:text-lg sm:text-sm">
                  Theme Colors:
                </div>
              </div>
              <div
                className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 justify-center items-center lg:grid-cols-4 mt-5
              xl:mx-12 xl:gap-8
              lg:mx-6 lg:gap-4
              md:mx-2 md:gap-3
              sm:mx-3 sm:gap-2
              mx-3 gap-2"
              >
                {colorOptions.map((option) => (
                  <div
                    key={option.id}
                    id={option.id}
                    className="cursor-pointer opacity-1 flex items-center justify-center"
                    onClick={() => handleThemeClick(option.id)}
                  >
                    <IoIosColorPalette
                      className=" p-1 rounded-full
                      xl:text-5xl
                      md:text-4xl
                      sm:text-3xl
                      text-3xl
                      "
                      style={{
                        color: option.color,
                        borderColor:
                          selectedTheme === option.id ? "white" : option.color,
                        borderWidth: "3px",
                        borderStyle: "solid",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeSettings;
