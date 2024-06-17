import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 1600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="fixed bottom-10 left-5 z-50 flex justify-start items-center md:bottom-5 md:right-5">
      {isVisible && (
        <div
          className="text-xl w-12 h-12 text-white bg-accent shadow-lg rounded-full flex justify-center items-center cursor-pointer animate-gototop"
          onClick={goToBtn}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
