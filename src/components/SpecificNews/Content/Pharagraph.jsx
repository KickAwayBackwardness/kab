import React from "react";
import SectionHeading from "./SectionHeading";
import SubHeading from "./SubHeading";

const Pharagraph = ({ text, sectionHeading, subHeading }) => {
  console.log(text);
  return (
    <div
      className=" m-[var(--spec-news-margin-center)]
    w-[var(--spec-news-pharagraph-width)]
  "
    >
      {sectionHeading && <SectionHeading text={sectionHeading} />}
      <p
        className=" leading-[var(--spec-news-pharagraph-line-height)]
     tracking-[var(--spec-news-pharagraph-letter-spacing)]
   text-spec_pharagraph text-whyteInktrap"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
      {subHeading && <SubHeading text={subHeading} />}
    </div>
  );
};

export default Pharagraph;
