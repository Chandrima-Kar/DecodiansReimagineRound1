import React from "react";
import Section from "./Section";
const ExploreArtistsGallery = () => {
  return (
    <Section
      className=""
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="exploreArtistsGallery"
    >
      <section className="relative z-2 w-full pt-20  my-auto   flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-between ">
          <h1 className=" text-2xl pb-10">Ami bhalo chele</h1>
        </div>
      </section>
    </Section>
  );
};

export default ExploreArtistsGallery;
