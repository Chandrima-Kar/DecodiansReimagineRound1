import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFooterButton, setShowFooterButton] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHidden = 1600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Check if footer is visible
    const footer = document.getElementById("footer");
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      setShowFooterButton(footerTop <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="sticky bottom-12 lg:bottom-5 z-40 mr-64 ml-5 flex justify-start items-center">
      {isVisible && (
        <div
          className={`text-2xl text-white bg-accent shadow-lg rounded-full flex justify-center items-center cursor-pointer w-9 h-9 lg:w-12 lg:h-12 ${
            showFooterButton ? "absolute -top-5" : ""
          }`}
          onClick={goToBtn}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
