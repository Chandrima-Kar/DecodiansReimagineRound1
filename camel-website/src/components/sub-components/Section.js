import SectionSvg from "./SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`relative ${customPaddings || "py-10 lg:py-16 xl:py-20"} ${
        crosses ? "pt-12 xl:pt-20" : ""
      } ${className || ""}`}
    >
      {children}

      {crosses && (
        <>
          {/* Left icon */}
          <div
            className={` absolute top-0 left-7.5 right-7.5  bg-accent ${
              crossesOffset ? crossesOffset : ""
            } pointer-events-none block xl:left-12 xl:right-12 md:left-10 md:right-10 sm:left-12 sm:right-12`}
          >
            <SectionSvg crossesOffset={crossesOffset} />
          </div>

          <div
            className={` block absolute   h-[0.1rem] bg-accent transform  pointer-events-none
              
              left-[18%] right-[18%]
              sm:left-[15%] sm:right-[15%]
              md:left-[10%] md:right-[10%]
              
              top-[1.25rem]
              md:top-[4.25rem]`}
          />
        </>
      )}
    </div>
  );
};

export default Section;
