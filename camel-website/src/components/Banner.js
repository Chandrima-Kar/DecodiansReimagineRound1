import React from "react";
import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <>
      <section
        id="home"
        className=" bg-[#153448] md:h-screen pt-20 xl:pt-0 flex items-center"
      >
        <div className="mx-auto mb-6 md:my-5 container">
          <div className="flex flex-col lg:gap-y-8 lg:my-3 lg:flex-row lg:items-center lg:gap-x-12">
            {/* RIGHT */}

            <div className="flex flex-col items-center justify-center lg:ml-auto lg:order-2">
              {/* My Image */}

              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                className="md:flex flex flex-col "
              >
                <img
                  className="w-[350px] md:w-[400px]  max-[350px]:w[300px]"
                  alt="imageee"
                />
              </motion.div>

              {/* My CV */}

              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                className="flex flex-row items-center gap-x-5 max-w-max mt-5 lg:my-5 "
              ></motion.div>
            </div>

            {/* LEFT */}

            <div className="flex flex-col text-center lg:text-left mt-6 lg:mt-0 lg:order-1">
              {/* My Name */}

              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                // viewport={{ once: false, amount: 0.7 }}
                className="max-[450px]:text-[57px] max-[375px]:text-[47px] xl:text-[90px] text-[70px] font-bold leading-[0.8] 
                
                white_black_color"
              >
                <span>Pratik </span> <span>Biswas</span>
              </motion.h1>

              {/* Who Am I */}

              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                className="flex flex-row justify-center items-center lg:justify-start lg:items-start text-[28px] xl:text-[33px] lg:mx-1 font-semibold uppercase mt-2 leading-[1] max-[450px]:text-[25px] max-[375px]:text-[20px]
                
                
                neon_grey_color"
              >
                <h2 className="mr-2     white_black_color">I am</h2>
                <h2>
                  <TypeAnimation
                    sequence={[
                      "A Developer",
                      2000,
                      "A Programmer",
                      2000,
                      "An Art Enthusiast",
                      2000,
                      "A Content Writer",
                      2000,
                    ]}
                    speed={50}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                  />{" "}
                </h2>
              </motion.div>

              {/* My Description */}

              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                className="max-w-[85vh] text-[18px] my-5 mx-auto lg:mx-1 max-[450px]:text-[17px] max-[375px]:text-[14px] max-[450px]:leading-5        white_black_color"
              >
                Hello, I am Pratik Biswas, currently studying B.Tech in CSE
                (AIML), focusing on development and problem solving. I like to
                discuss new ideas and projects with friends. I recently started
                reading ML and gradually started liking it. I am well
                experienced in content writing, sketching and teaching, and
                consider these as side hustles.
              </motion.p>

              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                className="max-w-[85vh] text-[18px] my-5 mx-auto lg:mx-1 max-[450px]:text-[17px] max-[375px]:text-[14px] max-[450px]:leading-5        white_black_color"
              >
                Hello, I am Pratik Biswas, currently studying B.Tech in CSE
                (AIML), focusing on development and problem solving. I like to
                discuss new ideas and projects with friends. I recently started
                reading ML and gradually started liking it. I am well
                experienced in content writing, sketching and teaching, and
                consider these as side hustles.
              </motion.p>
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                className="max-w-[85vh] text-[18px] my-5 mx-auto lg:mx-1 max-[450px]:text-[17px] max-[375px]:text-[14px] max-[450px]:leading-5        white_black_color"
              >
                Hello, I am Pratik Biswas, currently studying B.Tech in CSE
                (AIML), focusing on development and problem solving. I like to
                discuss new ideas and projects with friends. I recently started
                reading ML and gradually started liking it. I am well
                experienced in content writing, sketching and teaching, and
                consider these as side hustles.
              </motion.p>

              {/* My Social Handles */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
