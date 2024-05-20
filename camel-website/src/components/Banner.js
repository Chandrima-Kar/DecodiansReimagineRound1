import React, { useState } from "react";
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

// images
import camel_img from "../assets/00/camel.png";
import card1_img from "../assets/00/card1.jpeg";
import card2_img from "../assets/00/card2.jpeg";
import card3_img from "../assets/00/card3.jpg";
import card4_img from "../assets/00/card4.jpeg";

// icons

import { MdOutlineFormatColorFill, MdDraw } from "react-icons/md";
import { BiLogoMediumOld, BiCool } from "react-icons/bi";
import {
  IoMdColorPalette,
  IoIosArrowDropdown,
  IoIosArrowDropup,
} from "react-icons/io";
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
    title: "Community",
    icon: <RiCommandLine />,
    path: null,
  },
];

export const dropDownContent = [
  {
    title: "Artist Gallery",
    path: "/artist-gallery",
  },
  {
    title: "Art Workshops",
    path: "/art-workshops",
  },
  {
    title: "Art Contests",
    path: "/art-contests",
  },
];

export const cardContent = [
  {
    card_image: card1_img,
    item: "Oil Pastels",
    path: "/paints/oil-pastels",
  },
  {
    card_image: card2_img,
    item: "Colour Pencils",
    path: "/paints/colour-pencils",
  },
  {
    card_image: card3_img,
    item: "Redimix Tempera Colours",
    path: "/paints/remidix-tempera-colours",
  },
  {
    card_image: card4_img,
    item: "Crayons",
    path: "/paints/crayons",
  },
];

const Banner = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCommunityClick = (e) => {
    e.preventDefault();
    setShowDropdown((prev) => !prev);
  };

  return (
    <section className="relative  py-16 flex items-center overflow-hidden">
      <div
        className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative py-0 pb-7 sm:py-7 
      
      lg:gap-x-36 xl:gap-x-48 
      md:gap-y-20 lg:gap-y-0  
      
      "
      >
        {/* circular icons */}
        <div className="flex flex-row text-center ">
          <div
            className="relative left-1/2 flex  aspect-square border border-accent rounded-full -translate-x-1/2 scale-75 md:scale-100  
          
          w-[20rem]  md:w-[35rem] lg:max-xl:w-[25rem]"
          >
            <div
              className="flex  aspect-square m-auto border border-accent rounded-full  
            
            w-[13rem]  md:w-[20rem] lg:max-xl:w-[15rem]"
            >
              <div
                className="aspect-square m-auto p-[0.1rem]  rounded-full    
                w-[4rem] md:w-[6rem] 
                  
                  bg-conic-gradient"
              >
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <img
                    src={camel_img}
                    alt="camel_image "
                    className=" w-[35px] h-[35px] md:w-[54px] md:h-[54px]"
                  />
                </div>
              </div>
            </div>

            <ul>
              {circularLink.map((app, index) => (
                <li
                  key={app.id}
                  className="absolute top-0 left-1/2 h-1/2 origin-bottom 
                  
                  -ml-[4rem] md:-ml-[4.6rem] "
                  style={{
                    transform: `rotate(${index * 36}deg)`,
                  }}
                >
                  {app.title === "Community" ? (
                    <div
                      onClick={handleCommunityClick}
                      className="relative cursor-pointer flex flex-row items-center justify-center"
                    >
                      <div
                        className={`relative gap-x-1 -top-[1.6rem] flex items-center justify-center w font-semibold  hover:bg-accent border-2 border-accent rounded-xl  hover:text-background pl-2 transition-all duration-500
                        w-[8rem]  md:w-[10rem] 
                        h-[1.8rem] md:h-[2.2rem]
                        text-[12px]    md:text-[1rem]
                        ${
                          showDropdown
                            ? "rounded-b-none bg-accent text-background"
                            : "bg-background text-accent"
                        }`}
                        style={{ transform: `rotate(-${index * 36}deg)` }}
                      >
                        <div>{app.title}</div>
                        <div>{app.icon}</div>
                        <div className="text-xl ml-1 transition-transform duration-500">
                          {showDropdown ? (
                            <IoIosArrowDropup />
                          ) : (
                            <IoIosArrowDropdown />
                          )}
                        </div>
                      </div>

                      <div
                        className={`absolute  bg-background2 border border-accent rounded-b-md text-center   duration-500 transform 
                        w-[8rem] md:w-[10rem]
                        -top-2 right-[1.95rem] md:-top-1 md:right-[2.4rem]
                        ${
                          showDropdown
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                        style={{ transform: `rotate(-${index * 36}deg)` }}
                      >
                        <div className="flex flex-col ">
                          {dropDownContent.map((content, index) => (
                            <Link
                              key={index}
                              to={content.path}
                              className="w-full h-full bg-background2 hover:bg-background text-primary-text hover:text-accent hover:rounded-md py-1 
                              text-[12px]    md:text-[1rem]"
                            >
                              {content.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={app.path}
                      className="flex flex-row items-center justify-center"
                    >
                      <div
                        className="relative gap-x-1 -top-[1.6rem] flex items-center justify-center  font-semibold bg-background hover:bg-accent border-2 border-accent rounded-xl text-accent hover:text-background transition-all duration-500 
                        
                        w-[8rem]  md:w-[10rem] 
                        h-[1.8rem] md:h-[2.2rem]
                        text-[11px]    md:text-[1rem]"
                        style={{ transform: `rotate(-${index * 36}deg)` }}
                      >
                        <div>{app.title}</div>
                        <div>{app.icon}</div>
                      </div>
                    </Link>
                  )}
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

                  <div
                    className=" inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 h-full  card
                  
                  gap-y-5 sm:gap-y-8 lg:max-xl:gap-y-3 "
                  >
                    <div className="flex justify-center items-start p-3 ">
                      <img
                        src={content.card_image}
                        alt="ED_Project"
                        className="rounded-[20px] w-[50%] sm:w-7/12 "
                      />
                    </div>
                    <div className="px-5 flex flex-col items-center justify-center">
                      <h1 className="leading-none text-[30px] sm:text-[42px] lg:max-xl:text-[34px]  text-primary-text">
                        A colourful
                      </h1>
                      <h1 className="leading-none text-[30px] sm:text-[42px] lg:max-xl:text-[34px] text-primary-text">
                        mini-universe
                      </h1>
                      <p className=" text-[16px] sm:text-[21px] lg:max-xl:text-[17px] text-secondary-text">
                        Art supplies for kids{" "}
                      </p>
                    </div>
                    <Link
                      to={content.path || "#"}
                      className="flex flex-row items-center justify-center cursor-pointer rounded-md border border-background font-semibold px-4 duration-500 transition-transform hover:scale-105  text-background bg-background2 hover:bg-accent hover:text-background
                      text-[1rem] sm:text-xl lg:max-xl:text-[1rem]"
                    >
                      <span className="mr-1">{content.item}</span>
                      <RiExternalLinkLine />
                    </Link>
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
