import React, { useRef, useEffect } from "react";
import Section from "./sub-components/Section";
import MyButton from "./sub-components/MyButton";

// images
import hand_img from "../assets/04/hand.png";

// icons
import { RiExternalLinkLine } from "react-icons/ri";

const TransparentPhotoColors = () => {
  const svgContainerRef = useRef(null);

  useEffect(() => {
    const node = svgContainerRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelector(".path").classList.add("draw-animation");
          observer.unobserve(entry.target);
        }
      });
    });

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <Section
      className=""
      crosses
      crossesOffset="translate-y-[3.25rem]  md:translate-y-[5.25rem]"
      customPaddings
      id="transparentPhotoColors"
    >
      <section className="relative z-2 w-full pt-0 md:pt-20  my-auto   flex items-center justify-center">
        <div
          className="md:max-w-[1400px] md:h-[680px] h-[400px]  sm:h-[500px] 
          
          
          w-full  
          border-2 border-accent rounded-xl bg-[#ede4d3]
          pb-0  relative group container mx-4 sm:mx-[6.5rem] md:mx-5 lg:mx-[6.5rem]"
        >
          {/* image */}
          <div
            className="absolute left-10 right-10 
          
            top-[8.85rem] sm:top-[3.8rem]
            md:top-[6.35rem] lg:top-0"
          >
            <div className="flex items-center justify-center">
              <img
                src={hand_img}
                alt="camel_image"
                className=" w-[205px] sm:w-[350px] md:w-[460px] lg:w-[542px]"
              />
            </div>
          </div>

          {/* header */}
          <div className="absolute left-4 top-4">
            <h1 className="text-xl sm:text-3xl md:text-5xl xl:text-6xl font-bold">
              Transparent <br /> Photo Colours
            </h1>
          </div>

          {/* svg */}
          <span
            ref={svgContainerRef}
            className="absolute  w-[22%] is-above-1023 hidden md:flex
            
            md:left-[14.700%] md:top-[24.14%]
            lg:left-[12%] lg:top-[20%]
            xl:left-[14.700%] xl:top-[24.14%]"
            data-name="Stroke"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 259 184"
              width="259"
              height="184"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full transform translate-x-0 translate-y-0 translate-z-0 custom-content-visibility-visible"
            >
              <defs>
                <clipPath id="__lottie_element_40">
                  <rect width="259" height="184" x="0" y="0"></rect>
                </clipPath>
                <clipPath id="__lottie_element_42">
                  <path d="M0,0 L250,0 L250,177 L0,177z"></path>
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_40)">
                <g
                  clipPath="url(#__lottie_element_42)"
                  transform="matrix(1,0,0,1,4.5,3.5)"
                  opacity="1"
                  className="block"
                >
                  <g
                    transform="matrix(0.19200000166893005,0,0,0.19200000166893005,25.667892456054688,22.515357971191406)"
                    opacity="1"
                    className="block"
                  >
                    <g
                      opacity="1"
                      transform="matrix(1,0,0,1,501.0369873046875,431.0450134277344)"
                    >
                      <path
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        fillOpacity="0"
                        strokeMiterlimit="10"
                        stroke="rgb(0,0,0)"
                        strokeOpacity="1"
                        strokeWidth="3.7"
                        d=" M-610.0609741210938,-539.60302734375 C-567.2429809570312,-299.64801025390625 -659.4580078125,591.60302734375 659.458984375,305.09600830078125"
                        className="path"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>

          {/* para */}

          <div
            className="absolute left-4 
          bottom-[17.5rem] sm:bottom-[24rem] md:bottom-[33.5rem]   lg:bottom-4"
          >
            <p className="text-[0.9rem] md:text-[1rem] lg:text-xl font-semibold lg:w-[60%]">
              A range of dye-based colours for a variety of applied art
              creations.
            </p>
          </div>

          {/* box */}

          <div
            className="flex items-center justify-center cursor-pointer  border font-semibold 
              
              absolute top-0 right-0
              
              px-2
              md:px-5 md:py-5 lg:p-7  
              rounded-tr-[0.45rem] 
              bg-accent text-background border-accent "
          >
            <div className="flex-col flex text-center gap-y-2">
              <h1 className="text-xl md:text-[3rem] lg:text-[4rem]">12</h1>
              <p className=" text-[0.8rem] sm:text-[1.2rem]"> Shades</p>
            </div>
          </div>

          {/* button */}
          <MyButton
            text="Shop"
            className="px-1 md:px-4 md:py-1 lg:p-4
          absolute sm:bottom-4 sm:right-4 
          bottom-[15.5rem] max-sm:left-4 
          text-[1rem] sm:text-xl md:text-[1.5rem] xl:text-[2rem]"
            buttonNameClassName="mr-1"
            icon={<RiExternalLinkLine />}
          />
        </div>
      </section>
    </Section>
  );
};

export default TransparentPhotoColors;
