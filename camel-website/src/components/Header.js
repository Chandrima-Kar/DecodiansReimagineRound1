import React from "react";
import { Link } from "react-router-dom";
import camel_img from "../assets/00/camel.png";

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
      <section id="home" className=" bg-background flex items-center">
        <div className="mx-auto  z-50 container fixed mt-12">
          <div className="flex  flex-col justify-center relative   items-center lg:py-2 text-[#f0f0f0]">
            <div
              className="flex flex-row  justify-between items-center 
            
              gap-x-14 md:gap-x-[5.5rem] xl:gap-x-60 "
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-x-1 text-[1rem] md:text-3xl font-bold">
                <Link
                  to="/camel"
                  className="flex flex-row items-center justify-center gap-x-1 cursor-pointer"
                >
                  <h1>Camel</h1>
                  <img
                    src={camel_img}
                    alt="camel_image"
                    className=" w-[16px] h-[16px] md:w-[35px] md:h-[35px]"
                  />
                </Link>
                <div
                  className="w-1 h-6 mx-1 hidden md:flex
                
                  bg-custom-gradient "
                ></div>
                <div
                  className="w-16 h-[2px] mx-1  md:hidden
                
                  bg-custom-gradient "
                ></div>

                <Link to="/camlin" className="cursor-pointer">
                  <h1>Camlin</h1>
                </Link>
              </div>

              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>

              <div className="flex flex- items-center justify-center gap-x-2 md:gap-x-4">
                <Link
                  to="/store"
                  className="relative group cursor-pointer py-1"
                >
                  <div className=" text-[11px] md:text-[14px] transition-transform duration-500 group-hover:scale-110">
                    Find a store
                  </div>
                  <div className="absolute -left-1 -right-1 bottom-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500  origin-center"></div>
                </Link>
                <Link to="/log-in">
                  <Button
                    text={"Log in"}
                    className={
                      "bg-background text-accent border-accent hover:bg-accent hover:text-background px-2 lg:px-5 py-1 text-[12px]  md:text-[14px]"
                    }
                  />
                </Link>
                <Link to="/sign-up">
                  <Button
                    text={"Sign up"}
                    className={
                      "bg-accent text-background border-background px-2 lg:px-5 py-1 text-[12px]  md:text-[14px]"
                    }
                  />
                </Link>
                {/* <div>Sign up</div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
