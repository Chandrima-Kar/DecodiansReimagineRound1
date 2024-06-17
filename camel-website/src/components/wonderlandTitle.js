import React from "react";
import img1 from "../assets/06/brush1.png";
import "./wonderland.css";

const WonderlandTitle = () => {
  return (
    <div className="relative container mx-auto flex flex-col items-center justify-center h-[5rem]">
      <div className="absolute  w-full h-full overflow-hidden">
        <img
          src={img1}
          alt="..."
          className="animation22 absolute h-[60px] w-[80px] z-0"
        />
      </div>
      <div
        id="wonderland-title"
        className="flex flex-col items-center justify-center mb-5"
      >
        <h1 className="relative flex justify-center items-center font-bold text-8xl tracking-wide space-x-7 font-LexendZetta-Light">
          <span className="relative">
            W
            <div className="absolute top-[.3rem] left-[2.6rem] transform -translate-x-2.5 text-xl bg-background text-primary-text px-[0.35rem]">
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
      </div>
    </div>
  );
};

export default WonderlandTitle;
