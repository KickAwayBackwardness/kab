import React from "react";
import Dot from "../../vendors/Dot/Dot";

const Signature = ({ text }) => {
  return (
    <div
      className=" m-[var(--spec-news-margin-center)]
      mt-[var(--spec-news-section-signature-margin-top)]
    w-[var(--spec-news-pharagraph-width)]"
    >
      <div
        className="eading-[var(--spec-news-pharagraph-line-height)]
     tracking-[var(--spec-news-pharagraph-letter-spacing)]
   text-spec_pharagraph text-whyteInktrap font-[500]"
      >
        <span>{text}</span> <Dot color="black" />
      </div>
    </div>
  );
};

export default Signature;
