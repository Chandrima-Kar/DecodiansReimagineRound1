import React, { useEffect, useRef } from "react";
import img1 from "../../../assets/Wonderland/brush1.webp";
import "../style/wonderland.css";
// import "./wonderland.css";

const WonderlandTitle = () => {
  const wonderlandRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (wonderlandRef.current) {
      observer.observe(wonderlandRef.current);
    }

    return () => {
      if (wonderlandRef.current) {
        observer.unobserve(wonderlandRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={wonderlandRef}
      className="relative container mx-auto flex flex-col items-center justify-center h-[5rem]"
    >
      <div className="flex flex-col items-center justify-center md:mb-5 px-7">
        <h1
          id="wonderland-title"
          className="relative flex   justify-center items-center font-bold   font-LexendZetta-Light 
          
          text-[2rem] tracking-normal  space-x-1
          md:text-[3.25rem] md:tracking-wide md:space-x-7
          lg:text-7xl
          xl:text-8xl
          text-primary-text
          dark:text-dark-primary-text
          "
        >
          <span className="relative">
            W
            <div
              className="absolute   transform -translate-x-2.5  bg-background dark:bg-darkBackground text-primary-text dark:text-dark-primary-text
              
            left-[1.2rem] px-[0.15rem] text-[0.7rem] top-[.5rem]
            md:left-[1.63rem] md:px-[0.15rem] md:text-[1rem] md:top-[.65rem]
            lg:left-[2rem]  lg:px-[0.35rem] lg:text-xl lg:top-[.3rem]
            xl:left-[2.6rem] 
            2xl:left-[2.5rem]  2xl:text-2xl"
            >
              <span>A</span>
            </div>
          </span>
          <span>O</span>
          <span>N</span>
          <span>D</span>
          <span>E</span>
          <span>R</span>
          <span>L</span>
          <span>A</span>
          <span>N</span>
          <span>D</span>
        </h1>
        <div
          className="absolute w-full h-full overflow-hidden 
        
          top-7 md:top-4 lg:top-1 2xl:top-0"
        >
          <img
            src={img1}
            alt="Brush"
            className="brush-animation z-0
            h-[80px] w-[50px] 
            md:h-[100px] md:w-[60px]
            lg:h-[115px] lg:w-[70px]
            xl:h-[130px] xl:w-[80px] "
          />
        </div>
      </div>
    </div>
  );
};

export default WonderlandTitle;
