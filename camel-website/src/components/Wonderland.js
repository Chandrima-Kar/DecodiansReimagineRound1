import React from "react";
import Section from "./sub-components/Section";
import ClipPath from "./sub-components/ClipPath";
import MyButton from "./sub-components/MyButton";

// images
import img1 from "../assets/06/01.jpeg";
import img2 from "../assets/06/02.jpg";

import card1 from "../assets/SecondPostersSVG/card-1.svg";
import card2 from "../assets/SecondPostersSVG/card-2.svg";

// icons
import { IoIosArrowForward } from "react-icons/io";
import WonderlandTitle from "./wonderlandTitle";

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
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="wonderland"
    >
      <section className="relative z-2 w-full pt-20 my-auto flex items-center justify-center">
        <div className="flex flex-col items-center md:max-w-[1400px] w-full pb-0 relative group container mx-4 sm:mx-[6.5rem] md:mx-5 lg:mx-[6.5rem] gap-y-3 ">
          <WonderlandTitle />
          <div className="flex flex-row w-full items-center justify-evenly">
            <div className="flex flex-col justify-end text-left">
              <span className="block text-[2.5rem] font-semibold">
                where creativity thrives
              </span>
            </div>
            <div className="flex flex-col justify-end text-right items-center">
              <span className="text-2xl text-secondary-text font-semibold">
                Art supplies for hobbyists
              </span>
            </div>
          </div>
          <div className="flex container w-full items-center sm:mx-[6.5rem] md:mx-5 lg:mx-0 justify-center gap-x-10  xl:gap-x-12 xl:justify-center">
            {posterData.map((item, index) => (
              <div
                key={index}
                className={`block relative bg-no-repeat bg-[length:100%_100%] md:max-w-[35rem] h-[2rem] w-[20rem] sm:h-[25rem] sm:w-[21rem] md:w-[20rem] lg:w-[22rem] xl:h-[24rem] xl:w-[36rem] 2xl:w-[38rem]`}
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <div className="relative z-2 flex flex-col p-[2rem] min-h-[24rem] sm:min-h-[25rem] xl:min-h-[24rem]">
                  <h6 className="font-extrabold text-black text-3xl">
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
          </div>
        </div>
      </section>
    </Section>
  );
};

export default WonderLand;
