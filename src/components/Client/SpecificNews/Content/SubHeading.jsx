import React from "react";

const SubHeading = ({ text }) => {
  return (
    <h3
      className="
    text-spec_section_sub_heading uppercase
    font-[var(--spec-news-section-sub-heading-font-weight)]
    tracking-[var(--spec-news-section-sub-heading-letter-spacing)]
    leading-[var(--spec-news-section-sub-heading-line-height)]
    m-[var(--spec-news-section-sub-heading-margin)]"
    >
      {text}
    </h3>
  );
};

export default SubHeading;
