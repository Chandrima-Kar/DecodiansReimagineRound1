import React from "react";
import Section from "./sub-components/Section";
import img1 from "../assets/08/01.jpg";
import img2 from "../assets/08/02.jpg";
import img3 from "../assets/08/03.jpg";
import img4 from "../assets/08/04.jpg";
import img5 from "../assets/08/05.jpg";
import img6 from "../assets/08/06.jpg";
import img7 from "../assets/08/07.jpg";
import img8 from "../assets/08/08.jpg";
import img9 from "../assets/08/09.jpg";
import img10 from "../assets/08/deer.webp";

import "./ExploreArtistsGallery.css";
import MyButton from "./sub-components/MyButton";
import { IoIosArrowForward } from "react-icons/io";

const MovingImages = [
  {
    src: img1,
    className:
      "animation1 absolute h-auto w-[50px] md:w-[75px] lg:w-[100px] 2xl:w-[130px] rounded-lg",
  },

  {
    src: img3,
    className:
      "animation3 absolute h-auto w-[50px] md:w-[75px] lg:w-[100px] 2xl:w-[130px] rounded-lg",
  },
  {
    src: img4,
    className:
      "animation4 absolute h-auto w-[50px] md:w-[75px] lg:w-[100px] 2xl:w-[130px] rounded-lg",
  },
  {
    src: img5,
    className:
      "animation5 absolute h-auto w-[50px] md:w-[75px] lg:w-[100px] 2xl:w-[130px] rounded",
  },

  // big images
  {
    src: img2,
    className:
      "animation2 absolute h-auto w-[120px] md:w-[200px] lg:w-[250px] rounded-xl",
  },
  {
    src: img8,
    className:
      "animation8 absolute h-auto w-[120px] md:w-[200px] lg:w-[250px] rounded-xl",
  },

  // circle images
  {
    src: img6,
    className:
      "animation6 absolute h-auto w-[50px] md:w-[75px] lg:w-[100px] 2xl:w-[130px] rounded-full",
  },
  {
    src: img7,
    className:
      "animation7 absolute h-auto w-[50px] md:w-[75px] lg:w-[100px] 2xl:w-[130px] rounded-full",
  },

  {
    src: img9,
    className:
      " animation9 absolute h-auto w-[50px] md:w-[75px] lg:w-[100px] 2xl:w-[130px] rounded-full",
  },
  {
    src: img10,
    className:
      " animation10 absolute h-auto w-[50px] md:w-[75px] lg:w-[100px] 2xl:w-[130px] rounded-full",
  },
];

const ExploreArtistsGallery = () => {
  const handleMouseEnter = (e) => {
    e.target.classList.add("paused");
  };

  const handleMouseLeave = (e) => {
    e.target.classList.remove("paused");
  };

  return (
    <Section
      className=""
      crosses
      crossesOffset="translate-y-[3.25rem] md:translate-y-[5.25rem]"
      customPaddings
      id="exploreArtistsGallery"
    >
      <section className="relative z-2 w-full pt-0 md:pt-20 my-auto flex items-center justify-center">
        <div className="relative container mx-auto flex flex-col items-center justify-center h-[35rem]">
          <div className="absolute w-full h-full overflow-hidden">
            {MovingImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt="..."
                className={image.className}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
          <div
            className="relative  border-2 border-accent rounded-3xl bg-background dark:bg-darkBackground2 z-10 flex flex-col items-center gap-y-5
          
          p-2
          lg:p-5"
          >
            <div
              className="font-extrabold font-sans text-center

              text-primary-text dark:text-dark-primary-text

            text-3xl
            md:text-4xl
            lg:text-5xl "
            >
              Get inspired by
              <br /> popular artists
            </div>
            <div className="text-center  text-primary-text dark:text-dark-primary-text font-medium leading-5 text-base  lg:text-lg">
              Share your artwork and connect <br /> with other artists in our
              online community.
            </div>
            <div className="flex items-center justify-center gap-x-5">
              <div>
                <p className="text-accent font-bold text-xl md:text-2xl">
                  179,785
                </p>
                <p className="leading-5 font-semibold text-primary-text dark:text-dark-primary-text">
                  professional and <br />
                  budding artists
                </p>
              </div>
              <div className="bg-black w-[0.15rem] h-16"></div>
              <div>
                <p className="text-accent font-bold text-xl md:text-2xl">
                  11,446
                </p>
                <p className="leading-5 font-semibold text-primary-text dark:text-dark-primary-text">
                  artworks on <br />
                  display
                </p>
              </div>
            </div>
            <MyButton
              text="Explore Artist Gallery"
              className="px-2 py-1"
              icon={<IoIosArrowForward className="my-auto" />}
            />
          </div>
        </div>
      </section>
    </Section>
  );
};

export default ExploreArtistsGallery;
