import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./style_swiper.css";

// import required modules
import { EffectCards, Pagination, Navigation, Keyboard } from "swiper/modules";

//
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

import ParticlesComponent from "./ParticlesComponent";

// images
import camel_img from "../assets/00/camel.png";
import card1_img from "../assets/00/card1.jpeg";
import card2_img from "../assets/00/card2.jpeg";
import card3_img from "../assets/00/card3.jpg";
import card4_img from "../assets/00/card4.jpeg";

// icons

import { MdOutlineFormatColorFill, MdDraw } from "react-icons/md";
import { BiLogoMediumOld, BiCool } from "react-icons/bi";
import { IoMdColorPalette } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { TbMoodKid, TbActivity } from "react-icons/tb";
import { RiCommandLine, RiExternalLinkLine } from "react-icons/ri";

export const circularLink = [
  {
    id: "0",
    title: "Paints",
    icon: <MdOutlineFormatColorFill />,
    path: "/paints",
  },
  {
    id: "1",
    title: "Drawing Materials",
    icon: <IoBagHandle />,
    path: "/drawing-materials",
  },
  {
    id: "2",
    title: "Mediums",
    icon: <BiLogoMediumOld />,
    path: "/mediums",
  },
  {
    id: "3",
    title: "Canvases",
    icon: <IoMdColorPalette />,
    path: "/canvases",
  },
  {
    id: "4",
    title: "Brushes",
    icon: <FaPaintBrush />,
    path: "/brushes",
  },
  {
    id: "5",
    title: "Painting Kits",
    icon: <MdDraw />,
    path: "/painting-kits",
  },
  {
    id: "6",
    title: "Hobby",
    icon: <BiCool />,
    path: "/hobby",
  },

  {
    id: "7",
    title: "Kids",
    icon: <TbMoodKid />,
    path: "/kids",
  },
  {
    id: "8",
    title: "Techniques",
    icon: <TbActivity />,
    path: "/techniques",
  },
  {
    id: "9",
    title: "Communities",
    icon: <RiCommandLine />,
    path: null,
  },
];

export const cardContent = [
  {
    card_image: card1_img,
    item: "Oil Pastels",
  },
  {
    card_image: card2_img,
    item: "Colour Pencils",
  },
  {
    card_image: card3_img,
    item: "Redimix Tempera Colours",
  },
  {
    card_image: card4_img,
    item: "Crayons",
  },
];

const Banner = () => {
  return (
    <section className="relative bg-background py-16 flex items-center overflow-hidden">
      <ParticlesComponent />
      <div className="container mx-auto flex flex-row items-center justify-center relative gap-x-48 z-10">
        {/* circular icons */}
        <div className="flex flex-row text-center ">
          <div className="relative left-1/2 flex w-[35rem] aspect-square border border-accent rounded-full -translate-x-1/2 scale-75 md:scale-100 ">
            <div className="flex w-[20rem] aspect-square m-auto border border-accent rounded-full">
              <div
                className="w-[6rem] aspect-square m-auto p-[0.1rem]  rounded-full    
                
                  
                  bg-conic-gradient"
              >
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <img
                    src={camel_img}
                    width={54}
                    height={54}
                    alt="camel_image"
                  />
                </div>
              </div>
            </div>

            <ul>
              {circularLink.map((app, index) => (
                <li
                  key={app.id}
                  className="absolute top-0 left-1/2 h-1/2 -ml-[4.6rem] origin-bottom "
                  style={{
                    transform: `rotate(${index * 36}deg) `,
                  }}
                >
                  <Link
                    to={app.path}
                    className=" flex flex-row items-center justify-center"
                  >
                    <div
                      className="relative gap-x-1 -top-[1.6rem] flex items-center justify-center w-[10rem]  h-[2.2rem] font-semibold  bg-background hover:bg-accent border-2 border-accent rounded-xl text-accent hover:text-background "
                      style={{ transform: `rotate(-${index * 36}deg)` }}
                    >
                      <div>{app.title}</div>
                      <div>{app.icon}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cards */}
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination, Navigation, Keyboard]}
            className="mySwiper"
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            keyboard={{ enabled: true }}
            speed={500}
          >
            {cardContent.map((content, i) => (
              <SwiperSlide>
                <div
                  key={i}
                  style={{ backgroundImage: `url(${content.card_image})` }}
                  className="w-[100%] h-[100%] bg-cover bg-center bg-no-repeat relative flex items-center"
                >
                  <div className="absolute inset-0 bg-black/50 opacity-50 rounded-[20px]"></div>

                  <div className=" inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 h-full gap-y-8  card">
                    <div className="flex justify-center items-start p-3 ">
                      <img
                        src={content.card_image}
                        alt="ED_Project"
                        className="rounded-[20px] w-7/12"
                      />
                    </div>
                    <div className="px-5 flex flex-col items-center justify-center">
                      <h1 className="leading-none  text-[42px] text-primary-text">
                        A colourful
                      </h1>
                      <h1 className="leading-none  text-[42px] text-primary-text">
                        mini-universe
                      </h1>
                      <p className="text-[21px] text-secondary-text">
                        Art supplies for kids{" "}
                      </p>
                    </div>
                    <div className=" flex flex-row items-center justify-center cursor-pointer rounded-md border border-background font-semibold px-4 duration-500 transition-transform hover:scale-105  text-xl text-background bg-background2 hover:bg-accent hover:text-background">
                      <span className="mr-1">{content.item}</span>
                      <RiExternalLinkLine />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
