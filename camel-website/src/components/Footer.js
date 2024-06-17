import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "./sub-components/MyButton";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

export const dropDownContent = [
  {
    heading: "Camel",
    titles: [
      {
        title: "Paints",
        items: [
          { name: "Artist Acrylic Colours", path: "/paints" },
          { name: "Artist Hd Acrylics", path: "/paints" },
          { name: "Artist Water Colours", path: "/paints" },
          { name: "Artist Oil Colours", path: "/paints" },
          { name: "Student Oil Colours", path: "/paints" },
          { name: "Premium Poster Colours", path: "/paints" },
          { name: "Drawing Inks", path: "/paints" },
          { name: "Transparent Photo Colours", path: "/paints" },
          { name: "Art Powders", path: "/paints" },
          { name: "Redimix Tempera Colours", path: "/paints" },
          { name: "Acrylic Colours", path: "/paints" },
          { name: "Fluid Acrylic Colours", path: "/paints" },
        ],
      },
      {
        title: "Drawing Materials",
        items: [
          { name: "Artist Brush Pens", path: "/drawing-materials" },
          { name: "Artist Soft Pastels", path: "/drawing-materials" },
          { name: "Artist Oil Pastels", path: "/drawing-materials" },
          { name: "Drawing Pencils", path: "/drawing-materials" },
          { name: "Charcoals", path: "/drawing-materials" },
          { name: "Drawing Inks", path: "/drawing-materials" },
          { name: "Sketch Books", path: "/drawing-materials" },
        ],
      },

      {
        title: "Mediums",
        items: [
          {
            name: "Acrylic Mediums",
            path: "/medium",
          },
          {
            name: "Oil Mediums",
            path: "/medium",
          },
          {
            name: "Dry Mediums",
            path: "/medium",
          },
          {
            name: "Hobby Mediums",
            path: "/medium",
          },
        ],
      },
      {
        title: "Canvases",
        items: [
          {
            name: "Canvas Rolls",
            path: "/canvases",
          },
          {
            name: "Canvas Pads",
            path: "/canvases",
          },
          {
            name: "Stretched Canvases",
            path: "/canvases",
          },
          {
            name: "Canvas Boards",
            path: "/canvases",
          },
          {
            name: "Art Boards",
            path: "/canvases",
          },
          {
            name: "Oil Sketching Papers",
            path: "/canvases",
          },
        ],
      },
      {
        title: "Brushes",
        items: [
          {
            name: "White Bristle Brushes",
            path: "/brushes",
          },
          {
            name: "Artist Brushes",
            path: "/brushes",
          },
          {
            name: "Artist Mop Brushes",
            path: "/brushes",
          },
          {
            name: "Wash Brushes",
            path: "/brushes",
          },
          {
            name: "Synthetic Gold Brushes",
            path: "/brushes",
          },
          {
            name: "Hobby Brushes",
            path: "/brushes",
          },
          {
            name: "Champ Brushes",
            path: "/brushes",
          },
        ],
      },
      {
        title: "Painting Kits",
        items: [
          {
            name: "Fluid Acrylic Colours Kits",
            path: "/painting-kits",
          },
          {
            name: "DIY Colouring for Grown Ups",
            path: "/painting-kits",
          },
          {
            name: "Colouring Kit",
            path: "/painting-kits",
          },
          {
            name: "Painting Kit",
            path: "/painting-kits",
          },
        ],
      },
      {
        title: "Hobby",
        items: [
          {
            name: "Acrylic Colours",
            path: "/hobby",
          },
          {
            name: "Glass Colours",
            path: "/hobby",
          },
          {
            name: "Fluid Acrylic Colours",
            path: "/hobby",
          },
          {
            name: "Fluid Acrylic Colours Kits",
            path: "/hobby",
          },
          {
            name: "DIY Colouring for Grown Ups",
            path: "/hobby",
          },
          {
            name: "Sparkle Colours",
            path: "/hobby",
          },
          {
            name: "Hobby Brushes",
            path: "/hobby",
          },
          {
            name: "Hobby Mediums",
            path: "/hobby",
          },
          {
            name: "Fabric Glue",
            path: "/hobby",
          },
        ],
      },
      {
        title: "Kids",
        items: [
          {
            name: "Painting Kit",
            path: "/kids",
          },
          {
            name: "Drawing Kit",
            path: "/kids",
          },
          {
            name: "Oil Pastels",
            path: "/kids",
          },
          {
            name: "Crayons",
            path: "/kids",
          },
          {
            name: "Poster Colours",
            path: "/kids",
          },
          {
            name: "Water Colours",
            path: "/kids",
          },
          {
            name: "Sketch Pens",
            path: "/kids",
          },
          {
            name: "Brush Pens",
            path: "/kids",
          },
          {
            name: "Colour Pencils",
            path: "/kids",
          },
          {
            name: "Redimix Tempera Colours",
            path: "/kids",
          },
          {
            name: "Drawing Books",
            path: "/kids",
          },
        ],
      },
      {
        title: "Techniques",
        items: [
          {
            name: "Product Tutorials",
            path: "/techniques",
          },
          {
            name: "DIY",
            path: "/techniques",
          },
          {
            name: "Tutorials",
            path: "/techniques",
          },
          {
            name: "Pro Tips",
            path: "/techniques",
          },
          {
            name: "Product Guides",
            path: "/techniques",
          },
          {
            name: "Art Reporter",
            path: "/techniques",
          },
          {
            name: "Glossary",
            path: "/techniques",
          },
        ],
      },
      {
        title: "Community",
        items: [
          {
            name: "Artist Gallery",
            path: "/community",
          },
          {
            name: "Art Workshops",
            path: "/community",
          },
          {
            name: "Art Contests",
            path: "/community",
          },
          {
            name: "Community Guidelines",
            path: "/community",
          },
        ],
      },
    ],
  },
  {
    heading: "Camlin",
    titles: [
      {
        title: "Pencils & Accessories",
        items: [
          {
            name: "Wooden Pencils",
            path: "/pencils-accessories",
          },
          {
            name: "Mechanical Pencils",
            path: "/pencils-accessories",
          },
          {
            name: "Mechanical Pencil Leads",
            path: "/pencils-accessories",
          },
          {
            name: "Artist Pencils",
            path: "/pencils-accessories",
          },
          {
            name: "Erasers",
            path: "/pencils-accessories",
          },
          {
            name: "Sharpeners",
            path: "/pencils-accessories",
          },
          {
            name: "Exam Pads",
            path: "/pencils-accessories",
          },
        ],
      },
      {
        title: "Markers & Pens",
        items: [
          {
            name: "Whiteboard Markers",
            path: "/markers-pens",
          },
          {
            name: "Permanent Markers",
            path: "/markers-pens",
          },
          {
            name: "Highlighters",
            path: "/markers-pens",
          },
          {
            name: "Correction Pens",
            path: "/markers-pens",
          },
          {
            name: "Fountain Pen Inks",
            path: "/markers-pens",
          },
        ],
      },
      {
        title: "Geometry Box",
        items: [
          {
            name: "Geometry Box",
            path: "/geometry-box",
          },
          {
            name: "Scales",
            path: "/geometry-box",
          },
          {
            name: "Technical Instruments",
            path: "/geometry-box",
          },
        ],
      },
      {
        title: "Notebooks",
        items: [
          {
            name: "Notebooks",
            path: "/notebooks",
          },
          {
            name: "Long Books",
            path: "/notebooks",
          },
          {
            name: "Premio",
            path: "/notebooks",
          },
          {
            name: "Drawing Book",
            path: "/notebooks",
          },
          {
            name: "Sketchbooks",
            path: "/notebooks",
          },
          {
            name: "Others",
            path: "/notebooks",
          },
        ],
      },
      {
        title: "Adhesives",
        items: [
          {
            name: "Gums & Pastes",
            path: "/adhesives",
          },
          {
            name: "White Glues",
            path: "/adhesives",
          },
          {
            name: "Glue Sticks",
            path: "/adhesives",
          },
        ],
      },
      {
        title: "Early Learning",
        items: [
          {
            name: "Finger Crayons",
            path: "/early-learning",
          },
          {
            name: "Clay for Kids",
            path: "/early-learning",
          },
          {
            name: "Play Dough",
            path: "/early-learning",
          },
          {
            name: "Child Grip Crayons",
            path: "/early-learning",
          },
        ],
      },
      {
        title: "Office Supplies",
        items: [
          {
            name: "Whiteboard Markers",
            path: "/office-supplies",
          },
          {
            name: "Permanent Markers",
            path: "/office-supplies",
          },
          {
            name: "Highlighters",
            path: "/office-supplies",
          },
          {
            name: "Wooden Pencils",
            path: "/office-supplies",
          },
          {
            name: "Correction Pens",
            path: "/office-supplies",
          },
          {
            name: "Stamp Pads & Inks",
            path: "/office-supplies",
          },
          {
            name: "Carbon Papers",
            path: "/office-supplies",
          },
          {
            name: "Adhesives",
            path: "/office-supplies",
          },
          {
            name: "Scales",
            path: "/office-supplies",
          },
        ],
      },
    ],
  },
];

export const commonData = [
  {
    title: "Customer Service",
    items: [
      {
        name: "Contact Us",
        path: "/camel",
      },
      {
        name: "FAQs",
        path: "/camel",
      },
      {
        name: "Find a store",
        path: "/store",
      },
    ],
  },

  {
    title: "Account",
    items: [
      {
        name: "Sign Up",
        path: "/sign-up",
      },
      {
        name: "Log In",
        path: "/log-in",
      },
    ],
  },

  {
    title: "Kokuyo Camlin",
    items: [
      {
        name: "About Us",
        path: "/camel",
      },
      {
        name: "Investors",
        path: "/camel",
      },
      {
        name: "Careers",
        path: "/camel",
      },
      {
        name: "CSR Policy",
        path: "/camel",
      },
      {
        name: "QEHS Policy",
        path: "/camel",
      },
      {
        name: "Code of Conduct",
        path: "/camel",
      },
    ],
  },
];

export const socialHandles = [
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/user/KokuyoCamlin",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/kokuyo.camlin/",
  },
];

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Email sent!");
  };

  const [activeDropdown, setActiveDropdown] = useState(
    dropDownContent.map(() => null) // Initialize state with null for each dropdown section
  );

  const handleDropdownClick = (sectionIndex, dropdownIndex) => {
    setActiveDropdown((prev) => {
      // If the clicked dropdown is already open, close it
      if (prev[sectionIndex] === dropdownIndex) {
        return prev.map((state, index) =>
          index === sectionIndex ? null : state
        );
      } else {
        // Otherwise, open the clicked dropdown
        return prev.map((state, index) =>
          index === sectionIndex ? dropdownIndex : state
        );
      }
    });
  };

  return (
    <section id="footer" className="flex items-center">
      <div
        className="bg-[#fff3e4] border-t-0 border-accent w-full py-5 mt-20 z-2 
          px-4
          md:px-6
          2xl:px-28"
      >
        <div className="flex flex-col items-center justify-center w-full gap-y-3">
          {/* top */}
          {dropDownContent.map((content, contentIndex) => (
            <div
              key={contentIndex}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center ">
                <div className="flex items-center justify-center text-[1rem] sm:text-3xl font-bold gap-x-3">
                  <Link
                    to={`/${content.heading.toLowerCase()}`}
                    className="flex flex-row items-center justify-center cursor-pointer"
                  >
                    <h1 className="text-accent">{content.heading}</h1>
                  </Link>
                  <div className="w-1 h-6 mx-1 hidden sm:flex bg-custom-gradient"></div>
                </div>

                <div className="flex flex-wrap items-center justify-evenly">
                  {content.titles.map((dropdown, index) => (
                    <div
                      key={index}
                      onClick={() => handleDropdownClick(contentIndex, index)}
                      className="relative cursor-pointer mx-4 my-2 flex flex-row items-center justify-center"
                    >
                      <div
                        className={`flex items-center justify-between font-semibold hover:bg-accent border-2 border-accent rounded-lg gap-x-1 hover:text-background px-1 transition-all duration-300
                      w-[8rem] md:w-[13rem]
                      h-[1.8rem] md:h-[2.2rem]
                      text-[12px] md:text-[1rem]
                      ${
                        activeDropdown[contentIndex] === index
                          ? "rounded-t-none bg-accent text-background"
                          : "bg-background text-accent"
                      }`}
                      >
                        <div className="leading-none">{dropdown.title}</div>
                        <div className="text-xl ml-1 transition-transform duration-300">
                          {activeDropdown[contentIndex] === index ? (
                            <IoIosArrowDropdown />
                          ) : (
                            <IoIosArrowDropup />
                          )}
                        </div>
                      </div>

                      <div
                        className={`absolute text-center duration-300 transform
                  w-[8rem] md:w-[13rem]
                  bottom-[2.2rem] 
                    ${
                      activeDropdown[contentIndex] === index
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
                              className="w-full h-full text-[12px] leading-normal md:text-[1rem]"
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
            </div>
          ))}

          {/* middle */}
          <div className="flex items-start justify-evenly self-stretch">
            {commonData.map((data, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-center "
              >
                <h1 className="text-2xl font-bold my-3 text-primary-text">
                  {data.title}
                </h1>
                {data.items.map((options, i) => (
                  <div key={i} className="">
                    <Link
                      to={options.path}
                      className="text-lg font-medium text-secondary-text hover:text-primary-text"
                    >
                      {" "}
                      {options.name}{" "}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* bottom */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-y-3 md:gap-y-0 justify-between self-stretch">
            {/* left side */}
            <div className="flex flex-col items-start justify-center gap-y-3">
              {/* newsletter */}
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center gap-y-3 xl:gap-y-0 gap-x-3">
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
                  {socialHandles.map((social, i) => (
                    <Link
                      to={social.path}
                      className="p-1 rounded-full bg-accent text-background"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-x-2 font-bold text-accent text-lg">
                <Link to="/camel">Privacy</Link>
                <p>|</p>
                <Link to="/camel">Disclaimer</Link>
                <p>|</p>
                <Link to="/camel">Sitemap</Link>
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
