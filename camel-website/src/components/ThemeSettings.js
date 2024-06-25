import React, { useState, useEffect } from "react";
import { IoMdSettings } from "react-icons/io";
import "../components/Theme.css";

const ThemeSettings = ({ colorTheme, onThemeChange, mode, onModeSwitch }) => {
  const [showFooterButton, setShowFooterButton] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleThemeClick = (theme) => {
    onThemeChange(theme);
    setIsSidebarOpen(false); // Close sidebar on theme selection
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
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <div className="sticky bottom-12 lg:bottom-5 ml-64 mr-5 z-40  flex justify-end items-center">
        <div
          className={`text-3xl text-white bg-accent shadow-lg rounded-full flex justify-center items-center cursor-pointer   w-9 h-9  lg:w-12 lg:h-12 
            ${showFooterButton ? "absolute -top-5 " : ""}`}
          onClick={toggleSidebar}
        >
          <IoMdSettings />
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-opacity-75 flex">
          <div className="flex-1" onClick={toggleSidebar}></div>

          <div className="w-1/3 bg-[#484B52] h-full shadow-lg">
            {/* Theme settings heading */}
            <div className="p-4 flex flex-row gap-2 justify-center ">
              <h2 className="text-3xl text-center font-semibold text-[#FFFAF4] mt-10">
                Theme Settings
              </h2>
              <IoMdSettings className="h-8 w-8 mt-10 text-white" />
            </div>

            {/* Mode Options */}
            <div className="mode-options flex flex-col ">
              <div className="text-2xl font-semibold text-white mb-5 mt-8">
                Mode Options:
              </div>
              <button
                className="bg-yellow-500 px-6 py-2 rounded-lg text-lg font-semibold"
                onClick={handleModeSwitch}
              >
                {mode === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            {/* Theme Colors */}
            <div className="colour-options max-w-2xl mx-0 mt-8 align-center px-5 py-0">
              <div>
                <span className="mb-2 text-2xl font-semibold text-white">
                  Theme Colors:
                </span>
              </div>
              <div className="flex flex-row justify-center">
                <div
                  id="theme-red"
                  className="bg-[#e1251a] w-9 h-9 cursor-pointer opacity-1 mx-3 my-4 rounded-full"
                  onClick={() => handleThemeClick("theme-red")}
                ></div>
                <div
                  id="theme-pink"
                  className="bg-[#FF5C8E] w-9 h-9 cursor-pointer opacity-1 mx-3 my-4 rounded-full"
                  onClick={() => handleThemeClick("theme-pink")}
                ></div>
                <div
                  id="theme-blue"
                  className="bg-[#1A97F5] w-9 h-9  cursor-pointer opacity-1 mx-3 my-4 rounded-full"
                  onClick={() => handleThemeClick("theme-blue")}
                ></div>
                <div
                  id="theme-orange"
                  className="bg-[#FB9678] w-9 h-9  cursor-pointer opacity-1 mx-3 my-4 rounded-full"
                  onClick={() => handleThemeClick("theme-orange")}
                ></div>
                <div
                  id="theme-purple"
                  className="bg-[#7352FF] w-9 h-9 cursor-pointer opacity-1 mx-3 my-4 rounded-full"
                  onClick={() => handleThemeClick("theme-purple")}
                ></div>
                <div
                  id="theme-green"
                  className="bg-[#03C9D7] w-9 h-9  cursor-pointer opacity-1 mx-3 my-4 rounded-full"
                  onClick={() => handleThemeClick("theme-green")}
                ></div>
                <div
                  id="theme-indigo"
                  className="bg-[#1E4DB7] w-9 h-9  cursor-pointer opacity-1 mx-3 my-4 rounded-full"
                  onClick={() => handleThemeClick("theme-indigo")}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeSettings;
