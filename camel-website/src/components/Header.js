import React from "react";
import camel_img from "../assets/00/camel.png";

function Button(props) {
  return (
    <button
      className={`cursor-pointer rounded-md border font-semibold duration-500 transition-transform hover:scale-105 flex justify-center items-center text-sm ${props.className}`}
    >
      {props.text}
    </button>
  );
}
const Header = () => {
  return (
    <div>
      <section id="home" className=" bg-background flex items-center">
        <div className="mx-auto z-10  container">
          <div className="flex  flex-col justify-center relative   items-center py-2 text-[#f0f0f0]">
            <div className="flex flex-row  justify-between items-center gap-x-60 ">
              <div className="flex flex-row items-center justify-center gap-x-1 text-3xl font-bold">
                <div className="flex flex-row items-center justify-center gap-x-1 cursor-pointer">
                  <h1>Camel</h1>
                  <img
                    src={camel_img}
                    width={35}
                    height={35}
                    alt="camel_image"
                  />
                </div>
                <div
                  className="w-1 h-6 mx-1
                
                bg-custom-gradient "
                ></div>
                <div className="cursor-pointer">
                  <h1>Camlin</h1>
                </div>
              </div>

              <div></div>
              <div></div>

              <div className="flex flex- items-center justify-center gap-x-4">
                <div className="relative group cursor-pointer py-1">
                  <div className=" text-[15px] transition-transform duration-500 group-hover:scale-110">
                    Find a store
                  </div>
                  <div className="absolute -left-1 -right-1 bottom-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500  origin-center"></div>
                </div>
                {/*  */}
                <Button
                  text={"Log in"}
                  className={
                    "bg-background text-accent border-accent hover:bg-accent hover:text-background  px-5 py-1"
                  }
                />
                <Button
                  text={"Sign up"}
                  className={
                    "bg-accent text-background border-background px-5 py-1"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
