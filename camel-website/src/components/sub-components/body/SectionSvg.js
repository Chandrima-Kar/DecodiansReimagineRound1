import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <PlusSvg
        className={` absolute -top-[6rem] md:-top-[7rem] left-[0rem] text-accent ${
          crossesOffset && crossesOffset
        } pointer-events-none block xl:left-[3rem]`}
      />

      <PlusSvg
        className={` absolute  -top-[6rem] md:-top-[7rem] right-[0rem] text-accent ${
          crossesOffset && crossesOffset
        } pointer-events-none block xl:right-[3rem]`}
      />
    </>
  );
};

export default SectionSvg;
