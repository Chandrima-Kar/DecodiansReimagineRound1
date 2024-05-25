import React from "react";
import Section from "./sub-components/Section";

const Footer = () => {
  return (
    <Section
      className=""
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="footer"
    >
      <section className="relative z-2 w-full pt-20  my-auto   flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-between ">
          <h1 className=" text-2xl pb-10"> Footer </h1>
        </div>
      </section>
    </Section>
  );
};

export default Footer;
