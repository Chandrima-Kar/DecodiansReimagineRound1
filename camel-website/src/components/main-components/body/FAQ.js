import React from "react";
import { Link } from "react-router-dom";

// import Section from "./sub-components/Section";
// import { GiThink } from "react-icons/gi";
// import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  const faqData = [
    {
      question: "How can I share my artwork with the Kokuyo Camlin community?",
      answer:
        "To share your artwork with the Kokuyo Camlin community, you just need to sign up on our website, and you are all set to go.",
    },
    {
      question: "Which is the best brush for painting?",
      answer: (
        <>
          The best{" "}
          <Link to="/brushes" className="underline text-accent">
            brush
          </Link>{" "}
          for painting is based on personal preference. It generally depends on
          the style you are aiming for. However, if you want to explore a
          variety of Brushes, check out Camel's range. From{" "}
          <Link to="/brushes" className="underline text-accent">
            White Bristle Brushes
          </Link>{" "}
          and{" "}
          <Link to="/brushes" className="underline text-accent">
            Artist Brushes
          </Link>{" "}
          to{" "}
          <Link to="/brushes" className="underline text-accent">
            Champ Brushes
          </Link>{" "}
          and more, you get to choose from an array of options.
        </>
      ),
    },
    {
      question: "How can I buy Kokuyo Camlin products?",
      answer:
        "Kokuyo Camlin products are available nationwide in both retail stores and online. You can easily buy them from our official website as well.",
    },
    {
      question: "What supplies do you need for art?",
      answer: (
        <>
          To create artwork, some essential art supplies are{" "}
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
          and more. To buy a vast range of high-quality art supplies, check out
          the Camel collection.
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
    //   id="faq"
    // >
    <section
      id="faq"
      className="relative z-2 w-full py-10  my-auto flex flex-col items-center justify-center"
    >
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div
          className="relative flex flex-col items-center justify-center w-full 
          
          px-4
          md:px-6
          lg:px-[6.5rem]
          xl:px-28"
        >
          <div className="flex items-center justify-center gap-x-5">
            <div className=" ">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="text-4xl sm:text-5xl text-accent"
              />{" "}
              {/* <GiThink className="text-4xl sm:text-5xl text-accent" /> */}
            </div>
            <div className="flex items-center justify-center  px-2 pt-2 border-2 border-b-0 border-accent rounded-t-3xl bg-background dark:bg-darkBackground z-10">
              <h1 className="text-5xl font-bold px-4 py-1 text-primary-text dark:text-dark-primary-text border-2 border-b-0 border-accent rounded-t-2xl font-montserrat">
                FAQs
              </h1>
            </div>
            <div className=" ">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="text-4xl sm:text-5xl text-accent"
              />{" "}
              {/* <GiThink className="text-4xl sm:text-5xl text-accent" /> */}
            </div>
          </div>

          <div className="w-full  p-5 border-2 border-accent rounded-3xl bg-background dark:bg-darkBackground z-10">
            {faqData.map((faq, index) => (
              <div key={index} className="py-3">
                <h1 className="text-2xl text-primary-text dark:text-dark-primary-text font-semibold font-montserrat">
                  {index + 1}. {faq.question}
                </h1>
                <p className="text-[1.15rem] font-open_sans text-primary-text dark:text-dark-primary-text ">
                  <b>Ans -</b> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
    // </Section>
  );
};

export default FAQ;
