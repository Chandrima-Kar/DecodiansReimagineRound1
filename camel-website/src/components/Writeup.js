import React from "react";
import Section from "./sub-components/Section";
import MyButton from "./sub-components/MyButton";

// icon
import { IoIosArrowForward } from "react-icons/io";

// writeup data
export const writeUps = [
  {
    hashTag: "# heritage",
    sentence: "Bringing the Swadeshi spirit to art since 1931",
    buttonName: "5-min-read",
  },
  {
    hashTag: "# community",
    sentence: "A growing creative community of 5 million artists",
    buttonName: "3-min-read",
  },
  {
    hashTag: "# manufacturing",
    sentence: "Bringing the joy of art to every corner of the country",
    buttonName: "6-min-read",
  },
];

const Writeup = () => {
  return (
    <Section
      className=""
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="writeUp"
    >
      <section className="relative pt-20   flex items-center justify-center overflow-hidden">
        <div
          className="md:max-w-[1400px]  w-full  
      
          pb-8  relative group container mx-4 sm:mx-[6.5rem] md:mx-5 lg:mx-[6.5rem]"
        >
          <div
            className="flex justify-center items-center 
            
             mx-0 px-0 flex-col sm:flex-row  "
          >
            <div className="flex flex-col lg:flex-row justify-between  items-center gap-20">
              <div className="w-full">
                <div className="grid md:grid-cols-3    sm:grid-cols-1 grid-cols-1  lg:gap-12 gap-8 sm:gap-10 ">
                  {/*individual cards*/}

                  {writeUps.map((content, index) => (
                    <div
                      key={index}
                      className={`w-[100%] my-0 mx-auto p-3 bg-background border-2 border-accent rounded-[35px] xl:h-96 lg:h-80 md:h-72 sm:h-96 shadow-red flex flex-col items-center justify-center xl:p-8 lg:p-5 md:p-3.5 sm:px-4 hover:translate-y-4 transition-all duration-300 cursor-pointer ${
                        index === 1 ? "md:mt-6" : "md:mt-0"
                      } gap-y-10`}
                    >
                      <div className="flex flex-col gap-y-10">
                        <div className="text-secondary-text text-xl font-bold text-center  xl:text-3xl lg:text-2xl">
                          {content.hashTag}
                        </div>

                        <h3 className="xl:text-4xl lg:text-2xl md:text-[1.25rem] sm:text-xl text-2xl font-extrabold text-primary-text text-center ">
                          {content.sentence}
                        </h3>
                      </div>
                      <MyButton
                        text={content.buttonName}
                        className="px-5 py-1 lg:text-xl md:text-sm font-bold text-background"
                        icon={<IoIosArrowForward className="my-auto" />}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default Writeup;
