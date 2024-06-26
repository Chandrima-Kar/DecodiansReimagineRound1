import React from "react";
import Section from "./Section";
import { IoIosArrowForward } from "react-icons/io";
import MyButton from "./sub-components/MyButton";

const Fifth = () => {
  return (
    <Section
      className="pt-[6rem]  -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="fifth"
    >
      <div
        id="main-container"
        className="my-5 md:px-5 lg:px-10 py-10 mx-auto flex justify-center items-center bg-background"
      >
        <div className="flex flex-col lg:flex-row sm:flex-col justify-between items-center gap-20">
          <div className="w-full">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 items-start md:gap-12 gap-8 sm:gap-10 ">
              {/*individual cards*/}

              {/*Card 1*/}

              <div
                id="card"
                className="bg-white rounded-[35px] lg:h-96 md:h-70 sm:h-90 shadow-red flex flex-col justify-center xl:p-12 lg:p-5 md:p-3.5 sm:px-4 sm:py-2 hover:translate-y-4 transition-all duration-300 cursor-pointer align-items-center md:mt-0 sm:mt-0"
              >
                <div>
                  <div
                    id="heading"
                    className="text-secondary-text text-xl font-bold text-center p-3 lg:text-2xl"
                  >
                    # heritage
                  </div>

                  <h3
                    id="main-text"
                    className="lg:text-3xl md:text-[1.25rem] sm:text-xl font-extrabold text-primary-text dark:text-dark-primary-text text-center mt-1 lg:mb-7 md:mb-4 md:py-0 md:mt-2 sm:mb-7"
                  >
                    Bringing the Swadeshi spirit to art since 1931
                  </h3>
                </div>

                {/* <button
                  id="button"
                  className="group rounded-full mt-3 lg:h-11 lg:pl-5 lg:pr-3 md:h-11 md:pl-5 md:pr-3 sm:h-10 sm:pl-5 sm:pr-5 flex items-center space-x-0.5 bg-secondary-text translate-x-0.5 transition-all duration-500 hover-accent3"
                >
                  <span className="lg:text-xl md:text-sm font-bold ">
                    5-min-read
                  </span>
                  <div className="flex items-center translate-x-1 transition-all duration-300">
                    <IoIosArrowForward className="w-5 h-6 text-white" />
                  </div>
                </button> */}
                <div>
                  <MyButton
                    text="5-min-read"
                    className="lg:text-xl md:text-sm font-bold px-5 py-1 hover-accent3"
                    icon={<IoIosArrowForward />}
                    buttonNameClassName="mr-1"
                  />
                </div>
              </div>

              {/*Card 2*/}

              <div
                id="card"
                className="bg-white rounded-[35px] lg:h-96 md:h-70 sm:h-90 shadow-red flex flex-col justify-center xl:p-12 lg:p-5 md:p-3.5 sm:px-4 sm:py-2 hover:translate-y-4 transition-all duration-300 cursor-pointer align-items-center md:mt-6 sm:mt-0"
              >
                <div>
                  <div
                    id="heading"
                    className="text-secondary-text text-xl font-bold text-center p-3 lg:text-2xl"
                  >
                    # community
                  </div>

                  <h3
                    id="main-text"
                    className="lg:text-3xl md:text-[1.25rem] sm:text-xl font-extrabold text-primary-text dark:text-dark-primary-text text-center mt-1 lg:mb-7 md:mb-4 md:py-0 md:mt-2 sm:mb-7"
                  >
                    A growing creative community of 5 million artists
                  </h3>
                </div>

                <button
                  id="button"
                  className="group rounded-full mt-3 lg:h-11 lg:pl-5 lg:pr-3 md:h-11 md:pl-5 md:pr-3 sm:h-10 sm:pl-5 sm:pr-5 flex items-center space-x-0.5 bg-secondary-text hover:bg-red-800 hover:text-white translate-x-0.5 transition-all duration-300"
                >
                  <span className="lg:text-xl md:text-sm font-bold text-white">
                    3-min-read
                  </span>
                  <div className="flex items-center translate-x-1 transition-all duration-300">
                    <IoIosArrowForward className="w-5 h-6 text-white" />
                  </div>
                </button>
              </div>

              {/*Card3*/}

              <div
                id="card"
                className="bg-white rounded-[35px] lg:h-96 md:h-70 sm:h-90 shadow-red flex flex-col justify-center xl:p-12 lg:p-5 md:p-3.5 sm:px-4 sm:py-2 hover:translate-y-4 transition-all duration-300 cursor-pointer align-items-center md:mt-0 sm:mt-0"
              >
                <div>
                  <div
                    id="heading"
                    className="text-secondary-text text-xl font-bold text-center p-3 lg:text-2xl"
                  >
                    # manufacturing
                  </div>

                  <h3
                    id="main-text"
                    className="lg:text-3xl md:text-[1.25rem] sm:text-xl font-extrabold text-primary-text dark:text-dark-primary-text text-center mt-1 lg:mb-7 md:mb-4 md:py-0 md:mt-2 sm:mb-7"
                  >
                    Bringing the joy of art to every corner of the country
                  </h3>
                </div>

                <button
                  id="button"
                  className="group rounded-full mt-3 lg:h-11 lg:pl-5 lg:pr-3 md:h-11 md:pl-5 md:pr-3 sm:h-10 sm:pl-5 sm:pr-5 flex items-center space-x-0.5 bg-secondary-text hover:bg-red-800 hover:text-white translate-x-0.5 transition-all duration-300"
                >
                  <span className="lg:text-xl md:text-sm font-bold text-white">
                    6-min-read
                  </span>
                  <div className="flex items-center translate-x-1 transition-all duration-300">
                    <IoIosArrowForward className="w-5 h-6 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Fifth;
