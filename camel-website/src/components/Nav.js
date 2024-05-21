import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import icons
import { MdOutlineFormatColorFill, MdDraw } from "react-icons/md";
import { BiLogoMediumOld, BiCool } from "react-icons/bi";
import { IoMdColorPalette } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { TbMoodKid, TbActivity } from "react-icons/tb";
import { RiCommandLine } from "react-icons/ri";

export const navData = [
  { name: "Paints", path: "/paints", icon: <MdOutlineFormatColorFill /> },
  {
    name: "Drawing Materials",
    path: "/drawing-materials",
    icon: <IoBagHandle />,
  },
  { name: "Mediums", path: "/mediums", icon: <BiLogoMediumOld /> },
  { name: "Canvases", path: "/canvases", icon: <IoMdColorPalette /> },
  { name: "Brushes", path: "/brushes", icon: <FaPaintBrush /> },
  { name: "Painting Kits", path: "/painting-kits", icon: <MdDraw /> },
  { name: "Hobby", path: "/hobby", icon: <BiCool /> },
  { name: "Kids", path: "/kids", icon: <TbMoodKid /> },
  { name: "Techniques", path: "/techniques", icon: <TbActivity /> },
  { name: "Community", path: null, icon: <RiCommandLine /> },
];

export const navData1 = [
  { name: "Artist Gallery", path: "/artist-gallery" },
  { name: "Art Workshops", path: "/art-workshops  " },
  { name: "Art Contests", path: "/art-contests" },
];

const Nav = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const handleCommunityClick = (e) => {
    e.stopPropagation(); // Prevent triggering the document click event
    setShowPopup((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div>
      <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
        <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-8 px-4 md:px-40 xl:px-0 h-[30px] bg-background2 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
          {navData.map((link, index) => (
            <div
              key={index}
              className="relative flex items-center group  hover:text-accent transition-all duration-300 cursor-pointer"
              onClick={link.name === "Community" ? handleCommunityClick : null}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex ">
                <div className="bg-accent relative flex text-background items-center p-[6px] rounded-[3px] ">
                  <div className="text-[12px] leading-none font-semibold capitalize flex-grow text-center">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-accent border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <Link
                to={link.path}
                className="text-2xl md:text-[30px] xl:text-xl z-10 " // Ensure Link is on top
              >
                {link.icon}
              </Link>
            </div>
          ))}
        </div>
      </nav>
      {showPopup && (
        <div
          ref={popupRef}
          className="fixed z-50  bg-highlight xl:font-semibold rounded-md max-xl:rounded-br-none xl:rounded-tr-none shadow-lg bottom-[4.9rem] xl:bottom-8 right-7 md:right-44  xl:right-[3.8rem] transition-all duration-300"
        >
          <div className="flex  gap-2 text-[12px] ">
            {/* triangle */}
            <div className="border-solid border-t-highlight xl:border-b-highlight border-t-[12px] xl:border-b-[12px] border-l-transparent border-l-[12px] border-b-0 xl:border-t-0 absolute top-[2.6rem] xl:-top-3 right-0 "></div>
            {/* links */}
            {navData1.map((link, index) => (
              <div
                key={index}
                className="p-1 hover:bg-accent font-semibold text-primary-text hover:text-background hover:rounded-md text-center"
              >
                <Link to={link.path} className="block  py-2">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
