import React, { useState } from "react";
import "../components/Theme.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

// images
import camel_img from "../assets/00/camel.png";

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
import { RiCommandLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

// different paths of different pages
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
  { id: "2", title: "Mediums", icon: <BiLogoMediumOld />, path: "/mediums" },
  { id: "3", title: "Canvases", icon: <IoMdColorPalette />, path: "/canvases" },
  { id: "4", title: "Brushes", icon: <FaPaintBrush />, path: "/brushes" },
  { id: "5", title: "Painting Kits", icon: <MdDraw />, path: "/painting-kits" },
  { id: "6", title: "Hobby", icon: <BiCool />, path: "/hobby" },
  { id: "7", title: "Kids", icon: <TbMoodKid />, path: "/kids" },
  { id: "8", title: "Techniques", icon: <TbActivity />, path: "/techniques" },
  { id: "9", title: "Community", icon: <RiCommandLine />, path: null },
];

// drop-down for community button
export const dropDownContent = [
  { title: "Artist Gallery", path: "/artist-gallery" },
  { title: "Art Workshops", path: "/art-workshops" },
  { title: "Art Contests", path: "/art-contests" },
];

const Banner = ({ isInitialLoad }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCommunityClick = (e) => {
    e.preventDefault();
    setShowDropdown((prev) => !prev);
  };

  return (
    <section className="relative z-2 w-full my-auto pt-16 md:pt-28 flex items-center justify-center">
      <div className="container mx-auto sm:mx-[6.5rem] flex flex-col lg:flex-row items-center justify-center relative lg:gap-x-36 xl:gap-x-48 md:gap-y-20 lg:gap-y-0">
        {/* circular icons */}
        <motion.div
          key={isInitialLoad ? "initial" : "scroll"}
          variants={fadeIn("zoom", 0.1, isInitialLoad ? 1.5 : 1)}
          initial="hidden"
          whileInView="show"
          className="flex flex-row text-center "
        >
          <div
            className="relative left-1/2 flex aspect-square border-[3px] border-accent rounded-full -translate-x-1/2 scale-75 md:scale-100 
          
          w-[16rem] min-[340px]:w-[18rem] sm:w-[35rem] lg:max-xl:w-[25rem] "
          >
            <div className="flex aspect-square m-auto border-[3px] border-accent rounded-full w-[13rem] sm:w-[20rem] lg:max-xl:w-[15rem]">
              {/* Center of the circle */}
              <div className="aspect-square z-50 m-auto p-[0.2rem] rounded-full w-[4rem] md:w-[6rem] cursor-pointer ">
                <Link
                  to="/global-search"
                  className="flex items-center justify-center w-full h-full bg-background dark:bg-darkBackground rounded-full"
                >
                  <div className="relative flex items-center justify-center text-[3rem] md:text-8xl bg-accent2">
                    <CiSearch className="text-accent" />
                    <img
                      src={camel_img}
                      alt="camel_image"
                      className="absolute 
                      w-[17px] h-[17px] 
                      md:w-[30px] md:h-[30px] 
                      
                      top-[0.8rem] left-[0.8rem] 
                      md:top-[1.8rem] md:left-[1.65rem]"
                    />
                  </div>
                </Link>
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
                      style={{ transform: `rotate(-${index * 36}deg)` }}
                    >
                      <motion.div
                        key={isInitialLoad ? "initial" : "scroll"}
                        variants={fadeIn("down", 0.2, isInitialLoad ? 1.5 : 1)}
                        initial="hidden"
                        whileInView="show"
                        className={`relative gap-x-1 -top-[1.3rem] flex items-center justify-center font-semibold border-2 border-accent rounded-xl  hover:text-background pl-2 transition-all duration-500
                        w-[8rem]  md:w-[10rem] 
                        h-[1.5rem] min-[340px]:h-[1.65rem] md:h-[2.2rem]
                        text-[12px]    md:text-[1rem] ${
                          showDropdown
                            ? "rounded-b-none bg-accent text-background"
                            : "bg-background dark:bg-darkBackground2 text-accent hover-accent2 dark-hover-accent2"
                        }`}
                      >
                        <motion.div
                          key={isInitialLoad ? "initial" : "scroll"}
                          variants={fadeIn(
                            "down",
                            0.3,
                            isInitialLoad ? 1.5 : 1
                          )}
                          initial="hidden"
                          whileInView="show"
                          className="flex items-center justify-center gap-x-1"
                        >
                          <div>{app.title}</div>
                          <div>{app.icon}</div>
                          <div className=" text-lg sm:text-xl ml-1 transition-transform duration-500">
                            {showDropdown ? (
                              <IoIosArrowDropup />
                            ) : (
                              <IoIosArrowDropdown />
                            )}
                          </div>
                        </motion.div>
                      </motion.div>

                      <div
                        className={`absolute  bg-background2 dark:bg-darkBackground2 border border-accent  text-center   duration-500 transform 
                        w-[8rem] md:w-[10rem] top-0 right-0 md:top-[0.4rem] md:right-0 ${
                          showDropdown
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                      >
                        {dropDownContent.map((content, index) => (
                          <Link
                            key={index}
                            to={content.path}
                            className="w-full h-full text-[12px] md:text-[1rem]"
                          >
                            <div className="flex flex-col font-semibold border border-accent py-1 bg-background2 dark:bg-darkBackground2 text-primary-text dark:text-dark-primary-text hover:text-background hover-accent2 dark-hover-accent2">
                              {content.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="relative -top-[1.6rem]"
                        style={{ transform: `rotate(-${index * 36}deg)` }}
                      >
                        <Link
                          to={app.path}
                          className="flex flex-row items-center justify-center"
                        >
                          <motion.div
                            key={isInitialLoad ? "initial" : "scroll"}
                            variants={fadeIn(
                              "down",
                              0.2,
                              isInitialLoad ? 1.5 : 1
                            )}
                            initial="hidden"
                            whileInView="show"
                            className="gap-x-1 flex items-center justify-center font-semibold bg-background dark:bg-darkBackground2 border-2 border-accent rounded-xl text-accent  transition-all duration-500 hover-accent2 dark-hover-accent2
                          
                            w-[8rem]  md:w-[10rem] 
                            h-[1.5rem] min-[340px]:h-[1.65rem] md:h-[2.2rem]
                            text-[12px]    md:text-[1rem]"
                          >
                            <motion.div
                              key={isInitialLoad ? "initial" : "scroll"}
                              variants={fadeIn(
                                "down",
                                0.3,
                                isInitialLoad ? 1.5 : 1
                              )}
                              initial="hidden"
                              whileInView="show"
                              className="flex items-center justify-center gap-x-1"
                            >
                              <div>{app.title}</div>
                              <div>{app.icon}</div>
                            </motion.div>
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
