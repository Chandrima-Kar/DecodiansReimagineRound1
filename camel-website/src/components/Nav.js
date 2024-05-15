import React from "react";
// import icons
import { MdOutlineFormatColorFill, MdDraw } from "react-icons/md";
import { BiLogoMediumOld, BiCool } from "react-icons/bi";
import { IoMdColorPalette } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { SiKit } from "react-icons/si";
import { TbMoodKid, TbActivity } from "react-icons/tb";
import { RiCommandLine } from "react-icons/ri";

export const navData = [
  { name: "Paints", icon: <MdOutlineFormatColorFill /> },
  { name: "Drawing Materials", icon: <MdDraw /> },
  { name: "Mediums", icon: <BiLogoMediumOld /> },
  { name: "Canvases", icon: <IoMdColorPalette /> },
  { name: "Brushes", icon: <FaPaintBrush /> },
  { name: "Painting Kits", icon: <SiKit /> },
  { name: "Hobby", icon: <BiCool /> },
  { name: "Kids", icon: <TbMoodKid /> },
  { name: "Techniques", icon: <TbActivity /> },
  { name: "Community", icon: <RiCommandLine /> },
];

const Nav = () => {
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed  h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-8 px-4 md:px-40 xl:px-0 h-[30px] bg-[#3C5B6F] xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <div className="relative flex items-center group hover:text-[#DFD0B8] transition-all duration-300 cursor-pointer">
              <div className=" absolute pr-14 right-0 hidden xl:group-hover:flex ">
                <div className="bg-[#DFD0B8] relative flex text-[#000000] items-center p-[6px] rounded-[3px]">
                  {/* names */}
                  <div className="text-[12px] leading-none font-semibold capitalize flex-grow text-center">
                    {link.name}
                  </div>
                  {/* triangles */}
                  <div className="border-solid border-l-[#DFD0B8] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/* icons */}
              <div className=" text-2xl md:text-[30px] xl:text-xl">
                {link.icon}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
