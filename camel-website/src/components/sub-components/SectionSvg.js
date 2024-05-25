import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[6rem] left-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[3.5rem]`}
      />

      <PlusSvg
        className={`hidden absolute  -top-[6rem] right-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[3.5rem]`}
      />
    </>
  );
};

export default SectionSvg;
