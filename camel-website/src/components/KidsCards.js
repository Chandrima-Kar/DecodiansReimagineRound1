import React from "react";
import Section from "./sub-components/Section";
import MyButton from "./sub-components/MyButton";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import "./style_swiper.css";

// import required modules
import { EffectCards, Pagination, Navigation, Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";

// images
import card1_img from "../assets/07/card1.jpeg";
import card2_img from "../assets/07/card2.jpeg";
import card3_img from "../assets/07/card3.jpg";
import card4_img from "../assets/07/card4.jpeg";

// icons
import { RiExternalLinkLine } from "react-icons/ri";

// card's data
export const cardContent = [
  {
    card_image: card1_img,
    item: "Oil Pastels",
    path: "/paints/oil-pastels",
  },
  {
    card_image: card2_img,
    item: "Colour Pencils",
    path: "/paints/colour-pencils",
  },
  {
    card_image: card3_img,
    item: "Redimix Tempera Colours",
    path: "/paints/remidix-tempera-colours",
  },
  {
    card_image: card4_img,
    item: "Crayons",
    path: "/paints/crayons",
  },
];

const KidsCards = () => {
  return (
    <Section
      className=""
      crosses
      crossesOffset="translate-y-[3.25rem]  md:translate-y-[5.25rem]"
      customPaddings
      id="kidsCards"
    >
      <section className="relative z-2 w-full pt-0 md:pt-20   my-auto   flex items-center justify-center">
        <div className="container sm:mx-[6.5rem] md:mx-5 pb-8 lg:mx-[6.5rem] flex flex-col justify-center items-center  ">
          {/* Body */}
          <div className="flex flex-col items-center justify-between md:flex-row gap-y-5 lg:gap-y-0 md:gap-x-10 lg:gap-x-40">
            <div className=" text-center md:text-left  xl:w-[35rem] flex items-center justify-start ">
              <div>
                <h1 className="text-[40px] lg:text-[55px] xl:text-[90px] font-bold leading-none   text-primary-text">
                  A colourful
                  <br /> mini-universe
                </h1>
                <h1
                  className=" text-2xl uppercase  font-semibold  tracking-wide text-secondary-text
              "
                >
                  Art supplies for kids
                </h1>
              </div>
            </div>

            <div>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Pagination, Navigation, Keyboard]}
                className="mySwiper"
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                keyboard={{ enabled: true }}
                speed={500}
              >
                {cardContent.map((content, i) => (
                  <SwiperSlide>
                    <div
                      key={i}
                      style={{ backgroundImage: `url(${content.card_image})` }}
                      className="w-[100%] h-[100%] bg-cover bg-center bg-no-repeat relative flex items-center"
                    >
                      <div className="absolute inset-0  opacity-50 rounded-[20px]"></div>

                      <div
                        className=" inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 h-full  card
                  
                        gap-y-5 sm:gap-y-8 lg:max-xl:gap-y-3 "
                      >
                        <div className="flex justify-center items-start p-3 ">
                          <img
                            src={content.card_image}
                            alt="ED_Project"
                            className="rounded-[20px] w-[70%] sm:w-[80%] "
                          />
                        </div>

                        <Link
                          to={content.path || "#"}
                          className="flex flex-row items-center justify-center
                          text-[1rem] sm:text-xl md:text-[1rem] xl:text-[1.3rem]
                      "
                        >
                          <MyButton
                            text={content.item}
                            className="text-[1rem] sm:text-xl md:text-[1rem] xl:text-[1.3rem] px-2"
                            buttonNameClassName="mr-1"
                            icon={<RiExternalLinkLine />}
                          />
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default KidsCards;
