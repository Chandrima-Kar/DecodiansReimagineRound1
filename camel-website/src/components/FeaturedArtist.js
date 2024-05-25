import React from "react";
import Section from "./sub-components/Section";
import MyButton from "./sub-components/MyButton";

// icons
import { PiArrowSquareOutBold } from "react-icons/pi";

// images
import featureBadge from "../assets/03/feature-artist-badge.png";
import artistImg from "../assets/03/artistImage.jpeg";
import painting1 from "../assets/03/img1.jpg";
import painting2 from "../assets/03/img2.png";
import painting3 from "../assets/03/img3.png";

// swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./style_swiper.css";
import { EffectCube, Pagination } from "swiper/modules";

// artist's data
export const artistDetail = {
  monthYear: "May 2024",
  profile: {
    name: "Barsha Barik",
    role: "Mixed Media Artist",
    picture: artistImg,
  },
  displayedImage: [
    {
      drawings: painting1,
    },
    {
      drawings: painting2,
    },
    {
      drawings: painting3,
    },
  ],
};

const FeaturedArtist = () => {
  return (
    <Section
      className=""
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="featuredArtist"
    >
      <section className="relative pt-20 flex items-center justify-center overflow-hidden">
        <div className="md:max-w-[1400px] w-full pb-8 relative group container mx-4 sm:mx-[6.5rem] md:mx-5 lg:mx-[6.5rem]">
          <div className="flex flex-col xl:flex-row items-center justify-between px-10 gap-y-10 gap-x-0">
            {/* heading */}
            <div className="xl:w-[20%] flex flex-col items-center xl:items-start leading-none gap-y-3">
              <h1 className="font-bold font-serif text-primary-text text-[3rem] lg:text-[4rem] xl:text-[3.5rem] 2xl:text-[4rem] text-center lg:text-left">
                Featured Artist
              </h1>
              <h3 className="text-secondary-text font-bold text-[1.5rem] lg:text-[2rem] xl:text-[1.7rem] 2xl:text-[2rem] text-center lg:text-left">
                {artistDetail.monthYear}
              </h3>
            </div>

            {/* profile */}
            <div className="flex flex-col md:flex-row gap-x-32 gap-y-10 lg:gap-x-56 xl:gap-x-24 2xl:gap-x-56">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-y-2">
                  {/* image */}
                  <div className="relative">
                    <img
                      src={featureBadge}
                      alt="feature badge"
                      className="w-52"
                    />
                    <div className="absolute top-9 left-9">
                      <img
                        src={artistDetail.profile.picture}
                        alt={artistDetail.profile.name}
                        className="w-[8.5rem] rounded-full"
                      />
                    </div>
                  </div>

                  {/* details */}
                  <div className="flex flex-col items-center justify-center gap-y-1">
                    <div>
                      <h1 className="text-3xl font-sans font-extrabold text-primary-text">
                        {artistDetail.profile.name}
                      </h1>
                    </div>
                    <div>
                      <p className="text-xl text-secondary-text font-semibold font-mono">
                        {artistDetail.profile.role}
                      </p>
                    </div>
                  </div>

                  {/* buttons */}
                  <div>
                    <MyButton
                      text="View Profile"
                      className="text-[1.2rem] px-5 py-1"
                      icon={<PiArrowSquareOutBold />}
                      buttonNameClassName="mr-1"
                    />
                  </div>
                </div>
              </div>

              {/* arts */}
              <div className="flex flex-row items-center justify-between">
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  speed={500}
                  modules={[EffectCube, Pagination]}
                  className="mySwiper"
                >
                  {artistDetail.displayedImage.map((content, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={content.drawings}
                        alt={`Drawing ${index + 1}`}
                        className=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default FeaturedArtist;
