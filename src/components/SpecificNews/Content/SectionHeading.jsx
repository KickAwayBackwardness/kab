import React from "react";

const SectionHeading = ({ text }) => {
  return (
    <h2
      className="
  text-spec_section_heading
  font-[var(--spec-news-section-heading-font-weight)]
  tracking-[var(--spec-news-section-heading-letter-spacing)]
  leading-[var(--spec-news-section-heading-line-height)]
  my-[var(--spec-news-section-heading-margin-y)]
  "
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
