import React from "react";
import Section from "./sub-components/Section";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Quotation = () => {
  const quoteOfTheDay = [
    {
      quote: `“Learn the rules like a pro, so you can break them like an artist.”`,
      author: "- Pablo Picasso",
    },
  ];
  const extraQueries = [
    {
      question: "Indulge in the realm of art with Camel art products",
      answer: (
        <>
          Hey there, art lovers! Want to let your creativity reach heights? Look
          no further than Camel art supplies. With a wide variety of{" "}
          <Link to="/paints" className="underline text-accent">
            Paints
          </Link>
          ,{" "}
          <Link to="/drawing-materials" className="underline text-accent">
            Drawing Materials
          </Link>
          ,{" "}
          <Link to="/brushes" className="underline text-accent">
            Brushes
          </Link>
          ,{" "}
          <Link to="/canvases" className="underline text-accent">
            Canvases
          </Link>{" "}
          and more, Camel has everything you need to create your masterpiece.
        </>
      ),
    },
    {
      question: null,
      answer:
        "All things art - Camel, housed under the corporate identity of Kokuyo Camlin, is a trusted name in the world of art and creativity. We continue to inspire creativity and provide tools for self-expression to individuals of all ages.",
    },
    {
      question: "Create masterpieces with the exquisite paint collection",
      answer: (
        <>
          Explore endless possibilities and upgrade your art with our diverse
          range of{" "}
          <Link to="/paints" className="underline text-accent">
            Paints
          </Link>
          . Our passionately curated collection has its own unique
          characteristics and vibrant hues. Whether you prefer the timeless
          beauty of{" "}
          <Link to="/paints" className="underline text-accent">
            Water Colours
          </Link>
          , the rich texture of{" "}
          <Link to="/paints" className="underline text-accent">
            Oil Colours
          </Link>
          , or the versatility of{" "}
          <Link to="/paints" className="underline text-accent">
            Acrylic Colours
          </Link>
          , we have everything to suit your artistic vision.{" "}
        </>
      ),
    },
    {
      question: "Elevate your artwork with Mediums collection",
      answer: (
        <>
          Unlock your artistic potential with our carefully curated range of{" "}
          <Link to="/mediums" className="underline text-accent">
            Mediums
          </Link>
          . Our{" "}
          <Link to="/mediums" className="underline text-accent">
            Mediums
          </Link>{" "}
          allow you to add dimension and tactile elements to your artwork. With
          Camel painting{" "}
          <Link to="/mediums" className="underline text-accent">
            Mediums
          </Link>
          , you can achieve a flawless finish and create captivating textures
          that bring your paintings to life.{" "}
        </>
      ),
    },
    {
      question: "Paint a stroke of imagination with our brush collection",
      answer: (
        <>
          Designed to be the perfect extension of your creativity, our{" "}
          <Link to="/brushes" className="underline text-accent">
            Brushes
          </Link>{" "}
          are crafted with precision and care. From fine, pointed brushes for
          intricate details and delicate lines to large, broad brushes for bold
          strokes and expressive movements, we have something for everyone.
        </>
      ),
    },
    {
      question: "Explore an array of Camel art supplies",
      answer:
        "Welcome to the world of Camel products, where creativity knows no bounds! Whether you’re a student, artist, or professional, we offer a wide range of art supplies to fuel your imagination and help you bring your ideas to life.",
    },
    {
      question: "Master intricate designs with our drawing materials",
      answer: (
        <>
          Shape your ideas with fine detailing as you navigate your way through
          our{" "}
          <Link to="/drawing-materials" className="underline text-accent">
            Drawing Materials
          </Link>
          . From convenient{" "}
          <Link to="/drawing-materials" className="underline text-accent">
            Artist Brush
          </Link>{" "}
          Pens to{" "}
          <Link to="/drawing-materials" className="underline text-accent">
            Soft Pastels
          </Link>{" "}
          and more, Camel offers an extensive range of products. Our products
          allow you to capture every intricate detail with ease, whether it's
          sketching a portrait or creating stunning gradients.{" "}
        </>
      ),
    },
    {
      question: "Unleash your inner artist with the canvas collection",
      answer: (
        <>
          Our{" "}
          <Link to="/canvases" className="underline text-accent">
            Canvas
          </Link>{" "}
          collection is more than just a surface to paint on—it's an invitation
          to unleash your creativity and let your artistic spirit soar. Each{" "}
          <Link to="/canvases" className="underline text-accent">
            canvas
          </Link>{" "}
          is expertly primed to ensure optimal paint adhesion, allowing you to
          create bold and fascinating artwork with ease
        </>
      ),
    },
    {
      question: "Your go-to painting kit collection",
      answer: (
        <>
          Designed to provide you with everything you need to embark on your
          artistic journey, our{" "}
          <Link to="/painting-kits" className="underline text-accent">
            Painting Kits
          </Link>{" "}
          offer a comprehensive and hassle-free solution for artists of all
          levels. With our{" "}
          <Link to="/painting-kits" className="underline text-accent">
            painting kit
          </Link>
          , you'll find an assortment of colours,{" "}
          <Link to="/brushes" className="underline text-accent">
            brushes
          </Link>
          ,{" "}
          <Link to="/canvases" className="underline text-accent">
            canvases
          </Link>
          , and other essential accessories
        </>
      ),
    },
  ];

  return (
    // <Section
    //   className=""
    //   crosses
    //   crossesOffset="lg:translate-y-[5.25rem]"
    //   customPaddings
    //   id="quotation"
    // >
    <section
      id="quotation"
      className="relative z-2 w-full pt-20 my-auto flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div
          className="relative flex flex-col items-center justify-center w-full gap-y-3
          
          px-4
          md:px-6
          2xl:px-28"
        >
          {/* quote */}
          <div className="w-full px-3  bg-background z-10">
            <div className="relative flex items-center justify-center py-2  border-2 border-x-0 border-accent bg-background z-10">
              <div className="absolute -top-7 left-7 p-4 border rounded-full bg-accent">
                <FaQuoteLeft className="text-xl text-background" />
              </div>
              <div className="text-center mx-16">
                {quoteOfTheDay.map((content, i) => (
                  <h1 className=" bg-background">
                    <span className="text-2xl font-bold">{content.quote}</span>
                    <span className="text-xl font-medium ">
                      {content.author}
                    </span>
                  </h1>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full  p-5 border-2 border-accent rounded-3xl bg-background z-10">
            {extraQueries.map((faq, index) => (
              <div key={index} className="py-3">
                <h1 className="text-2xl text-primary-text font-semibold">
                  {faq.question}
                </h1>
                <p className="text-[1.15rem] text-primary-text">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    // </Section>
  );
};

export default Quotation;
