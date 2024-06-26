import React from "react";
import { Link } from "react-router-dom";
import camel_img from "../../../assets/logo/camel.webp";

function Button(props) {
  return (
    <button
      className={`cursor-pointer rounded-md border font-semibold duration-500 transition-transform hover:scale-105 flex justify-center items-center  ${props.className}`}
    >
      {props.text}
    </button>
  );
}

const Header = () => {
  return (
    <div>
      <section id="home" className="flex items-center">
        <div
          className="bg-background2 dark:bg-darkBackground2 border-b-[1px]  border-accent w-full fixed pt-6 mt-8 z-50 
          
          pb-0 sm:pb-2 
          px-1 sm:px-3 md:px-6
          2xl:px-20"
        >
          <div className="flex flex-col items-center justify-center w-full ">
            <div className="flex flex-row justify-center items-center w-full gap-x-10 min-[350px]:gap-x-20 md:gap-x-5 lg:gap-x-28 xl:gap-x-52 2xl:gap-x-64 mx-auto">
              {/* left */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-x-3 text-[1rem] sm:text-3xl md:text-xl lg:text-xl font-bold font-montserrat ">
                <Link
                  to="/camel"
                  className="flex flex-row items-center justify-center gap-x-1 cursor-pointer"
                >
                  <h1 className="text-[#e1251a]">Camel</h1>
                  <img
                    src={camel_img}
                    alt="camel_image"
                    className="w-[16px] h-[16px] sm:w-[25px] sm:h-[25px] bg-transparent"
                  />
                </Link>
                <div className="flex gap-x-[0.18rem]">
                  <div className="sm:w-[0.18rem] w-6 h-[0.18rem] sm:h-6  sm:flex bg-[#e1251a]"></div>
                  <div className="sm:w-[0.18rem] w-6 h-[0.18rem] sm:h-6   sm:flex bg-primary-text dark:bg-dark-primary-text"></div>
                </div>
                <Link to="/camlin" className="cursor-pointer">
                  <h1 className=" text-primary-text dark:text-dark-primary-text">
                    Camlin
                  </h1>
                </Link>
              </div>

              {/* middle */}
              <div className="hidden md:flex  items-center justify-center  text-sm md:text-xs lg:text-sm ">
                <p className="text-secondary-text dark:text-dark-secondary-text font-lato">
                  Every artist is invited!{" "}
                  <span>
                    {" "}
                    <Link
                      to="/camel"
                      className="underline font-bold font-montserrat text-primary-text dark:text-dark-primary-text"
                    >
                      Join our Community
                    </Link>{" "}
                  </span>{" "}
                </p>
              </div>

              {/* right */}
              <div className="flex items-center justify-center gap-x-2 lg:gap-x-2 ">
                <Link
                  to="/store"
                  className="relative group cursor-pointer py-1"
                >
                  <div
                    className=" font-medium font-ubuntu   transition-transform duration-500 group-hover:scale-110 text-primary-text dark:text-dark-primary-text
                  
                    text-[11px] sm:text-[14px]  xl:text-lg leading-none"
                  >
                    Find a store
                  </div>
                  <div className="absolute -left-1 -right-1 bottom-1 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </Link>
                <Link to="/log-in">
                  <Button
                    text={"Log in"}
                    className={
                      "bg-background dark:bg-darkBackground text-accent border-accent hover-accent2 hover:text-background px-2 lg:px-5 py-1 text-[12px] sm:text-[14px] xl:text-[16px] font-ubuntu"
                    }
                  />
                </Link>
                <Link to="/sign-up">
                  <Button
                    text={"Sign up"}
                    className={
                      "bg-accent text-background border-background px-2 lg:px-5 py-1 text-[12px] sm:text-[14px] xl:text-[16px] font-ubuntu"
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
