import React from "react";
import { motion } from "framer-motion";

import ClipPath from "../../sub-components/body/ClipPath";
import Section from "../../sub-components/body/Section";
import MyButton from "../../sub-components/body/MyButton";
import { fadeIn } from "../../sub-components/body/variants.js";
import WonderlandTitle from "../../sub-components/body/wonderlandTitle.js";

// images
import img1 from "../../../assets/Wonderland/01.webp";
import img2 from "../../../assets/Wonderland/02.webp";

import card1 from "../../../assets/CardSkeleton/card-1.svg";
import card2 from "../../../assets/CardSkeleton/card-2.svg";

// icons
import { IoIosArrowForward } from "react-icons/io";

const posterData = [
  {
    id: "0",
    title: "Acrylic Colours",
    text: "Acrylic Colours",
    backgroundUrl: card1,
    imageUrl: img1,
    light: true,
  },
  {
    id: "1",
    title: "Fluid Acrylic Colours ",
    text: "Fluid Acrylic Colours",
    backgroundUrl: card2,
    imageUrl: img2,
  },
];

const WonderLand = () => {
  return (
    <Section
      className=""
      crosses
      crossesOffset="translate-y-[3.25rem]  md:translate-y-[5.25rem]"
      customPaddings
      id="wonderland"
    >
      <section className="relative z-2 w-full pt-0 md:pt-20 my-auto flex items-center justify-center">
        <div className="flex flex-col items-center md:max-w-[1400px] w-full pb-0 relative group container mx-4 sm:mx-[6.5rem] md:mx-5 lg:mx-[6.5rem] md:gap-y-8">
          <WonderlandTitle />
          <div className="flex flex-col w-full items-center justify-evenly gap-y-0 lg:gap-y-2">
            <div className="flex flex-col justify-end text-left">
              <motion.span
                variants={fadeIn("right", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                className="font-semibold font-lato block text-[1.7rem] md:text-[2rem] lg:text-4xl xl:text-5xl text-primary-text dark:text-dark-primary-text"
              >
                where creativity thrives
              </motion.span>
            </div>
            <div className="flex flex-col justify-end text-right items-center ">
              <motion.span
                variants={fadeIn("left", 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="text-secondary-text dark:text-dark-secondary-text font-semibold font-open_sans text-base md:text-xl lg:text-2xl xl:text-3xl "
              >
                Art supplies for hobbyists
              </motion.span>
            </div>
          </div>

          <motion.div
            variants={fadeIn("zoom", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col md:flex-row container w-full items-center sm:mx-[6.5rem] md:mx-5 lg:mx-0 justify-center gap-x-10  xl:gap-x-12 gap-y-5 md:gap-y-0 xl:justify-center"
          >
            {posterData.map((item, index) => (
              <div
                key={index}
                className={`block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[35rem] 
                  
                  w-[17rem] 
                  sm:h-[25rem] sm:w-[21rem] 
                  md:w-[20rem] 
                  lg:w-[25rem] 
                  xl:h-[24rem] xl:w-[30rem] 
                  2xl:w-[38rem]`}
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <div className="relative z-2 flex flex-col p-[2rem] min-h-[24rem] sm:min-h-[25rem] xl:min-h-[24rem]">
                  <h6 className="font-extrabold font-montserrat text-black text-3xl">
                    {item.title}
                  </h6>
                  <div className="flex-grow" />
                  <div className="flex items-end justify-end my-4">
                    <MyButton
                      text={item.text}
                      className="px-6 py-2"
                      icon={<IoIosArrowForward className="my-auto" />}
                    />
                  </div>
                </div>

                <div
                  className="absolute inset-0.5"
                  style={{ clipPath: "url(#posterData)" }}
                >
                  <div className="absolute inset-0 ">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={400}
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
        </div>
      </section>
    </Section>
  );
};

export default WonderLand;
