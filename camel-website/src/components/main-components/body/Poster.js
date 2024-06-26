import React, { useState } from "react";
import { motion } from "framer-motion";

import ClipPath from "../../sub-components/body/ClipPath";
import Section from "../../sub-components/body/Section";
import MyButton from "../../sub-components/body/MyButton";
import { fadeIn } from "../../sub-components/body/variants.js";

// images
import crayonImg from "../../../assets/Poster/1_0.webp";
import artistImg from "../../../assets/Poster/3_1.webp";
import posterColorImg from "../../../assets/Poster/2_2.webp";
import card1 from "../../../assets/CardSkeleton/card-1.svg";
import card2 from "../../../assets/CardSkeleton/card-2.svg";
import card3 from "../../../assets/CardSkeleton/card-3.svg";

// icons
import { IoIosArrowForward } from "react-icons/io";

const posterData = [
  {
    id: "0",
    title: "The Art of Making Wax Crayons ",
    text: "Watch Now",
    backgroundUrl: card1,
    imageUrl: crayonImg,
    light: true,
  },
  {
    id: "1",
    title: "Building India's First Artist Community ",
    text: "Sign up",
    backgroundUrl: card2,
    imageUrl: artistImg,
  },
  {
    id: "2",
    title: "For Little Artists with Big Ideas ",
    text: "Shop Now",
    backgroundUrl: card3,
    imageUrl: posterColorImg,
    light: true,
  },
];

const Poster = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Section
      className=""
      crosses
      crossesOffset="translate-y-[3.25rem] md:translate-y-[5.25rem]"
      customPaddings
      id="poster"
    >
      <section className="relative z-2 w-full pt-0 md:pt-20  my-auto   flex items-center justify-center">
        <motion.div
          variants={fadeIn("zoom", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="flex container  w-full flex-wrap items-center  flex-grow     
          sm:mx-[6.5rem] md:mx-5 lg:mx-[6.5rem]
        justify-evenly gap-x-5 gap-y-8 lg:gap-x-2 lg:justify-between "
        >
          {posterData.map((item, index) => (
            <div
              key={index}
              className={`block relative p-1 bg-no-repeat bg-[length:100%_100%] md:max-w-[30rem] 
            
            h-[22rem] w-[17rem]
            sm:h-[25rem] sm:w-[18rem] 
            md:w-[20rem] 
            lg:w-[16rem]
            xl:h-[30rem] xl:w-[22rem] 
            2xl:w-[25rem] ${
              hoveredIndex !== null && hoveredIndex !== index ? "blur" : ""
            }`}
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
                transition: "filter 500ms ease-in-out",
                filter:
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blur(7px)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative z-2 flex flex-col p-[2rem] 
            
              min-h-[22rem]
              sm:min-h-[25rem]
              xl:min-h-[30rem]  "
              >
                {hoveredIndex === index && (
                  <motion.h6
                    variants={fadeIn("up", 0.1, 1)}
                    initial="hidden"
                    whileInView="show"
                    className="font-extrabold text-black text-3xl"
                  >
                    {item.title}
                  </motion.h6>
                )}
                <div className="flex items-center justify-end mt-auto text-xl sm:text-2xl md:text-xl xl:text-2xl">
                  <MyButton
                    text={item.text}
                    className="px-2 py-1"
                    icon={<IoIosArrowForward className="my-auto" />}
                  />
                </div>
              </div>

              {item.light}
              <div
                className="absolute inset-0.5"
                style={{ clipPath: "url(#posterData)" }}
              >
                <div className="absolute inset-0 ">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="absolute top-0 z-3 inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </motion.div>
      </section>
    </Section>
  );
};

export default Poster;
