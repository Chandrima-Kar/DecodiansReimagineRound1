import React, { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import "../components/Theme.css";

const ThemeSettings = () => {
  const [colorTheme, setColorTheme] = useState('theme-white');
  const [mode, setMode] = useState('light-mode'); // new state for light/dark mode
  const [showFooterButton, setShowFooterButton] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    const currentMode = localStorage.getItem('theme-mode');
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
      document.documentElement.className = `${currentThemeColor} ${currentMode || 'light-mode'}`;
    }
    if (currentMode) {
      setMode(currentMode);
    }
  }, []);

  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme);
    document.documentElement.className = `${theme} ${mode}`;
    setIsSidebarOpen(false); // Close sidebar on theme selection
  };

  const handleModeClick = (newMode) => {
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
    document.documentElement.className = `${colorTheme} ${newMode}`;
    setIsSidebarOpen(false); // Close sidebar on mode selection
  };

  const listenToScroll = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      setShowFooterButton(footerTop <= window.innerHeight);
    }
  };

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <div className="sticky bottom-5 ml-40 mr-5 z-50 flex justify-end items-center">
        <div
          className={`text-3xl w-12 h-12 text-white bg-accent shadow-lg rounded-full flex justify-center items-center cursor-pointer  
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
            <div className="p-4 flex flex-row gap-2 justify-center">
              <h2 className="text-2xl text-center font-semibold">Theme Settings</h2>
              <IoMdSettings className="h-6 w-6 mt-1 "/>
            </div>


            <div className="mode-options flex flex-col">
            <div className="text-xl font-semibold">Theme Options</div>
              <div
                className={`mode-option ${mode === 'light-mode' ? 'active' : ''}`}
                onClick={() => handleModeClick('light-mode')}
              >
                <h1 className="text-lg">Light</h1>
              </div>
              <div
                className={`mode-option ${mode === 'dark-mode' ? 'active' : ''}`}
                onClick={() => handleModeClick('dark-mode')}
              >
                Dark
              </div>
            </div>

            <div className="colour-options">Theme Colors
              <div id='theme-white' className="bg-[#eee]" onClick={() => handleClick('theme-white')}></div>
              <div id='theme-pink' className="bg-[#FF5C8E]" onClick={() => handleClick('theme-pink')}></div>
              <div id='theme-blue' className="bg-[#1A97F5]" onClick={() => handleClick('theme-blue')}></div>
              <div id='theme-orange' className="bg-[#FB9678]" onClick={() => handleClick('theme-orange')}></div>
              <div id='theme-purple' className="bg-[#7352FF]" onClick={() => handleClick('theme-purple')}></div>
              <div id='theme-green' className="bg-[#03C9D7]" onClick={() => handleClick('theme-green')}></div>
              <div id='theme-indigo' className="bg-[#1E4DB7]" onClick={() => handleClick('theme-indigo')}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeSettings;
