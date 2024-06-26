import React, { useEffect } from "react";
import camel_img from "../../../assets/logo/camel.webp";

import "../../sub-components/style/Preloader.css";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Preloader will disappear after 1.5 seconds

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="preloader flex flex-col items-center justify-center">
      <img
        src={camel_img}
        alt="camel_image"
        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-transparent"
      />
      <div className="wave-container font-montserrat text-xl min-[350px]:text-[1.8rem] mt-5">
        <div className="wave">Welcome</div>
        <div className="wave" style={{ animationDelay: "0.3s" }}>
          to
        </div>
        <div className="wave" style={{ animationDelay: "0.6s" }}>
          Camel
        </div>
      </div>
    </div>
  );
};

export default Preloader;
