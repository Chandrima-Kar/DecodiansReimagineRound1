import React, { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";

const ThemeSettings = () => {
  const [showFooterButton, setShowFooterButton] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="sticky bottom-5 ml-40 mr-5 z-50 flex justify-end items-center ">
      <div
        className={`text-3xl w-12 h-12 text-white bg-accent shadow-lg rounded-full flex justify-center items-center cursor-pointer  
            
            ${showFooterButton ? "absolute -top-5 " : ""}`}
        // onClick={goToBtn}
      >
        <IoMdSettings />
      </div>
    </div>
  );
};

export default ThemeSettings;
