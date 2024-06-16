import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "./sub-components/MyButton";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

export const dropDownContent = [
  {
    title: "Paints",
    items: [
      {
        name: "Artist Acrylic Colours",
        path: "/paints",
      },
      {
        name: "Artist Hd Acrylics",
        path: "/paints",
      },
      {
        name: "Artist Water Colours",
        path: "/paints",
      },
      {
        name: "Artist Oil Colours",
        path: "/paints",
      },
      {
        name: "Student Oil Colours",
        path: "/paints",
      },
      {
        name: "Premium Poster Colours",
        path: "/paints",
      },
      {
        name: "Drawing Inks",
        path: "/paints",
      },
      {
        name: "Transparent Photo Colours",
        path: "/paints",
      },
      {
        name: "Art Powders",
        path: "/paints",
      },
      {
        name: "Redimix Tempera Colours",
        path: "/paints",
      },
      {
        name: "Acrylic Colours",
        path: "/paints",
      },
      {
        name: "Fluid Acrylic Colours",
        path: "/paints",
      },
    ],
  },

  {
    title: "Drawing Materials",
    items: [
      {
        name: "Artist Brush Pens",
        path: "/drawing-materials",
      },
      {
        name: "Artist Soft Pastels",
        path: "/drawing-materials",
      },
      {
        name: "Artist Oil Pastels",
        path: "/drawing-materials",
      },
      {
        name: "Drawing Pencils",
        path: "/drawing-materials",
      },
      {
        name: "Charcoals",
        path: "/drawing-materials",
      },
      {
        name: "Drawing Inks",
        path: "/drawing-materials",
      },
      {
        name: "Sketch Books",
        path: "/drawing-materials",
      },
    ],
  },

  // Add more items here as needed
];

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Email sent!");
  };

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <section id="footer" className="flex items-center">
      <div
        className="bg-background2 border-t-0 border-accent w-full py-5 mt-20 z-50
          px-4
          md:px-6
          2xl:px-28"
      >
        <div className="flex flex-col items-center justify-center w-full">
          {/* top */}
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-1 text-[1rem] sm:text-3xl font-bold">
              <Link
                to="/camel"
                className="flex flex-row items-center justify-center gap-x-1 cursor-pointer"
              >
                <h1 className="text-secondary-text">Camel</h1>
              </Link>
              <div className="w-1 h-6 mx-1 hidden sm:flex bg-custom-gradient"></div>

              {dropDownContent.map((dropdown, index) => (
                <div
                  key={index}
                  onClick={() => handleDropdownClick(index)}
                  className="relative cursor-pointer flex flex-row items-center justify-center"
                >
                  <div
                    className={`gap-x-1 flex items-center justify-center font-semibold hover:bg-accent border-2 border-accent rounded-xl  hover:text-background pl-2 transition-all duration-300
                    w-[8rem] md:w-[10rem]
                    h-[1.8rem] md:h-[2.2rem]
                    text-[12px] md:text-[1rem]
                    ${
                      activeDropdown === index
                        ? "rounded-t-none bg-accent text-background"
                        : "bg-background text-accent"
                    }
                  `}
                  >
                    <div>{dropdown.title}</div>
                    <div className="text-xl ml-1 transition-transform duration-300">
                      {activeDropdown === index ? (
                        <IoIosArrowDropdown />
                      ) : (
                        <IoIosArrowDropup />
                      )}
                    </div>
                  </div>

                  <div
                    className={`absolute text-center duration-300 transform
                    w-[8rem] md:w-[10rem]
                    bottom-[2.2rem] 
                    ${
                      activeDropdown === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    }
                  `}
                  >
                    {dropdown.items
                      .slice(0)
                      .reverse()
                      .map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className="w-full h-full text-[12px] leading-normal md:text-[0.8rem]"
                        >
                          <div className="flex flex-col font-semibold border border-accent py-1 bg-background2 hover:bg-accent text-primary-text hover:text-background">
                            {item.name}
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* bottom */}
          <div className="flex items-end justify-between self-stretch">
            {/* left side */}
            <div className="flex flex-col items-start justify-center gap-y-3">
              {/* newsletter */}
              <div className="flex items-center justify-center gap-x-3">
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-[1.35rem] font-bold">
                    Subscribe to a world of colour and creativity:
                  </h1>
                  <p className="text-[0.9rem]">
                    Get updates on product launches, competitions, live sessions
                    and more.
                  </p>
                </div>

                <div>
                  <form
                    className="flex items-center justify-center gap-x-2"
                    onSubmit={handleSubmit}
                  >
                    <input
                      className="bg-transparent border-b border-accent outline-none w-full transition-all"
                      type="email"
                      name="email-address"
                      required
                      placeholder="Enter your email address...."
                    />
                    <button type="submit">
                      <MyButton text="Send" className="px-2 py-0" />
                    </button>
                  </form>
                </div>
              </div>

              {/* social media */}
              <div className="flex items-center justify-center text-xl font-bold gap-x-3">
                <h1>Follow us on social media platforms:</h1>
                <div className="flex items-center justify-center gap-x-3">
                  <div className="p-1 rounded-full bg-accent text-background">
                    <FaYoutube />
                  </div>
                  <div className="p-1 rounded-full bg-accent text-background">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-x-2 font-bold text-accent text-lg">
                <h1>Privacy</h1>
                <p>|</p>
                <h1>Disclaimer</h1>
                <p>|</p>
                <h1>Sitemap</h1>
              </div>
              <div className="text-md text-primary-text font-semibold">
                <p>©2024 Kokuyo Camlin. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
