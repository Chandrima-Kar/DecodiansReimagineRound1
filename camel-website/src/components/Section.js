import SectionSvg from "../assets/svg/SectionSvg";

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
        crosses ? "lg:py-0 xl:pt-20" : ""
      } ${className || ""}`}
    >
      {children}

      {crosses && (
        <>
          {/* <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-[0.1rem] bg-accent ${
              crossesOffset ? crossesOffset : ""
            } pointer-events-none lg:block xl:left-12 xl:right-12 md:left-10 md:right-10 sm:left-12 sm:right-12`}
          >
            <SectionSvg crossesOffset={crossesOffset} />
          </div> */}

          {/* Left icon */}
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5  bg-accent ${
              crossesOffset ? crossesOffset : ""
            } pointer-events-none lg:block xl:left-12 xl:right-12 md:left-10 md:right-10 sm:left-12 sm:right-12`}
          >
            <SectionSvg crossesOffset={crossesOffset} />
          </div>

          <div
            className={`hidden lg:block absolute top-[5.25rem] left-[10%] right-[10%] h-[0.1rem] bg-accent transform  pointer-events-none`}
          />
        </>
      )}
    </div>
  );
};

export default Section;
