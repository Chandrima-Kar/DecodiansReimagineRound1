import React,{useState} from "react";
import crayonImg from "../assets/02/1_0.webp"
import artistImg from "../assets/02/3_1.webp"
import posterColorImg from "../assets/02/2_2.webp"
import card1 from "../assets/benefits/card-1.svg"
import card2 from "../assets/benefits/card-2.svg"
import card3 from "../assets/benefits/card-3.svg"
import { IoIosArrowForward } from "react-icons/io";
import { GradientLight } from "../components/design/benefits"
import ClipPath from "../assets/svg/ClipPath";



const benefits = [
    {
      id: "0",
      title: "The Art of Making Wax Crayons ",
      text: "Watch Now" ,
      backgroundUrl:card1,
      imageUrl:crayonImg,
      light:true,
    },
    {
      id: "1",
      title: "Building India's First Artist Community ",
      text: "Sign up",
      backgroundUrl: card2,
      imageUrl: artistImg,
    },
    {
      id: "2",
      title: "For Little Artists with Big Ideas ",
      text: "Shop Now",
      backgroundUrl: card3,
      imageUrl: posterColorImg,
      light:true,
    }
];
  

const Second = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative z-2 max-w-[77.5rem] mx-auto my-auto px-10 md:px-15 lg:px-15 xl:max-w-[87.5rem] py-5 flex items-center">
      <div className="flex flex-wrap gap-10 mb-15">
        {benefits.map((item, index) => (
          <div
            key={index}
            className={`block relative p-1 bg-no-repeat bg-[length:100%_100%] md:max-w-[30rem] h-[22rem] w-[23rem] ${hoveredIndex !== null && hoveredIndex !== index ? 'blur' : ''}`}
            style={{
              backgroundImage: `url(${item.backgroundUrl})`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative z-2 flex flex-col min-h-[21rem] p-[2rem] pointer-events-none">
              {hoveredIndex === index && (
                <h6 className="font-extrabold text-black">{item.title}</h6>
              )}
              <div className="flex items-center mt-auto">
                <p className="ml-auto pt-5 font-extrabold text-md text-black uppercase tracking-wider">
                  {item.text}
                </p>
                <div className="pt-[2rem]">
                  <IoIosArrowForward size="22px" />
                </div>
              </div>
            </div>

            {item.light}
            <div className="absolute inset-0.5" style={{ clipPath: "url(#benefits)" }}>
              <div className="absolute inset-0 ">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="absolute top-0 z-3 inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            <ClipPath />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Second;

