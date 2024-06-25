import React, { useState, useEffect, useCallback } from "react";
import Section from "./sub-components/Section";
import MyButton from "./sub-components/MyButton";

// icons
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

// images
import slide2 from "../assets/01/slidetwo.jpg";
import slide3 from "../assets/01/slidethree.webp";
import slide4 from "../assets/01/make_your_mark_banner.webp";
import slide5 from "../assets/01/wonderland-banner.webp";

const FullSlider = () => {
  // contents of the slides
  const slides = [
    {
      url: slide2,
      bg: "bg-center",
      top_d: "top-[54%]  md:top-[58%]",
      header: "Creating India's largest art community",
      header_color: "text-primary-text ",
      p_class: "hidden",
      button1: "",
      button1_text: "Join our Community",
      button2: "bg-background text-primary-text ",
    },
    {
      url: slide3,
      bg: "bg-center",
      top_d: "top-[50%] md:top-[58%]",
      header: "Introducing Mess-Free Creativity: ",
      header_color: "text-primary-text ",
      p_class: "text-xl md:text-2xl font-semibold text-secondary-text py-1",
      button1: "",
      button1_text: "Shop Now",
      button2: "hidden",
    },
    {
      url: slide4,
      bg: "xl:bg-center",
      top_d: "top-[60%] md:top-[62%]",
      header: "with the Camel Artist Range",
      header_color: "text-primary-text ",
      p_class: "hidden",
      button1: "",
      button1_text: "Explore Now",
      button2: "hidden",
    },

    {
      url: slide5,
      bg: "bg-center",
      top_d: "top-[70%]",
      header: "Scan the packs and save the planet!",
      header_color: "text-background",
      p_class: "hidden",
      button1: "hidden",
      button1_text: null,
      button2: "hidden",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = useCallback((slideIndex) => {
    setCurrentIndex(slideIndex);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [nextSlide]); // Dependency array ensures interval is reset on slide change

  return (
    <Section
      className=""
      crosses
      crossesOffset="translate-y-[3.25rem] md:translate-y-[5.25rem]"
      customPaddings
      id="fullSlider"
    >
      <section className="relative pt-0 md:pt-20  flex items-center justify-center overflow-hidden">
        <div
          className="md:max-w-[1400px] md:h-[680px]  h-[500px] w-full  
      
          pb-8 relative group container mx-4 sm:mx-[6.5rem] md:mx-5 lg:mx-[6.5rem]"
        >
          {/* Main Contents */}
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className={`w-full h-full rounded-2xl ${slides[currentIndex].bg}  bg-no-repeat bg-cover duration-500`}
          ></div>

          <div
            className={` lg:w-[57%] 2xl:w-[35%] absolute   ${[
              slides[currentIndex].top_d,
            ]} left-2 md:left-10 `}
          >
            <h1
              className={`${slides[currentIndex].header_color} duration-500  font-extrabold text-3xl md:text-5xl`}
            >
              {slides[currentIndex].header}
            </h1>
            <p className={`${slides[currentIndex].p_class} duration-500`}>
              Washable Colour Markers{" "}
            </p>
          </div>
          <div className="absolute top-[75%] md:top-[78%] left-2 md:left-10 flex gap-x-3 duration-500">
            <MyButton
              text={slides[currentIndex].button1_text}
              className={`${slides[currentIndex].button1} text-[12px] md:text-[20px] px-5 py-1`}
            />

            <MyButton
              text={"Meet Artists"}
              className={`${slides[currentIndex].button2} text-[12px] md:text-[20px] px-5 py-1`}
            />
          </div>

          {/* Arrows */}
          {/* Left Arrow */}
          <div
            className="hidden group-hover:block absolute top-[40%] -translate-x-0  text-2xl rounded-full p-2 bg-highlight text-white cursor-pointer
        
            left-2 sm:left-5"
          >
            <BsChevronCompactLeft onClick={prevSlide} size={25} />
          </div>
          {/* Right Arrow */}
          <div
            className="hidden group-hover:block absolute top-[40%] -translate-x-0  text-2xl rounded-full p-2 bg-highlight text-white cursor-pointer
        
            right-2 sm:right-5"
          >
            <BsChevronCompactRight onClick={nextSlide} size={25} />
          </div>

          {/* dots */}
          <div className="flex top-4 justify-center mt-4 ">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-2xl cursor-pointer ${
                  currentIndex === slideIndex
                    ? "text-accent"
                    : "text-primary-text dark:text-dark-primary-text"
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Section>
  );
};

// function Button(props) {
//   return (
//     <button
//       className={`cursor-pointer rounded-md border font-semibold duration-500 transition-transform hover:scale-105 flex justify-center items-center bg-accent text-background border-accent hover:bg-background hover:text-accent px-5 py-1
//        ${props.className}`}
//     >
//       {props.text}
//     </button>
//   );
// }

export default FullSlider;
