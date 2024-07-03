import React from "react";
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({ className, crosses }) => {
  return (
    <section className={`${className || ""}`}>
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
      {crosses && (
        <>
          <SectionSvg />
        </>
      )}
    </section>
  );
};

export default Section;
